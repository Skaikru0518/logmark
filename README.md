# Logmark

**Logmark** is a minimal, professional TypeScript logger for Node.js, providing colored console output and precise timestamps.  
Easily integrate it into your project for clear, readable, and configurable logging.

---

## 🚀 Installation

```bash
npm install @skaikru/logmark@latest
```

---

## 📦 Basic Usage

```typescript
import { logmark } from 'logmark';

logmark.info('Server started');
logmark.warn('Resource usage high');
logmark.error('Connection failed');
logmark.debug('Request payload:', { id: 123, user: 'john' });
logmark.success('User registration completed!');
logmark.success('Registration completed', {
  userId: 123,
  email: 'test@example.com',
});
```

---

## ⚙️ Custom Configuration

You can create a custom logger instance with your preferred settings using `createLogmark`:

```typescript
import { createLogmark } from 'logmark';

const customLogmark = createLogmark({
  enableColors: true, // Enable or disable colored output (default: true)
  timeFormat: 'short', // 'full' for YYYY-MM-DD - HH:mm:ss, 'short' for HH:mm:ss (default: 'full')
  debugInProduction: false, // Show debug logs in production (default: false)
});

customLogmark.info('Custom logger initialized');
customLogmark.success('Custom success message', { custom: true });
```

---

## 🛠️ Options

The `createLogmark` function accepts an options object:

| Option              | Type              | Default  | Description                                                                     |
| ------------------- | ----------------- | -------- | ------------------------------------------------------------------------------- |
| `enableColors`      | boolean           | `true`   | Enable or disable colored output in the console.                                |
| `timeFormat`        | 'full' \| 'short' | `'full'` | Choose between full (`YYYY-MM-DD - HH:mm:ss`) or short (`HH:mm:ss`) timestamps. |
| `debugInProduction` | boolean           | `false`  | If `true`, debug logs will also appear when `NODE_ENV` is `'production'`.       |

---

## 📝 Log Levels

- `info(...messages: string | object)`  
  Informational messages (green).

- `warn(...messages: string | object)`  
  Warnings (yellow).

- `error(...messages: string | object)`  
  Errors (red).

- `debug(...messages: string | object)`  
  Debugging information (blue, hidden in production by default).

- `success(...messages: string | object)`  
  Success messages (bright green).

You can log both strings and objects, and pass multiple parameters. Objects will be pretty-printed as JSON.

---

## 🎯 Features

- 🎨 **Colored output** (configurable)
- ⏰ **Automatic timestamps** (full or short format)
- 📝 **Multiple log levels**: info, warn, error, debug, success
- 🟢 **Success messages** (bright green)
- 🔍 **Debug messages** (configurable for production)
- 💪 **Full TypeScript support**
- 🎯 **Object logging** with pretty-print
- ➕ **Multiple arguments** support for all log levels

---

## 🧑‍💻 Example

```typescript
import { logmark, createLogmark } from 'logmark';

logmark.info('Default logger');
logmark.error({ error: 'Something went wrong', code: 500 });
logmark.success('Everything went fine!', { status: 'ok' });

const logger = createLogmark({ enableColors: false, timeFormat: 'short' });
logger.warn('Colors are disabled, short time format');
logger.success('Short format, no colors', { id: 42 });
```

---

## 📄 License

MIT

---

## 🤝 Contributing

Pull requests and issues are welcome!  
For major changes, please open an issue first to discuss what you would like to change.

---

## 📬 Contact

For questions or suggestions, open an issue on [GitHub](https://github.com/Skaikru0518/logmark/issues).
