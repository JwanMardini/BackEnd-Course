import express from 'express';
import formidable from 'formidable';

// import{ createServer } from 'https';
// import{ readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, sep } from 'path';
import compression from 'compression';


// chapter 1,2,3,4,,5

const __dirname = dirname(fileURLToPath( import.meta.url )) + sep; // __dirname replacement for ES6 modules, converts the URL to a file path, to know the absulot path
// sep is the platform-specific path segment separator, '\\' or '/'

// Config
const cfg = {
    port: process.env.PORT || 3000,
    dir: {
        root: __dirname,
        static: __dirname + 'static' + sep,
        views: __dirname + 'views' + sep,
        routes: __dirname + 'routes' + sep,
        uploads: __dirname + 'uploads' + sep
    }
};

console.dir(cfg, { depth: null, color: true });

// Certificate SSL (Socket Secure Layer) (This replaces the HTTP app.listen()cd)
// createServer({
//     key: readFileSync('key.pem'),
//     cert: readFileSync('cert.pem')
// }, app).listen(cfg.port);

// Express initialization
const app = express();

// use EJS templates
//This sets EJS as the Express view engine with files contained in the views directory
app.set('view engine', 'ejs');
app.set('views', cfg.dir.views)

// body parsing
app.use(express.urlencoded({ extended: true })); // Form data isnt parsed OOTB neeed middelware

// do not identify Express
app.disable('x-powered-by');

// HTTP compression, gzip, it compresses the response body
app.use(compression());

// log every request to the terminal
app.use((req, res, next) => {
    console.log(req.url);
    next(); // continue with the request
});


// // home page route
// app.get('/', (req, res) => {
//     res.render('message', { title: 'Hello World!' });
// });

// hello routes
import { helloRouter } from './routes/hello.js';
app.use('/hello', helloRouter); // app.use() defines the helloRouter middleware rather than a single app.get() route

// render form
//chapter 6

// render form
// use .all to handle initial GET and POST
app.all('/', (req, res, next) => {
    console.log(req.query);
    if (req.method === 'GET' || req.method === 'POST') {
        // parse uploaded file data
        const form = formidable({
        uploadDir: cfg.dir.uploads,
        keepExtensions: true,
    });

    form.parse(req, (err, data, files) => {

        if (err) {
          next(err);
          return;
        }
  
        if (files && files.image && files.image.size > 0) {
          data.filename = files.image.originalFilename;
          data.filetype = files.image.mimetype;
          data.filesize = Math.ceil(files.image.size / 1024) + ' KB';
          data.uploadto = files.image.filepath;
          data.imageurl = '/' + parse(files.image.filepath).base;
        }
  
        res.render('form', { title: 'Parse HTTP POST file data', data });
    });
    }
    else {
        next(); // pass on to the next handler
    }
});

// serve static assets
app.use(express.static(cfg.dir.static))
// static assets
app.use(express.static( cfg.dir.uploads ));

// 404 page
app.use((req, res) => {
    res.status(404).render('message', { title: 'Not found' });
    //res.redirect(404, '/404.html'); // redirect to a 404 page
});

//The render method is passed the name of the template ( 'message' —the
//.ejs extension can be omitted) and an object containing name/value pairs. A
//title is set in this example.

// start the server
app.listen(cfg.port, () => {
    console.log(`Example app listening at http://localhost:${cfg.port}`);
});


// export defaults
export { cfg, app };

