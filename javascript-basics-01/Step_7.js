function getInputValue() {
  let s = Number(document.getElementById("shoe_size").value) ;
  let y =Number (document.getElementById("year").value);
  let result = (((((s*2)+5)*50)-y)+1766);
  window.alert(result);
}

