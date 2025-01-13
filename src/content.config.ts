import { defineCollection, z } from "astro:content";

// define a collection for about a person on the team for this psychiatric clinic website
const team = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      credentials: z.array(z.string()),
      title: z.string(),
      education: z.array(z.string()),
      specialties: z.array(z.string()),
      bio: z.string(),
      approach: z.string(),
      image: image(),
    }),
});

export const collections = {
  team,
};
