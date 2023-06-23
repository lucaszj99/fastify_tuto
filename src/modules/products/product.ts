import { getAllProducts, getProductById } from '@/controller/product';
import { FastifyInstance, RouteOptions } from 'fastify';
export const userRoutes: RouteOptions[] = [
  {
    method: 'GET',
    url: '/api/products',
    handler: getAllProducts
  },
  {
    method: 'GET',
    url: '/api/products/:id',
    handler: getProductById,
    schema: {
      params: {
        id: string
    }
    
    }
  }
];
