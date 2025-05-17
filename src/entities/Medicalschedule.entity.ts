import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Appointments } from "./Appointments.entity";
import { Doctorschedule } from "./Doctorschedule.entity";
import { Medicalservice } from "./Medicalservice.entity";
import { Medicalshift } from "./Medicalshift.entity";

@Index("medical_service_id", ["medicalServiceId"], {})
@Index("MedicalSchedule_index_14", ["shiftId", "medicalServiceId"], {
  unique: true,
})
@Entity("medicalschedule", { schema: "sisinfo" })
export class Medicalschedule {
  @Column("int", { primary: true, name: "schedule_id" })
  scheduleId: number;

  @Column("int", { name: "shift_id" })
  shiftId: number;

  @Column("int", { name: "medical_service_id" })
  medicalServiceId: number;

  @Column("time", { name: "start_time" })
  startTime: string;

  @Column("time", { name: "end_time" })
  endTime: string;

  @OneToMany(() => Appointments, (appointments) => appointments.schedule)
  appointments: Appointments[];

  @OneToMany(() => Doctorschedule, (doctorschedule) => doctorschedule.schedule)
  doctorschedules: Doctorschedule[];

  @ManyToOne(
    () => Medicalservice,
    (medicalservice) => medicalservice.medicalschedules,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "medical_service_id", referencedColumnName: "medicalServiceId" },
  ])
  medicalService: Medicalservice;

  @ManyToOne(
    () => Medicalshift,
    (medicalshift) => medicalshift.medicalschedules,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "shift_id", referencedColumnName: "shiftId" }])
  shift: Medicalshift;
}
