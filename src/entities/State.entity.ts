import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Appointments } from "./Appointments.entity";

@Index("IDX_0b9a0389ec8da5d1ca7fce93a8", ["stateName"], { unique: true })
@Index("state_name", ["stateName"], { unique: true })
@Entity("state", { schema: "sisinfo" })
export class State {
  @PrimaryGeneratedColumn({ type: "int", name: "state_id" })
  stateId: number;

  @Column("varchar", { name: "state_name", unique: true, length: 25 })
  stateName: string;

  @OneToMany(() => Appointments, (appointments) => appointments.state)
  appointments: Appointments[];
}
