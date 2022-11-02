import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

// -----Generetion link start-----

  var random = (s) => { return Math.floor(Math.random() * s.length)};

  let genLink = (q) => {

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

// -----Generetion link end-----



//----Create name user and tag start-----

let users = 'Stan Pipetkin, Stan Marmazetkin, Michel, David, Georg, Mark, Daniel';
let tag = 'Dev, Busines analysis, Sistem analysis, Test, Product Owner';
let userArray = users.split(', ');
let tagArray = tag.split(', ')
// console.log(userArray);

//----Create name user and tag end-----


// -----Sort start-----

let DBUsers = [
  {
    "id":"345",
    "name":"Stan Pipetkin",
    "description":"",
    "tag":"Dev",
    "status":""
  },
  {
    "id":"567",
    "name":"Stan Marmazetkin",
    "description":"",
    "tag":"Busines analysis",
    "status":""
  },
  {
    "id":"34",
    "name":"Michel",
    "description":"",
    "tag":"Busines analysis",
    "status":"Dev"
  },
  {
    "id":"12",
    "name":"David",
    "description":"",
    "tag":"Sistem analysis",
    "status":""
  },
  {
    "id":"6789",
    "name":"Georg",
    "description":"",
    "tag":"Test",
    "status":"admin"
  },
  {
    "id":"123",
    "name":"Mark",
    "description":"",
    "tag":["Product Owner", "Busines analysis"],
    "status":""
  },
  {
    "id":"7890",
    "name":"Daniel",
    "description":"",
    "tag":"no tag",
    "status":""
  }
];

let config = {
  "sort":"random",
};

  // --1---Sort Random item start--

//1. History maybe written in cookie. What would save for reload page. And delete at click button.  
//2. Duplicate to state react.
let HistoryUsersForward = DBUsers;
let HistoryUsersBackward = [];
let [select, setSelect] = useState("Let's Go...");
//----

let SortItem = (a) => {

  switch (a) {

    case 'random':
      
      let select = HistoryUsersForward.splice(random(DBUsers), 1)[0];
      HistoryUsersBackward[HistoryUsersBackward.length] = select;
      
      setSelect(select.name);
      console.log(random(DBUsers));
      // return select;

    break;

    case 'a->b':
      return 'a->b blya';
    break;

    case 'tag':
      return 'tag blya';
    break;
  
    default:
      break;
  }

};
// SortItem(config.sort);
// console.log( SortItem(config.sort) );

  // --1---Sort Random item end----


  // --2---Sort a->b start----
  
  // --2---Sort a->b end------


  // --3---Sort Tag start----
  
  // --3---Sort Tag end------
  
// -----Sort end-----

  return (

    <>
      <button onClick={()=> SortItem(config.sort)}>click me</button>
      <div><p>Select to:  {select}</p></div>
    </>

  );



}

export default App;
