---
title: "Building on the Edge"
description: "Why I'm betting on edge computing for the next generation of web applications, and what it means for developers like us."
date: 2026-01-15
tags: ["edge", "cloudflare", "architecture"]
---

The web is shifting. Not in the way frameworks rise and fall — that's just noise. The real shift is where code runs.

## Why the Edge Matters

For years, we've been building apps that run in a single region. Your server sits in `us-east-1`, and a user in Tokyo waits an extra 200ms for every request. Edge computing changes that equation entirely.

With platforms like Cloudflare Workers, your code runs in 300+ locations worldwide. The user in Tokyo gets the same latency as the user in Virginia. That's not an incremental improvement — it's a fundamentally different architecture.

## What Changes

When you move to the edge, some things get simpler and some get harder:

- **Routing and rendering** become trivially fast
- **Data locality** becomes your primary architectural challenge
- **Cold starts** basically disappear (V8 isolates vs containers)
- **Traditional ORMs** don't work — you need edge-native data solutions

## The Stack I'm Using

Right now, I'm building with:

- **Astro** for the content layer
- **Cloudflare Workers** for the compute
- **D1** for edge-native SQL
- **KV** for caching and config

```typescript
// This runs in 300+ locations simultaneously
export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    const data = await env.DB.prepare(
      "SELECT * FROM posts WHERE slug = ?"
    ).bind(url.pathname).first();

    return new Response(JSON.stringify(data));
  }
};
```

## The Future

I think edge computing is going to eat the traditional server model the same way SPAs ate server-rendered pages — and then we'll find the right balance somewhere in between.

The developers who understand edge-native patterns now will have a significant advantage in the next few years. That's why I'm building everything on the edge.
