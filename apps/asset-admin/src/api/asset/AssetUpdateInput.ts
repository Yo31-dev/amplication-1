import { InputJsonValue } from "../../types";
import { UserUpdateManyWithoutAssetsInput } from "./UserUpdateManyWithoutAssetsInput";

export type AssetUpdateInput = {
  brand?: string | null;
  technicalMetadata?: InputJsonValue;
  name?: string | null;
  user?: UserUpdateManyWithoutAssetsInput;
};
