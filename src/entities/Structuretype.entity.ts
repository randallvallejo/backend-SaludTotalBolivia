import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Structureservicetype } from "./Structureservicetype.entity";

@Index("IDX_92d2db4f061813e549e7038fc0", ["structureTypeName"], {
  unique: true,
})
@Index("structure_type_name", ["structureTypeName"], { unique: true })
@Entity("structuretype", { schema: "sisinfo" })
export class Structuretype {
  @PrimaryGeneratedColumn({ type: "int", name: "structure_type_id" })
  structureTypeId: number;

  @Column("varchar", { name: "structure_type_name", unique: true, length: 15 })
  structureTypeName: string;

  @OneToMany(
    () => Structureservicetype,
    (structureservicetype) => structureservicetype.structureType
  )
  structureservicetypes: Structureservicetype[];
}
