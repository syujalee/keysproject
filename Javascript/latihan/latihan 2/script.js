let data = ["alfredo","david" ,"felix"];
let listMhs =document.getElementById ("listmhs");

data.forEach(showMahasiswa);

function showMahasiswa(value, index) {
console.log(value);
// listmhs.innerHTML = "<li>" + value + "</li>";
listMhs.innerHTML = "<li>" + value + "<li>" ;

}

