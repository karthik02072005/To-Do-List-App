const input = document.querySelector("#todo")
const btn= document.querySelector("#btn")
const listcon=document.querySelector("#listcon")

function addtask(){
    if(input.value== ""){
        alert("enter the task")
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = input.value;
        listcon.appendChild(li);
        const span= document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }

    input.value="";
}

btn.addEventListener('click',()=>{
    addtask()
})

listcon.addEventListener("click",(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
})