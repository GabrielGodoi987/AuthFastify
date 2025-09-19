export class AppService {
  async getHello(): Promise<string> {
    return "Hello fastify";
  }
}
