import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Userparentalsupervisor } from "./Userparentalsupervisor.entity";

@Index("IDX_2fca4d9cfcb776e982d79c98d8", ["typeOfSupervision"], {
  unique: true,
})
@Index("type_of_supervision", ["typeOfSupervision"], { unique: true })
@Entity("typeofsupervision", { schema: "sisinfo" })
export class Typeofsupervision {
  @PrimaryGeneratedColumn({ type: "int", name: "type_of_supervision_id" })
  typeOfSupervisionId: number;

  @Column("varchar", { name: "type_of_supervision", unique: true, length: 25 })
  typeOfSupervision: string;

  @OneToMany(
    () => Userparentalsupervisor,
    (userparentalsupervisor) => userparentalsupervisor.relationshipType
  )
  userparentalsupervisors: Userparentalsupervisor[];
}
