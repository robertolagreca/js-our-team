//Utilizzando i dati forniti, creare un array 
//di oggetti per rappresentare i membri del team.
//Ogni membro è caratterizzato dalle seguenti 
//informazioni: nome, ruolo e foto.

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

for(const member of arrayData){
        getMember(member);
}

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