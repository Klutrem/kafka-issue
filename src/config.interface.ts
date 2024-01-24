import { LogLevel } from "@nestjs/common";
import { MicroserviceOptions } from "@nestjs/microservices";

/**
 * The config interface
 */
export default interface Config {
  /**
   * App name (Crow, Zoo, ...)
   */
  appName: string;

  /**
   * Is this is a production config
   */
  isProd: boolean;
  /**
   * Microservice server connection options
   */
  microserviceServerSettings: MicroserviceOptions;

  logLevel: LogLevel[];
}
