import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Appointments } from "./Appointments.entity";
import { Medicalanalysis } from "./Medicalanalysis.entity";

@Index("FK_appointmentmedicalanalysis_medicalanalysis", ["analysisId"], {})
@Entity("appointmentmedicalanalysis", { schema: "sisinfo" })
export class Appointmentmedicalanalysis {
  @Column("int", { primary: true, name: "appointment_id" })
  appointmentId: number;

  @Column("int", { primary: true, name: "analysis_id" })
  analysisId: number;

  @Column("tinyint", { name: "required", width: 1 })
  required: boolean;

  @ManyToOne(
    () => Appointments,
    (appointments) => appointments.appointmentmedicalanalyses,
    { onDelete: "CASCADE", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "appointment_id", referencedColumnName: "appointmentId" },
  ])
  appointment: Appointments;

  @ManyToOne(
    () => Medicalanalysis,
    (medicalanalysis) => medicalanalysis.appointmentmedicalanalyses,
    { onDelete: "CASCADE", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "analysis_id", referencedColumnName: "analysisId" }])
  analysis: Medicalanalysis;
}
