import fastify from 'fastify'

const server = fastify()

server.get('/ping', async (request, reply) => {


  let a = 2
  a = a+2
  return {'pong': "asdads"}
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
