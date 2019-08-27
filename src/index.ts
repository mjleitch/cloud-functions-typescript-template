import { Request, Response } from 'express'

export function app(_: Request, res: Response) {
    try {
        res.status(200)
        res.send('Hello World')
    } catch (err) {
        res.status(500)
        res.send(err)
    }
}
