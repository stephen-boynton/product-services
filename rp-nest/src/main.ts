import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger, ValidationPipe } from '@nestjs/common'
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  Logger.log('Starting NestJS kkkd...')
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  // app.setBaseViewsDir(join(__dirname, '..', 'views'))
  // app.setViewEngine('ejs')
  await app.listen(3001)
}

bootstrap()
