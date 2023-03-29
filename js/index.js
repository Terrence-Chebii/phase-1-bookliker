
function showNames(names){
    names.forEach(books => {
        let list = document.querySelector('#list')
        let title = document.createElement('li')
        title.innerHTML = `
        <h2>${books.title}</h2>
        `
        list.appendChild(title)
        
        title.addEventListener('click' , () => {
            let details = document.querySelector('#show-panel')
            let li = document.createElement('li')
            li.innerHTML = `
            <img src='${books.img_url}'><br>
            <h1>${books.title}</h1><br>
            <h3>${books.subtitle}</h3>
            <h3>${books.description}</h3>
            <h6>${books.author}</h6>
            <button ${books.id}>like</button>

            <h2 id='disp'><h2>
            `
            details.appendChild(li)

            let btn = li.querySelector('button')
            btn.addEventListener('click' , vote)

            function vote(data){
                fetch('http://localhost:3001/users')
                .then(res => res.json())
                .then(data => vote(data))

                data.forEach(users => {
                let disp = li.querySelector('h2')
                disp.innerHTML = `
                ${users.username}
                `
            })
            }
        })
    });
}

fetch('http://localhost:3001/books')
.then(res => res.json())
.then(data => showNames(data))



