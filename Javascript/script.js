document.getElementById("welcome").innerHTML="belajar.js";
document.getElementById("nama").innerHTML ="<b>Ahmad</b>";
document.getElementById("email").innerText = "ahmad@test.com";

console.log("hanya bisa dilihat di console");


// variabel
let nama = "";
let email = "";
let data = []; // array / larik

// function
function tampil() {
console.log("Button ditekan");
// simpan value txtNama ke dalam variabel "nama"
nama = document.getElementById("txtNama").value;
console.log(nama);
// ubah konten <p id="nama">
document.getElementById
("nama").innerHTML = nama;
document.getElementById("nama").innerHTML = nama;
document.getElementById("email").innerHTML = email;
("email").innerHTML = email;
//simpan ke dalam array data
data.push(nama)
console.log(data);
}
