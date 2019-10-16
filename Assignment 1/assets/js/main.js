const items = document.getElementById('items')

// Conrad helped me with this part

const loadItems = () => {
    fetch('film.json')
        .then(res => res.json())
        .then(data => {
            data.forEach(p => {
                const { image, name, price, exposure, type} = p
                items.innerHTML = items.innerHTML + `<div class="item">
                                                        <img id="film-pic" src="${image}">
                                                        <div class="info"> 
                                                            <p id="name">${name}</p>
                                                            <p id="type">Film Type: ${type}</p>
                                                            <p id="exposure">Exposures: ${exposure}</p>
                                                            <p id="price">Price: $${price}</p>
                                                         </div>
                                                     </div>
                                                     </br>`
            })
        })
        .catch(err => console.log(err))
}

document.addEventListener("DOMContentLoaded", loadItems)


const showComment = () => {
    const commentVal = document.getElementById('comment-input').value
    document.getElementById('comment-output').innerHTML = `<b>Comment:</b> ${commentVal}`
}
document.getElementById('comment-data').addEventListener('click', showComment)

function addItem() {
    let item = document.getElementById('comment-input').value
    let newItem = document.createElement('li')
    newItem.appendChild(document.createTextNode(item))
    document.getElementById('todoList').appendChild(newItem)
}
document.getElementById('todolistButton').addEventListener('click', addItem)