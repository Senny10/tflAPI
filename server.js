import express from 'express';
import dotenv from 'dotenv'

dotenv.config()

const APIKEY = process.env.API_KEY

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.listen(3000, () => console.log('Server listening on port 3000!'));