import { z } from 'zod';

export const FilmSchema = z.object({
  film_id: z.number(),
  title: z.string(),
  description: z.string(),
  release_year: z.number(),
  language_id: z.number(),
  original_language_id: z.number().nullable(),
  rental_duration: z.number(),
  rental_rate: z.number(),
  length: z.number(),
  replacement_cost: z.number(),
  rating: z.string(),
  last_update: z.string(),
  special_features: z.array(z.string()),
  fulltext: z.string(),
  prueba: z.string().nullable(),
});

export type FilmType = z.infer<typeof FilmSchema>;
