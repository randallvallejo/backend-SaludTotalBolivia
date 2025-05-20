import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Users } from "./Users.entity";
import { Typeofsupervision } from "./Typeofsupervision.entity";

@Index("user_uuid", ["userUuid"], {})
@Index("relationship_type_id", ["relationshipTypeId"], {})
@Entity("userparentalsupervisor", { schema: "sisinfo" })
export class Userparentalsupervisor {
  @Column("char", { primary: true, name: "supervisor_uuid", length: 36 })
  supervisorUuid: string;

  @Column("char", { primary: true, name: "user_uuid", length: 36 })
  userUuid: string;

  @Column("int", { primary: true, name: "relationship_type_id" })
  relationshipTypeId: number;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column("date", { name: "start_date" })
  startDate: string;

  @Column("date", { name: "end_date", nullable: true })
  endDate: string | null;

  @ManyToOne(() => Users, (users) => users.userparentalsupervisors, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_uuid", referencedColumnName: "userUuid" }])
  userUu: Users;

  @ManyToOne(
    () => Typeofsupervision,
    (typeofsupervision) => typeofsupervision.userparentalsupervisors,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    {
      name: "relationship_type_id",
      referencedColumnName: "typeOfSupervisionId",
    },
  ])
  relationshipType: Typeofsupervision;

  @ManyToOne(() => Users, (users) => users.userparentalsupervisors2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "supervisor_uuid", referencedColumnName: "userUuid" }])
  supervisorUu: Users;
}
