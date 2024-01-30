import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { LoggerInterceptor } from "./logger.interceptor";
import TestController from "./test.controller";

@Global()
@Module({
  imports :[ConfigModule.forRoot()],
  controllers: [TestController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor
    }
  ]
})
export default class AppModule {}
