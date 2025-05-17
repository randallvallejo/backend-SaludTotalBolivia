import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Doctors } from "./Doctors.entity";
import { Healthcareinstitution } from "./Healthcareinstitution.entity";
import { Patients } from "./Patients.entity";
import { Useraddressing } from "./Useraddressing.entity";
import { Userparentalsupervisor } from "./Userparentalsupervisor.entity";
import { Role } from "./Role.entity";

@Index("user_ci", ["userCi"], { unique: true })
@Index("user_email", ["userEmail"], { unique: true })
@Index("Users_index_0", ["userEmail"], { unique: true })
@Index("Users_index_1", ["birthDate"], {})
@Index("Users_index_2", ["phone"], {})
@Index("Users_index_3", ["userCi"], { unique: true })
@Entity("users", { schema: "sisinfo" })
export class Users {
  @Column("char", { primary: true, name: "user_uuid", length: 36 })
  userUuid: string;

  @Column("int", { name: "user_ci", nullable: true, unique: true })
  userCi: number | null;

  @Column("varchar", { name: "user_name", nullable: true, length: 25 })
  userName: string | null;

  @Column("varchar", { name: "user_email", unique: true, length: 255 })
  userEmail: string;

  @Column("varchar", { name: "user_password", length: 255 })
  userPassword: string;

  @Column("varchar", { name: "name", length: 25 })
  name: string;

  @Column("varchar", { name: "last_name", length: 25 })
  lastName: string;

  @Column("date", { name: "birth_date" })
  birthDate: string;

  @Column("varchar", { name: "phone", nullable: true, length: 12 })
  phone: string | null;

  @OneToOne(() => Doctors, (doctors) => doctors.userUu)
  doctors: Doctors;

  @ManyToMany(
    () => Healthcareinstitution,
    (healthcareinstitution) => healthcareinstitution.users
  )
  @JoinTable({
    name: "institutionadmin",
    joinColumns: [{ name: "user_uuid", referencedColumnName: "userUuid" }],
    inverseJoinColumns: [
      { name: "institution_uuid", referencedColumnName: "institutionUuid" },
    ],
    schema: "sisinfo",
  })
  healthcareinstitutions: Healthcareinstitution[];

  @OneToOne(() => Patients, (patients) => patients.userUu)
  patients: Patients;

  @OneToMany(() => Useraddressing, (useraddressing) => useraddressing.userUu)
  useraddressings: Useraddressing[];

  @OneToMany(
    () => Userparentalsupervisor,
    (userparentalsupervisor) => userparentalsupervisor.supervisorUu
  )
  userparentalsupervisors: Userparentalsupervisor[];

  @OneToMany(
    () => Userparentalsupervisor,
    (userparentalsupervisor) => userparentalsupervisor.userUu
  )
  userparentalsupervisors2: Userparentalsupervisor[];

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({
    name: "usersrole",
    joinColumns: [{ name: "user_uuid", referencedColumnName: "userUuid" }],
    inverseJoinColumns: [{ name: "role_id", referencedColumnName: "roleId" }],
    schema: "sisinfo",
  })
  roles: Role[];
}
