import { ReactFlowJsonObject, XYPosition } from "reactflow";
import { APIClassType } from "../api/index";

export type FlowType = {
  name: string;
  id: string;
  data: ReactFlowJsonObject | null;
  description: string;
  style?: FlowStyleType;
  isNode?: boolean;
};
export type NodeType = {
  id: string;
  type?: string;
  position: XYPosition;
  data: NodeDataType;
};

export type NodeDataType = {
  type: string;
  node?: APIClassType;
  id: string;
};
// FlowStyleType is the type of the style object that is used to style the
// Flow card with an emoji and a color.
export type FlowStyleType = {
  emoji: string;
  color: string;
  flow_id: string;
};

export type TweaksType = Array<
  {
    [key: string]: {
      output_key?: string;
    };
  } & FlowStyleType
>;
