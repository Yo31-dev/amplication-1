import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Asset = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  brand: string | null;
  technicalMetadata: JsonValue;
  name: string | null;
  user?: Array<User>;
};
