setInterval(() => {

    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.getDate();

    if(hours < 10) { hours = '0' + hours; }
    if(minutes <10) { minutes = '0' + minutes; }
    if(seconds <10) { seconds = '0' + seconds; }

    document.getElementById("reloj").innerHTML = hours+':'+minutes+':'+seconds+':'+day;
},

5000);