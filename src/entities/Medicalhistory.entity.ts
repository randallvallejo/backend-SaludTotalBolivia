import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Consultation } from "./Consultation.entity";
import { Patients } from "./Patients.entity";

@Index("consultation_id", ["consultationId"], { unique: true })
@Index("IDX_663a568db482c8ff9372019af4", ["consultationId"], { unique: true })
@Index("MedicalHistory_index_19", ["patientUuid"], {})
@Entity("medicalhistory", { schema: "sisinfo" })
export class Medicalhistory {
  @PrimaryGeneratedColumn({ type: "int", name: "medical_history_id" })
  medicalHistoryId: number;

  @Column("int", { name: "consultation_id", unique: true })
  consultationId: number;

  @Column("char", { name: "patient_uuid", length: 36 })
  patientUuid: string;

  @OneToOne(() => Consultation, (consultation) => consultation.medicalhistory, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "consultation_id", referencedColumnName: "consultationId" },
  ])
  consultation: Consultation;

  @ManyToOne(() => Patients, (patients) => patients.medicalhistories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "patient_uuid", referencedColumnName: "patientUuid" }])
  patientUu: Patients;
}
