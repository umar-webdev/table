let tdtext = document.querySelector('tbody,tr,td,*');
let edittd;
tdtext.onclick = function (event) {
  let target = event.target.closest('.btn-success , .btn-danger , td')
  if (!table.contains(target)) return;
  if (target.className == 'btn-success') {
    finishTdEdit(edittd.elem, false);
  } else if (target.className == 'btn-danger') {
    finishTdEdit(edittd.elem, true);
  } else if (target.nodeName == 'TD') {
    if (edittd) return; // already editing
    makeTdEditable(target);
  }

};
function makeTdEditable(td)
{
  edittd = {
    elem: td,
    data: td.innerHTML
  };
  //added textbox and buttons;
  td.classList.add('edit-td');
  let input = document.createElement('input');
  input.type = ('text');
  input.style.size = '30';
  input.className = 'edit-area form-control';
  let trim = td.innerHTML.trim();
  input.value = trim;
  td.innerHTML = '';
  td.appendChild(input);
  input.focus();

  td.insertAdjacentHTML("BeforeEnd",
    '<div class="btn-group d-flex flex-row card" role="group" aria-label="Basic example" style="margin-bottom: 0.1rem; width:100%"><div className="container" style="height: 1.4rem; width: 48%;"><button class="btn-success" style="border:none; margin-right: 0.76rem; cursor: pointer; margin-left: 0.1rem;margin-top: 0.1rem;"><i class="fa-solid fa-check"></i> </button></div><div className="container" style="width: 50%;"><button class="btn-danger" style="cursor: pointer; border:none;margin-top: 0.1rem;width: 100%;"><i class="fa-solid fa-xmark"></i></button></div></div>');
}
function finishTdEdit(td, Ok)
 {
  if (Ok) {
    td.innerHTML = edittd.data;


  } else {
    td.innerHTML = td.firstChild.value;
   
  }
  td.classList.remove('edit-td');
  edittd = null;
}








