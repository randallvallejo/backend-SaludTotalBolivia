import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Appointmentmedicalanalysis } from "./Appointmentmedicalanalysis.entity";

@Index("analysis_name", ["analysisName"], { unique: true })
@Index("IDX_medicalanalysis_name", ["analysisName"], { unique: true })
@Entity("medicalanalysis", { schema: "sisinfo" })
export class Medicalanalysis {
  @PrimaryGeneratedColumn({ type: "int", name: "analysis_id" })
  analysisId: number;

  @Column("varchar", { name: "analysis_name", unique: true, length: 50 })
  analysisName: string;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @OneToMany(
    () => Appointmentmedicalanalysis,
    (appointmentmedicalanalysis) => appointmentmedicalanalysis.analysis
  )
  appointmentmedicalanalyses: Appointmentmedicalanalysis[];
}
