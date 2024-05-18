import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ClientService } from './client/client.service'
// import OAuth2Server, {
//   AuthorizationCode,
//   AuthorizationCodeModel,
//   Client as OAuthClient,
//   ClientCredentialsModel,
//   Token,
//   User as OAuthUser
// } from 'oauth2-server'
import { OAuth2Server } from 'oauth2-server'
import { AuthorizationCodeService } from './authorization-code/authorization-code.service'
import { ClientOauth } from './client/client.entity'
import { User } from './user/user.entity'
import { AccessTokenService } from './access-token/access-token.service'
import { AccessTokenOauth } from './access-token/access-token.entity'

import * as jwt from 'jsonwebtoken'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class OauthModelService
  implements
    OAuth2Server.AuthorizationCodeModel,
    OAuth2Server.ClientCredentialsModel
{
  constructor(
    private configService: ConfigService,
    private clientService: ClientService,
    private authorizationCodeService: AuthorizationCodeService,
    private accessTokenService: AccessTokenService
  ) {}

  getClient(clientId: string, clientSecret: string) {
    return this.clientService.getClient(clientId, clientSecret).catch(() => {
      throw new UnauthorizedException()
    })
  }

  saveToken(token: OAuth2Server.Token, client, user) {
    /* This is where you insert the token into the database */
    const dto = {
      accessToken: token.accessToken,
      expiresAt: token.accessTokenExpiresAt,
      client: Object.assign(new ClientOauth(), { id: client.id }),
      user: Object.assign(new User(), { id: user.id })
    } as Partial<AccessTokenOauth>
    return this.accessTokenService.save(dto)
  }

  getAccessToken(token) {
    return this.accessTokenService.findOne(token)
  }

  generateAccessToken(
    client: OAuth2Server.Client,
    user: OAuth2Server.User,
    scope: string | string[]
  ): Promise<string> {
    const secret = this.configService.get('JWT_SECRET')
    return Promise.resolve(
      jwt.sign({ ...user, scope }, secret, {
        expiresIn: 1800
      })
    )
  }

  getRefreshToken(token) {
    return new Promise((resolve) => resolve(''))
  }

  revokeToken(token: AccessTokenOauth) {
    return this.accessTokenService
      .revoke(token.accessToken)
      .then((res) => !!res)
  }

  saveAuthorizationCode(
    code: Pick<
      OAuth2Server.AuthorizationCode,
      'authorizationCode' | 'expiresAt' | 'redirectUri' | 'scope'
    >,
    client: OAuth2Server.Client,
    user: OAuth2Server.User
  ) {
    return this.authorizationCodeService
      .save({
        authorizationCode: code.authorizationCode,
        expiresAt: code.expiresAt,
        redirectUri: code.redirectUri,
        client: Object.assign(new ClientOauth(), { id: client.id }),
        user: Object.assign(new User(), { id: user.id })
      })
      .then((code) => {
        console.log(code)
        return code
      })
  }

  getAuthorizationCode(authorizationCode) {
    /* this is where we fetch the stored data from the code */
    return this.authorizationCodeService
      .findOne(authorizationCode)
      .then((code) => {
        delete code.redirectUri
        return code
      })
  }

  revokeAuthorizationCode(authorizationCode: OAuth2Server.AuthorizationCode) {
    return this.authorizationCodeService
      .revoke(authorizationCode.authorizationCode)
      .then((res) => !!res)
  }

  verifyScope(token, scope) {
    return Promise.resolve(true)
  }

  getUserFromClient() {
    return Promise.resolve({})
  }
}
