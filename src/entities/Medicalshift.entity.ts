import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Medicalschedule } from "./Medicalschedule.entity";

@Index("IDX_90fce739521f7996ddd675796f", ["shiftName"], { unique: true })
@Index("shift_name", ["shiftName"], { unique: true })
@Entity("medicalshift", { schema: "sisinfo" })
export class Medicalshift {
  @PrimaryGeneratedColumn({ type: "int", name: "shift_id" })
  shiftId: number;

  @Column("varchar", { name: "shift_name", unique: true, length: 25 })
  shiftName: string;

  @OneToMany(() => Medicalschedule, (medicalschedule) => medicalschedule.shift)
  medicalschedules: Medicalschedule[];
}
