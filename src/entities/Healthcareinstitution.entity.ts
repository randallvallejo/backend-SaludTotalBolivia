import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Appointments } from "./Appointments.entity";
import { Doctorinstitution } from "./Doctorinstitution.entity";
import { Structureservicetype } from "./Structureservicetype.entity";
import { Address } from "./Address.entity";
import { Users } from "./Users.entity";

@Index("HealthcareInstitution_index_8", ["institutionName"], {})
@Index("structure_service_id", ["structureServiceId"], {})
@Entity("healthcareinstitution", { schema: "sisinfo" })
export class Healthcareinstitution {
  @Column("char", { primary: true, name: "institution_uuid", length: 36 })
  institutionUuid: string;

  @Column("int", { name: "structure_service_id" })
  structureServiceId: number;

  @Column("varchar", { name: "institution_name", length: 40 })
  institutionName: string;

  @Column("date", { name: "foundation_date" })
  foundationDate: string;

  @OneToMany(() => Appointments, (appointments) => appointments.institutionUu)
  appointments: Appointments[];

  @OneToMany(
    () => Doctorinstitution,
    (doctorinstitution) => doctorinstitution.institutionUu
  )
  doctorinstitutions: Doctorinstitution[];

  @ManyToOne(
    () => Structureservicetype,
    (structureservicetype) => structureservicetype.healthcareinstitutions,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    {
      name: "structure_service_id",
      referencedColumnName: "structureServiceId",
    },
  ])
  structureService: Structureservicetype;

  @ManyToMany(() => Address, (address) => address.healthcareinstitutions)
  @JoinTable({
    name: "institutionaddressing",
    joinColumns: [
      { name: "institution_uuid", referencedColumnName: "institutionUuid" },
    ],
    inverseJoinColumns: [
      { name: "address_id", referencedColumnName: "addressId" },
    ],
    schema: "sisinfo",
  })
  addresses: Address[];

  @ManyToMany(() => Users, (users) => users.healthcareinstitutions)
  @JoinTable({
    name: "institutionadmin",
    joinColumns: [
      { name: "institution_uuid", referencedColumnName: "institutionUuid" },
    ],
    inverseJoinColumns: [
      { name: "user_uuid", referencedColumnName: "userUuid" },
    ],
    schema: "sisinfo",
  })
  users: Users[];
}
