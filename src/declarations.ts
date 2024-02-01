/** @format */

export const mapNodes = {
  root: 'root',
} as const;

export const imgNode = {
  imgUrl: '',
  title: '',
  description: '',
} as const;

export type NodeID = (typeof mapNodes)[keyof typeof mapNodes];
