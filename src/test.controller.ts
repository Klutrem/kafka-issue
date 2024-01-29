import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { KafkaMessage } from "kafkajs";

@Controller()
export default class TestController {

  @MessagePattern("test1")
  ping1(@Payload() message : KafkaMessage) {
    console.log("11111")
    return new Promise((res) => setTimeout(() => res("promise 1000"), 1000))
  }

  @MessagePattern("test2")
  ping2(@Payload() message : KafkaMessage) {
    console.log("222")
    return new Promise((res) => setTimeout(() => res("promise 5000"), 5000))
  }
}

function getTimeDifference(time1:Date, time2:Date) {
  const diffInMs = time2.getTime() - time1.getTime();
  return diffInMs / 1000;
}