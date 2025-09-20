export class NotFoundedException extends Error{
  constructor(msg?: string){
    super(msg || 'data not found');
  }
}