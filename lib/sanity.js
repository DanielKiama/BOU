import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'jk7t5yxo',
  dataset: 'production',
  token: '', // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});

export default client;