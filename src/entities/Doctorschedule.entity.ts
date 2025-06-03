import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Medicalschedule } from "./Medicalschedule.entity";
import { Doctors } from "./Doctors.entity";

@Index("DoctorSchedule_index_15", ["doctorUuid", "shiftDate", "scheduleId"], {})
@Index("institution_uuid_idx", ["institutionUuid"], {})
@Index("schedule_id", ["scheduleId"], {})
@Index("speciality_id_idx", ["specialityId"], {})
@Entity("doctorschedule", { schema: "sisinfo" })
export class Doctorschedule {
  @Column("char", { primary: true, name: "doctor_uuid", length: 36 })
  doctorUuid: string;

  @Column("int", { primary: true, name: "schedule_id" })
  scheduleId: number;

  @Column("date", { primary: true, name: "shift_date" })
  shiftDate: string;

  @Column("char", { primary: true, name: "institution_uuid", length: 36 })
  institutionUuid: string;

  @Column("int", { primary: true, name: "speciality_id" })
  specialityId: number;

  @ManyToOne(
    () => Medicalschedule,
    (medicalschedule) => medicalschedule.doctorschedules,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "schedule_id", referencedColumnName: "scheduleId" }])
  schedule: Medicalschedule;

  @ManyToOne(() => Doctors, (doctors) => doctors.doctorschedules, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "doctor_uuid", referencedColumnName: "doctorUuid" }])
  doctorUu: Doctors;
}
