import { InputJsonValue } from "../../types";
import { UserCreateNestedManyWithoutAssetsInput } from "./UserCreateNestedManyWithoutAssetsInput";

export type AssetCreateInput = {
  brand?: string | null;
  technicalMetadata?: InputJsonValue;
  name?: string | null;
  user?: UserCreateNestedManyWithoutAssetsInput;
};
