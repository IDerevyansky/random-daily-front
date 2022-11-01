import logo from './logo.svg';
import './App.css';

function App() {

// -----Generetion link start-----

  let genLink = (q) => {

    let abc = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*?><}{';
    var random = () => { return Math.floor(Math.random() * abc.length)};

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
          link[i] = abc[random()]
          i++
        }
        return link.join('');
      break;
      // ---Generation link end---

      // ---Generation key start---
      case 'key':
        while (i <= getRandomInt(8,28)) {
          key[i] = abc[random()]
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

console.log(users.split(', '));

//----Create name user and tag end-----


// -----Sort start-----

let DBUsers = [
  {
    "id":"",
    "name":"Stan Pipetkin",
    "description":"",
    "tag":"Dev",
    "status":"",
  },
  {
    "id":"",
    "name":"Stan Marmazetkin",
    "description":"",
    "tag":"Busines analysis",
    "status":"",
  },
  {
    "id":"",
    "name":"Michel",
    "description":"",
    "tag":"Busines analysis",
    "status":"Dev",
  },
  {
    "id":"",
    "name":"David",
    "description":"",
    "tag":"Sistem analysis",
    "status":"",
  },
  {
    "id":"",
    "name":"Georg",
    "description":"",
    "tag":"Test",
    "status":"",
  },
  {
    "id":"",
    "name":"Mark",
    "description":"",
    "tag":"Product Owner",
    "status":"",
  },
  {
    "id":"",
    "name":"Daniel",
    "description":"",
    "tag":"no tag",
    "status":"",
  }
];

let config = {

};

  // --1---Sort Random item start--

  // --1---Sort Random item end----


  // --2---Sort a->b start----
  
  // --2---Sort a->b end------


  // --3---Sort Tag start----
  
  // --3---Sort Tag end------
  
// -----Sort end-----

  return (

    <>
      hello
    </>

  );



}

export default App;
