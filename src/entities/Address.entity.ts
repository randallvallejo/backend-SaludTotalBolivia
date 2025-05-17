import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Street } from "./Street.entity";
import { Healthcareinstitution } from "./Healthcareinstitution.entity";
import { Useraddressing } from "./Useraddressing.entity";

@Index("Address_index_11", ["streetId"], {})
@Entity("address", { schema: "sisinfo" })
export class Address {
  @PrimaryGeneratedColumn({ type: "int", name: "address_id" })
  addressId: number;

  @Column("int", { name: "street_id" })
  streetId: number;

  @Column("varchar", { name: "details", nullable: true, length: 35 })
  details: string | null;

  @ManyToOne(() => Street, (street) => street.addresses, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "street_id", referencedColumnName: "streetId" }])
  street: Street;

  @ManyToMany(
    () => Healthcareinstitution,
    (healthcareinstitution) => healthcareinstitution.addresses
  )
  @JoinTable({
    name: "institutionaddressing",
    joinColumns: [{ name: "address_id", referencedColumnName: "addressId" }],
    inverseJoinColumns: [
      { name: "institution_uuid", referencedColumnName: "institutionUuid" },
    ],
    schema: "sisinfo",
  })
  healthcareinstitutions: Healthcareinstitution[];

  @OneToMany(() => Useraddressing, (useraddressing) => useraddressing.address)
  useraddressings: Useraddressing[];
}
