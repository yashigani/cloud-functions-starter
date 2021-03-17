import {HttpFunction} from '@google-cloud/functions-framework/build/src/functions'

type Logger = Console
export const echo: (logger?: Logger) => HttpFunction = logger => {
  return (req, res) => {
    logger?.info(req.body)
    res.status(200)
    res.send(`Hello, ${req.body.user ?? 'Cloud Functions'}`)
  }
}
