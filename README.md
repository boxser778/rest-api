rest api project

node js

liberies: express ,bcrypt ,config ,jwt ,joi ,mongoose ,nodemon

<!-- !create new user (no token require) -->
<!-- ?method : POST -->
<!-- route --> localhost:3000/api/auth/signup
<!-- body --
{
"email":"2@2.com",
"name": "bob",
"password":"1234"
}
-->

<!-- ! login -->
<!-- ? method: POST -->
<!-- route --> localhost:3000/api/auth/login
<!-- body --
{
    "email":"2@2.com",
    "password":"1234"
}
-->

<!-- !get user information (require to send token in header) -->
<!-- ? method: GET -->
<!-- route: --> http://localhost:3000/api/user

<!-- !create card(require user token) -->
<!-- ? method: POST -->
<!-- route --> http://localhost:3000/api/card
<!-- body --
{
"bizName":"coca-cola",
"bizDescription":"drink factory",
"bizPostal":"rehovot 24/2",
"bizNumber":"042-2341042",
"bizImage":"https://s3-symbol-logo.tradingview.com/coca-cola--600.png"
}
-->

<!-- !get all user cards(require user token) -->
<!-- ? method: GET -->
<!-- route --> http://localhost:3000/api/card

<!-- !get user card by id(require user token) -->
<!-- ? method: GET -->
<!-- route --> http://localhost:3000/api/card/one
<!-- body -- _id = id of the objectId created in mongoDB
{
"_id":"6203dcb404835913241d52e7"
}
-->

<!-- !update card(require user token) -->
<!--  ? method: PUT -->
<!-- route --> http://localhost:3000/api/card
<!-- body --
{
"_id":"6203dcb404835913241d52e7",
"bizName":"fanta-cola",
"bizDescription":"drink factory",
"bizPostal":"rehovot 24/2",
"bizNumber":"042-2341042",
"bizImage":"https://s3-symbol-logo.tradingview.com/coca-cola--600.png"
}
-->

<!-- !delete card(require user token) -->
<!-- ?method: DELETE -->
<!-- route --> http://localhost:3000/api/card
<!-- body -- id of the objectID want to delete
{
    "_id":"6203dcb404835913241d52e7"
}
-->
