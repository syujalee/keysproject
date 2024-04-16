let inputnama = document.getElementById("nama");
let inputtestimoni = document.getElementById("testimoni");
let btnsimpan = document.getElementById("btnsimpan");
let list = document.getElementById("List");

let data = [];

btnsimpan.addEventListener("click", function() {
    if (localStorage.getItem("testimoni")) {
        // ada localstorage dengan key testimoni 
        data = JSON.parse(localStorage.getItem("testimoni"));
        data.push
         nama: inputnama.value,
         testimoni: inputtestimoni.value,
    }
    else {
        // belum ada local storage dengan key testimoni"));
        data.push(
            nama: inputnama.value,
            testimoni: inputtestimoni.value,
        );
    }
    
    // simpan ke dalam local storage 
    localStorage.setItem("testimoni", JSON.stringify(data));
    // panggil getdata()
    getdata();
     

    // tampilkan data localstorage
    function getdata() {
        // clear element list 
        list.innerHTML = "";

        if (localStorage.getItem("testimoni")) {
        // ada localstorage dengan key testimoni 
        data = JSON.parse(localstorage.getItem("testimoni"))
        for (const [index, row] of data.entries ()) {
            list.innerHTML += </li>${row.testimoni}</li>' ;
          }
        }
    }
    
    // panggil getData()
get data();  
