import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions } from "@nestjs/microservices";
import AppModule from "./app.module";
import config from "./config";

const logger = new Logger("BootstrapApp");

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    config.microserviceServerSettings,
  );

  await app.listen();

  logger.log("Microservice is listening");
}

bootstrap();
