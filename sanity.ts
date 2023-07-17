import {createClient} from '@sanity/client';
import createImageBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

export const client = createClient({
  projectId: 'rqa6cu61',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-07-13'
});

const imageBuilder = createImageBuilder({
  projectId: 'rqa6cu61',
  dataset: 'production',
});

export const urlFor = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
