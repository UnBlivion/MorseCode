// EVERYTHING WORKS JUST FINE... 
// BUT I NEED TO IMPROVE MYSELF AND MAKE IT MORE "READABLE"
let button = document.querySelector('.clean');
let input = document.querySelector('.text');
let results = document.querySelector('#result');
let swap = document.querySelector('.arrows');
let blueBar = document.querySelector('.read');

let addFav = document.querySelector('.favorites');
let div = document.querySelector('.fav');

let star = document.querySelector('.star')
let home = document.querySelector('.home')
let sheet = document.querySelector('.dictionary')

let btnStar = document.querySelector('.btnStar');
let btnHome = document.querySelector('.btnHome');
let btnSheet = document.querySelector('.btnSheet');

let unstarAll = document.querySelector('.unstarAll')

let gambiarra1 = document.querySelector('#gambiarra1');
let gambiarra2 = document.querySelector('#gambiarra2');

let textToMorse = true;
let nothingStar = document.querySelector('.nothing');

// FLIP CARD FUNCTION
let showCard = document.querySelectorAll('.card');

for (cards of showCard) {
    cards.onclick = flip;
}

function flip() {
    this.firstChild.nextSibling.classList.toggle('frontFlip')
    this.lastChild.previousSibling.classList.toggle('backFlip')
}
// ----------

button.onclick = clean;

btnStar.onclick = () => {
    star.classList.add('appearStar');
    sheet.classList.remove('appearSheet');
    btnStar.classList.add('focused');
    btnSheet.classList.remove('focused');
    btnHome.classList.remove('focused');
}

btnHome.onclick = () => {
    star.classList.remove('appearStar')
    sheet.classList.remove('appearSheet')
    btnHome.classList.add('focused');
    btnSheet.classList.remove('focused');
    btnStar.classList.remove('focused');
}

btnSheet.onclick = () => {
    sheet.classList.add('appearSheet')
    star.classList.remove('appearStar')
    btnSheet.classList.add('focused');
    btnStar.classList.remove('focused');
    btnHome.classList.remove('focused');
}

swap.onclick = () => {
    clean();
    swap.classList.toggle('rotate');
    if (textToMorse === true) {
        textToMorse = false;
        gambiarra1.innerHTML = 'MORSE';
        gambiarra2.innerHTML = 'TEXT';
    } else {
        textToMorse = true;
        gambiarra2.innerHTML = 'MORSE';
        gambiarra1.innerHTML = 'TEXT';
    }
}

const refresh = input.onkeypress = () => {
    let word = ''
    let validador = true;

    if (input.value.length == 0) {
        blueBar.style.display = 'none';
        button.style.display = 'none';
    } else {
        blueBar.style.display = 'flex';
        button.style.display = 'flex';
    }

    if (textToMorse) {
        for (let i = 0; i < input.value.length; i++) {
            switch (input.value.charAt(i).toUpperCase()) {
                case 'A':
                    word += ('.- ')
                    break;
                case 'B':
                    word += ('-... ')
                    break;
                case 'C':
                    word += ('-.-. ')
                    break;
                case 'D':
                    word += ('-.. ')
                    break;
                case 'E':
                    word += ('. ')
                    break;
                case 'F':
                    word += ('..-. ')
                    break;
                case 'G':
                    word += ('--. ')
                    break;
                case 'H':
                    word += ('.... ')
                    break;
                case 'I':
                    word += ('.. ')
                    break;
                case 'J':
                    word += ('.--- ')
                    break;
                case 'K':
                    word += ('-.- ')
                    break;
                case 'L':
                    word += ('.-.. ')
                    break;
                case 'M':
                    word += ('-- ')
                    break;
                case 'N':
                    word += ('-. ')
                    break;
                case 'O':
                    word += ('--- ')
                    break;
                case 'P':
                    word += ('.--. ')
                    break;
                case 'Q':
                    word += ('--.- ')
                    break;
                case 'R':
                    word += ('.-. ')
                    break;
                case 'S':
                    word += ('... ')
                    break;
                case 'T':
                    word += ('- ')
                    break;
                case 'U':
                    word += ('..- ')
                    break;
                case 'V':
                    word += ('...- ')
                    break;
                case 'W':
                    word += ('.-- ')
                    break;
                case 'X':
                    word += ('-..- ')
                    break;
                case 'Y':
                    word += ('-.-- ')
                    break;
                case 'Z':
                    word += ('--.. ')
                    break;
                case '0':
                    word += ('----- ')
                    break;
                case '1':
                    word += ('.---- ')
                    break;
                case '2':
                    word += ('..--- ')
                    break;
                case '3':
                    word += ('...-- ')
                    break;
                case '4':
                    word += ('....- ')
                    break;
                case '5':
                    word += ('..... ')
                    break;
                case '6':
                    word += ('-.... ')
                    break;
                case '7':
                    word += ('--... ')
                    break;
                case '8':
                    word += ('---.. ')
                    break;
                case '9':
                    word += ('----. ')
                    break;
                case ' ':
                    word += ('/ ')
                    break;
                default:
                    validador = false;
            }
        }
        if (validador != true) {
            alert('Digite Apenas Números e Letras Sem acentuação')
            clean();
        } else {
            results.innerHTML = word;
        }
    } else {
        let morse = input.value.split(' ');
        for (let i = 0; i < morse.length; i++) {
            switch (morse[i]) {
                case '.-':
                    word += ('A')
                    break;
                case '-...':
                    word += ('B')
                    break;
                case '-.-.':
                    word += ('C')
                    break;
                case '-..':
                    word += ('D')
                    break;
                case '.':
                    word += ('E')
                    break;
                case '..-.':
                    word += ('F')
                    break;
                case '--.':
                    word += ('G')
                    break;
                case '....':
                    word += ('H')
                    break;
                case '..':
                    word += ('I')
                    break;
                case '.---':
                    word += ('J')
                    break;
                case '-.-':
                    word += ('K')
                    break;
                case '.-..':
                    word += ('L')
                    break;
                case '--':
                    word += ('M')
                    break;
                case '-.':
                    word += ('N')
                    break;
                case '---':
                    word += ('O')
                    break;
                case '.--.':
                    word += ('P')
                    break;
                case '--.-':
                    word += ('Q')
                    break;
                case '.-.':
                    word += ('R')
                    break;
                case '...':
                    word += ('S')
                    break;
                case '-':
                    word += ('T')
                    break;
                case '..-':
                    word += ('U')
                    break;
                case '...-':
                    word += ('V')
                    break;
                case '.--':
                    word += ('W')
                    break;
                case '-..-':
                    word += ('X')
                    break;
                case '-.--':
                    word += ('Y')
                    break;
                case '--..':
                    word += ('Z')
                    break;
                case '-----':
                    word += ('0')
                    break;
                case '.----':
                    word += ('1')
                    break;
                case '..---':
                    word += ('2')
                    break;
                case '...--':
                    word += ('3')
                    break;
                case '....-':
                    word += ('4')
                    break;
                case '.....':
                    word += ('5')
                    break;
                case '-....':
                    word += ('6')
                    break;
                case '--...':
                    word += ('7')
                    break;
                case '---..':
                    word += ('8')
                    break;
                case '----.':
                    word += ('9')
                    break;
                case '/':
                    word += (' ')
                    break;
                case ' ':
                    break;
                case '':
                    break;
                default:
                    validador = false;
            }if (input.value.length <= 1 && validador != true) {
                clean();
                alert('Digite Apenas Pontos e Traços ("." "-" "/")');
            }
            else if (validador != true) {
                alert('Digite Apenas Pontos e Traços ("." "-" "/")')
            } else {
                results.innerHTML = word;
            }
        }
    }

    for (let i = 0; i < todos.length; i++) {
        if (input.value === todos[i][0]) {
            console.log(todos[i][0])
            addFav.style.color = 'yellow'
            return addFav.innerHTML = '<i class="fa fa-star" aria-hidden="true"></i>'
        } else {
            addFav.style.color = 'rgb(153, 153, 153)'
            addFav.innerHTML = '<i class="fa fa-star-o" aria-hidden="true"></i>'
        }
    }
}

input.addEventListener("blur", refresh);

function clean() {
    results.innerHTML = '';
    input.value = '';
    blueBar.style.display = 'none';
    button.style.display = 'none';
}

// LOCAL STORAGE 2.0
let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    div.innerHTML = '';
    for (todo of todos) {
        let todoElement = document.createElement('div');
        let favText = document.createElement('div');
        let favMorse = document.createElement('div');

        favText.textContent = todo[0];
        favMorse.textContent = todo[1];

        let linkElement = document.createElement('i');
        linkElement.classList.add('fa');
        linkElement.classList.add('fa-star');

        let pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        todoElement.appendChild(favText);
        todoElement.appendChild(favMorse)
        todoElement.appendChild(linkElement);

        div.appendChild(todoElement);
    }
}

verify();
renderTodos();

addFav.onclick = function () {
    if (addFav.innerHTML === '<i class="fa fa-star" aria-hidden="true"></i>') {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i][0] === input.value) {
                todos.splice(i, 1);
                alert(`"${input.value}" Removed!`)
            }
        }
        renderTodos();
        saveToStorage();
        clean();
        verify();
    } else {
        let todoText = input.value;
        let todoMorse = results.textContent;
        console.log(todos)
        if (todoText.trim()) {
            todos.push([todoText, todoMorse]);
            renderTodos();
            saveToStorage();
            clean();
            verify();
            alert(`"${todoText}" Saved!`);
        }
        else {
            alert('Error');
        }
    }
}

unstarAll.onclick = () => {
    let confirmation = confirm('Are You Sure ?');
    if (confirmation === true) {
        clean();
        localStorage.clear();
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
        nothingStar.style.display = 'flex';
        alert('Done')
    }
};

function deleteTodo(pos) {
    alert(`"${todos[pos][0]}" Removed`)
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
    verify();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

function verify() {
    if (todos.length == 0) {
        nothingStar.style.display = 'flex';
    } else {
        nothingStar.style.display = 'none';
    }
}
// /localStorage2.0


// Detects if device is on iOS 
const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test( userAgent );
  }
  // Detects if device is in standalone mode
  const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
  
  // Checks if should display install popup notification:
  if (isIos() && !isInStandaloneMode()) {
      let showModal = document.querySelector('.iosAlertBoxWebApp');
      showModal.style.animation = 'show 8s ease-in-out 2s'
      showModal.style.display = 'flex'
      setTimeout( timeOutModal = () => {showModal.style.display = 'none'}, 10000)
  }


//SERVICE WORKER
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('service-worker.js')
        .then(function () {
            console.log('Service Worker Registered');
        }, function (error) {
            console.log(error);
        });
}