import { Global, Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { LoggerInterceptor } from "./logger.interceptor";
import TestController from "./test.controller";

@Global()
@Module({
  controllers: [TestController],
  providers: [ {
    provide: APP_INTERCEPTOR,
    useClass: LoggerInterceptor
  }]
})
export default class AppModule {}
