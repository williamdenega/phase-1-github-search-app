


document.addEventListener('DOMContentLoaded', init)


function init(){
    const form = document.getElementById('github-form')
    const search = document.getElementById('search')
    form.addEventListener('submit', handleSubmit)
    

}

function handleSubmit(e){
    e.preventDefault(e)
    if(search.value === ''){
        alert("Please input a value")
        init()
    }else{
        document.getElementById('user-list').innerText =""
        
        console.log(search.value)
        fetch(`https://api.github.com/search/users?q=${search.value}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/vnd.github.v3+json',
                Accept: 'application/vnd.github.v3+json'
            },
        })
        .then(res => res.json())
        .then(arryNames => arryNames['items'].forEach(item => displayNames(item)))
        e.target.reset()

    }

}


function displayNames(name){
    console.log(name)
    const userList = document.querySelector('#user-list')
    let userCard = document.createElement('div')
    userCard.className = "user-cards"
    userCard.innerHTML = `
        <img src= ${name['avatar_url']}>
        <h1 id='h2'>${name['login']}</h1>
        <div>
            <h4 id='h4'><a href="${name['html_url']}">View Github</a></h4>
        </div>
   

    `
    userList.appendChild(userCard)
}


