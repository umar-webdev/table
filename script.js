let table = document.getElementById('table');
let edittd;
 table.onclick = function(event){
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
    function makeTdEditable(td) {
        edittd = {
          elem: td,
          data: td.innerHTML
    };
    td.classList.add('edit-td'); 
    let textArea = document.createElement('textarea');
    textArea.style.width = td.clientWidth + 'px';
    textArea.style.height = td.clientHeight + 'px';
    textArea.style.resize = 'none';
    textArea.className = 'edit-area';
  
    textArea.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(textArea);
    textArea.focus();
  
    td.insertAdjacentHTML("BeforeEnd",
      '<div class="btn-group" role="group" aria-label="Basic example" style="width:100%"><button class="btn-success" style=" border-radius:4px; width: 50%; border:none; cursor: pointer;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg></button><button class="btn-danger" onclick="prev()" style=" border-radius:4px; cursor: pointer; width: 50%; border:none;"><svg xmlns="http://www.w3.org/2000/svg" style="width:8px;" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" /></svg></button></div>');
        
    }
  
  function finishTdEdit(td, Ok) {
    if (Ok) {
      td.innerHTML = td.firstChild.innerHTML;
    } else {
      td.innerHTML = edittd.data;
    }
    td.classList.remove('edit-td');
    edittd = '';
  }








