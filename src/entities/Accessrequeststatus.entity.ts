import { Column, Entity, Index, OneToMany } from "typeorm";
import { Medicalhistoryaccessrequest } from "./Medicalhistoryaccessrequest.entity";

@Index("status_name", ["statusName"], { unique: true })
@Index("IDX_252ebfef5948df7a0299da5b22", ["statusName"], { unique: true })
@Entity("accessrequeststatus", { schema: "sisinfo" })
export class Accessrequeststatus {
  @Column("int", { primary: true, name: "status_id" })
  statusId: number;

  @Column("varchar", { name: "status_name", unique: true, length: 25 })
  statusName: string;

  @OneToMany(
    () => Medicalhistoryaccessrequest,
    (medicalhistoryaccessrequest) => medicalhistoryaccessrequest.status
  )
  medicalhistoryaccessrequests: Medicalhistoryaccessrequest[];
}
