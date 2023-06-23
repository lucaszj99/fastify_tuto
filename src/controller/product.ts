import { FastifyRequest, FastifyReply } from 'fastify';

export type GetProductById = {
    id: string
}

export const getAllProducts = async (request: FastifyRequest, reply: FastifyReply) => {
  reply.send({ message: "Get all products" });
};

export const getProductById = async (request: FastifyRequest<{Params: GetProductById}>, reply: FastifyReply) => {
  const params = request.params;
  const id = params.id;
  reply.send({ message: `Get product with id ${id}` });
};
