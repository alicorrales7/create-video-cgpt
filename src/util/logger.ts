import { createLogger, format, transports } from "winston";

export const weatherLogger = createLogger({
  transports: [
    new transports.File({
      dirname: "loggs",
      filename: "weather.log",
      level: "info",
    }),
    new transports.File({
      dirname: "loggs",
      filename: "weather-error.log",
      level: "error",
    })
  ],
  format: format.combine(
    format.timestamp(),
       format.json(),
    format.printf(({ timestamp, level, message, service }) => {
      return `[${timestamp}] ${service} ${level}: ${message}`;
    })
  ),
  defaultMeta: {
    service: "Behavior Logs",
  },
});