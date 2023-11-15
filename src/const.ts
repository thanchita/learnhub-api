export const getAuthToken = (authorizationHeader: string) =>
  authorizationHeader.replace("Bearer ", "").trim();

export const BLACKLIST_REDIS_KEY_PREFIX = "bl";
export const BLACKLIST_REDIS_VALUE = "1";
