export abstract class IGenericRepository<T> {
  abstract create(data: T): Promise<T>
  abstract update(data: T): Promise<T>
  abstract delete(id: string): Promise<T>
  abstract findOne(id: string): Promise<T>
  abstract findAll(): Promise<T[]>
}
