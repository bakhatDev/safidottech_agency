// Quick debug script to check what's being fetched from Sanity
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '3f8l660q',
  dataset: 'production',
  apiVersion: '2023-05-03',
  token: 'skSVrhJXuekAZuc46l0QGDlbV4RxevXZzy8hK6IwmWsjWDy0bE6jSx3M3qJgEm3H3zho2dysyX8MFe0XI8G4oKGTDBuucn4eSSm7Spv3aIqoKHQnf8TDPjcI8ciho9mftDSepeRLnak1E7br6Beo9a6BfRbxV1K4cOwcaPLtos9EpOgm5ime',
  useCdn: false,
});

async function debugBlogPosts() {
  try {
    console.log('Fetching all blog posts from Sanity...\n');

    // Check 1: Count total posts
    const countQuery = '*[_type == "post"]';
    const allDocs = await client.fetch(countQuery);
    console.log(`Total posts found: ${allDocs.length}`);

    if (allDocs.length > 0) {
      console.log('\nPost details:');
      allDocs.forEach((doc, i) => {
        console.log(`\n${i + 1}. "${doc.title}"`);
        console.log(`   - ID: ${doc._id}`);
        console.log(`   - Status: ${doc._rev ? 'Published' : 'Draft'}`);
        console.log(`   - Slug: ${doc.slug?.current || 'MISSING'}`);
        console.log(`   - Published At: ${doc.publishedAt || 'NOT SET'}`);
        console.log(`   - Has Author: ${doc.author ? 'Yes' : 'No'}`);
        console.log(`   - Has Image: ${doc.mainImage ? 'Yes' : 'No'}`);
      });
    } else {
      console.log('\nNo blog posts found in Sanity.');
      console.log('Make sure:');
      console.log('1. You have created a document with _type="post"');
      console.log('2. The document is published (not draft)');
      console.log('3. All required fields are filled in');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

debugBlogPosts();
