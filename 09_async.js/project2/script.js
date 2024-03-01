let main = document.querySelector(".main")
window.addEventListener("keydown",(e)=>{
    main.innerHTML = `
    <table border="2px">
  <tr>
    <th>keyname</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key===' '?'space':e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    `
})