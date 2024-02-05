/** @format */

export const mapNodes = {
  root: "root",
  inputImg: "inputImg",
  inputTitle: "inputTitle",
  inputDescription: "inputDescription",
  addBtn: "addBtn",
  bottomContainer: "bottom-container",
  prefBtn: "prefBtn",
  form:"form",
  
} as const;

export type NodeID = (typeof mapNodes)[keyof typeof mapNodes];

export type carta = {
  image: string
  title: string
  description: string
  id:number
  preferiti: boolean

}