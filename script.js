//Cara Membuat object pada JavaScript
// 1. Object Literal
//  PROBLEM : TIDAK EFEKTIF UNTUK OBJECT BANYAK
// let mahasiswa1 = {
//     nama: 'Luthfi',
//     energy: 10,
//     makan: function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`Selamat Datang ${this.nama}, Selamat Makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Dika',
//     energy: 20,
//     makan: function(porsi){
//         this.energy = this.energy + porsi;
//         console.log(`Selamat Datang ${this.nama}, Selamat Makan!`);
//     }
// }

// 2. Function Declaration

// const methodMahasiswa = {
//      makan: function(porsi){
//         this.energy += porsi
//         console.log(`Halo ${this.nama}, Selamat makan`)
//     },

//     main: function(jam){
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, Selamat bermain`)
//     },

//     tidur: function(jam){
//         this.energy += jam * 2;
//         console.log(`Halo ${this.nama}, Selamat tidur`)
//     }
// }

// function Mahasiswa(nama, energy){
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     return mahasiswa;
// }

// let luthfi = Mahasiswa('luthfi', 10);
// let indra = Mahasiswa('indra', 20);

// function Mahasiswa(nama, energy){
//     this.nama = nama;
//     this.energy = energy;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energy += porsi;
//     return `Halo ${this.nama}, Selamat Makan!`;
// }
// Mahasiswa.prototype.main = function(jam) {
//     this.energy -= jam;
//     return `Halo ${this.nama}, Selamat Main!`;
// }
// Mahasiswa.prototype.tidur = function(jam) {
//     this.energy += jam * 2;
//     return `Halo ${this.nama}, Selamat Tidur!`;
// }

// let luthfi = new Mahasiswa('Luthfi', 10);

// VERSI CLASS
// class Mahasiswa {
//     constructor(nama, energy){
//         this.nama = nama;
//         this.energy = energy;
//     }
//     makan(porsi) {
//         this.energy += porsi;
//         return `Halo ${this.nama}, Selamat Makan!`;
//     }

//     main(jam) {
//         this.energy -= jam;
//         return `Halo ${this.nama}, Selamat Main!`;
//     }

//     tidur(jam) {
//         this.energy += jam * 2;
//         return `Halo ${this.nama}, Selamat Tidur!`;
//     }

// }

// let luthfi = new Mahasiswa('Luthfi', 10);
// let dika = new Mahasiswa('Dika', 20);

// let angka = [2, 1, 3];
// console.log(angka);

// 3. Constructor Function
//keyword new
// function Mahasiswa(nama, energy){
//     this.nama = nama;
//     this.energy = energy;

//     this.makan = function(porsi){
//         this.energy += porsi
//         console.log(`Selamat makan ${this.nama}`)
//     }

//     this.main = function(jam){
//         this.energy -= jam;
//         console.log(`Selamat Bermain ${this.nama}`)
//     }
// }

// let luthfi = new Mahasiswa('luthfi', 10);

// 4. Object.create

// Constructor Function harus menggunakan keyword new dan tidak bisa diinstance dari function lain
// Lebih sering menggunakan constructor function

// 2.1 EXECUTION CONTEXT, HOISTING, & SCOPE

// console.log(nama);
// var nama = 'Luthfi';

// creation phase pada Global context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

//execution phase

// var nama = 'Luthfi';
// var umur = 19;

// console.log(sayHello());
// function sayHello(){
//     return `Halo nama saya ${nama}, umur ${umur} tahun`;
// }

// function membuat local execution context yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = 'Luthfi Kurnia Hadi';
// var username = '@luth29._';

// function cetakURL(username){
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }
// console.log(cetakURL(username));

// CLOSURE
// function init(){
//     // let nama = 'Luthfi';
//     function tampilNama(nama){
//         console.log(nama);
//     }
//     return tampilNama;
// }
// let panggilNama = init();
// panggilNama('Hadi');

// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`Halo ${nama}, Selamat ${waktu}, Semoga harimu menyenangkan!`)
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Luthfi');

// 3.3 Arrow Function
// Function Expression
// const tampilNama = function (nama) {
//     return `Halo ${nama}`;
// }
// console.log(tampilNama('Luthfi'));

// Implisit Return
// const tampilNama = nama =>  `Halo ${nama}`;
// console.log(tampilNama('Luthfi'));

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Dika', 'Siang'));

// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());

// let mahasiswa = ['Sandhika Galih', 'Doddy Ferdiansyah', 'Erik'];
// let jumlaHuruf = mahasiswa.map(function(nama){
//     return nama.length;
// });
// console.log(jumlaHuruf);

// Arrow Function
// let jumlaHuruf = mahasiswa.map( nama => nama.length);
// console.log(jumlaHuruf);

//Kembalian Berupa Object
// let jumlaHuruf = mahasiswa.map( nama => ({ nama, jmlHuruf: nama.length }));
// console.table(jumlaHuruf);

// Konsep this pd arrow function
//Constructor Function
// const Mahasiswa = function(){
//     this.nama = 'Luthfi';
//     this.umur = 19;
//     this.sayHello = function(){
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`)
//     }
// }
// const Luthfi = new Mahasiswa();

//Arrow Function
// const Mahasiswa = function(){
//     this.nama = 'Luthfi';
//     this.umur = 19;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`)
//     }
// }
// const Luthfi = new Mahasiswa();

// Object Literal
// const mhs1 = {
//     nama: 'Luthfi',
//     umur: 19,
//     sayHello: () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//         console.log(this);
//     }
// }

// const Mahasiswa = function(){
//     this.nama = 'Luthfi';
//     this.umur = 19;
//     this.sayHello = function(){
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`)
//     }

//     setInterval(() => {
//         console.log(this.umur++)
//     }, 500);
// }
// const Luthfi = new Mahasiswa();

// const box = document.querySelector('.box');
// box.addEventListener('click', function() {
//     let satu = 'size';
//     let dua = 'caption';

//     if(this.classList.contains(satu)){
//         [satu, dua] = [dua, satu];
//     }
//     this.classList.toggle(satu);
//     setTimeout(() => {
//     this.classList.toggle(dua );
//     }, 600);
// });

// TEMPLATE LITERAL
// const nama = 'Luthfi';
// const umur = 19;
// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun`);

// Embedded Expression
// console.log(`${1+1}`);
// console.log(`${alert('Haii!')}`);
// const x = 11;
// console.log(`${(x % 2 == 0) ? 'Genap' : 'Ganjil'}`);

// HTML Fragments
// const mhs = {
//     nama: 'Luthfi',
//     umur: 19,
//     nim: '011365297',
//     email: 'lkurniahadi@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
// </div>`;
// console.log(el);

// Latihan Template Literal
// 1. HTML Fragments
// const mhs = {
//     nama: 'Luthfi',
//     umur: 19,
//     nim: '011365297',
//     email: 'lkurniahadi@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nim}</span>
// </div>`;
// console.log(el);

// 2. Looping
// const mhs = [
//     {
//         nama: 'Luthfi',
//         email: 'lkurniahadi@gmail.com'
//     },
//     {
//         nama: 'Pak Dika',
//         email: 'sandhikagalih@gmail.com'
//     },
//     {
//         nama: 'Baron',
//         email: 'baron12@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`

// 3.Conditionals
// Ternary
// const lagu = {
//     judul: "Kau Adalah",
//     penyanyi: "Isyana Sarasvati",
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`

// 4. Nested (HTML Fragments Bersarang)
// const mhs = {
//     nama: 'Luthfi',
//     semester: 5,
//     matkul: [
//         'Rekayasa Web',
//         'Analisis dan Perancangan Sistem Informasi',
//         'Pemrograman Sistem Interaktif',
//         'Perancangan Sistem Berorientasi Objek'
//     ]
//     };

//     function cetakMatkul(matkul){
//         return `
//         <ol>
//             ${matkul.map(m => `<li>${m}</li>`).join('')}
//         </ol>
//         `;
//     }

//     const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <h4>Mata Kuliah</h4>
//     ${cetakMatkul(mhs.matkul)}
//     </div>`
//     document.body.innerHTML = el;

// Tagged Templates
// const nama = 'Luthfi';
// const umur = 19;

// function coba(strings, ...values){
// let result = '';
// strings.forEach((str, i) => {
//     result += `${str}${values[i] || ''}`
// });
// return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// };
// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// Destructuring Variable / Assignment
// Destructuring Array
// const perkenalan = ['Halo', 'nama', 'saya', 'Luthfi'];
// const [salam, satu, dua, nama] = perkenalan;
// const [salam, , , nama] = perkenalan; // Skip Item
// console.log(salam)

//Swap Array/Item
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//Return value pd function
// function coba(){
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

//Rest Parameter
// const [a, ...values] = [1,2,3,4,5,6,7,8,9];
// console.log(values);

// Destructuring Object
// const mhs = {
//     nama: 'Luthfi Kurnia',
//     umur: 19
// }

// const {nama, umur} = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object
// ({nama, umur} = {
//     nama: 'Luthfi Kurnia',
//     umur: 19
// });
// console.log(nama);

// Assign ke variabel baru
// const mhs = {
//     nama: 'Luthfi Kurnia',
//     umur: 19
// }

// const {nama, umur} = mhs;
// console.log(nama);

// Memberikan default value
// const mhs = {
// nama: 'Luthfi Kurnia',
// umur: 19,
// email: 'lkurniahadi@gmail.com'
// }

// const {nama, umur, email = 'email@default.com'} = mhs;
// console.log(email);

// Memberikan default value + assignment
// const mhs = {
// nama: 'Luthfi Kurnia',
// umur: 19,
// email: 'lkurniahadi@gmail.com'
// }

// const {nama: n , umur: u , email: e = 'email@default.com'} = mhs;
// console.log(e);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
// id: 123,
// nama: 'Luthfi Kurnia',
// umur: 19,
// email: 'lkurniahadi@gmail.com'
// }

// function getIdMhs({id}){
//     return id;
// }
// console.log(getIdMhs(mhs));

// DESTRUCTURING
// function penjumlahanPerkalian(a,b){
//     return [a + b, a * b];
// }
// const tambah = penjumlahanPerkalian(2,3)[0];
// const kali = penjumlahanPerkalian(2,3)[1];

// const [jumlah, kali ] = penjumlahanPerkalian(2,3);
// console.log(jumlah);

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, tambah, kurang, kali } = kalkulasi(2, 3);
// console.log(kali);

// Destructuring function arguments
// const mhs1 = {
//   nama: "Luthfi",
//   umur: 19,
//   email: "lkurniahadi@gmail.com",
//   nilai: {
//     tugas: 80,
//     uts: 87,
//     uas: 92,
//   },
// };
// function cetakMhs(mhs){
//     return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }
// function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
//   return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya ${uas}`;
// }
// console.log(cetakMhs(mhs1));

// FOR .. OF
// Array
// const mhs = ["Luthfi", "Iqbal", "Andino"];
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// for(const m of mhs){
//   console.log(m);
// }

// String
// const nama = "Luthfi";
// for(const n of nama){
//   console.log(n);
// }
// const mhs = ["Luthfi", "Iqbal", "Andino"];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa IT ke-${i + 1}`);
// });
// for(const [i,m] of mhs.entries()){
//   console.log(`${m} adalah mahasiswa IT ke-${i + 1}`);
// }

// NodeList
// const liNama = document.querySelectorAll(".nama");
// liNama.forEach(n => console.log(n.textContent));
// for(n of liNama){
//     console.log(n.innerHTML);
// }

// ARGUMENTS
// function jumlahkanAngka() {
//   return arguments.reduce((a, i) => a + 1);
// arguments.forEach(a=> jumlah += a);
//     let jumlah = 0;
//     for(a of arguments){
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// FOR .. IN
// const mhs = {
//   nama: "Luthfi",
//   umur: 19,
//   email: "lkurniahadi@gmail.com",
// };

// for (m in mhs) {
  // untuk ambil value/nilai
//   console.log(mhs[m]);
  // untuk ambil properti dalam objek
//   console.log(m);
// }

// Spread Operator
// memecah iterable menjadi single elemnt
// const mhs = ['Luthfi', 'Iqbal', 'Andino'];
// console.log(...mhs[0]);

// Menggabungkan 2 array/Lebih
// const mhs = ['Luthfi', 'Iqbal', 'Andino'];
// const dosen = ['Sandhika', 'Yusuf', 'Jarwo'];
// const orang = [...mhs, ...dosen];
// const orang = mhs.concat(dosen)
// console.log(orang);

// Meng-Copy array
// const mhs = ['Luthfi', 'Iqbal', 'Andino'];
// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs);

// const liMhs = document.querySelectorAll('li');
// const mhs = [...liMhs].map(m => m.innerHTML);
// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;