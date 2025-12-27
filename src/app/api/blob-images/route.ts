import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const prefix = searchParams.get('prefix'); // e.g., "da-hoam_"
  
  try {
    const { blobs } = await list({
      prefix: prefix || undefined,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
    
    return NextResponse.json({ images: blobs });
  } catch (error) {
    console.error('Blob fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}

