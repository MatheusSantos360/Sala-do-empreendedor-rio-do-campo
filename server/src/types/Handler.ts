import { FastifyReply, FastifyRequest } from "fastify";


export type Handler<Response> = (request: FastifyRequest, response: FastifyReply) => Promise<Response>; 