function GETPINECONEDATA(prompt) {
   try {
      var c = new java.net.URL('http://kafka:9676/query?key=' + java.net.URLEncoder.encode(prompt).openConnection();
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
print(GETPINECONEDATA("What is Apache Flink?"));

# Test from command line:   jjs testssb.js
