import { Column, Entity, Index, ManyToMany } from "typeorm";
import { Doctors } from "./Doctors.entity";

@Index("speciality_name", ["specialityName"], { unique: true })
@Entity("speciality", { schema: "sisinfo" })
export class Speciality {
  @Column("int", { primary: true, name: "speciality_id" })
  specialityId: number;

  @Column("varchar", { name: "speciality_name", unique: true, length: 25 })
  specialityName: string;

  @ManyToMany(() => Doctors, (doctors) => doctors.specialities)
  doctors: Doctors[];
}
