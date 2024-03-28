function tambah(){
    let angka1 = parseFloat(document.getElementById("input1").value);
    let angka2 =parseFloat(document.getElementById("input2").value);

    let hasil =document.getElementById("hasil");

    hasil.innerHTML=angka1+angka2;
}

function kurang(){
    let angka1 = parseFloat(document.getElementById("input1").value);
    let angka2 =parseFloat(document.getElementById("input2").value);

    let hasil =document.getElementById("hasil");

    hasil.innerHTML=angka1-angka2;
}

function kali(){
    let angka1 = parseFloat(document.getElementById("input1").value);
    let angka2 =parseFloat(document.getElementById("input2").value);

    let hasil =document.getElementById("hasil");

    hasil.innerHTML=angka1*angka2;
}

function bagi(){
    let angka1 = parseFloat(document.getElementById("input1").value);
    let angka2 =parseFloat(document.getElementById("input2").value);

    let hasil =document.getElementById("hasil");

    hasil.innerHTML=angka1/angka2;
}
