import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = true;

export const GET: APIRoute = async () => {
  const blog = await getCollection("blog");
  const notes = await getCollection("notes");
  const projects = await getCollection("projects");

  const index = [
    ...blog
      .filter((p) => !p.data.draft)
      .map((post) => ({
        type: "blog" as const,
        title: post.data.title,
        description: post.data.description,
        tags: post.data.tags,
        slug: `/blog/${post.id}`,
        date: post.data.date.toISOString(),
        body: post.body ?? "",
      })),
    ...notes.map((note) => ({
      type: "note" as const,
      title: note.data.title,
      description: note.data.description ?? "",
      tags: [] as string[],
      slug: "/notes",
      date: note.data.date.toISOString(),
      body: note.body ?? "",
    })),
    ...projects.map((project) => ({
      type: "project" as const,
      title: project.data.title,
      description: project.data.description,
      tags: project.data.tags,
      slug: `/projects/${project.id}`,
      date: "",
      body: project.body ?? "",
    })),
  ];

  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json" },
  });
};
