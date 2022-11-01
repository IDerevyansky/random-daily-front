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

let users = 'Stan Pipetkin, Stan Marmazetkin, Michel, David, Georg, Mark';
let tag = 'Dev, Busines analysis, Sistem analysis, Test, Product Owner';

console.log(users.split(', '));

//----Create name user and tag end-----



  return (

    <>
      hello
    </>

  );



}

export default App;
