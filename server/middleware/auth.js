import config from '@config'
console.log('config', config)
import jwt from 'jsonwebtoken'
console.log('jwt', jwt)
import User from '@models/User'

export default async (req, res, next) => {
  try {
    console.log('req.headers', req.headers)

    const token = req.headers.access_token

    const data = jwt.verify(token, config.jwtSecret)
    console.log('data', data)

    const user = await User.findById(data.id)
    console.log('user', user)

    if (!user) {
      throw new Error()
    }

    req.user = user

    return next()
  } catch (error) {
    console.log('----------->', error)
    return res.status(400).json({
      message: 'Unauthenticated.'
    })
  }
}
