import { Global, Module } from "@nestjs/common";
import KafkaModule from "./kafka.module";
import LoggerModule from "./logger.module";


@Global()
@Module({
  imports: [KafkaModule, LoggerModule],
  providers: [],
  exports: [KafkaModule, LoggerModule],
})
export default class CommonModule {}
