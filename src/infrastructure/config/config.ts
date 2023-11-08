import { LogLevel } from "@nestjs/common";
import { Transport } from "@nestjs/microservices";
import * as dotenv from "dotenv";
import { readFileSync } from "fs";
import { KAFKA_CLIENT } from "../../domain/services/core/kafka.service";
import Config from "./config.interface";

dotenv.config();

/**
 * Package data
 */
const { name: appName } = JSON.parse(readFileSync("package.json", { encoding: "utf-8" }));

/**
 * Default config
 */
const config: Config = {
  appName,
  isProd: process.env.NODE_ENV === "production",
  microserviceServerSettings: {
    transport: Transport.KAFKA,
    options: {
      consumer: {
        groupId: `${appName}-server_consumer`,
        retry: {
          restartOnFailure: (err) => {
            console.error(err);
            throw err;
          },
        },
      },
      client: {
        brokers: [`${process.env.KAFKA_HOST || "localhost"}:${process.env.KAFKA_PORT || "9092"}`],
      },
    },
  },
  microserviceClientSettings: {
    name: KAFKA_CLIENT,
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [`${process.env.KAFKA_HOST || "localhost"}:${process.env.KAFKA_PORT || "9092"}`],
        clientId: `${appName}`,
      },
      consumer: {
        groupId: `${appName}`,
        retry: {
          restartOnFailure: (err) => {
            console.error(err);
            throw err;
          },
        },
      },
    },
  },
  logLevel: getLogLevelConfig(),
};
export default config;

function getLogLevelConfig(): LogLevel[] {
  const levels: LogLevel[] = ["log", "error", "warn", "debug", "verbose"];
  const levelIndex = levels.indexOf(process.env.LOG_LEVEL as LogLevel);
  return levelIndex > -1 ? levels.slice(0, levelIndex + 1) : levels.slice(0, levels.length);
}
