import { InputJsonValue } from "../../types";
import { AssetCreateNestedManyWithoutUsersInput } from "./AssetCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  assets?: AssetCreateNestedManyWithoutUsersInput;
};
