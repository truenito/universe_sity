var db;
var dbCreated = false;

//document.addEventListener("deviceready", onDeviceReady, false);

//function onDeviceReady(){
function insertarMateria{
db = window.openDatabase("University", "1.0", "University Database", 200000);

	  db.transaction(addSubject, errorCB, successCB);
	}
//}


function addSubject(tx) {
	
	tx.executeSql("INSERT INTO materia(nombre,clave,nota_final,id_semestre) " + 
	"VALUES ("+nombremateria+", 'ISC-501', NULL, NULL);");        
	 
}

function getMaterias(tx) {
	//$('#busy').show();
	var sql = "select nombre from materia";
	tx.executeSql(sql, [], getReportList_success);
}



function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}

function successCB() {
    alert("success!");
}


function DBExist()
{
  alert("Database Exists!");
}






