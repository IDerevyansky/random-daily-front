import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

//----Create name user and tag start-----

    let splitItem = (q) => {
      return q.split(', ');
    }     

    // console.log( splitItem('Stan Pipetkin, Stan Marmazetkin, Michel, David, Georg, Mark, Daniel') );

//----Create name user and tag end-----



// -----function Random generetion start----
  
  let genLink = (q) => {

    let random = (s) => { return Math.floor(Math.random() * s.length)};

    let abc = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*?><}{';
    
    let getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }


    let i = 0;
    let key = [];
    let link = [];


    switch (q) {

      // ---Generation link start---
      case 'link':
        while (i <= getRandomInt(40,80)) {
          link[i] = abc[random(abc)]
          i++
        }
        return link.join('');
      break;
      // ---Generation link end---

      // ---Generation key start---
      case 'key':
        while (i <= getRandomInt(8,28)) {
          key[i] = abc[random(abc)]
          i++
        }
        return key.join('');
      break;
      // ---Generation key end---

      default:
      break;
    }

  }

  // console.log( genLink('link') );

// -----function Random generetion end-----


// -----Sort start-----

let DBUsers = [
  {
    "id":"111",
    "name":"Yasin Ermengard",
    "description":"",
    "tag":"Dev",
    "status":""
  },
  {
    "id":"112",
    "name":"Geetha Zhanna",
    "description":"",
    "tag":"Dev",
    "status":""
  },
  {
    "id":"113",
    "name":"Mariana Marjolein",
    "description":"",
    "tag":"Dev",
    "status":""
  },
  {
    "id":"211",
    "name":"Prissy Vilma",
    "description":"",
    "tag":"Busines analysis",
    "status":""
  },
  {
    "id":"212",
    "name":"Beatrix Hayley",
    "description":"",
    "tag":"Busines analysis",
    "status":""
  },
  {
    "id":"213",
    "name":"Berendina Eero",
    "description":"",
    "tag":["Product Owner", "Busines analysis"],
    "status":""
  },
  {
    "id":"301",
    "name":"Heremoana Léonel",
    "description":"",
    "tag":"Sistem analysis",
    "status":""
  },
  {
    "id":"302",
    "name":"Tryggvi Thomas",
    "description":"",
    "tag":"Sistem analysis",
    "status":""
  },{
    "id":"303",
    "name":"Ana María Wotan",
    "description":"",
    "tag":"Sistem analysis",
    "status":""
  },
  {
    "id":"401",
    "name":"Javed Samir",
    "description":"",
    "tag":"Test",
    "status":"admin"
  },
  {
    "id":"402",
    "name":"Amihan Zayn ad-Din",
    "description":"",
    "tag":["Test", "Dev"],
    "status":"admin"
  },
  {
    "id":"403",
    "name":"Nagendra Bláithín",
    "description":"",
    "tag":"Test",
    "status":"admin"
  },
  {
    "id":"501",
    "name":"Gruffydd Siorus",
    "description":"",
    "tag":["Product Owner", "Busines analysis"],
    "status":""
  },
  {
    "id":"601",
    "name":"Konjit Edmonda",
    "description":"",
    "tag":"",
    "status":""
  }
];

let listTag = splitItem("Sistem analysis, Busines analysis, Dev, Test, Product Owner");


let config = {
  "select":"name", //select{name or tag}
  "sort":"a->b" //sort{random or a->b}
};


let [Users, setUsers] = useState(DBUsers.sort( (a, b)=> a.name > b.name? 1 : -1 ));
let [Select, setSelect] = useState( {"name":"Let's Go..."} );
let [History, setHistory] = useState([]);
let [ListTags, setListTags] = useState(listTag);
let [Index, setIndex] = useState(0);



let rec = (q) => {
  setSelect( History[History.length] = Users.splice(q, 1)[0] );
}


let SortItem = () => {


  if(Users.length !== 0){
//---
if(config.select === 'name'){

  if(config.sort === 'random'){
    //Random
    rec( Math.floor(Math.random() * Users.length) );
  }else{
    //a->b
    rec(0);
  }

}else{

}

//---
  }else{
    setSelect( {"name":"Done..."} );
  }


}




  return (

    <>
      <button onClick={()=>SortItem()}>Backward</button>
      <button onClick={()=>SortItem()}>Next</button>
      <button onClick={()=>SortItem()}>Forward</button>

      <div>
        <p>Select to: { Select.name }</p>
        <p>{ Select.tag !== undefined ?'Tag to: '+ Select.tag:'' }</p>
      </div>
    </>

  );


}

export default App;
