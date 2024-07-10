import { InputJsonValue } from "../../types";
import { AssetUpdateManyWithoutUsersInput } from "./AssetUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  assets?: AssetUpdateManyWithoutUsersInput;
};
