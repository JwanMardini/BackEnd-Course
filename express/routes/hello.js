import { Router } from 'express';
import { hello } from '../lib/locale.js';
import { capitalize } from '../lib/string.js';

export const helloRouter = Router();

// say hello in English
helloRouter.get('/:name', (req, res, next) => {
    res.render(
    'message',
    { title: `${ hello.en } ${ capitalize( req.params.name ) }!` }
    );
});

// say hello in a specific language
helloRouter.get('/:lang/:name', (req, res, next) => {
    res.render(
    'message',
    { title: `${ hello[req.params.lang] || hello.en } ${ capitalize( req.params.name ) }!` }
    );
});

/*
This defines an Express Router object named helloRouter . Routers are mini
applications that can perform routing and middleware functions.

The first route defines a function for the parametrized path /:name . (You
should not specify the full /hello/:name route, because this router file will
become the handler for all /hello/ paths.) The function renders the message
template with a title that says “Hello” (in English) to the :name value
passed on the URL ( req.params.name ).

The second route defines a function for the parametrized path /:lang/:name .
Again, this renders the message template with a title that uses a localized
version of “Hello” as defined in lib/locale.js .*/