    import express from 'express';/*this is ES6 but Node only understands ES5 hence we need babel to convert(check package.json)*/
    import cors from 'cors'
    import data from './data';

    const app = express();
    app.use(cors());

    app.get('/api/products', function(req, res){
        res.send(data.products);
    });

    //app.listen(5000, function(){console.log('Server started at http://localhost:5000');});
    app.listen(5000, () => {console.log('Server started at http://localhost:5000');});