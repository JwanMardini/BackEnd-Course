import express from "express";
const app = new express();

// use EJS templates
app.set('view engine', 'ejs');
app.set('views', 'views');

// home page route
app.get('/', (req, res) => {
    res.render('message', {title: 'Hello World!'});
  });
  
  // another route
  app.get('/hello/', (req, res) => {
    res.render('message', {title: 'Hello again!'});
  });
  
  // serve static assets
  app.use(express.static('static'));
  
  // 404 errors
  app.use((req, res) => {
    res.status(404).render('message', {title: 'Not found'});
  });

  app.listen(3000, () => {
    console.debug("Listening to port 3000");
  });

