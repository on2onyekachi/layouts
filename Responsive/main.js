const submitBtn = document.querySelector('button')
const form = document.querySelector('form')
const inputs = document.querySelectorAll('input');

const handleSubmit = (e) => {
    e.preventDefault()
    inputs.forEach(input => {
        let inputValue = input.value;
        if(input.name == 'mail'){
            if(!isEmail(input.value)) handleError(input)
        }else if(inputValue == ''){
            handleError(input)
        }
    })
}

function handleError(input){
    let parentDiv = input.parentElement
    parentDiv.classList.add('active')
    input.addEventListener('focus', function(){
        parentDiv.classList.remove('active')
    })
}
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
form.addEventListener('submit', handleSubmit)