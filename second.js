var express = require('express');
var app = express();
app.get('/',function(request, response) {
    var idAddress = request.connection.remoteAddress;
    console.log(idAddress);
});

  

app.listen(3001, () => console.log(`App listening on port 3000`))