import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import TestController from "./test.controller";

@Global()
@Module({
  imports :[ConfigModule.forRoot()],
  controllers: [TestController]
})
export default class AppModule {}
