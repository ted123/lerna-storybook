module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ['../packages/**/stories/*.stories.(tsx|mdx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-essentials'],
  framework: '@storybook/react'
};