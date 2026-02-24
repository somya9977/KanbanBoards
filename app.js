const tittle = document.getElementById("tittle")
const discription = document.getElementById("discription")
const submitBtn = document.getElementById("submit-btn")
const pendingDiv = document.getElementById("pending")
const working = document.getElementById("working")
const done = document.getElementById("done")


let tasks = JSON.parse(localStorage.getItem("tasks")) || []


submitBtn.addEventListener("click", () => {


    if(tittle.value == "" && discription.value == "")
    {
        alert("pls enter tittle and discription")
        return
    }
    
    const inputVal = tittle.value
    const discriptionVal = discription.value

    let taskObj = {
        id : Date.now(),
        tittle : inputVal,
        discription : discriptionVal,
        status : "pending"
    }

    tasks.push(taskObj)

    localStorage.setItem("tasks", JSON.stringify(tasks))

    const date = new Date()
    const currentDate = `${date.getDate()}, ${date.getMonth() + 1}, ${date.getFullYear()}`


    const mainDiv = document.createElement("div")
    const name = document.createElement("h3")
    const disName = document.createElement("p")
    const showDate = document.createElement("span")
    
    mainDiv.classList.add("mainDiv")
    name.classList.add("name")
    disName.classList.add("disName")


    name.innerText = inputVal
    disName.innerText = discriptionVal
    showDate.innerText = currentDate

    mainDiv.append(name, disName, showDate)
    pendingDiv.append(mainDiv)
    mainDiv.setAttribute("draggable", true)
    mainDiv.setAttribute("id", taskObj.id)

    tittle.value = ""
    discription.value = ""

    mainDiv.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("id",  taskObj.id)
})






})


working.addEventListener("dragover", (e) => {
    e.preventDefault()
})

working.addEventListener("drop", (e) => {
    e.preventDefault()
    const data = e.dataTransfer.getData("id")
    const draggedElement = document.getElementById(data)

    working.append(draggedElement)

    const task = tasks.find(t => t.id == data)
    if (task) {
        task.status = "working"
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

})

done.addEventListener("dragover", (e) => {
    e.preventDefault()
})

done.addEventListener("drop", (e) => {
    e.preventDefault()
    const data = e.dataTransfer.getData("id")
    const draggedElement = document.getElementById(data)
    done.append(draggedElement)

    const task = tasks.find(t => t.id == data)
    
     if (task) {
        task.status = "done"
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
})




window.addEventListener("load", () => {

    for (let item of tasks) {

        const mainDiv = document.createElement("div")
        const name = document.createElement("h3")
        const disName = document.createElement("p")
        const showDate = document.createElement("span")

        mainDiv.classList.add("mainDiv")
        name.classList.add("name")
        disName.classList.add("disName")

        name.innerText = item.tittle
        disName.innerText = item.discription

        const date = new Date(item.id)
        const currentDate = `${date.getDate()}, ${date.getMonth() + 1}, ${date.getFullYear()}`
        showDate.innerText = currentDate

        mainDiv.append(name, disName, showDate)

        mainDiv.setAttribute("draggable", true)
        mainDiv.setAttribute("id", item.id)

        
        mainDiv.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("id", item.id)
        })

        if (item.status == "pending") {
            pendingDiv.append(mainDiv)
        }
        if (item.status == "working") {
            working.append(mainDiv)
        }
        if (item.status == "done") {
            done.append(mainDiv)
        }
    }
})