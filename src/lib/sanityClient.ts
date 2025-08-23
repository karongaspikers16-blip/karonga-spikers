// src/lib/sanityClient.ts
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Setup client
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-08-22',
  useCdn: true,
})

// Setup image builder
const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source: any) => builder.image(source)
