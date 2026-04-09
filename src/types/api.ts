// API response and request types

import type { StreamInfo } from './domain';

export interface StreamApiResponse extends StreamInfo {
  // Add any additional API-specific fields here
}

// Add other API types as needed
export interface ApiError {
  message: string;
  code?: string;
  statusCode?: number;
}
