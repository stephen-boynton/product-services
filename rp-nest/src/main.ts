import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  Logger.log('Starting NestJS kkkd...')
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  await app.listen(3001)
}

bootstrap()
