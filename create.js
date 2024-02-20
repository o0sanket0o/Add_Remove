const box=document.getElementsByClassName("box");
const main=document.getElementById("main");
const add=document.getElementById("append");
const remove=document.getElementById("remove");
remove.addEventListener("click",function(){
    var l=box.length;
    if(l==1){
        alert("Can't remove this box.");
    }else{
        var curr=box[box.length-1];
        curr.remove();
    }
})
add.addEventListener("click",function(){
    var create=document.createElement('div');
    create.classList.add("box");
    main.appendChild(create);  
})