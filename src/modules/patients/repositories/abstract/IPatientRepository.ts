import { IGenericRepository } from '@core/shared/interfaces/IGeneric-Repository'

export abstract class IPatientRepository<T> extends IGenericRepository<T> {
  abstract findEnabledPatients(): Promise<T>
  abstract findDisabledPatients(): Promise<T>
}
