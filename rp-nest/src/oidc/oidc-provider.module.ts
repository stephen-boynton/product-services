import { Module } from '@nestjs/common'
import { OidcProviderService } from './oidc-provider.service'
import { OidcController } from './oidc.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Session } from './entities/Session.entity'
import { AccessToken } from './entities/AccessToken.entity'
import { Client } from './entities/Client.entity'
import { ClientCredentials } from './entities/ClientCredentials.entity'
import { DeviceCode } from './entities/DeviceCode.entity'
import { Grant } from './entities/Grant.entity'
import { InitialAccessToken } from './entities/InitialAccessToken.entity'
import { Interaction } from './entities/Interaction.entity'
import { PushedAuthorizationRequest } from './entities/PushedAuthorizationRequest.entity'
import { RefreshToken } from './entities/RefreshToken.entity'
import { RegistrationAccessToken } from './entities/RegistrationAccessToken.entity'
import { ReplayDetection } from './entities/ReplayDetection.entity'
import { InteractionsController } from './interactions/interactions.controller'
import { AccountService } from './account/account.service'
import { UserModule } from '../oauth/user/user.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Session,
      AccessToken,
      Client,
      ClientCredentials,
      DeviceCode,
      Grant,
      InitialAccessToken,
      Interaction,
      PushedAuthorizationRequest,
      RefreshToken,
      RegistrationAccessToken,
      ReplayDetection
    ]),
    UserModule
  ],
  controllers: [OidcController, InteractionsController],
  providers: [OidcProviderService, AccountService]
})
export class OidcProviderModule {}
