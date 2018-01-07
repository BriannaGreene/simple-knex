const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const users = require('./routes/users')
const groups = require('./routes/groups')
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', users)
app.use('/groups', groups)


app.listen(port, ()=>{
  console.log('app listining on port ' + port);
})

module.exports=app;
