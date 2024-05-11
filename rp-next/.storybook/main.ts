import path from 'path'
import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    // Use the existing webpack config as a base
    config.module?.rules?.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'sass-loader',
          options: {
            additionalData: `@import '${path.resolve(__dirname, '../src/styles/_variables.scss')}';`
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    })

    // Return the altered config
    return config
  }
}
export default config
