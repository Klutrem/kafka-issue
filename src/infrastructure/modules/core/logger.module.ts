import { Module } from "@nestjs/common";
import LoggerService from "../../../domain/services/core/logger.service";

@Module({
  providers: [LoggerService],
  exports: [LoggerService],
})
export default class LoggerModule {}
