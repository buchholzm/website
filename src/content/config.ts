import { z, defineCollection } from 'astro:content';

const resourcesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  resources: resourcesCollection,
};
