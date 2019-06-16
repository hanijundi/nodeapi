import express from "express";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/meters',
    { useNewUrlParser: true });

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files from public folder
app.use(express.static('public'));

app.get("/", (req, res) =>
    res.send(`Express is running on ${PORT}`));

app.listen(PORT, () =>
    console.log(`Server is running on ${PORT}`));

