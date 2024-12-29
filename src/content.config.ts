import { defineCollection, z } from "astro:content";

// define a collection for about a person on the team for this psychiatric clinic website
const team = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    credentials: z.string(),
    title: z.string(),
    education: z.string(),
    experience: z.string(),
    specialties: z.array(z.string()),
    bio: z.string(),
    approach: z.string(),
  }),
});

export const collections = {
  team,
};
