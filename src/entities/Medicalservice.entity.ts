import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Examtype } from "./Examtype.entity";
import { Medicalschedule } from "./Medicalschedule.entity";

@Index("IDX_0c9812746e8ebe35dcd6800d6c", ["medicalService"], { unique: true })
@Index("medical_service", ["medicalService"], { unique: true })
@Entity("medicalservice", { schema: "sisinfo" })
export class Medicalservice {
  @PrimaryGeneratedColumn({ type: "int", name: "medical_service_id" })
  medicalServiceId: number;

  @Column("varchar", { name: "medical_service", unique: true, length: 25 })
  medicalService: string;

  @OneToMany(() => Examtype, (examtype) => examtype.medicalService)
  examtypes: Examtype[];

  @OneToMany(
    () => Medicalschedule,
    (medicalschedule) => medicalschedule.medicalService
  )
  medicalschedules: Medicalschedule[];
}
