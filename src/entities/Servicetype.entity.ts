import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Structureservicetype } from "./Structureservicetype.entity";

@Index("IDX_3cf4a299002ae95d1230f0befb", ["serviceType"], { unique: true })
@Index("service_type", ["serviceType"], { unique: true })
@Entity("servicetype", { schema: "sisinfo" })
export class Servicetype {
  @PrimaryGeneratedColumn({ type: "int", name: "service_type_id" })
  serviceTypeId: number;

  @Column("varchar", { name: "service_type", unique: true, length: 25 })
  serviceType: string;

  @OneToMany(
    () => Structureservicetype,
    (structureservicetype) => structureservicetype.serviceType
  )
  structureservicetypes: Structureservicetype[];
}
