import { ICreateSpecificationDTO } from '../dtos/ICreateSpecificationDTO';
import { Specification } from '../model/Specification';

interface ISpecificationsRepository {
  findByName(name: string): Specification;
  list(): Specification[];
  create({ name, description }: ICreateSpecificationDTO): void;
}

export { ISpecificationsRepository };
