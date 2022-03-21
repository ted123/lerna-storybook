# monorepo-test-example

### an example Monorepo React Typescript component library

## Getting Started
1. Run yarn install
2. Install yo & lerna globally using this command: `yarn global add yo && yarn global add lerna`
3. Go to scripts > package-generator and run: `npm link`
4. Go back to root 

## Creating New Component
1. Run `yo create:package`
2. Fill up the details and press enter

## Modifying Existing Component
 - Look for the component in the packages folder and edit it

### Adding Dependencies to Component
 - Run `lerna add <npm-package-name> --scope=<package-name-in-package.json>`
 ex: `lerna add lodash --scope=@4ward/ui.button`

### Storybook
 - `yarn run storybook`
## Deployment
- Currently using manual command for component deployment. WIP

## Contributing
- For updating/creating new components, create a new branch in the repository with the following format: `component-<component-name>` ex: `component-hello-world` for new components and create a pull request once done.
- Contact ted123 to get added as collaborator.

