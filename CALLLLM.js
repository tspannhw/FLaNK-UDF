function CALLLLM(input) {
   try {
      var c = new java.net.URL('http://192.168.1.158:9676/query?calltype=llm&key=' + java.net.URLEncoder.encode(input)).openConnection();
      c.requestMethod='GET';
      var reader = new java.io.BufferedReader(new java.io.InputStreamReader(c.inputStream));
      var inputLine = new java.lang.String();
      var out = new java.lang.StringBuilder("");
      if ( reader != null ) { 
         while ((inputLine = reader.readLine()) != null)
            out.append(inputLine);
      }
      reader.close();
      return out.toString();
   } catch(err) {
    return "Unknown: " + err;
   }
}
CALLLLM($p0);
