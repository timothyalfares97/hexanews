# Hexanews
Hexanews is an online publishing platform web application for people who want to read and create a content for everyone. In this project, the main technologies are TypeScript, React, Redux. You need to run our separate server [Hexanews-service](https://github.com/dotaemon99/hexanews-service) in here to start the application.

## Requirements

For development, you will only need Node.js installed on your environement.
And please use the appropriate [VisualStudioCode](https://code.visualstudio.com/) for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v8.11.3

    $ npm --version
    1.3.21

## How to install
```
$ git clone https://github.com/dotaemon99/hexanews.git
$ cd hexanews
$ npm install
$ npm run start
```

## Coding Style
- Use ES6 Javascript features in the application
- Import statement divided (by extra spaces) into external library and internal files
- Do not use semicolon at the end of statement or import
- Variable naming should use camelCase style
- Use only let and const in declaring a variable
- Use single quote (') for string import, variable instead of double quote (")
- Always put code into component class when it is reusable
- Do not put a duplicate variable name that can confuse the usage
- Do not abbreviate variable name
- Always use braces for all control structures
- Use two spaces for indentation
- Column limit of 150 characters per line
- One statement per line
- Do not add any trailing whitespace
- Put all function arguments on the same line as the function name. If they exceed the column limit, the arguments must be line-wrapped for readibility
- Use Javadoc comment for every class, function and method

## Project structure

Here is the project structure that we have within the application with a brief description of it.

```
Hexanews
|
├── /src
│   ├── /actions   where actionTypes and reusable actions live
│   ├── /assets   where static images live
│   ├── /components   where reusable components live
│   ├── /containers   where each screen components live
│   ├── /domain   where model, repository, and service live
│   ├── /reducers   where each redux state variable live
│   ├── /routes   where each routes of application live
│   ├── /utils   where reusable function live
│   ├── i18n.ts   internationalisation config file
│   ├── index.css   index basic styling
├── /typings   where the custom typings file live
├── package.json   the whole configuration file with every dependency and script
├── tsconfig.json   typescript config file
├── tslint.json   typescript linter configuration file
└── README.md   this file
```

## Tests

The testing environment is written in Jest and Enzyme.

All unit tests files are live under /__tests__ file.

Here is how to run the current test
```
$ npm run test -- -u --coverage --silent
```


## Languages & tools

### TypeScript

- [React](http://facebook.github.io/react) is used for building the user interface component.
- [Redux](https://redux.js.org/) is used for state management within the application.
- [Axios](https://github.com/axios/axios) is used for promise based HTTP client handling.
- [React-Router](https://github.com/ReactTraining/react-router) is used for navigation within the application.
- [Lodash](https://lodash.com/docs/4.17.10) is used for JS helper library.
- [Moment](https://momentjs.com/) is used for handling the date and time value within the application.
- [i18next](https://github.com/i18next/react-i18next) is used for handling internationalisation support.
- [react-quill](https://github.com/zenoamaro/react-quill) is used for the text editor library.

## Authors
- **Timothy Alfares**
- **Audwin Oyong**