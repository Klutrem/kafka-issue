import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import CommonModule from "./infrastructure/modules/core/common.module";
import PlaceModule from "./infrastructure/modules/core/cruds/place.module";

@Global()
@Module({
  imports: [
    CommonModule,
    ConfigModule.forRoot(),
    PlaceModule,
  ],
})
export default class AppModule {}
