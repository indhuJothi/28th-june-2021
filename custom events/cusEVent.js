function resFun(name,course,color)
{
   const event=new CustomEvent('addText',{
        detail:{
        name:'Indhu',
        course:'HTML, CSS and JS',
        color:'purple'
        
    },
    bubbles:true,
    cancelable:true
});
  res.dispatchEvent(event);
}

var res=document.getElementById('res');
res.addEventListener('addText',(e)=>{
    res.textContent=e.detail.name+ ' completed '+e.detail.course;
    res.style.color=e.detail.color;
});
resFun();