import { IGenericRepository } from '@core/shared/interfaces/IGeneric-Repository'

export abstract class IUserRepository<T> extends IGenericRepository<T> {
  abstract findEnabledUsers(): Promise<T[] | null>
  abstract findDisabledUsers(): Promise<T[] | null>
}
