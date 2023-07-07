import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'
import { NestExpressApplication } from '@nestjs/platform-express'
import * as basicAuth from 'express-basic-auth'
import { AppModule } from './app.module'

async function bootstrap() {
  // Default using Express
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  })
  app.enableCors()

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
    }),
  )

  app.use(
    [process.env.SWAGGER_DOCS_URL],
    basicAuth({
      challenge: false,
      users: {
        [process.env.SWAGGER_USERNAME]: process.env.SWAGGER_PASSWORD,
      },
    }),
  )

  const config = new DocumentBuilder()
    .setContact(
      process.env.SWAGGER_CONTACT_NAME,
      process.env.SWAGGER_CONTACT_PAGE,
      process.env.SWAGGER_CONTACT_EMAIL,
    )
    .setDescription('API documentation')
    .setVersion('v1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup(process.env.SWAGGER_DOCS_URL, app, document)

  await app.listen(process.env.API_DEFAULT_PORT, process.env.API_EXTERNAL_PORT)
}
bootstrap()
