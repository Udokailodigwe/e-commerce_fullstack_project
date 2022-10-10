// export type UserDocument = Document & {
//   firstName: string
//   lastName: string
//   email: string
//   image: string
// }

// export type ProductDocument = Document & {
//   name: string
//   description: string
//   category: string[]
//   variants: string[]
//   sizes: string[]
//   image: string
// }

export interface ParsedToken {
  payload: {
    email: string
    email_verified: string
    name: string
    picture: string
    given_name: string
    family_name: string
    locale: string
  }
}

export interface VerifiedCallback {
  (error: any, user?: any, info?: any): void
}
