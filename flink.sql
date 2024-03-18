Select CALLLLM(CAST(messagetext as STRING)) as generatedtext, messagerealname, messageusername, messagetext,
       messageusertz, messageid, threadts, ts
FROM flankslackmessages
WHERE messagetype = 'message'
