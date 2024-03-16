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


#### jdbc

CREATE TABLE `ssb`.`Meetups`.`postgres_jdbc_meetupusers` (
  `messagerealname` VARCHAR(2147483647),
  `messageusertz` VARCHAR(2147483647),
  `messageusername` VARCHAR(2147483647),
  CONSTRAINT `PK_1601370` PRIMARY KEY (`messageusername`) NOT ENFORCED
) WITH (
  'password' = 'password1',
  'url' = 'jdbc:postgresql://server:5432/tspann',
  'connector' = 'jdbc',
  'table-name' = 'meetupusers',
  'username' = 'username'
)

select * from postgres_jdbc_meetupusers

### Join with slack user table

### call

Select CALLLLM(CAST(messagetext as STRING)) as generatedtext, messagerealname, messageusername, messagetext,
       messageusertz, messageid, threadts, ts
FROM flankslackmessages
WHERE messagetype = 'message'


````

#### POSTGRESQL TABLE

````

select * from meetupusers m 

-- public.meetupusers definition

-- Drop table

-- DROP TABLE public.meetupusers;

CREATE TABLE public.meetupusers (
	messagerealname text NULL,
	messageusertz text NULL,
	messageusername text NOT NULL,
	CONSTRAINT meetupusers_pkey PRIMARY KEY (messageusername)
);


````


### Resources

* https://github.com/tspannhw/FLaNK-CDC
* https://blog.cloudera.com/implementing-and-using-udfs-in-cloudera-sql-stream-builder
* https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/jdbc/
* https://github.com/tspannhw/ClouderaFlinkSQLForPartners
* 
