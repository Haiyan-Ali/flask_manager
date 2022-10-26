var passwd = ''

function generateP() {
  var pass = '';
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz0123456789@#$';

  for (let i = 1; i <= 17; i++) {
    var char = Math.floor(Math.random()
      * str.length + 1);

    pass += str.charAt(char)
  }
  passwd = pass
  document.getElementById('aut_pas_btn').innerHTML = 'Strong Password: ( ' + pass + ' )'
}
generateP()

$(".aut_pas_btn").click(function () {
  document.getElementById('aut_pas_inp').value = passwd
});



function clipboard() {
  var inp = document.getElementById('mc4')
  inp.value = document.getElementById("get_values_paswd_btn").innerHTML

  var copyText = document.getElementById("mc4");

  copyText.select();
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
}


function bufferText() {    
    const el = document.createElement("textarea");
    el.value = event.target.innerHTML;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert('Copyed')
}
