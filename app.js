const express = require('express');
const app = express();
const port = process.evn.PORT || 3000
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const users = ('./routs/users')
const groups = ('./routs/groups')
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', users)
app.use('/groups', groups)


app.listen(port, ()=>{
  conosle.log('app listining on port ' + port);
})
