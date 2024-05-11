/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Find the rule that handles SCSS
    const rules = config.module.rules.find((rule) =>
      Array.isArray(rule.oneOf)
    ).oneOf

    rules.forEach((rule) => {
      if (Array.isArray(rule.use)) {
        rule.use.forEach((u) => {
          if (u.loader && u.loader.includes('sass-loader')) {
            if (!u.options) {
              u.options = {}
            }
            // Prepend the variables to each sass/scss file
            u.options.additionalData = `@import "${path.resolve(__dirname, 'styles/_variables.scss')}";`
          }
        })
      }
    })

    // Important: return the modified config
    return config
  }
}

export default nextConfig
