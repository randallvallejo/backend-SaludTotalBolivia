import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Appointments } from "./Appointments.entity";
import { Medicalhistory } from "./Medicalhistory.entity";
import { Users } from "./Users.entity";
import { Bloodtype } from "./Bloodtype.entity";

@Index("user_uuid", ["userUuid"], { unique: true })
@Index("Patients_index_4", ["userUuid"], { unique: true })
@Index("IDX_d694c42a6b9d1a1db463f15e8b", ["userUuid"], { unique: true })
@Index("Patients_index_5", ["bloodTypeId"], {})
@Entity("patients", { schema: "sisinfo" })
export class Patients {
  @Column("char", { primary: true, name: "patient_uuid", length: 36 })
  patientUuid: string;

  @Column("char", { name: "user_uuid", unique: true, length: 36 })
  userUuid: string;

  @Column("int", { name: "blood_type_id" })
  bloodTypeId: number;

  @OneToMany(() => Appointments, (appointments) => appointments.patientUu)
  appointments: Appointments[];

  @OneToMany(() => Medicalhistory, (medicalhistory) => medicalhistory.patientUu)
  medicalhistories: Medicalhistory[];

  @OneToOne(() => Users, (users) => users.patients, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_uuid", referencedColumnName: "userUuid" }])
  userUu: Users;

  @ManyToOne(() => Bloodtype, (bloodtype) => bloodtype.patients, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "blood_type_id", referencedColumnName: "bloodTypeId" }])
  bloodType: Bloodtype;
}
