const accountId = 2345
let accountEmail = "sum@gmail"
var accounPassword = "3459"
accountCity = "jammu"

//accountId = 2 //not allowed
 
//prefer not to use var because of issue in block scope and function scope//

console.log(accountId);
accountEmail = "hc@gmail"
accountPassword = "123"
accountCity = "doda"

console.table([accountId, accountEmail, accountPassword, accountCity ])