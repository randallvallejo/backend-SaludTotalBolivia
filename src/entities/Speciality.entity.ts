import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Appointments } from "./Appointments.entity";

@Index("IDX_b83c9e815704bf5f48f031908e", ["specialityName"], { unique: true })
@Index("speciality_name", ["specialityName"], { unique: true })
@Entity("speciality", { schema: "sisinfo" })
export class Speciality {
  @PrimaryGeneratedColumn({ type: "int", name: "speciality_id" })
  specialityId: number;

  @Column("varchar", { name: "speciality_name", unique: true, length: 25 })
  specialityName: string;

  @OneToMany(() => Appointments, (appointments) => appointments.speciality)
  appointments: Appointments[];
}
