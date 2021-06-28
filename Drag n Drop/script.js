function allow(event){
    event.preventDefault();
}
function drag(event){
    event.dataTransfer.setData('img',event.target.id);
}


function drop(event){
    // event.preventDefault();
    var data=event.dataTransfer.getData('img');
    event.target.appendChild(document.getElementById(data));
}