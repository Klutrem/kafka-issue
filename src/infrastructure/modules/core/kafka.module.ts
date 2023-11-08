import { Global, Module } from "@nestjs/common";
import { ClientsModule } from "@nestjs/microservices";
import KafkaService from "../../../domain/services/core/kafka.service";
import config from "../../config/config";
import LoggerModule from "./logger.module";

@Global()
@Module({
  imports: [LoggerModule, ClientsModule.register([config.microserviceClientSettings])],
  providers: [KafkaService],
  exports: [KafkaService],
})
export default class KafkaModule {}
