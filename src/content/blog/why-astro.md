---
title: Why I Rebuilt My Blog with Astro
description: After years of React-based blogs, I switched to Astro. Zero JavaScript by default changed everything.
date: "2026-02-05T00:00:00.000Z"
tags:
  - astro
  - web
  - performance
draft: false
---

I've rebuilt this blog more times than I'd like to admit. React Router, Next.js, Remix â I've tried them all. But Astro finally feels like the right tool for a content site.

> Hello

## The Problem with React Blogs

Don't get me wrong â React is fantastic for applications. But for a blog? You're shipping a JavaScript runtime so users can read static text. That's like driving a forklift to the corner store.

Every React blog I built had the same issues:

- Hydration flash on load
- Unnecessarily large bundles
- Complex build pipelines for simple content
- Fighting the framework to do less

## What Astro Gets Right

Astro's philosophy is simple: **ship less JavaScript**. By default, your pages are static HTML with zero client-side JS. You opt into interactivity per-component, only when you need it.

```astro
---
// This runs at build time. Nothing ships to the browser.
const posts = await getCollection("blog");
---

<ul>
  {posts.map(post => <li>{post.data.title}</li>)}
</ul>
```

## Content Collections

The content collections API is exactly what I wanted. Type-safe frontmatter, Zod validation, and MDX support out of the box. No more runtime frontmatter parsing surprises.

## The Result

This blog loads in under 200ms on a 3G connection. There's no JavaScript bundle to parse. No hydration to wait for. Just HTML and CSS, delivered from the edge.

Sometimes the best technology choice is the one that does less asdf
