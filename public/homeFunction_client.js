let ourForm = document.getElementById('ourForm')

let ourField = document.getElementById('ourField')

let ourList = document.getElementById('ourList')



ourForm.addEventListener('submit', function(e){
    e.preventDefault()
    // prevent default is preventing browsers default behaviour of the current form, when a user submits a form instead of taking the data somewhere else and reload the page, this method just prevents it.
    createItem(ourField.value)
    
})

function createItem(userTypedData) {
    let ourHTML = `<li id='ourItem' data-id='somethings' onclick="ourItemID(this)">${userTypedData}<button onclick="deleteItem(this)" >Delete</button></li>`
    ourList.insertAdjacentHTML('beforeend', ourHTML)
    // ourField.value = ''
    ourField.focus()
}


function deleteItem(elementToDelete){
    elementToDelete.parentElement.remove()
}


function ourItemID(itemID){
   let getAttribute = document.getElementById('ourItem').getAttribute('data-id')
   let getValue = document.getElementById('ourItem')
   console.log(getAttribute.toUpperCase(), getValue.innerText, itemID)
   
}



    

        