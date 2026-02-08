---
title: "Rust lifetime elision rules"
description: "Three rules that let you skip writing lifetimes most of the time."
date: 2026-01-10
---

The compiler infers lifetimes with three rules: each parameter gets its own, if there's one input lifetime it applies to all outputs, and `&self` lifetime applies to all outputs on methods.
