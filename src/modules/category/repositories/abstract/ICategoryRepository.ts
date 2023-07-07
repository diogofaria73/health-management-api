import { IGenericRepository } from '@core/shared/interfaces/IGeneric-Repository'

export abstract class ICategoryRepository<T> extends IGenericRepository<T> {
  abstract findEnabledCategories(): Promise<T[]>
  abstract findDisabledCategories(): Promise<T[]>
}
