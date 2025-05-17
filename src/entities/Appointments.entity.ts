import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Healthcareinstitution } from "./Healthcareinstitution.entity";
import { Patients } from "./Patients.entity";
import { State } from "./State.entity";
import { Medicalschedule } from "./Medicalschedule.entity";
import { Doctors } from "./Doctors.entity";
import { Consultation } from "./Consultation.entity";

@Index("Appointments_index_16", ["doctorUuid", "appointmentDate"], {})
@Index(
  "Appointments_index_17",
  ["institutionUuid", "patientUuid", "stateId"],
  {}
)
@Index("patient_uuid", ["patientUuid"], {})
@Index("schedule_id", ["scheduleId"], {})
@Index("state_id", ["stateId"], {})
@Entity("appointments", { schema: "sisinfo" })
export class Appointments {
  @Column("int", { primary: true, name: "appointment_id" })
  appointmentId: number;

  @Column("char", { name: "institution_uuid", length: 36 })
  institutionUuid: string;

  @Column("char", { name: "patient_uuid", length: 36 })
  patientUuid: string;

  @Column("char", { name: "doctor_uuid", length: 36 })
  doctorUuid: string;

  @Column("date", { name: "appointment_date" })
  appointmentDate: string;

  @Column("int", { name: "schedule_id" })
  scheduleId: number;

  @Column("int", { name: "state_id" })
  stateId: number;

  @ManyToOne(
    () => Healthcareinstitution,
    (healthcareinstitution) => healthcareinstitution.appointments,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "institution_uuid", referencedColumnName: "institutionUuid" },
  ])
  institutionUu: Healthcareinstitution;

  @ManyToOne(() => Patients, (patients) => patients.appointments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "patient_uuid", referencedColumnName: "patientUuid" }])
  patientUu: Patients;

  @ManyToOne(() => State, (state) => state.appointments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "state_id", referencedColumnName: "stateId" }])
  state: State;

  @ManyToOne(
    () => Medicalschedule,
    (medicalschedule) => medicalschedule.appointments,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "schedule_id", referencedColumnName: "scheduleId" }])
  schedule: Medicalschedule;

  @ManyToOne(() => Doctors, (doctors) => doctors.appointments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "doctor_uuid", referencedColumnName: "doctorUuid" }])
  doctorUu: Doctors;

  @OneToMany(() => Consultation, (consultation) => consultation.appointment)
  consultations: Consultation[];
}
