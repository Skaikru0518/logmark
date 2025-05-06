// types.ts
export type LogLevel = 'info' | 'warn' | 'error' | 'debug' | 'success';

export interface Logmark {
  info: (...args: (string | object)[]) => void;
  warn: (...args: (string | object)[]) => void;
  error: (...args: (string | object)[]) => void;
  debug: (...args: (string | object)[]) => void;
  success: (...args: (string | object)[]) => void;
}

export interface LogmarkOptions {
  enableColors?: boolean;
  timeFormat?: 'short' | 'full';
  debugInProduction?: boolean;
}
