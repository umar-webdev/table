let tdAll=document.querySelector('table').querySelectorAll('td');
let currentEditing=null;
let oldHtml;

tdAll.forEach((x)=>{ 
  x.onclick=(e)=>{tdClick(x)};
})


function tdClick(td) {
  console.log(currentEditing)
  if(currentEditing==td){
    console.log("clicking on same td");
    return;
  }
  if(currentEditing!=td && currentEditing!=null){
      console.log("please finish "+currentEditing+"first");
      return;   
  }
  currentEditing=td;
  oldHtml = td.innerHTML;
  let oldValue = oldHtml.trim();
  let newHtml = `
  <div class="card-body">
  <input type="text" class="form-control" value="${oldValue}">
  <div class="btn-group d-flex flex-row card" role="group" aria-label="Basic example" style="margin-top:0.1rem; margin-bottom: 0.1rem;">
  <button class="btn btn-sm btn-success" onClick="commitEdit(event,currentEditing)"><i class="fa-solid fa-check"></i></button>
  <button class="btn btn-sm btn-danger" onClick="discardEdit(event,currentEditing)"><i class="fa-solid fa-xmark"></i></button>
  </div>
  </div>
  `;
  td.innerHTML=newHtml;  
}
function commitEdit(e,td){
  e.stopPropagation();
  let ref=td;
  let txtBox=ref.querySelector('input');
  console.log(txtBox.value,"Send this data to upadte");
  discardEdit(e,td,txtBox.value);//do it after api call
}
function discardEdit(e,td,replaceValue=null){
  e.stopPropagation();
  currentEditing=null; 
  td.innerHTML=replaceValue==null?oldHtml:replaceValue;
  
  //  e.innerHTML=oldHtml;
}

