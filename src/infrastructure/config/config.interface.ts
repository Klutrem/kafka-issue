import { LogLevel } from "@nestjs/common";
import { ClientProviderOptions, MicroserviceOptions } from "@nestjs/microservices";

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
  /**
   * Microservice client connection options
   */
  microserviceClientSettings: ClientProviderOptions;

  logLevel: LogLevel[];
}
