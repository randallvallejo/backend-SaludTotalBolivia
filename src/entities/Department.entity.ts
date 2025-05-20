import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Province } from "./Province.entity";

@Index("department_name", ["departmentName"], { unique: true })
@Index("IDX_980e3e1f25ca867c47e38021bf", ["departmentName"], { unique: true })
@Entity("department", { schema: "sisinfo" })
export class Department {
  @PrimaryGeneratedColumn({ type: "int", name: "department_id" })
  departmentId: number;

  @Column("varchar", { name: "department_name", unique: true, length: 25 })
  departmentName: string;

  @OneToMany(() => Province, (province) => province.department)
  provinces: Province[];
}
