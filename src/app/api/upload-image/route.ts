import { put, list } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

// This API route helps you upload images to Vercel Blob
// Use this during development to upload your project images

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Upload to Vercel Blob under images/ folder
    const blob = await put(`images/${file.name}`, file, {
      access: 'public',
      addRandomSuffix: false, // Keep original filename
    });

    return NextResponse.json({
      success: true,
      url: blob.url,
      pathname: blob.pathname,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    );
  }
}

// GET endpoint to list all images
export async function GET() {
  try {
    const { blobs } = await list({
      prefix: 'images/',
    });

    return NextResponse.json({
      images: blobs.map(blob => ({
        url: blob.url,
        pathname: blob.pathname,
        size: blob.size,
        uploadedAt: blob.uploadedAt,
      })),
    });
  } catch (error) {
    console.error('List error:', error);
    return NextResponse.json(
      { error: 'Failed to list images' },
      { status: 500 }
    );
  }
}

export const runtime = 'nodejs'; // Use Node.js runtime for file uploads
