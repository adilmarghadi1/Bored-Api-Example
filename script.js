 

let btn = document.getElementById('btn');

function Click() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(res=>res.json())
    .then(data=> {
      
      const replace = document.getElementById('replace')
      replace.textContent = data.activity;
      document.body.classList.add('fun')
    })
  
}

btn.addEventListener("click", Click)