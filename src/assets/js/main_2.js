let cohortsID = [];
let usersName = [];


window.onload = () => {
   
	//varia
	document.getElementsByClassName('cohort');
	const className = document.getElementsByClassName('name')[0];

	//llamando al JSON con fetch
	const cohortsJSON = 'data/cohorts.json';
	fetch(cohortsJSON) 
	.then(response => response.json())
	.then(data => { 
		
		cohortsFull(data);
	})

	const cohortsFull = data => {
		
		data.forEach(elem => {
			//comparar id para sacar solo los de lima con  if 	
			if (elem.sede === "lima"){
				//mostrar id de esos cohort	
				cohortsID.push(elem.id);
					
				cohortsID.reverse(elem.id);

				//console.log(cohortsID.reverse()); 
			} 
		});
		//transforme a texto los ids 
		let cohortsIdText = JSON.stringify(cohortsID);
		//console.log(cohortsIdText);
		
		//mostrar id de esos cohort y listarlos con innerHTML  
		/*document.getElementById("showCohortList").innerHTML = cohortsIdText; */

		//print de los cohorts de lima en tarjetas individuales
		/*
		const lima = document.getElementById('btnLima');lima.addEventListener('click', () => {
			document.getElementById('cohorts').style.display = 'block';

			let newNameCohort = '';
			for (let i = 0; i < cohortsID.length; i++) {
				newNameCohort += `<p>${cohortsID[i]}</p>`
				console.log(newNameCohort);

			const datos = document.getElementById('nameCohort');
			datos.innerHTML = newNameCohort;
			}
		});
		*/
		//boton lima
		const lima = document.getElementById('btnLima');
		const tabla = document.getElementById('tableBody')
		lima.addEventListener('click', () => {
            llamar();
			document.getElementById('listCohort').style.display = 'block';
			//recorre el arreglo de cohorts 	
			let newNameCohort = '';
			for (let i = 0; i < cohortsID.length; i++) {
			//	newNameCohort += tableSede;
				newNameCohort += `<tr><a data-cohort="lima"  class='cohort'> 
                ${cohortsID[i]}</a></tr>
                <button class="btn" onclick="mostrar()"> Ver Alumnas </button>`

				//console.log(newNameCohort);

			
			tabla.innerHTML = newNameCohort;
			}		
		});


		//boton CDMX
		const cdmx = document.getElementById('btnCDMX');cdmx.addEventListener('click', () => {
			document.getElementById('listAlumnas').style.display = 'block';			
		});

		//boton santiago
		const santiago = document.getElementById('btnSantiago');santiago.addEventListener('click', () => {
			document.getElementById('listAlumnas').style.display = 'block';
		});

		//boton sao paulo
		const saoPaulo = document.getElementById('btnSaoPaulo');saoPaulo.addEventListener('click', () => {
			document.getElementById('listAlumnas').style.display = 'block';
		});
	}	

  //"ver alumnas"
	//llamar con fetch a los nombres de las alumnas
	function llamar(){
		const usersJSON ='../data/cohorts/lim-2018-03-pre-core-pw/users.json';
		fetch(usersJSON)
		.then(response => response.json())
		.then(data => {
			usersFull(data);
		})
		const usersFull = data => {
		
		data.forEach(elem => {
			//mostrar nombre de almunas
			usersName.push(elem.name);
		});
		//transforme a texto los nombre
		let userNameText = JSON.stringify(usersName);
	}

}


//area de busqueda
const btnSearchA = document.getElementById('btnSearch');
btnSearchA.addEventListener('click', () => {

	filterName();	
	})
}

let filterName = () => {
	
	let input = document.getElementById('search').value;
	let inputToCase = input.toLowerCase();
		
		let alumnaEncontrada = usersName.find(element =>
		element.toLowerCase() ===	inputToCase);
		
		//console.log(objetoDeAlumnaEncontrada);
		
		let mostrarResultado = document.getElementById('resultSearch')
		mostrarResultado.innerHTML = alumnaEncontrada ;
		
}

function mostrar(){
	
	imprimirAlumnas();
	imprimirPorcentaje();
	
	//console.log('hola');

			
}

function imprimirAlumnas(){
	const tableNames = document.getElementById('tableAlumnas');
	document.getElementById('listCohort').style.display = 'none';
	document.getElementById('showNames').style.display = 'block';
		//print los nombres de las alumnas en una lista
		let newListName = '';
	
		for (let j = 0; j < usersName.length; j++) {
			tableNames.innerHTML = newListName;	
			newListName += `
			  <p>
				${usersName[j]}
				</p>`;

		
			}
}

function imprimirPorcentaje(){
	const tableProgress = document.getElementById('tableProgress');
	//sacando solo un valor de porcentaje
	let newProgressList = '';
	for (let a = 0; a <testeando.length; a++) {
		
		tableProgress.innerHTML = newProgressList;	
		//console.log(testeando[a]);
		newProgressList += `
		<p>
		 ${testeando[a]}
		</p> 
		`;

			
	}
}

	//console.log(search);
	console.log('hola');
	filterName();
	
	
	
	
	/*
	let searchStudent = (users, search) => {
		let newSearchStudent = [];
		return users.filter((element) => {
			return element.name.toLowerCase().indexOf
			(search.toLowerCase()) >= 0;
		});
		return newSearchStudent;
	}
	*/
})
} //cierre de window onload

let filterName = () => {
	
	let input = document.getElementById('search').value;
	let inputToCase = input.toLowerCase();
		
		let alumnaEncontrada = usersName.find(element =>
		element.toLowerCase() ===	inputToCase)
		
		//console.log(objetoDeAlumnaEncontrada);
		
		let mostrarResultado = document.getElementById('resultSearch')
		mostrarResultado.innerHTML = alumnaEncontrada ;
		
}


function mostrar(){
	const tableNames = document.getElementById('tableAlumnas');
	document.getElementById('listCohort').style.display = 'none';
	document.getElementById('showNames').style.display = 'block';
	
/*	
users.forEach(elem => {
		let complete = progress.find(element => element[0] === elem.id);
		let completedProgress = Object.values(complete); 
		completedProgress.forEach(elem => {
				let intro = elem.intro; 
				
				if(intro !== undefined || intro !== null) {
					//console.log(porcentajeGeneral);
					//print los nombres de las alumnas en una lista
					let porcentajeGeneral = intro.percent; 
					let newListName = '';
					for (let j = 0; j < usersName.length; j++) {
						newListName += `<tr><a href="#" data-alumna="${usersName[j]}" class='name'>${usersName[j]}</a></tr>
						<tr><a href="#" data-alumna="${usersName[j]}" class='name'>${usersName[j]}</a></tr>
						<tr><a href="#" data-alumna="${usersName[j]}" class='name'>${usersName[j]}</a></tr>
						<tr><a href="#" data-alumna="${usersName[j]}" class='name'>${usersName[j]}</a></tr>
						`
						tableNames.innerHTML = newListName;	
						
					}
				} else {
					console.log("error")
				}	 
		})
	})
	*/
}	


//btn alumna prueba
	const prueba = document.getElementById('btnPrueba');
	prueba.addEventListener('click', () => {
		document.getElementById('perfilAlumnas').style.display = 'block';
		console.log(window.computeUsersStats(users, progress, courses));
	
	
		document.getElementById('showUsers').innerHTML = `<p>${users[1].name}</p><p>${users[0].signupCohort}</p><p>${progress[0][1].intro.percent}</p>`
		//progreso general
		let percentBarra = progress[0][1].intro.percent
		document.getElementById('showProgress').innerHTML = `<p>Progreso General</p><div class="progress"><div class="progress-bar" role="progressbar" style="width: ${percentBarra}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${progress[0][1].intro.percent}%</div></div>`
		document.getElementById('showCourses').innerHTML = `<p>Courses ${progres[1][1]}</p><div class="progress">
		<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
		</div> `

	});
	

