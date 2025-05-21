import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Healthcareinstitution } from "./Healthcareinstitution.entity";
import { Servicetype } from "./Servicetype.entity";
import { Structuretype } from "./Structuretype.entity";

@Index("service_type_id", ["serviceTypeId"], {})
@Index("StructureServiceType_index_7", ["structureTypeId", "serviceTypeId"], {
  unique: true,
})
@Entity("structureservicetype", { schema: "sisinfo" })
export class Structureservicetype {
  @Column("int", { primary: true, name: "structure_service_id" })
  structureServiceId: number;

  @Column("int", { name: "structure_type_id" })
  structureTypeId: number;

  @Column("int", { name: "service_type_id" })
  serviceTypeId: number;

  @OneToMany(
    () => Healthcareinstitution,
    (healthcareinstitution) => healthcareinstitution.structureService
  )
  healthcareinstitutions: Healthcareinstitution[];

  @ManyToOne(
    () => Servicetype,
    (servicetype) => servicetype.structureservicetypes,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "service_type_id", referencedColumnName: "serviceTypeId" },
  ])
  serviceType: Servicetype;

  @ManyToOne(
    () => Structuretype,
    (structuretype) => structuretype.structureservicetypes,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "structure_type_id", referencedColumnName: "structureTypeId" },
  ])
  structureType: Structuretype;
}
