import { Column, Entity, Index, ManyToMany } from "typeorm";
import { Users } from "./Users.entity";

@Index("role_name", ["roleName"], { unique: true })
@Entity("role", { schema: "sisinfo" })
export class Role {
  @Column("int", { primary: true, name: "role_id" })
  roleId: number;

  @Column("varchar", { name: "role_name", unique: true, length: 25 })
  roleName: string;

  @ManyToMany(() => Users, (users) => users.roles)
  users: Users[];
}
