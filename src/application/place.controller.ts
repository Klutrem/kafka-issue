import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { KafkaTopics } from "../domain/enums/kafka-topics.enum";

@Controller()
export default class PlaceController {
@MessagePattern(KafkaTopics.testTopic)
  create(@Payload() message: any) {
    console.log("getting request");
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  }
}