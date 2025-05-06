import chalk from 'chalk';
import { Logmark, LogmarkOptions } from './types';

const getFormattedDateTime = (format: 'short' | 'full' = 'full'): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return format === 'full'
    ? `${year}-${month}-${day} - ${hours}:${minutes}:${seconds}`
    : `${hours}:${minutes}:${seconds}`;
};

const formatMessages = (...messages: (string | object)[]): string => {
  return messages
    .map((msg) => {
      if (typeof msg === 'object') {
        return JSON.stringify(msg, null, 2);
      }
      return msg;
    })
    .join(' ');
};

export const createLogmark = (options: LogmarkOptions = {}): Logmark => {
  const {
    enableColors = true,
    timeFormat = 'full',
    debugInProduction = false,
  } = options;

  const logmark: Logmark = {
    info: (...messages: (string | object)[]): void => {
      const formattedMessage = formatMessages(...messages);
      console.log(
        `${enableColors ? chalk.green('[INFO]') : '[INFO]'} ${getFormattedDateTime(timeFormat)} - ${formattedMessage}`,
      );
    },

    warn: (...messages: (string | object)[]): void => {
      const formattedMessage = formatMessages(...messages);
      console.warn(
        `${enableColors ? chalk.yellow('[WARN]') : '[WARN]'} ${getFormattedDateTime(timeFormat)} - ${formattedMessage}`,
      );
    },

    error: (...messages: (string | object)[]): void => {
      const formattedMessage = formatMessages(...messages);
      console.error(
        `${enableColors ? chalk.red('[ERROR]') : '[ERROR]'} ${getFormattedDateTime(timeFormat)} - ${formattedMessage}`,
      );
    },

    debug: (...messages: (string | object)[]): void => {
      if (process.env.NODE_ENV !== 'production' || debugInProduction) {
        const formattedMessage = formatMessages(...messages);
        console.debug(
          `${enableColors ? chalk.blue('[DEBUG]') : '[DEBUG]'} ${getFormattedDateTime(timeFormat)} - ${formattedMessage}`,
        );
      }
    },

    success: (...messages: (string | object)[]): void => {
      const formattedMessage = formatMessages(...messages);
      console.log(
        `${enableColors ? chalk.greenBright('[SUCCESS]') : '[SUCCESS]'} ${getFormattedDateTime(timeFormat)} - ${formattedMessage}`,
      );
    },
  };

  return logmark;
};

export const logmark = createLogmark();
