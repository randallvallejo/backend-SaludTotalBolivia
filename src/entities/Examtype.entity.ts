import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Examschedule } from "./Examschedule.entity";
import { Medicalservice } from "./Medicalservice.entity";

@Index("exam_name", ["examName"], { unique: true })
@Index("IDX_13120aa178e3429c78b9277726", ["examName"], { unique: true })
@Index("medical_service_id", ["medicalServiceId"], {})
@Entity("examtype", { schema: "sisinfo" })
export class Examtype {
  @Column("int", { primary: true, name: "exam_type_id" })
  examTypeId: number;

  @Column("varchar", { name: "exam_name", unique: true, length: 50 })
  examName: string;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @Column("int", { name: "medical_service_id" })
  medicalServiceId: number;

  @OneToMany(() => Examschedule, (examschedule) => examschedule.examType)
  examschedules: Examschedule[];

  @ManyToOne(
    () => Medicalservice,
    (medicalservice) => medicalservice.examtypes,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "medical_service_id", referencedColumnName: "medicalServiceId" },
  ])
  medicalService: Medicalservice;
}
