/** @format */

export const mapNodes = {
  root: "root",
  inputImg: "inputImg",
  inputTitle: "inputTitle",
  inputDescription: "inputDescription",
  addBtn: "addBtn",
  bottomContainer: "bottom-container",
} as const;

export type NodeID = (typeof mapNodes)[keyof typeof mapNodes];
