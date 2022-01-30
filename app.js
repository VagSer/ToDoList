const questList = document.getElementById('questList')
const input = document.getElementById('input')
const newQuest = document.getElementById('newQuest')
const deleteAllDone = document.getElementById('deleteDone')
const themeDark = document.querySelector('.themeDark__checkbox')

themeDark.addEventListener('change', changeTheme, false)

input.addEventListener('keydown', (event) => {
    if(event.key === "Enter")
    addNewQuest();
})

function addNewQuest(){
    if (input.value !== '') {
        const divParent = document.createElement('div')
        const divChild = document.createElement('div')
        const deleteButton = document.createElement('button')
        divParent.className = 'quest'
        divParent.innerHTML = `<div>${input.value}</div>`
        deleteButton.className = 'deleteButton'
        deleteButton.innerHTML = 'Убрать'
        deleteButton.addEventListener('click', () => {
            divParent.remove()
        })
        divParent.addEventListener('click', () => {
            if (divParent.classList.contains('done')) {
                divParent.classList.remove('done')
            } else (divParent.classList.add('done'))
        })
    
        divChild.appendChild(deleteButton)
        divParent.appendChild(divChild)
        questList.appendChild(divParent)
        input.value=''
    }   
}

function changeTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light')
    }
}

function deleteDone(){
    const quest = document.getElementsByClassName('quest')
    for (let i=0; i<quest.length; i++) {
        
        if (quest[i].classList.contains('done')) {
            quest[i].remove()
            i--
        }
    }
}

function deleteAll(){
    document.querySelector('#questList').innerHTML=''
}