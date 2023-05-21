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

const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }
    this.classList.toggle(satu);
    setTimeout(() => {
    this.classList.toggle(dua );
    }, 600);
});