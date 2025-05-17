import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Appointments } from "./Appointments.entity";
import { Medicalhistory } from "./Medicalhistory.entity";

@Index("appointment_id", ["appointmentId"], {})
@Index("Consultation_index_18", ["timeStart", "timeEnd"], {})
@Entity("consultation", { schema: "sisinfo" })
export class Consultation {
  @Column("int", { primary: true, name: "consultation_id" })
  consultationId: number;

  @Column("int", { name: "appointment_id" })
  appointmentId: number;

  @Column("datetime", { name: "time_start" })
  timeStart: Date;

  @Column("datetime", { name: "time_end" })
  timeEnd: Date;

  @Column("varchar", { name: "diagnostic", length: 100 })
  diagnostic: string;

  @Column("varchar", { name: "treatment", length: 100 })
  treatment: string;

  @ManyToOne(() => Appointments, (appointments) => appointments.consultations, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "appointment_id", referencedColumnName: "appointmentId" },
  ])
  appointment: Appointments;

  @OneToOne(
    () => Medicalhistory,
    (medicalhistory) => medicalhistory.consultation
  )
  medicalhistory: Medicalhistory;
}
