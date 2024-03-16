### FLaNK-UDF

JavaScript/Java8 Flink Scripts

### FLINK SQL

````
CREATE TABLE `ssb`.`Meetups`.`flankslackmessages` (
  `messagerealname` VARCHAR(2147483647),
  `messagetype` VARCHAR(2147483647),
  `inputs` VARCHAR(2147483647),
  `messageid` VARCHAR(2147483647),
  `uuid` VARCHAR(2147483647),
  `messageusername` VARCHAR(2147483647),
  `messagetimestamp` VARCHAR(2147483647),
  `messagepermalinkpublic` VARCHAR(2147483647),
  `filename` VARCHAR(2147483647),
  `messagechannel` VARCHAR(2147483647),
  `messagetext` VARCHAR(2147483647),
  `messageusertz` VARCHAR(2147483647),
  `threadts` VARCHAR(2147483647),
  `ts` VARCHAR(2147483647),
  `messagesubtype` VARCHAR(2147483647),
  `eventTimeStamp` TIMESTAMP(3) WITH LOCAL TIME ZONE METADATA FROM 'timestamp',
  WATERMARK FOR `eventTimeStamp` AS `eventTimeStamp` - INTERVAL '3' SECOND
) WITH (
  'scan.startup.mode' = 'earliest-offset',
  'deserialization.failure.policy' = 'ignore',
  'properties.request.timeout.ms' = '120000',
  'properties.auto.offset.reset' = 'earliest',
  'format' = 'json',
  'properties.bootstrap.servers' = 'kafka:9092',
  'connector' = 'kafka',
  'properties.transaction.timeout.ms' = '900000',
  'topic' = 'flank-slack-messages'
)

### Join with slack user table

### call

Select CALLLLM(CAST(messagetext as STRING)) as generatedtext, messagerealname, messageusername, messagetext,
       messageusertz, messageid, threadts, ts
FROM flankslackmessages
WHERE messagetype = 'message'


````

### Resources

* https://github.com/tspannhw/FLaNK-CDC
* https://blog.cloudera.com/implementing-and-using-udfs-in-cloudera-sql-stream-builder
* 
