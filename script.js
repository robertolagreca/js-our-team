//Utilizzando i dati forniti, creare un array 
//di oggetti per rappresentare i membri del team.
//Ogni membro è caratterizzato dalle seguenti 
//informazioni: nome, ruolo e foto.

//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.
//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe

//MILESTONE 0
let arrayData = [
    {
        Name: "Wayne Barnett",
        Role: "Founder & CEO",
        Photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        Name: "Angela Caroll",
        Role: "Chief Editor",
        Photo: "angela-caroll-chief-editor.jpg"
    },
    {
        Name: "Walter Gordon",
        Role: "Office Manager",
        Photo: "walter-gordon-office-manager.jpg"
    },
    {
        Name: "Angela Lopez",
        Role: "Social Media Manager",
        Photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        Name: "Scott Estrada",
        Role: "Developer",
        Photo: "scott-estrada-developer.jpg"
    },
    {
        Name: "Barbara Ramos",
        Role: "Graphic Designer",
        Photo: "barbara-ramos-graphic-designer.jpg"
    }
]



//MILESTONE 1
for(const member of arrayData){

        getMember(member);
           
}



//MILESTONE 2
//seleziono contenitore con id member
//dentro creo un div nel quale finirà la lista dei membri
let containerMember = document.querySelector("#member");
let container = document.createElement("div");
printMember();



//funzione per Milestone 1
//stampo su console tutte le posizioni degli array con tutte le proprietà
function getMember (m){

    console.log(
        `
-------------- Membro ----------------
    Nome: ${m.Name}
    Ruolo: ${m.Role}
    Foto: ${m.Photo}
--------------------------------------
         `
    );
  
}



//funzione per Milestone 2
//ciclo for che prende le proprietà dell'array
    //per ogni posizione dell'array viene creata una lista in DOM
    //a questa lista viene data una classe

    //all'interno un altro ciclo for che prende ogni singola proprietà
    //di ogni posizione e le stampa nella lista creata

    function printMember (){    
      for (const member of arrayData) {
        const list = document.createElement("ul");
        list.setAttribute("class", member);
        
        for (const key in member) {
          const liElement = document.createElement("li");
          liElement.innerHTML = key + " : " + member[key]; // `${key}:${member[key]}` trovata in questo modo.
          list.appendChild(liElement);
        }
        container.appendChild(list);
      }
      containerMember.appendChild(container);
    }

    //containerMember.innerHTML += '<p>' + getM + '</p>';