import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  brand?: SortOrder;
  technicalMetadata?: SortOrder;
  name?: SortOrder;
};
