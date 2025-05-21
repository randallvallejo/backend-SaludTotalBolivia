import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Examstatus } from "./Examstatus.entity";
import { Examtype } from "./Examtype.entity";

@Index("exam_status_id", ["examStatusId"], {})
@Index("exam_type_id", ["examTypeId"], {})
@Index("ExamSchedule_index_21", ["patientUuid", "scheduledDate"], {})
@Entity("examschedule", { schema: "sisinfo" })
export class Examschedule {
  @PrimaryGeneratedColumn({ type: "int", name: "exam_schedule_id" })
  examScheduleId: number;

  @Column("int", { name: "exam_type_id" })
  examTypeId: number;

  @Column("char", { name: "patient_uuid", length: 36 })
  patientUuid: string;

  @Column("char", { name: "doctor_uuid", length: 36 })
  doctorUuid: string;

  @Column("char", { name: "institution_uuid", length: 36 })
  institutionUuid: string;

  @Column("datetime", { name: "scheduled_date" })
  scheduledDate: Date;

  @Column("int", { name: "exam_status_id" })
  examStatusId: number;

  @Column("varchar", { name: "notes", nullable: true, length: 255 })
  notes: string | null;

  @ManyToOne(() => Examstatus, (examstatus) => examstatus.examschedules, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "exam_status_id", referencedColumnName: "examStatusId" },
  ])
  examStatus: Examstatus;

  @ManyToOne(() => Examtype, (examtype) => examtype.examschedules, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "exam_type_id", referencedColumnName: "examTypeId" }])
  examType: Examtype;
}
