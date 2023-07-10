import { IGenericRepository } from '@core/shared/interfaces/IGeneric-Repository'

export abstract class IClinicRepository<T> extends IGenericRepository<T> {
  abstract findEnabledClinics(): Promise<T>
  abstract findDisabledClinics(): Promise<T>
}
