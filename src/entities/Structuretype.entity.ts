import { Column, Entity, Index, OneToMany } from "typeorm";
import { Structureservicetype } from "./Structureservicetype.entity";

@Index("structure_type_name", ["structureTypeName"], { unique: true })
@Entity("structuretype", { schema: "sisinfo" })
export class Structuretype {
  @Column("int", { primary: true, name: "structure_type_id" })
  structureTypeId: number;

  @Column("varchar", { name: "structure_type_name", unique: true, length: 15 })
  structureTypeName: string;

  @OneToMany(
    () => Structureservicetype,
    (structureservicetype) => structureservicetype.structureType
  )
  structureservicetypes: Structureservicetype[];
}
