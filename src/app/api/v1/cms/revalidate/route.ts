import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

// Map Sanity document types to cache tags
const tagMap: Record<string, string> = {
  post: 'blog',
  service: 'services',
  project: 'portfolio',
  team: 'team',
  siteConfig: 'config',
};

export async function POST(req: NextRequest) {
  try {
    // Validate webhook secret if it exists in environment
    const secret = process.env.SANITY_REVALIDATE_SECRET;
    if (secret) {
      const headerSecret = req.headers.get('authorization')?.split(' ')[1];
      if (!headerSecret || headerSecret !== secret) {
        return NextResponse.json(
          { revalidated: false, error: 'Invalid webhook secret' },
          { status: 401 }
        );
      }
    }

    // Parse JSON payload
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { revalidated: false, error: 'Malformed JSON payload' },
        { status: 400 }
      );
    }

    const { _type, slug } = body;

    // Validate required fields
    if (!_type || !slug) {
      return NextResponse.json(
        { revalidated: false, error: 'Missing required fields: _type and slug' },
        { status: 400 }
      );
    }

    // Get the corresponding cache tag
    const tag = tagMap[_type];
    if (!tag) {
      return NextResponse.json(
        { revalidated: false, error: `Unknown document type: ${_type}` },
        { status: 400 }
      );
    }

    // Revalidate the cache tag
    revalidateTag(tag, {});

    // Log revalidation event
    console.log(`[CMS Revalidation] Document type: ${_type}, Slug: ${slug}, Tag: ${tag}`);

    return NextResponse.json(
      { revalidated: true, now: Date.now() },
      { status: 200 }
    );
  } catch (error) {
    console.error('[CMS Revalidation Error]', error);
    return NextResponse.json(
      { revalidated: false, error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
