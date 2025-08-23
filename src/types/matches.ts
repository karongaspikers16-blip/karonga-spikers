export interface SanityMatch {
  _id: string;
  _type: 'match';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  opponent: string;
  date: string;
  location: string;
  score?: string;
  isHome?: boolean;
  tournamentName?: string;
  status?: 'upcoming' | 'completed' | 'postponed' | 'cancelled';
  result?: 'win' | 'loss' | 'draw';
  homeScore?: number;
  awayScore?: number;
  sets?: Array<{
    setNumber: number;
    homeScore: number;
    awayScore: number;
  }>;
  matchReport?: string;
  highlights?: string[];
  attendance?: number;
  venue?: string;
  competition?: string;
  round?: string;
}

export interface MatchWithFormattedData extends SanityMatch {
  formattedDate: string;
  formattedTime: string;
  isPast: boolean;
  scoreDisplay: string;
  resultType: 'win' | 'loss' | 'draw' | 'upcoming';
}
