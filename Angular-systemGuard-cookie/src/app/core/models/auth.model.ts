export interface Response{
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  accessToken: string
  refreshToken: string
}

export interface Request{
  username: string // emilys
  password: string //emilyspass
}