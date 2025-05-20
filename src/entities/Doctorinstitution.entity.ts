import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Doctors } from "./Doctors.entity";
import { Healthcareinstitution } from "./Healthcareinstitution.entity";

@Index("idx_institution", ["institutionUuid"], {})
@Index("idx_active_status", ["isActive"], {})
@Entity("doctorinstitution", { schema: "sisinfo" })
export class Doctorinstitution {
  @Column("char", { primary: true, name: "doctor_uuid", length: 36 })
  doctorUuid: string;

  @Column("char", { primary: true, name: "institution_uuid", length: 36 })
  institutionUuid: string;

  @Column("date", { name: "start_date" })
  startDate: string;

  @Column("date", { name: "end_date", nullable: true })
  endDate: string | null;

  @Column("tinyint", {
    name: "is_active",
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  isActive: boolean | null;

  @ManyToOne(() => Doctors, (doctors) => doctors.doctorinstitutions, {
    onDelete: "CASCADE",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "doctor_uuid", referencedColumnName: "doctorUuid" }])
  doctorUu: Doctors;

  @ManyToOne(
    () => Healthcareinstitution,
    (healthcareinstitution) => healthcareinstitution.doctorinstitutions,
    { onDelete: "CASCADE", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "institution_uuid", referencedColumnName: "institutionUuid" },
  ])
  institutionUu: Healthcareinstitution;
}
