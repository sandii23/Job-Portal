# MERN Job Portal - Setup Guide

## Cloudinary Configuration

### To enable profile photo uploads and company logo uploads, you need to configure Cloudinary:

1. **Create a Cloudinary Account:**
   - Go to https://cloudinary.com/
   - Sign up for a free account
   - Verify your email

2. **Get Your Cloudinary Credentials:**
   - Log in to your Cloudinary Dashboard
   - Go to **Settings** (gear icon)
   - Copy the following:
     - Cloud Name
     - API Key
     - API Secret

3. **Update the .env file:**
   - Open `backend/.env`
   - Fill in your Cloudinary credentials:
     ```
     CLOUD_NAME=your_cloudinary_cloud_name
     API_KEY=your_cloudinary_api_key
     API_SECRET=your_cloudinary_api_secret
     ```

4. **Restart the Backend:**
   - Stop the running backend server (Ctrl+C)
   - Run: `npm run dev`

### Features with Cloudinary:
- ✅ User profile photo uploads during signup
- ✅ Company logo uploads
- ✅ Resume/file uploads for job applications

### Fallback Behavior:
- If Cloudinary is not configured, users can still sign up and use the app
- Avatars will show user initials instead of photos
- Image uploads will be silently skipped without breaking functionality

### Testing:
1. Sign up with a profile photo - it should upload to Cloudinary
2. Create a company with a logo - it should display in the companies table
3. Update profile with a resume - it should store the Cloudinary URL

