
window.onload = () => {

	//llamando al JSON con fetch
	const cohortsJSON = 'data/cohorts.json';
	fetch(cohortsJSON) 
	.then(response => response.json())
	.then(data => { 
		
		cohortsFull(data);
	})
	
	const cohortsFull = data => {
		let cohortsID = [];
		data.forEach(elem => {
			//comparar id para sacar solo los de lima con  if 	
			if (elem.sede === "lima"){
				//mostrar id de esos cohort	
				cohortsID.push(elem.id);
				console.log(cohortsID.reverse()); 
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
			document.getElementById('listCohort').style.display = 'block';
			//recorre el arreglo de cohorts 	
			let newNameCohort = '';
			for (let i = 0; i < cohortsID.length; i++) {
			//	newNameCohort += tableSede;
				newNameCohort += `<tr><a href="#" class='cohort'> 
				${cohortsID[i]}</a></tr>`
				console.log(newNameCohort);
			
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
	
	
	
	
	//llamar con fetch a los nombres de las alumnas
	const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
	fetch(usersJSON) 
	.then(response => response.json())
	.then(data => {   
		usersFull(data);
	})	
	const usersFull = data => {
		let usersName = [];
		data.forEach(elem => {
		//mostrar nombre de almunas
		usersName.push(elem.name);
		//transforme a texto los nombres
		let userNameText = JSON.stringify(usersName);
		
		//mostrar nombres y listarlos con innerHTML  
		
		
		const showAlumnas = document.getElementById('btnAlumnas');
		const tableNames = document.getElementById('tableAlumnas')
		showAlumnas.addEventListener('click', () => {
			document.getElementById('listAlumnas').style.display = 'block';
			//print los nombres de las alumnas en una lista
			let newListName = '';
			for (let j = 0; j < usersName.length; j++) {
				newListName += `<tr><a href="#" class='name'> 
				${usersName[j]}</a></tr>`
	
				tableNames.innerHTML = newListName;
			}		
			console.log('hola');
		});

		let tableAlumnas = document.getElementById('')
		let newNameAlumna = '';
		for (let j = 0; j < userNameText; j++) {
			newNameAlumna += `<tr><a href='#' id='alumna'>${userNameText[j]}</a></tr>`
			
			
		}
		
		
		

	});
		
	//area de busqueda
	const btnSearch = document.getElementById('btnSearch').addEventListener('click', () => {
		document.getElementById('showNames').style.display = 'block';
		const searchA = document.getElementById('searchAlumnas').value;		
		
		//ejemplo mandy
		window.filterUsers = (users, search) => {
			var newUsers = [];
			return users.filter((element) => {    
				return element.name.toLowerCase().indexOf(search.toLowerCase()) >= 0;
			});
			return newUsers;
		};	
	})
	}

	
		




}