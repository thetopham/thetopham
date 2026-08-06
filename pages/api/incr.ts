import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = Redis.fromEnv();

export const config = {
  runtime: "edge",
};

export default async function incr(req: NextRequest): Promise<NextResponse> {
  if (req.method !== "POST") {
    return new NextResponse("use POST", { status: 405 });
  }

  if (req.headers.get("content-type") !== "application/json") {
    return new NextResponse("must be json", { status: 400 });
  }

  const body = await req.json();
  let slug: string | undefined;

  if (body && typeof body === "object" && "slug" in body && typeof body.slug === "string") {
    slug = body.slug;
  }

  if (!slug) {
    return new NextResponse("Slug not found", { status: 400 });
  }

  // NextRequest.ip was removed in Next.js 15. On Vercel, the first
  // x-forwarded-for entry represents the originating client address.
  const forwardedFor = req.headers.get("x-forwarded-for");
  const ip =
    forwardedFor?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    undefined;

  if (ip) {
    // Hash the IP so the raw address is never stored.
    const buf = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(ip),
    );
    const hash = Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    // Deduplicate each visitor/slug pair for 24 hours.
    const isNew = await redis.set(["deduplicate", hash, slug].join(":"), true, {
      nx: true,
      ex: 24 * 60 * 60,
    });

    if (!isNew) {
      return new NextResponse(null, { status: 202 });
    }
  }

  await redis.incr(["pageviews", "projects", slug].join(":"));
  return new NextResponse(null, { status: 202 });
}
