import { prerender, query } from "$app/server";
import { sheet_repository } from "./sheets/repository";

export const prerendered_sheet_data = prerender(sheet_repository.get_sheet_data);
export const query_sheet_data = query(sheet_repository.get_sheet_data);

