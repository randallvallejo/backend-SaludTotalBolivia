import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Doctors } from "./Doctors.entity";

@Index("IDX_ac0e17625b245546c00d5e67e5", ["doctorUuid"], {})
@Entity("specialists", { schema: "sisinfo" })
export class Specialists {
  @Column("char", { primary: true, name: "doctor_uuid", length: 36 })
  doctorUuid: string;

  @Column("int", { primary: true, name: "speciality_id" })
  specialityId: number;

  @ManyToOne(() => Doctors, (doctors) => doctors.specialists, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "doctor_uuid", referencedColumnName: "doctorUuid" }])
  doctorUu: Doctors;
}
