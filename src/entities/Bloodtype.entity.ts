import { Column, Entity, Index, OneToMany } from "typeorm";
import { Patients } from "./Patients.entity";

@Index("blood_type", ["bloodType"], { unique: true })
@Index("IDX_255d62eaab5aff15c3a5c1d041", ["bloodType"], { unique: true })
@Entity("bloodtype", { schema: "sisinfo" })
export class Bloodtype {
  @Column("int", { primary: true, name: "blood_type_id" })
  bloodTypeId: number;

  @Column("varchar", { name: "blood_type", unique: true, length: 5 })
  bloodType: string;

  @OneToMany(() => Patients, (patients) => patients.bloodType)
  patients: Patients[];
}
