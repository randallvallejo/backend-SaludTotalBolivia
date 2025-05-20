import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Accessrequeststatus } from "./Accessrequeststatus.entity";
import { Requesttype } from "./Requesttype.entity";

@Index(
  "MedicalHistoryAccessRequest_index_20",
  ["patientUuid", "institutionUuid", "statusId"],
  {}
)
@Index("status_id", ["statusId"], {})
@Index("request_type_id", ["requestTypeId"], {})
@Entity("medicalhistoryaccessrequest", { schema: "sisinfo" })
export class Medicalhistoryaccessrequest {
  @Column("int", { primary: true, name: "request_id" })
  requestId: number;

  @Column("char", { name: "patient_uuid", length: 36 })
  patientUuid: string;

  @Column("int", { name: "medical_history_id" })
  medicalHistoryId: number;

  @Column("char", { name: "institution_uuid", length: 36 })
  institutionUuid: string;

  @Column("int", { name: "request_type_id" })
  requestTypeId: number;

  @Column("int", { name: "status_id" })
  statusId: number;

  @Column("datetime", { name: "request_date" })
  requestDate: Date;

  @Column("datetime", { name: "resolution_date", nullable: true })
  resolutionDate: Date | null;

  @Column("varchar", { name: "notes", nullable: true, length: 255 })
  notes: string | null;

  @ManyToOne(
    () => Accessrequeststatus,
    (accessrequeststatus) => accessrequeststatus.medicalhistoryaccessrequests,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "status_id", referencedColumnName: "statusId" }])
  status: Accessrequeststatus;

  @ManyToOne(
    () => Requesttype,
    (requesttype) => requesttype.medicalhistoryaccessrequests,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "request_type_id", referencedColumnName: "requestTypeId" },
  ])
  requestType: Requesttype;
}
