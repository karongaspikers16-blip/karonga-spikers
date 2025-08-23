// Export all types from individual files
export * from './gallery';
export * from './news';
export * from './sponsors';
export * from './team';
export * from './matches';

// Common utility types
export interface SanityBase {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface ApiResponse<T> {
  data: T;
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface FilterParams {
  search?: string;
  category?: string;
  status?: string;
  featured?: boolean;
  dateRange?: {
    start: string;
    end: string;
  };
}
