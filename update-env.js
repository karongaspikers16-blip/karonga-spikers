const fs = require('fs');
const path = require('path');

// Read the current .env.local file
const envPath = path.join(__dirname, '.env.local');
let envContent = '';

try {
  envContent = fs.readFileSync(envPath, 'utf8');
} catch (error) {
  console.log('.env.local file not found, creating a new one');
}

// Update the project ID to the correct value
const updatedContent = envContent.replace(
  /NEXT_PUBLIC_SANITY_PROJECT_ID=.*/,
  'NEXT_PUBLIC_SANITY_PROJECT_ID=t8771bvm'
);

// Write the updated content back
fs.writeFileSync(envPath, updatedContent);
console.log('✅ Updated .env.local with correct project ID: t8771bvm');
console.log('Please restart your development server if it\'s running');
