import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Users } from "./Users.entity";
import { Address } from "./Address.entity";

@Index("UserAddressing_index_12", ["userUuid", "addressId", "actualDate"], {
  unique: true,
})
@Index("address_id", ["addressId"], {})
@Entity("useraddressing", { schema: "sisinfo" })
export class Useraddressing {
  @Column("char", { primary: true, name: "user_uuid", length: 36 })
  userUuid: string;

  @Column("int", { primary: true, name: "address_id" })
  addressId: number;

  @Column("date", { primary: true, name: "actual_date" })
  actualDate: string;

  @ManyToOne(() => Users, (users) => users.useraddressings, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_uuid", referencedColumnName: "userUuid" }])
  userUu: Users;

  @ManyToOne(() => Address, (address) => address.useraddressings, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "address_id", referencedColumnName: "addressId" }])
  address: Address;
}
