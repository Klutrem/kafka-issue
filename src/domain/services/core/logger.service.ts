/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Inject,
  Injectable,
  Logger,
  LoggerService as NestLoggerService,
  Scope,
} from "@nestjs/common";
import { INQUIRER } from "@nestjs/core";
import { formatWithOptions } from "util";

@Injectable({ scope: Scope.TRANSIENT })
export default class LoggerService implements NestLoggerService {
  private readonly _logger: Logger;

  /**
   * @param parentClass class that injects this logger service
   */
  constructor(@Inject(INQUIRER) parentClass: object) {
    this._logger = new Logger(parentClass?.constructor?.name, { timestamp: true });
  }

  /**
   * Logs the message
   * @param message The message
   * @param args The arguments
   */
  public log(message: string, ...args: any[]) {
    this._logger.log(this.format(message, args));
  }

  /**
   * Logs the error message
   * @param message The message
   * @param error The error
   * @param args The arguments
   */
  public error(message: string, error?: string | Error, ...args: any[]) {
    this._logger.error(this.format(message, args), error instanceof Error ? error.stack : error);
  }

  /**
   * Logs the warning message
   * @param message The message
   * @param args The arguments
   */
  public warn(message: string, ...args: any[]) {
    this._logger.warn(this.format(message, args));
  }

  /**
   * Logs the debug message
   * @param message Message contents
   * @param args Arguments
   */
  public debug(message: string, ...args: any[]) {
    this._logger.debug(this.format(message, args));
  }

  /**
   * Logs the verbose message
   * @param message Message contents
   * @param args Arguments
   */
  public verbose(message: string, ...args: any[]) {
    this._logger.verbose(this.format(message, args));
  }

  /**
   * Formats the message
   * @param message Message contents
   * @param args Arguments
   * @returns The formatted message
   */
  private format(message: string, args?: string[]) {
    if (!args.length) return message;

    return formatWithOptions({ colors: true, depth: 5 }, message, ...args);
  }
}
