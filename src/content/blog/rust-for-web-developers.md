---
title: "Rust for Web Developers"
description: "Coming from TypeScript, Rust felt alien. Here's what clicked and what I wish someone had told me earlier."
date: 2026-01-28
tags: ["rust", "typescript", "learning"]
---

I've been writing TypeScript for years. Picking up Rust felt like learning to code all over again — in the best and worst ways.

## The Honest Truth

Rust is hard. Not "new framework" hard — genuinely, fundamentally different from what most web developers are used to. The borrow checker will humble you. Lifetimes will confuse you. And you'll wonder why you can't just `clone()` everything.

But here's the thing: every error the compiler throws at you is a bug it caught before your users did.

## What Translates from TypeScript

More than you'd think:

- **Pattern matching** — if you love `switch` exhaustiveness in TS, you'll love Rust's `match`
- **Type system thinking** — Rust's enums are like discriminated unions on steroids
- **Async/await** — the syntax is familiar, even if the runtime is different
- **Iterators** — `.map()`, `.filter()`, `.collect()` feel like home

## What Doesn't

- **No garbage collector** — you manage memory through ownership
- **No null** — `Option<T>` everywhere, which is actually better
- **Compilation times** — get used to waiting
- **The ecosystem** — smaller than Node, but growing fast

## Where Rust Shines for Web

I'm not replacing my TypeScript stack. But Rust is incredible for:

- CLI tools (fast, single binary, no runtime)
- WebAssembly modules (compute-heavy browser work)
- Backend services where performance matters
- Anything that touches systems-level concerns

> The best part about learning Rust isn't Rust itself — it's how it changes the way you think about code in every language.
