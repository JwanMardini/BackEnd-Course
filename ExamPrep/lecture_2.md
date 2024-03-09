# LECTURE 2

## What is Node.js?
- A Javascript runtime, used to create command line tools, web
server applications and even desktop apps

- Very popular tool among devs, even when using other
languages
- Javascript has nothing to do with Java, now standardized as
ECMAScript
- Created by Ryan Dahl who took the JS engine from Google
Chrome (called V8) and added some API:s, launched 2009
- Single-threaded asynchronous application model

Why Node.js?
- Javascript everywhere (good and bad)
- It's rather fast (despite being based on an interpreted and
dynamically typed language)
- Handles huge number of simultaneous connections
- It has a small and cross-platform runtime (for Windows, Linux,
MacOS, Rasperry Pi ...)
- It's extendible, large repository of packages available using
npm
- It's easy to get started

## Why not Node.js?
- As Node.js is single-threaded, responsiveness may suffer for CPU
intensive applications
- If you need multi-threading
    - for parallelized data processing (ETL, sorting)
    - for image processing
    - for simulations

- Large and complex applications are often helped by having a robust
type system
- Not as mature as .NET or Java ecosystems
- Safety concerns

## npm
- npm = Node Package Manager
- Both a registry of Node packages and a command line tool
- npm is installed with Node.js
- Search for packages
- Used for:
    - creating new projects (npm init)
    - installing dependencies (npm install)
    - starting the application (npm start)

## nodemon
- Use Nodemon to avoid having to restart manually

## package.json file
- All "npm init" does is creating package.json
- Purpose of package.json
    - contains project metadata (useful when publishing)
    - defines the package's entry point (as above)
    - defines project dependencies
    - defines scripts

## Why Express?
- Lots of features for web applications:
- routing (ie mapping functions to urls)
- middleware (ie functions executed before or after)
- templating (to generate html)
- static file serving (to serve html, css, js, jpg files)
- error handling
- and more

## Version Handling
- npm uses semantic versioning (semver)
- Each package is versioned with major.minor.patch
    - like 4.18.2 where 4 is major, 18 is minor and 2 is patch number
- Use ~ or ^ signs to specify range (there are more options):
    - ~ (tilde) to allow new patches (good to get bug fixes but…)
    - ^ (caret) to allow new minor versions (should be ok but don't)
- Be careful with ranges

## HTTPS?
- Shouldn't we always handle https connections?
- Probably not... (see what Butler says)
- In short:
    - it's a hassle
    - better to terminate the https connection somewhere else (in a front-facing Nginx-instance for example)

## Adding compressioon
- To improve performance, assets should be compressed before returned over the network
- `app.use(compression());`

## import or require
- There are two module systems for Node.js
    - CommonJs – the original (may use .cjs extension)
    - ES2015 Modules (ESM) – the future (?, may use .mjs extension)

- CommonJs
    - uses require to include ther modules
    - uses module.exports to export

- ESM
    - uses import instead of require
    - uses export keyword to export

## Generic middleware
- All calls to `app.use()` define something called "middleware"
- They are functions called before or after every request
- A middleware function generally takes three arguments: req, res and next

## Template engines
- Template engines are used to add dynamic content to html pages
- They contain html with placeholders for data, if/loop constructs and "partials" (repeated page elements)
    - Partials are page elements usually repeated on many pages, like header and footer
- Note: EJS is a JS runtime, do not submit unsecure content to it (like req query)
