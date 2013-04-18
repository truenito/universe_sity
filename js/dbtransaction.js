var db;
var dbCreated = false;


//document.addEventListener("deviceready", onDeviceReady, false);

//function onDeviceReady(){
db = window.openDatabase("University", "1.0", "University Database", 200000);
	if(dbCreated)
	{
	  db.transaction(DBExist, errorCB);
	}
	else
	{
	  db.transaction(createTablesDB, errorCB, successCB);
	}
//}


function createTablesDB(tx) {
     isTableExists(tx, "materia", function(status)
	 {
		 if (!status) {
		 //alert("table not exist, creating one");
		 tx.executeSql("CREATE TABLE IF NOT EXISTS materia (" + 
						"id_materia INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
						"nombre VARCHAR," +
						"clave VARCHAR," +
						"nota_final CHAR," +
						"id_semestre INTEGER" + ");");
		tx.executeSql("INSERT INTO materia(nombre,clave,nota_final,id_semestre) " + 
		"VALUES ('Programacion Multimedia', 'ISC-501', NULL, NULL);");
		tx.executeSql("INSERT INTO materia(nombre,clave,nota_final,id_semestre) " + 
		"VALUES ('Calculo III', 'MAT-300', NULL, NULL);");
		tx.executeSql("INSERT INTO materia(nombre,clave,nota_final,id_semestre) " + 
		"VALUES ('Ingenieria de Software', 'ISC-546', NULL, NULL);");
		tx.executeSql("INSERT INTO materia(nombre,clave,nota_final,id_semestre) " + 
		"VALUES ('Estructura de datos', 'ISC-464', NULL, NULL);");
		//console.log('finished filling');
	} else {
			//alert("table exist, call function and show resultset of existen materias");
			//tx.executeSql('DROP TABLE materia');
		  }
        });
	 
}

function isTableExists(tx, tableName, callback) {
	tx.executeSql('SELECT * FROM ' + tableName, [], function(tx, resultSet) {
		if (resultSet.rows.length <= 0) {
			callback(false);
		} else {
			callback(true);
		}
	}, function(err) {
		callback(false);
	});
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


