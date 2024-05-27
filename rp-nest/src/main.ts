import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import session from 'express-session'
import passport from 'passport'
import MongoStore from 'connect-mongo'
import { MongoClient } from 'mongodb'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  console.log('process.env.MONGO_URL', process.env.MONGO_URL)
  // Authentication & Session
  app.use(
    session({
      store: MongoStore.create({
        clientPromise: MongoClient.connect(process.env.MONGO_URL)
      }), // where session will be stored
      secret: process.env.SESSION_SECRET, // to sign session id
      resave: false, // will default to false in near future: https://github.com/expressjs/session#resave
      saveUninitialized: false, // will default to false in near future: https://github.com/expressjs/session#saveuninitialized
      rolling: true, // keep session alive
      cookie: {
        maxAge: 30 * 60 * 1000, // session expires in 1hr, refreshed by `rolling: true` option.
        httpOnly: true // so that cookie can't be accessed via client-side script
      }
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())

  await app.listen(3001)
}

bootstrap()
