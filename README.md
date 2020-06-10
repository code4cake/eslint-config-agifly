# eslint-config-agifly

Shareable eslint config use for projects.


## TOC

- [Features](#Features)
- [Installation](#Installation)
- [Usage](#Usage)
- [Testing](#Testing)
- [Contribute](#Contribute)
- [License](#License)
- [Additional Notes](#AdditionalNotes)

---

### Features

- based and usage of [airbnb code style guidelines](https://github.com/airbnb/javascript)

- uses eslint rules for react & react/hooks

- formatting is done with prettier

---

### Installation

Default export has default Airbnb Eslint rules, ECMASCRIPT 6+. It might require some peerDependencies installation.

Install the package with 

```bash
yarn add -D eslint-config-agifly 

# or 
npm install -D eslint-config-agifly
```

Check the required peerDependencies for each pkg with the command:

```bash
yarn info 'eslint-config-agifly@latest' --peer

# or
npm info 'eslint-config-agifly@latest' peerDependencies
```

Install the peerDependencies with

```bash
yarn add eslint-config-agifly -D --peer

# or if using npm 5+

npx install-peerdeps --dev eslint-config-agifly
```

---

### Usage

Now add the config to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "eslint-config-agifly"
  }
}
```

to your `.eslintrc`:

```js
{
  "extends": "eslint-config-agifly"
}
```

or `.eslintrc.js`:

```js
module.exports = {
  extends: 'eslint-config-agifly',
}
```

---

### Testing

Run test for this pkg with `yarn run test`

---

### Contribute

Clone project to your local machine, make some changes and submit a PR to the repo.

Things to keep in mind:

- We use `commitzen` for contributions

- We follow `semver`  semantic versioning for releases `<patch>, <minor>, <major>`

- We document all changes in a [CHANGELOG](CHANGELOG)

- A test case accompanied to your PR is not necessary, **but** greatly appreciated. :)

---

### License

[MIT](License)

---

### Additional Info

This ESLint configuration assumes the following:

- react and/or node env
- jest for testing
- browser and/or node env
- parser: babel (used: `babel-eslint` parser)

---

Made with ❤️ by &copy; 2020 @Agifly
