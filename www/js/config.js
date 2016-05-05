var salt ="jmgl33mg1221kjgruyky232ho2l3437mhljio90hueemmgjktjmmmgko2tut35ymmmh221eenngl4y73kkkj";
var ref = new Firebase("https://hudo.firebaseio.com/");
var respValida ='';
var dbShell;
var user=[];
function doLog(s){
    /*
    setTimeout(function(){
        console.log(s);
    }, 3000);
    */
}

/*function dbErrorHandler(err){
    alert("DB Error: "+err.message + "\nCode="+err.code);
}

function phoneReady(){
    doLog("phoneReady");
    //First, open our db

    dbShell = window.openDatabase("Hudo", 2, "Hudo", 1000000);
    doLog("db was opened");
    //run transaction to create initial tables
    dbShell.transaction(setupTable,dbErrorHandler,getEntries);
    doLog("ran setup");
}

//I just create our initial table - all one of em
function setupTable(tx){
    doLog("before execute sql...");
    tx.executeSql("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY,username,password,tipo,updated)");
    doLog("after execute sql...");
}
//I handle getting entries from the db
function getEntries() {
    dbShell.transaction(function(tx) {
    tx.executeSql("select * from users",[],renderEntries,dbErrorHandler);
    }, dbErrorHandler);
}

//I handle getting entries from the db
function deleteEntries() {
   dbShell.transaction(function(tx) {
    tx.executeSql("delete from users",[],returnDelete,dbErrorHandler);
    }, dbErrorHandler);
}
function returnDelete(){
    return true;
}

function renderEntries(tx,results){
     doLog("render entries");
      if (results.rows.length == 0) {
      //$("#Pagelogin").html("<p>You currently do not have any notes.</p>");
      } else {
          var s = "";
          for(var i=0; i<results.rows.length; i++) {
            user.username = results.rows.item(i).username;
            user.password = results.rows.item(i).password;
            user.tipo= results.rows.item(i).tipo;
            user.id= results.rows.item(i).id;
          }
          loginInit(user);

      }
}

function saveNote(users, cb)
{
    //Sometimes you may want to jot down something quickly....
    if(users.username == "") users.username = "[No Title]";
    dbShell.transaction(function(tx) {
    if(users.id == "") tx.executeSql("insert into users(username,password,tipo,updated) values(?,?,?)",[users.username,users.password,users.tipo,new Date()]);
    else tx.executeSql("update users set username=?, password=?,tipo=?,updated=? where id=?",[users.username,users.password,users.tipo,new Date(), users.id]);
    }, dbErrorHandler,cb);
}
function init()
{

   document.addEventListener("deviceready", phoneReady, false);
   getEntries();
 }
 $(document).ready(function(){
     init();
 });
*/
