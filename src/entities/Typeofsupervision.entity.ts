import { Column, Entity, Index, OneToMany } from "typeorm";
import { Userparentalsupervisor } from "./Userparentalsupervisor.entity";

@Index("type_of_supervision", ["typeOfSupervision"], { unique: true })
@Entity("typeofsupervision", { schema: "sisinfo" })
export class Typeofsupervision {
  @Column("int", { primary: true, name: "type_of_supervision_id" })
  typeOfSupervisionId: number;

  @Column("varchar", { name: "type_of_supervision", unique: true, length: 25 })
  typeOfSupervision: string;

  @OneToMany(
    () => Userparentalsupervisor,
    (userparentalsupervisor) => userparentalsupervisor.relationshipType
  )
  userparentalsupervisors: Userparentalsupervisor[];
}
