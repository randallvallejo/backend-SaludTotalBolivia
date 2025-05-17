import { Column, Entity, Index, OneToMany } from "typeorm";
import { Structureservicetype } from "./Structureservicetype.entity";

@Index("service_type", ["serviceType"], { unique: true })
@Entity("servicetype", { schema: "sisinfo" })
export class Servicetype {
  @Column("int", { primary: true, name: "service_type_id" })
  serviceTypeId: number;

  @Column("varchar", { name: "service_type", unique: true, length: 25 })
  serviceType: string;

  @OneToMany(
    () => Structureservicetype,
    (structureservicetype) => structureservicetype.serviceType
  )
  structureservicetypes: Structureservicetype[];
}
