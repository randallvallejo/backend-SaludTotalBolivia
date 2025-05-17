import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Address } from "./Address.entity";
import { Province } from "./Province.entity";

@Index("Street_index_10", ["provinceId", "streetName"], {})
@Entity("street", { schema: "sisinfo" })
export class Street {
  @PrimaryGeneratedColumn({ type: "int", name: "street_id" })
  streetId: number;

  @Column("int", { name: "province_id" })
  provinceId: number;

  @Column("varchar", { name: "street_name", length: 55 })
  streetName: string;

  @OneToMany(() => Address, (address) => address.street)
  addresses: Address[];

  @ManyToOne(() => Province, (province) => province.streets, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "province_id", referencedColumnName: "provinceId" }])
  province: Province;
}
