import { Column, Entity, Index, OneToMany } from "typeorm";
import { Medicalhistoryaccessrequest } from "./Medicalhistoryaccessrequest.entity";

@Index("type_name", ["typeName"], { unique: true })
@Entity("requesttype", { schema: "sisinfo" })
export class Requesttype {
  @Column("int", { primary: true, name: "request_type_id" })
  requestTypeId: number;

  @Column("varchar", { name: "type_name", unique: true, length: 50 })
  typeName: string;

  @Column("varchar", { name: "description", nullable: true, length: 255 })
  description: string | null;

  @OneToMany(
    () => Medicalhistoryaccessrequest,
    (medicalhistoryaccessrequest) => medicalhistoryaccessrequest.requestType
  )
  medicalhistoryaccessrequests: Medicalhistoryaccessrequest[];
}
