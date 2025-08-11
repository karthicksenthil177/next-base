import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

if (!projectId) {
  // In real apps you might throw; here we allow client code to handle undefined
  // but we still export a disabled client to avoid crashes on import.
}

export const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : undefined;