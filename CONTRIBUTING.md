# Contributing

1. Fork/Clone repository **branch `develop`**
2. Install dependencies: `npm i`
3. Start dev-server: `npm start`
    - (will clean-dist + start demo app)
4. Open browser on [localhost:9230](http://localhost:9230) for demo
5. Explore [packages](packages)
6. Code -> Commit -> Pull Request -> Being Awesome!

**Commands:**

- Developing test driven: `npm run tdd`
    - `npm run tdd -- -u --testPathPattern=src/Validators`
        - with `-u|--update` for snapshot update testing
        - with `--testPathPattern` to run all tests in a specific folder / path
        - `npm run tdd -- --testPathPattern=PatternValidator -t patternValidator` for only one test and often only one file
- Testing: `npm test`
- Build: `npm run build`
- Clean node_modules and build dirs: `npm run clean`
- Clean build dirs: `npm run clean-dist`
- Add new node_module to one package: `lerna add <npm-package-name> --scope=@ui-schema/demo-web [--dev] [--peer]`, without `--scope` in all packages
- Do not change `package.json` of packages manually, and if Bootstrap [lerna](https://lerna.js.org/): `npm run bootstrap` (maybe delete `package-lock.json`), or simply open an issue
- Add new package `lerna create <name>` and follow on screen, e.g.: `lerna create material-pickers` add package name `@ui-schema/material-pickerss`, creates folder `./packages/material-pickers`

## Contributors

By committing your code/creating a pull request to this repository you agree to release the code under the [MIT License](LICENSE) attached to the repository and to adhere to the [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md).

