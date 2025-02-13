const paragraph = document.getElementById('paragraph')
const select = document.getElementById("select");
const inputNumber = document.getElementById("inputNumber");
const button = document.getElementById("submitButton");
const error = document.getElementById('errorP')
const result = document.getElementById('result')
const final = document.getElementById('finally')
let URLvalue = 'https://swapi.py4e.com/api/' 

function promPost(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then((response) => response.json())
    
  })   
  .then(data => {
    console.log(data);
    return createPost(data);
  })
  resolve()
  
}

button.addEventListener("click", function (event) {
  event.preventDefault();
  result.textContent = 'Идёт загрузка...'
  if (select.value === 'one') {
    URLvalue += 'planets/'
  } else if (select.value === 'two'){
    URLvalue += 'films/'
  }
  else if (select.value === 'three'){
    URLvalue += 'people/'
  }
  else if (select.value === 'four'){
    URLvalue += 'starships/'
  }
  else if (select.value === 'five'){
    URLvalue += 'vehicles/'
  }
  URLvalue+=  inputNumber.value  + '/'
  console.log(URLvalue)
  try {
  promPost(URLvalue)
  } catch(error) {error.textContent = `Ошибка: ${error.message}`}
  finally{ final.textContent = 'Процесс завершён'}
}) 


function createPost(data) {
  let title = document.createElement("h2");
  title.classList.add("titlePost");
  title.textContent = 'Name: ' + Object.keys(data)[0];
  result.textContent = ''
  result.append(title);
}


// fetch('https://jsonplaceholder.typicode.com/posts/')
//   .then((response) =>{
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data)
//     data.forEach(element => {
//       createElement(element.title, element.body)
//     });
//     return data
//     })
    
//   .catch((err)=> {
//     paragraph.innerHTML = `Ошибка. ${err}`
//   })

//   function createElement(title, body) {
//     let head = document.createElement('h2')
//     let titleText = document.createElement('p')
//     head.classList.add('html-h2')
//     titleText.classList.add('html-p')
//     head.textContent = JSON.stringify(title)
//     titleText.textContent = JSON.stringify(body)
//     let part = document.createElement('div')
//     part.append(head, titleText)
//     paragraph.append(part)
//   }
//   createElement()