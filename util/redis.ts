import { Redis } from "@upstash/redis";

let client: Redis | null | undefined;

export function getRedisClient(): Redis | null {
  if (client !== undefined) {
    return client;
  }

  const url = typeof process !== "undefined" ? process.env.UPSTASH_REDIS_REST_URL : undefined;
  const token = typeof process !== "undefined" ? process.env.UPSTASH_REDIS_REST_TOKEN : undefined;

  if (!url || !token) {
    client = null;
    return client;
  }

  try {
    client = new Redis({ url, token });
  } catch (error) {
    console.error("Failed to create Redis client", error);
    client = null;
  }

  return client;
}
