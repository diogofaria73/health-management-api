export abstract class IUserAuthRepository<T> {
  abstract findByEmail(data: T): Promise<T | null>
}
