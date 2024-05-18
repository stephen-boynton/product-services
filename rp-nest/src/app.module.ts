import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { OauthModule } from './oauth/oauth.module'
import { OidcProviderModule } from './oidc/oidc-provider.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true
    }),
    OauthModule,
    OidcProviderModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
