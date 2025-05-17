import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Department } from "./Department.entity";
import { Street } from "./Street.entity";

@Index("Province_index_9", ["departmentId", "provinceName"], { unique: true })
@Entity("province", { schema: "sisinfo" })
export class Province {
  @PrimaryGeneratedColumn({ type: "int", name: "province_id" })
  provinceId: number;

  @Column("int", { name: "department_id" })
  departmentId: number;

  @Column("varchar", { name: "province_name", length: 25 })
  provinceName: string;

  @ManyToOne(() => Department, (department) => department.provinces, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "department_id", referencedColumnName: "departmentId" }])
  department: Department;

  @OneToMany(() => Street, (street) => street.province)
  streets: Street[];
}
