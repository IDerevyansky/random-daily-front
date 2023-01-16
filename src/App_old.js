import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

  // Get to front side data
  // And send to DataBase
  // 1.Default request with sort database a->b
  // 2.After sort at front-side at tag or random method
  // Сделать запись данных в куку что бы избежать потери очереди
  // при перезагрузке страницы. Удалять данные либо по времени либо по действию.
  // Make record data in cookie that lose queue at reload page. 
  // Delete data by time elso action 

  //----Create name user and tag start-----

    ////----Get user name or tag with front start-----
    let users = 'Stan Pipetkin, Stan Marmazetkin, Michel, David, Georg, Mark, Daniel';
    let tag = 'Dev, Busines analysis, Sistem analysis, Test, Product Owner';
    ////----Get user name or tag with front end-------

    let userArray = users.split(', ');
    let tagArray = tag.split(', ')
    // console.log(userArray);


//----Create name user and tag end-----


function App() {

// -----function Random generetion start-----

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

// -----function Random generetion end-----


// -----Sort start-----

let DBUsers = [
  {
    "id":"345",
    "name":"Atan Pipetkin1",
    "description":"",
    "tag":"Dev",
    "status":""
  },
  {
    "id":"567",
    "name":"Btan Marmazetkin2",
    "description":"",
    "tag":"Busines analysis",
    "status":""
  },
  {
    "id":"34",
    "name":"Cichel3",
    "description":"",
    "tag":"Busines analysis",
    "status":""
  },
  {
    "id":"12",
    "name":"David4",
    "description":"",
    "tag":"Sistem analysis",
    "status":""
  },
  {
    "id":"6789",
    "name":"Eaniel5",
    "description":"",
    "tag":"Test",
    "status":"admin"
  },
  {
    "id":"123",
    "name":"Fark6",
    "description":"",
    "tag":["Product Owner", "Busines analysis"],
    "status":""
  },
  {
    "id":"7890",
    "name":"Georg7",
    "description":"",
    "tag":"",
    "status":""
  }
];



let config = {
  "select":"", //select{name or tag}
  "sort":"tag" //sort{random or a->b}
};

//В config возможно добавить параметр select{name or tag} и sort{random or a->b}

//1. History maybe written in cookie. What would save for reload page. And delete at click button.  
//2. Duplicate to state react.

let [HistoryUsersForward, setHistoryUsersForward] = useState(DBUsers);
let [select, setSelect] = useState("Let's Go...");
let [HistoryUsersBackward, setHistoryUsersBackward] = useState([]);
let [listTags, setlistTags] = useState(["Sistem analysis", "Busines analysis", "Dev", "Test", "Product Owner"]);

let recordHistory = (a) => {

  setSelect(HistoryUsersBackward[HistoryUsersBackward.length] = HistoryUsersForward.splice(a, 1)[0]); 

}









              // 1.Проверяем наличие тега
              // 2.Проверяем строка это или массив
              //   * Если строка то сравниваем с списком порядка выступления.
              //   * Если массив то входим в массив и проверяем содержимое сравниваем с списком порядка выступления.
              // -------
              // Сперва выдается список по алфавиту




let listIndex = 0;
let checkTagList = () => {


  HistoryUsersForward.map((item, key, arr)=>{

    if(item.tag == listTags[listIndex]){
      console.log('Name: '+item.name+' Tag: '+item.tag);
    }

    // if( Array.isArray(HistoryUsersForward[index].tag) ){

    // }else{

    // }

  });  

  // listIndex++;

}



let SortItem = (a) => {

  if(HistoryUsersForward.length != 0){

      switch (a) {

        case 'random':

            recordHistory(random(HistoryUsersForward));
            //Тут надо потом все значения записть в куку

        break;
        
        case 'a->b':
          
            recordHistory(0);
            //Тут надо потом все значения записть в куку

        break;

        case 'tag':

              
              checkTagList();
          
          // ---->закончил тут
          
          

        break;
      
        default:
          break;
      }

}else{
  console.log('Array HistoryUsersForward empty!');
  setSelect('Done');
}

};


  return (

    <>
      <button onClick={()=> SortItem(config.sort)}>Backward</button>
      <button onClick={()=> SortItem(config.sort)}>Next</button>
      <button onClick={()=> SortItem(config.sort)}>Forward</button>

      <div>
        <p>Select to: { select.name == undefined?select:select.name }</p>
        <p>Tag to: { select.tag == ""?'Without tag':select.tag }</p>
      </div>
    </>

  );



}

export default App;
