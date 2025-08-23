#!/usr/bin/env node

/**
 * Environment variable validation script
 * Run this to check if all required environment variables are set
 */

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' });

const requiredVars = [
  'NEXT_PUBLIC_SANITY_PROJECT_ID',
  'NEXT_PUBLIC_SANITY_DATASET',
  'NEXT_PUBLIC_SANITY_API_VERSION',
  'ADMIN_USERNAME',
  'ADMIN_PASSWORD',
  'NEXTAUTH_SECRET',
  'NEXTAUTH_URL'
];

const optionalVars = [
  'SANITY_API_TOKEN',
  'DATABASE_URL',
  'NODE_ENV'
];

console.log('🔍 Checking environment variables...\n');

let allRequiredSet = true;
let missingVars = [];

// Check required variables
console.log('📋 REQUIRED VARIABLES:');
requiredVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    console.log(`✅ ${varName}=${value.substring(0, 10)}... (set)`);
  } else {
    console.log(`❌ ${varName} (missing)`);
    allRequiredSet = false;
    missingVars.push(varName);
  }
});

console.log('\n📋 OPTIONAL VARIABLES:');
optionalVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    console.log(`✅ ${varName}=${value.substring(0, 10)}... (set)`);
  } else {
    console.log(`⚠️  ${varName} (not set - optional)`);
  }
});

console.log('\n' + '='.repeat(50));

if (allRequiredSet) {
  console.log('🎉 All required environment variables are set!');
  console.log('Your application should run correctly.');
} else {
  console.log('❌ Missing required environment variables:');
  missingVars.forEach(varName => {
    console.log(`   - ${varName}`);
  });
  console.log('\n💡 Please set these variables in your .env.local file');
  console.log('   Refer to ENVIRONMENT_SETUP.md for guidance');
}

console.log('\n📝 Note: This script checks process.env, which may differ');
console.log('   from what Next.js sees during build time.');
console.log('   For production, ensure variables are set in your deployment environment.');
