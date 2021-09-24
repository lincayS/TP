// Modifier le tableau d’objets ci-dessous pour modifier le format du numéro de téléphone, créer un type de contact admin et supprimer les doublons :

var contacts = [
   {
       prenom : 'john',
       telephone : '0611223344',
   },
   {
       prenom : 'elise',
       telephone : '0655667799'
   },
   {
       prenom : 'franck',
       telephone : '0612345678'
   },
   {
       prenom : 'elisa',
       telephone : '0612345678'
   }
]


// 1 -  Téléphone

// 👉 Dans ce challenge, il faut modifier les numéros de téléphone afin de les afficher en format international +33612345678.

// 👉 Le résultat doit être un nouveau tableau.
var cellphone = "+33"

var phone =[{}]; 
for (var i = 0; i < contacts.length; i++ ){
    console.log("slice =>",contacts[i].telephone.slice(1))
    
    if (contacts[i].telephone.slice(1)){
        phone.push(contacts)
        contacts[i].telephone = cellphone + contacts[i].telephone.slice(1)

        contacts[i].admin = false
        
    }
  
  
}

















// 2 -  Admin

// 👉 Modifiez votre tableau pour créer une nouvelle propriété “admin” pour chaque contact


// Cette propriété doit être à true si le contact est admin, à false sinon.

// 👉 Faire en sorte que John soit admin, les autres non.

// 👉 Le résultat doit être un nouveau tableau.

var john =[{}]; 
for (var i = 0; i < 1; i++ ){
    
    
    if (contacts[i]){
        john.push(contacts)
        

        contacts[i].admin = true
        
    }
  
  
}
console.log("admin true", john);
