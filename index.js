function loadTable() {
  const xhttp = new XMLHttpRequest();
  xhttp.open ("GET", "https://www.mecallapi.com/api/users");
  xhttp.send();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log(this.responseText);
      var trHTML = '';
      const objects = JSON.parse(this.responseText);
      for (let object of objects) {
        trHTML += '<tr>';
        trHTML += '<td>'+object['id']+'</td>';
        trHTML += '<td>'+object['avatar']+'</td>';
        trHTML += '<td>'+object['fname']+'</td>';
        trHTML += '<td>'+object['lname']+'</td>';
        trHTML += '<td>'+object['username']+'</td>';
        trHTML += '<td></td>';

        trHTML += '</td>';
      }
      document.getElementById("mytable").innerHTML = trHTML;
    }
  }
}

loadTable();