import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type AssetWhereInput = {
  id?: StringFilter;
  brand?: StringNullableFilter;
  technicalMetadata?: JsonFilter;
  name?: StringNullableFilter;
  user?: UserListRelationFilter;
};
