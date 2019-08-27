import express from 'express';
import request from 'supertest';
import { helloWorld } from './index';

const app = express();
app.get('/', helloWorld)

describe('Hello function', () => {
    test('Get 200 response', (done) => {
        request(app)
            .get('/')
            .end((err, res) => {
                expect(err).toBeNull();
                expect(res.text).toBe('Hello World')
                done()
            })
    })
});
