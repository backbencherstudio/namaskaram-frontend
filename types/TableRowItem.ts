
import { TableItem } from "@/components/reusable/Features/reuseable-table";
import { StaticImageData } from "next/image";

export interface TableRowItem extends TableItem {
  date?:string,
  type:string,
  amount?:number,
  token?:string,
  title?:string,
  tx?:string,
  link?:string,
}