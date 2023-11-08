import { Module } from "@nestjs/common";
import PlaceController from "../../../../application/place.controller";

@Module({
    controllers: [PlaceController],
  })
export default class PlaceModule {}