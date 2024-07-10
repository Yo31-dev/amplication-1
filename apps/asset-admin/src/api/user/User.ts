import { JsonValue } from "type-fest";
import { Asset } from "../asset/Asset";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  assets?: Array<Asset>;
};
