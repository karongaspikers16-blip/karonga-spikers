# Environment Setup Guide for Karonga Spikers

This guide will help you set up the environment variables for your Karonga Spikers Next.js application.

## 🚀 Quick Start

1. **Copy the template file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in your actual values** in the `.env.local` file

3. **Restart your development server** if it's running

## 🔧 Required Environment Variables

### 1. Sanity.io Configuration

**NEXT_PUBLIC_SANITY_PROJECT_ID**
- **Purpose**: Your Sanity project identifier
- **How to get it**: 
  1. Go to [sanity.io/manage](https://sanity.io/manage)
  2. Select your project
  3. Copy the Project ID from the project settings

**NEXT_PUBLIC_SANITY_DATASET**
- **Purpose**: The dataset to use (usually 'production' or 'development')
- **Default**: `production`
- **How to create**: 
  1. In Sanity Studio, go to Settings → Datasets
  2. Create a new dataset or use the default one

**NEXT_PUBLIC_SANITY_API_VERSION**
- **Purpose**: Sanity API version
- **Default**: `2025-08-21`
- **Note**: Should match the version in your Sanity Studio

**SANITY_API_TOKEN** (Optional but recommended)
- **Purpose**: API token for write operations and real-time updates
- **How to get it**:
  1. In Sanity Studio, go to Settings → API
  2. Click "Add API token"
  3. Set permissions (read + write recommended)
  4. Copy the generated token

### 2. NextAuth.js Authentication

**ADMIN_USERNAME** and **ADMIN_PASSWORD**
- **Purpose**: Credentials for the admin panel login
- **Recommendation**: Use strong, unique credentials
- **Example**: 
  ```
  ADMIN_USERNAME=karonga_admin
  ADMIN_PASSWORD=StrongPassword123!
  ```

**NEXTAUTH_SECRET**
- **Purpose**: Encryption secret for NextAuth.js sessions
- **How to generate**:
  ```bash
  # On macOS/Linux
  openssl rand -base64 32
  
  # Or use an online random string generator
  ```

**NEXTAUTH_URL**
- **Purpose**: Base URL for authentication callbacks
- **Development**: `http://localhost:3000`
- **Production**: `https://yourdomain.com`

### 3. Database Configuration (Future Use)

**DATABASE_URL**
- **Purpose**: Database connection string
- **Format**: `postgresql://username:password@localhost:5432/database_name`
- **Note**: Currently using mock database; uncomment when ready

## 🛠️ Development vs Production

### Development (.env.local)
```bash
NODE_ENV=development
NEXTAUTH_URL=http://localhost:3000
DEBUG=karonga-spikers:*
```

### Production
```bash
NODE_ENV=production
NEXTAUTH_URL=https://yourdomain.com
# Remove DEBUG variable or set to empty
```

## 🔒 Security Best Practices

1. **Never commit `.env.local`** to version control
2. **Use different credentials** for development and production
3. **Rotate API tokens** regularly
4. **Use strong passwords** (12+ characters, mix of types)
5. **Keep secrets secret** - don't share in screenshots or logs

## 🧪 Testing Your Configuration

After setting up your environment variables:

1. **Run the environment check script:**
   ```bash
   npm run check-env
   ```
   This will validate that all required variables are set

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Check the console** for any missing environment variable errors

4. **Test Sanity connection** by visiting the gallery page
   - If images load, Sanity is configured correctly

5. **Test admin login** by visiting `/admin/login`
   - Use the credentials you set in the environment variables

## 🚨 Troubleshooting

### Common Issues

**"Missing environment variable" errors**
- Check that `.env.local` exists in the root directory
- Ensure variable names match exactly (case-sensitive)
- Restart the development server after changes

**Sanity images not loading**
- Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct
- Check that you have content in your Sanity dataset
- Ensure the dataset name matches in Sanity Studio and your env

**Admin login not working**
- Double-check `ADMIN_USERNAME` and `ADMIN_PASSWORD` values
- Ensure they match exactly (including case)

### Environment Variable Precedence

Next.js loads environment variables in this order:
1. `.env.local` (local overrides)
2. `.env` (environment-specific)
3. `.env.development` / `.env.production` (environment-specific)
4. System environment variables

## 📋 Environment Checklist

- [ ] Created `.env.local` from `.env.example`
- [ ] Set `NEXT_PUBLIC_SANITY_PROJECT_ID`
- [ ] Set `NEXT_PUBLIC_SANITY_DATASET`
- [ ] Set `NEXT_PUBLIC_SANITY_API_VERSION`
- [ ] Set `SANITY_API_TOKEN` (optional)
- [ ] Set `ADMIN_USERNAME` and `ADMIN_PASSWORD`
- [ ] Set `NEXTAUTH_SECRET`
- [ ] Set `NEXTAUTH_URL`
- [ ] Verified `.env.local` is in `.gitignore`
- [ ] Tested Sanity connection
- [ ] Tested admin login

## 📞 Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify all environment variables are set correctly
3. Ensure Sanity project and dataset exist
4. Check that content is published in Sanity Studio

For Sanity-specific issues, refer to the [Sanity documentation](https://www.sanity.io/docs).
