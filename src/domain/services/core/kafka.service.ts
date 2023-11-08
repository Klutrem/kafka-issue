import { Inject, Injectable, OnModuleInit, Optional } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { OutputTopics } from "../../enums/kafka-topics.enum";
import LoggerService from "./logger.service";

export const KAFKA_CLIENT = "KAFKA_CLIENT";

const topicsList: string[] = Object.values(OutputTopics);

@Injectable()
export default class KafkaService implements OnModuleInit {
  constructor(
    @Inject(KAFKA_CLIENT) private readonly _client: ClientKafka,
    @Optional() private readonly _logger: LoggerService,
  ) {}

  async onModuleInit() {
    topicsList.forEach((topic) => this.addTopic(topic));
    await this._client.connect();
  }

  /**
   * Adds new topics
   * @param topic Topic to add
   */
  addTopic(topic: string) {
    this._logger.verbose(`Subscribing to topic ${topic}.reply`);
    this._client.subscribeToResponseOf(topic);
  }

  /**
   * Sends a message to the topic
   * @param topic Kafka topic
   * @param data Message data
   * @returns Response
   */
  send<TResult = unknown>(topic: string, data: unknown): Promise<TResult> {
    this._logger.debug(`Message sent to '${topic}' with data:`);
    this._logger.debug(JSON.stringify(data));
    return this._client
      .send(topic, JSON.stringify(data))
      .toPromise()
      .then((response) => {
        this._logger.log(`response came: ${response}`);
        return response;
      });
  }

}
