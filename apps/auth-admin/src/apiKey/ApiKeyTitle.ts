import { ApiKey as TApiKey } from "../api/apiKey/ApiKey";

export const APIKEY_TITLE_FIELD = "key";

export const ApiKeyTitle = (record: TApiKey): string => {
  return record.key?.toString() || String(record.id);
};
