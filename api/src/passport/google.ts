import GoogleTokenStrategy from 'passport-google-id-token'
import { ParsedToken, VerifiedCallback } from '../types'
import { GOOGLE_CLIENT_ID } from '../util/secrets'
import User from '../models/User.model'

export default function () {
  return new GoogleTokenStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
    },
    async (
      parsedToken: ParsedToken,
      googleId: string,
      done: VerifiedCallback
    ) => {
      try {
        let user: any = await User.findOne({ email: parsedToken.payload.email })
        if (!user) {
          user = new User({
            firstName: parsedToken.payload.given_name,
            lastName: parsedToken.payload.family_name,
            email: parsedToken.payload.email,
            image: parsedToken.payload.picture,
            isAdmin: false,
            isBanned: false,
          })
          user.save()
        }
        done(null, user)
      } catch (error) {
        done(error)
      }
    }
  )
}
