import Fastify from 'fastify'

const buildServer = async config => {
  const opts = {
    ...config
  }
  const fastify = Fastify(opts)

  await fastify.register(import('@fastify/cors'), {
    origin: 'http://localhost:3000',
    credentials: true
  })

  await fastify.register(import('@fastify/mongodb'), {
    forceClose: true,
    url: 'mongodb://onesafe:123456@localhost:27017/admin'
  })

  fastify.register(import('@fastify/cookie'))
  fastify.register(import('@fastify/session'), {
    secret: 'a secret with minimum length of 32 characters',
    cookie: {
      secure: 'auto'
    }
  })

  fastify.register(import('./plugins/fastify-passkeys-auth.js'))
  fastify.register(import('./plugins/logout.js'))
  fastify.register(import('./plugins/user.js'))

  return fastify
}

export default buildServer
