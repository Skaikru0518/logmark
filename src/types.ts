export type LogLevel = 'info' | 'warn' | 'error' | 'debug';

export interface Logmark {
  info: (message: string | object) => void;
  warn: (message: string | object) => void;
  error: (message: string | object) => void;
  debug: (message: string | object) => void;
}

export interface LogmarkOptions {
  enableColors?: boolean;
  timeFormat?: 'short' | 'full';
  debugInProduction?: boolean;
}
