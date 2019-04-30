# REACT APP CONFIGURATION/SETUP BOILER PLATE FOR NEXT + STYLED-COMPONENTS

This repo is a working boiler plate for the inital state of a react app created with the npx create-react-app tool.
If you do it right your end result baseline code should look something like this checklist:

- remove the default boiler plate code exposing an App.js implementation.
- created pages directory with an Index page component that renders as a landing page.
- added custom \_document.js file to override default next behaviour.
- added .babelrc file specifying ssr(or other if you use a different one).

Make use of this boiler plate code, have a look, and feel free to comment or help fix/improve the boiler plate. (I'm new to this)

Happy hacking!

## Instructions:

run from terminal:

<pre><code>
    npx create-react-app my_app
    cd my_app
    npm init -y
    npm install next styled-components babel-plugin-styled-components
</code></pre>

add to package.json:

<pre><code>
    "scripts" : {
    "dev":"next"
    }
</code></pre>

run the server with:

<pre><code>npm run dev</code></pre>

Write all the pages for which you need routes inside the **/pages** folder.

See <pre><code>pages/index.js</code></pre> for an example of a styled component implementation.
