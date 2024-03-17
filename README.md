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

CREATE TABLE `ssb`.`Meetups`.`postgres_jdbc_slackusers` (
  `messagerealname` VARCHAR(2147483647),
  `messageusertz` VARCHAR(2147483647),
  `messageusername` VARCHAR(2147483647),
  CONSTRAINT `PK_1601370` PRIMARY KEY (`messageusername`) NOT ENFORCED
) WITH (
  'password' = 'pass1',
  'url' = 'jdbc:postgresql://localhost:5432/tspann',
  'connector' = 'jdbc',
  'table-name' = 'slackusers',
  'username' = 'user1'
)

select * from postgres_jdbc_slackusers

### Join with slack user table

### call

Select CALLLLM(CAST(messagetext as STRING)) as generatedtext, messagerealname, messageusername, messagetext,
       messageusertz, messageid, threadts, ts
FROM flankslackmessages
WHERE messagetype = 'message'


````

#### Calcite convert query

````

SELECT Name as fullname, "User ID" as userid,
       Title as title, "Member ID" as memberid,
       Location as location, "Joined Group on" as joinedgroupon,
       "Last visited group on" as lastvisitedgroupon,
       "Last Attended" as lastattended,
       "Total RSVPs" as totalrsvps,
       "RSVPed Yes" as rsvpedyes,
       "RSVPed Maybe" as rsvpedmaybe,
       "RSVPed No" as rsvpedno,
       "Meetups attended" as meetupsattended,
       "No shows" as noshows,
       "Intro" as introduction,
       "Photo" as photostatus,
       "Assistant Organizer" as assistantorganizer,
       "Mailing List" as mailingliststatus,
       "URL of Member Profile" as memberprofile,
       "What company do you represent?" as companyname,
       "Topics of interest?" as topicsofinterest
FROM FLOWFILE

````

#### POSTGRESQL TABLE

````

-- public.slackusers definition

-- Drop table

-- DROP TABLE public.slackusers;

CREATE TABLE public.slackusers (
	messagerealname text NULL,
	messageusertz text NULL,
	messageusername text NOT NULL,
	CONSTRAINT slackusers_pkey PRIMARY KEY (messageusername)
);


````


### Resources

* https://github.com/tspannhw/FLaNK-CDC
* https://blog.cloudera.com/implementing-and-using-udfs-in-cloudera-sql-stream-builder
* https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/jdbc/
* https://github.com/tspannhw/ClouderaFlinkSQLForPartners
* 
