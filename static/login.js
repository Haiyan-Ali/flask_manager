

$.getJSON("https://api.ipify.org?format=json", function (data) {
    document.getElementById('sauklaf').value = data.ip + ' | '+ navigator.userAgent
    
})

