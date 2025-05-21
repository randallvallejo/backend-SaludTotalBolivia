import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Examschedule } from "./Examschedule.entity";

@Index("exam_status_name", ["examStatusName"], { unique: true })
@Index("IDX_bbf3e148a20a9d0553bdadec98", ["examStatusName"], { unique: true })
@Entity("examstatus", { schema: "sisinfo" })
export class Examstatus {
  @PrimaryGeneratedColumn({ type: "int", name: "exam_status_id" })
  examStatusId: number;

  @Column("varchar", { name: "exam_status_name", unique: true, length: 25 })
  examStatusName: string;

  @OneToMany(() => Examschedule, (examschedule) => examschedule.examStatus)
  examschedules: Examschedule[];
}
