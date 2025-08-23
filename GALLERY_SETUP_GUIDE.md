# Sanity-Powered Gallery Setup Guide

## 🎯 Overview

Your Next.js 15 project now has a fully functional gallery that automatically fetches images from Sanity CMS. The gallery features real-time updates, responsive design, and optimized images.

## 📁 Files Created/Updated

### 1. `src/lib/sanity.ts`
- Unified Sanity client configuration using `@sanity/client`
- GROQ query for fetching gallery items
- TypeScript interfaces for gallery data
- Image URL builder utility

### 2. `src/components/Gallery.tsx`
- React component with client-side data fetching
- Responsive grid layout with Tailwind CSS
- Image optimization with Next.js Image component
- Lightbox functionality for full-size viewing
- Loading states and error handling

### 3. `src/app/gallery/page.tsx`
- Updated gallery page using Sanity-powered component
- Maintains existing UI design from enhanced version
- Real-time update messaging

## 🔧 Setup Instructions

### 1. Environment Variables
Create or update your `.env.local` file with:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-08-21
```

### 2. Add Gallery Content in Sanity Studio
1. Open your Sanity Studio
2. Navigate to the Gallery schema
3. Add gallery items with:
   - Title (string)
   - Image (upload images)

### 3. Test the Gallery
1. Visit `http://localhost:3000/gallery`
2. You should see your gallery images loading from Sanity
3. Test the lightbox functionality by clicking on images

## ⚡ Real-Time Updates

The gallery automatically updates when you:
- Add new images in Sanity Studio
- Update existing gallery items
- Delete gallery items

No need to rebuild or redeploy your Next.js site!

## 🎨 Customization Options

### Modify Grid Layout
Edit the grid classes in `src/components/Gallery.tsx`:
```tsx
// Change from 4 columns to 3 columns
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Add Category Filtering
1. Add a `category` field to your Sanity gallery schema
2. Update the GROQ query to include category filtering
3. Modify the Gallery component to accept category props

### Image Optimization
The current implementation uses:
- LQIP (Low Quality Image Placeholders) for faster loading
- Next.js Image component for automatic optimization
- Responsive sizing with proper `sizes` attribute

## 🐛 Troubleshooting

### No Images Showing
1. Check that environment variables are set correctly
2. Verify you have gallery items in Sanity Studio
3. Check browser console for any fetch errors

### Build Errors
1. Ensure all dependencies are installed: `npm install`
2. Check TypeScript types for any mismatches

### Image Loading Issues
1. Verify Sanity project ID and dataset are correct
2. Check that images are properly uploaded in Sanity

## 📊 Performance Features

- **Client-side Fetching**: No server-side rendering delays
- **Image Optimization**: Automatic WebP conversion and resizing
- **LQIP Placeholders**: Blurry image placeholders during loading
- **CDN Caching**: Sanity's CDN for fast image delivery
- **Responsive Design**: Works on all screen sizes

## 🚀 Next Steps

1. **Add more gallery items** in Sanity Studio
2. **Test real-time updates** by adding images while the site is running
3. **Customize the design** to match your brand
4. **Implement pagination** if you have many images
5. **Add search functionality** for larger galleries

Your gallery is now live and ready to use! 🎉
