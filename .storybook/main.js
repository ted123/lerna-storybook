module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ['../packages/**/stories/*.stories.(tsx|mdx)'],
  addons: ['@storybook/addon-essentials', "storybook-addon-react-runner"],
  framework: '@storybook/react'
};