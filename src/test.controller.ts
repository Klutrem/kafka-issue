import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller()
export default class TestController {

  @MessagePattern("test1")
  ping1() {
    const time1 = new Date();
    console.log("got request test1", time1);
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve("pong1");
        const time2 = new Date()
        console.log("responding test1 ", time2);
        console.log(`test1 took ${getTimeDifference(time1, time2)} secs`)
      }, 5000);
    });
  }

  @MessagePattern("test2")
  ping2() {
    const time1 = new Date();
    console.log("got request test2", new Date());
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve("pong2");
        const time2 = new Date()
        console.log("responding test2 ", time2);
        console.log(`test2 took ${getTimeDifference(time1, time2)} secs`)
      }, 5000);
    });
  }
}

function getTimeDifference(time1:Date, time2:Date) {
  const diffInMs = time2.getTime() - time1.getTime();
  return diffInMs / 1000;
}