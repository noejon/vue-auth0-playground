import bodyParser from 'body-parser';
import cors from 'cors';
import express from "express";
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

import { AUTH0_DOMAIN, API_AUDIENCE_ATTRIBUTE } from './config';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const checkAuthentication = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${AUTH0_DOMAIN}/.well-known/jwks.json`,
    }),
    audience: API_AUDIENCE_ATTRIBUTE,
    issuer: `http://${AUTH0_DOMAIN}.auth0.com/`,
    algorithms: ['RS256']
})

app.get('/api/friends/public', (req, res) => {
    let publicFriends = [
        {
            id: 1,
            city: 'New York',
            firstName: 'Chandler',
            lastName: 'Bing'
        },
        {
            id: 2,
            city: 'New York',
            firstName: 'Joey',
            lastName: 'Tribbiani'
        },
        {
            id: 3,
            city: 'New York',
            firstName: 'Monica',
            lastName: 'Geller'
        },
        {
            id: 4,
            city: 'New York',
            firstName: 'Phoebe',
            lastName: 'Buffay'
        },
        {
            id: 5,
            city: 'New York',
            firstName: 'Rachel',
            lastName: 'Green'
        },
        {
            id: 6,
            city: 'New York',
            firstName: 'Ross',
            lastName: 'Geller'
        },
    ];
    res.json(publicFriends);
});

app.get('/api/friends/private', checkAuthentication, (req, res) => {
    let privateFriends = [
        {
            id: 1,
            city: 'Sydney',
            firstName: 'Joce',
            lastName: 'S'
        },
        {
            id: 2,
            city: 'Haguenau',
            firstName: 'David',
            lastName: 'W'
        },
        {
            id: 3,
            city: 'Strasbourg',
            firstName: 'Jean',
            lastName: 'M'
        },
        {
            id: 4,
            city: 'Shanghai',
            firstName: 'Yann',
            lastName: 'M'
        },
    ];
    res.json(privateFriends);
})

app.listen(3333);
console.log('Listening on http://localhost:3333')