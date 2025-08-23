import { sanityClient } from './sanity';

// Gallery Queries
export const galleryQuery = `*[_type == "gallery"] | order(_createdAt desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  image,
  category,
  description,
  date,
  location,
  "imageUrl": image.asset->url,
  "imageMetadata": image.asset->metadata,
  "dimensions": image.asset->metadata.dimensions,
  "lqip": image.asset->metadata.lqip
}`;

export const galleryByCategoryQuery = (category: string) => `*[_type == "gallery" && category == $category] | order(_createdAt desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  image,
  category,
  description,
  date,
  location,
  "imageUrl": image.asset->url,
  "imageMetadata": image.asset->metadata,
  "dimensions": image.asset->metadata.dimensions,
  "lqip": image.asset->metadata.lqip
}`;

// News Queries
export const newsQuery = `*[_type == "news"] | order(publishedAt desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  content,
  publishedAt,
  image,
  excerpt,
  author,
  category,
  featured,
  slug,
  tags,
  "imageUrl": image.asset->url,
  "imageMetadata": image.asset->metadata
}`;

export const featuredNewsQuery = `*[_type == "news" && featured == true] | order(publishedAt desc) [0...3] {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  content,
  publishedAt,
  image,
  excerpt,
  author,
  category,
  featured,
  slug,
  tags,
  "imageUrl": image.asset->url,
  "imageMetadata": image.asset->metadata
}`;

export const newsByCategoryQuery = (category: string) => `*[_type == "news" && category == $category] | order(publishedAt desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  content,
  publishedAt,
  image,
  excerpt,
  author,
  category,
  featured,
  slug,
  tags,
  "imageUrl": image.asset->url,
  "imageMetadata": image.asset->metadata
}`;

// Sponsors Queries
export const sponsorsQuery = `*[_type == "sponsor"] | order(tier asc, _createdAt desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name,
  logo,
  website,
  tier,
  description,
  since,
  impact,
  featured,
  category,
  "logoUrl": logo.asset->url,
  "logoMetadata": logo.asset->metadata
}`;

export const sponsorsByTierQuery = (tier: string) => `*[_type == "sponsor" && tier == $tier] | order(_createdAt desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name,
  logo,
  website,
  tier,
  description,
  since,
  impact,
  featured,
  category,
  "logoUrl": logo.asset->url,
  "logoMetadata": logo.asset->metadata
}`;

export const featuredSponsorsQuery = `*[_type == "sponsor" && featured == true] | order(tier asc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name,
  logo,
  website,
  tier,
  description,
  since,
  impact,
  featured,
  category,
  "logoUrl": logo.asset->url,
  "logoMetadata": logo.asset->metadata
}`;

// Team Queries
export const teamQuery = `*[_type == "team"] | order(jersey asc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name,
  role,
  jersey,
  photo,
  bio,
  position,
  height,
  weight,
  birthDate,
  yearsWithTeam,
  isCaptain,
  isActive,
  socialMedia,
  "photoUrl": photo.asset->url,
  "photoMetadata": photo.asset->metadata
}`;

export const activeTeamQuery = `*[_type == "team" && isActive == true] | order(jersey asc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name,
  role,
  jersey,
  photo,
  bio,
  position,
  height,
  weight,
  birthDate,
  yearsWithTeam,
  isCaptain,
  isActive,
  socialMedia,
  "photoUrl": photo.asset->url,
  "photoMetadata": photo.asset->metadata
}`;

export const teamByPositionQuery = (position: string) => `*[_type == "team" && position == $position && isActive == true] | order(jersey asc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name,
  role,
  jersey,
  photo,
  bio,
  position,
  height,
  weight,
  birthDate,
  yearsWithTeam,
  isCaptain,
  isActive,
  socialMedia,
  "photoUrl": photo.asset->url,
  "photoMetadata": photo.asset->metadata
}`;

// Matches Queries
export const matchesQuery = `*[_type == "match"] | order(date desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  opponent,
  date,
  location,
  score,
  isHome,
  tournamentName,
  status,
  result,
  homeScore,
  awayScore,
  sets,
  matchReport,
  highlights,
  attendance,
  venue,
  competition,
  round
}`;

export const upcomingMatchesQuery = `*[_type == "match" && date >= now()] | order(date asc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  opponent,
  date,
  location,
  score,
  isHome,
  tournamentName,
  status,
  result,
  homeScore,
  awayScore,
  sets,
  matchReport,
  highlights,
  attendance,
  venue,
  competition,
  round
}`;

export const pastMatchesQuery = `*[_type == "match" && date < now()] | order(date desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  opponent,
  date,
  location,
  score,
  isHome,
  tournamentName,
  status,
  result,
  homeScore,
  awayScore,
  sets,
  matchReport,
  highlights,
  attendance,
  venue,
  competition,
  round
}`;

export const matchesByTournamentQuery = (tournament: string) => `*[_type == "match" && tournamentName == $tournament] | order(date desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  opponent,
  date,
  location,
  score,
  isHome,
  tournamentName,
  status,
  result,
  homeScore,
  awayScore,
  sets,
  matchReport,
  highlights,
  attendance,
  venue,
  competition,
  round
}`;

// Helper functions for data fetching
export const fetchGalleryItems = async () => {
  return await sanityClient.fetch(galleryQuery);
};

export const fetchNewsArticles = async () => {
  return await sanityClient.fetch(newsQuery);
};

export const fetchSponsors = async () => {
  return await sanityClient.fetch(sponsorsQuery);
};

export const fetchTeamMembers = async () => {
  return await sanityClient.fetch(teamQuery);
};

export const fetchMatches = async () => {
  return await sanityClient.fetch(matchesQuery);
};

export const fetchUpcomingMatches = async () => {
  return await sanityClient.fetch(upcomingMatchesQuery);
};

export const fetchPastMatches = async () => {
  return await sanityClient.fetch(pastMatchesQuery);
};
