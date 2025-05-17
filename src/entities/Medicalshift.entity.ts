import { Column, Entity, Index, OneToMany } from "typeorm";
import { Medicalschedule } from "./Medicalschedule.entity";

@Index("shift_name", ["shiftName"], { unique: true })
@Entity("medicalshift", { schema: "sisinfo" })
export class Medicalshift {
  @Column("int", { primary: true, name: "shift_id" })
  shiftId: number;

  @Column("varchar", { name: "shift_name", unique: true, length: 25 })
  shiftName: string;

  @OneToMany(() => Medicalschedule, (medicalschedule) => medicalschedule.shift)
  medicalschedules: Medicalschedule[];
}
