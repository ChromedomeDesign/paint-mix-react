<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<br />
<div align="center">

<h3 align="center">Chromedome Design React Template</h3>

  <p align="center">
    React Starter Project
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#code-best-practices">Code Best Practices</a></li>
      </ul>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#code-testing">Code Testing</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project is setup so we can quickly implement new react projects as needed. It includes several packages that should be usefule in every project. However, for obvious reasons, it won't cover every possible use case. You will almost certainly add more to any given project. Discuss any additions with Dustin Murphy before implementing. You will typically clone this repo into a new project and update this readme file with additonal relevant project information.

### Code Best Practices
- File Organization
    - Directory structure should be organized by "features" and "pages" whenever possible, while maintaining the traditional "component", "model", "types", "styles", etc folders only as-needed for global elements. In our example, we define the types for our UI kit in a top-level "types" folder because they are used across multiple features and pages.
    - Features: Everything necessary for any given feature should be within it's own directory under features. This ensures future feature requests and revisions are easily managed and easy for anyone on the team to locate.
    - Pages: User facing pages should be kept within the "pages" directory. A relatively flat site/application can have the pages all in the root of that directory, however for a large implementation with many subpages, please add additional directories to keep things organized. 
    - An in depth explanation of why this method of organization is preferrable can be found <a href="https://profy.dev/article/react-folder-structure">here</a>.
- Paths and Imports
    - Use absolute imports when referencing anything in the project. Doing so will mean we can move pages, components, features, etc around without breaking the entire site/app. It will also make any future refactor efforts quite a bit simpler. Information on how to setup absolute imports can be found <a href="https://javascript.plainenglish.io/why-and-how-to-use-absolute-imports-in-react-d5b52f24d53c">here</a>.
    - Where applicable, use site root relative url paths for linking within the app/site. (need to confirm this still)
- Naming Conventions
    - In general, use kebab case for everything. If working with a legacy project that uses camelCase or PascalCase, you don't need to rename every function, class, method, etc. However, certain elements should be updated - images, browser files (ex. AboutUs should be about-us), and as well as anything that faces the user.
    - Images: constructor images should be named based on the purpose and usage location. For example, a background image for the entire site would be 
bkgd-site.png while a background image for the about section would be bkgd-about.png. Non-constructor images (like product photos) should be named descriptively and, where appropriate, include taxonomy so they can be easily changed in the future. An example for a widget product used on a bicycle would be bicycle-widget.png. If there are many images, create directories as necessary. 
- SEO
    - The primary reason for using kebab case is for Search Engine Optimization. Even on projects (like intranets or extranets) that are not indexed, it's a good idea to implement kebab case naming for the sake of consistency.
    - All publicly visible sites need to include meta data in the head of each document. Below is a list of the ones that need to be on every site, however this isn't a comprehensive list. After the site has been built out, there will need to be a comprehensive SEO review.
        -  title (use both the sitename and the section name in the title tag) 
        -  description
        -  robots
        -  viewport
    - Semantic Markup: Use the right tag for the right job. Be sure to organize hierarchical content with H1, H2, H3, etc. Just because you can restyle any tag doesn't mean you should. <a href= "https://www.w3schools.com/TAGS/default.asp">Here is a list</a> of html tags - unless required by the client, don't use any that are not HTML 5 compatible.
    - Do not use image text unless required by the client.
    - All images and links should include alt text and title text. (need to check if title text on images is still an SEO best practice).
    - Pages should be kebab case and descriptive.
- CSS
    -  If you don't use specificity, you're fired.
    -  If your first resort is inline css, you're fired.
    -  Be sure any attributes are cross browser compatible, or at least plan for graceful degradation.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![React][React.js]][React-url]

React is a free and open-source front-end JavaScript library for building user interfaces based on components.

[![Material Design][MDB]][MDB-url]

Material Design UI kits provide a uniform UI component set that can be themed easily. We are using MDBootstrap in this implementation. Why MDBootstrap? Because Dustin said so.
NOTE: Depending on the use case, the client may need to purchase a license.

[![Webpack][Webpack.js]][Webpack-url]

Webpack is a module bundler for JavaScript. It takes modules with dependencies and generates static assets representing those modules. The important configurations are contained in the <a href="#webpack-config">Webpack Config</a>

[![Babel][Babeljs.io]][Babel-url]

Babel is used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. It also provides polyfills for features that are not supported in certain browsers.

[![Typescript][Typescript.org]][Typescript-url]

TypeScript is a strongly typed programming language that builds on JavaScript. It provides tools to make your code easier to read and more predictable, as well as making it easier to catch errors sooner within your chosen code editor. The important configurations are contained in the <a href="#typescript-config">Typescript Config</a>

[![DotENV][DotENV.org]][DotENV-url]

DotENV provides a system for storing and syncing developer "secrets", or sensitive information. This is a good place to store things like API tokens, third party keys and other information that needs to be synchronized between developers and environments, but hidden from user.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This starter project will get you going with a basic setup to begin a React project. We aren't providing a backend solution with this project as it is assumed that we will be layering on top of something that exists. To get started you will need to download these files and place the in your projects folder. Then follow the steps below.

### Prerequisites

First you will need to download and install the latest version of Node, if you don't already have it on your system.
* [Node Installers](https://nodejs.org/en/download)

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ChromedomeDesign/paint-mix-react.git
   ```
2. Make sure you are in the root of our project in your chosen terminal
    ```sh
    cd path/to/react-template
    ```
2. Make sure you have the correct Node Version active. The target version of Node is declared in the ``.npmrc`` file in the project folder. The ``use`` command is not available on Windows.
   ```sh
   nvm use
   ```
3. Install NPM packages. The dependant packages are declared in the ``package.json`` file in the project folder.
   ```sh
   npm install
   ```
4. Test-run the project. The project commands are declared in the ``package.json`` file in the project folder.
    ```sh
    npm start
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This project comes with several pre-configured utilities to get you started.

- VS Code Profile
    - Included in this project is a ``.code-profile`` file. If you are using Visual Studio Code as your IDE you can load this profile. It includes several useful extensions and configurations.
- TypeScript Config <a name="typescript-config"></a>
    - This file declares a basic configuration for Typescript compiling and Intellisense. It extends the Node 18 basic TypeScript config.
- Webpack Config <a name="webpack-config"></a>
    - This file declares the settings for webpack to compress and deliver the site assets when the project is built or run locally. It also includes a utility that will allow @aliases defined in the TypeScript Config file to flow through.
- Package JSON
    - This file has several configurations for NPM to run properly. The dependant packages and their versions are declared here, as well as the commands that the project will need to run properly.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- TESTING -->
## Code Testing
The current setup does not yet include any testing support. It would be recommended for larger, long-lived projects that some automated testing be implemented. The two main options for this would be Unit Tests and End-to-end Tests. 

Unit tests are intentionally written to be self-contained and avoid having any dependencies within the code, thus "unit". Each test is written to work independently and asynchronosly with all other tests and should work on only a single unit of functionality. All needed data for the test should be "mocked". Our suggested unit testing framework is (TBD).

End-to-end (e2e) tests are designed to take a user-like path through certain parts of the project. An example of an e2e test would be to choose a product and go all the way through the purchase process. E2e tests usually are written to work against a test or development environment so they don't obstruct the actual users. Our suggested platform for e2e tests is (TBD).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Feature Placeholder

Update this section as necessary for each project.
See the [open issues](https://github.com/ChromedomeDesign/react-template) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Webpack.js]: https://img.shields.io/badge/webpack.js-2b3a42?style=for-the-badge&logo=webpack&logoColor=1d78c1
[Webpack-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[MDB]: https://img.shields.io/badge/Material%20Design-007acc?style=for-the-badge&logo=material-design&logoColor=white
[MDB-url]: https://mdbootstrap.com/
[Babeljs.io]: https://img.shields.io/badge/babel.js-3b3c38?style=for-the-badge&logo=babel&logoColor=f5da55
[Babel-url]: https://babeljs.io/
[Typescript.org]: https://img.shields.io/badge/Typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[DotENV.org]: https://img.shields.io/badge/Dotenv-000000?style=for-the-badge&logo=dotenv&logoColor=yellow
[DotENV-url]: https://www.dotenv.org/
