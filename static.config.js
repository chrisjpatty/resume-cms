const fs = require('fs')
const klaw = require('klaw')
const path = require('path')
const matter = require('gray-matter')

function getBlocks () {
  const items = []
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () => new Promise(resolve => {
    // Check if posts directory exists //
    if (fs.existsSync('./src/blocks')) {
      klaw('./src/blocks')
        .on('data', item => {
          // Filter function to retrieve .md files //
          if (path.extname(item.path) === '.md') {
            // If markdown file, read contents //
            const data = fs.readFileSync(item.path, 'utf8')
            // Convert to frontmatter object and markdown content //
            const dataObj = (matter(data) || {}).data
            // Create slug for URL //
            dataObj.slug = dataObj.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            // Remove unused key //
            delete dataObj.orig
            // Push object into items array //
            items.push(dataObj)
          }
        })
        .on('error', e => {
          console.log(e)
        })
        .on('end', () => {
          // Resolve promise for async getRoutes request //
          // posts = items for below routes //
          resolve(items)
        })
    } else {
      // If src/posts directory doesn't exist, return items as empty array //
      resolve(items)
    }
  })
  return getFiles()
}

const getTheme = () => new Promise((resolve, reject) => {
  if (fs.existsSync('./src/theme')) {
    const theme = fs.readFileSync('./src/theme/theme.md', 'utf8')
    resolve(matter(theme).data)
  } else {
    resolve({})
  }
})

const getHeader = () => new Promise((resolve, reject) => {
  if (fs.existsSync('./src/data')) {
    const header = fs.readFileSync('./src/data/header.md', 'utf8')
    const parsed = matter(header)
    resolve(Object.assign({}, parsed.data, {content: parsed.content}))
  } else {
    resolve({})
  }
})

export default {

  getSiteData: () => ({
    title: 'React Static with Netlify CMS',
  }),
  getRoutes: async () => {
    const blocks = await getBlocks()
    const theme = await getTheme()
    const header = await getHeader()
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          blocks,
          theme,
          header
        })
      },
      // {
      //   path: '/blog',
      //   component: 'src/containers/Blog',
      //   getData: () => ({
      //     posts
      //   }),
      //   children: posts.map(post => ({
      //     path: `/post/${post.data.slug}`,
      //     component: 'src/containers/Post',
      //     getData: () => ({
      //       post
      //     }),
      //   })),
      // },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  plugins: ['react-static-plugin-emotion']
}
