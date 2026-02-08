---
title: "D1 batch queries have a 100 statement limit"
description: "Hit this in production — split large inserts into chunks of 100 when using D1 batch()."
date: 2026-01-20
---

Cloudflare D1's `batch()` method silently fails beyond 100 statements. Split your inserts.
