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

const methodMahasiswa = {
     makan: function(porsi){
        this.energy += porsi
        console.log(`Halo ${this.nama}, Selamat makan`)
    },

    main: function(jam){
        this.energy -= jam;
        console.log(`Halo ${this.nama}, Selamat bermain`)
    },

    tidur: function(jam){
        this.energy += jam * 2;
        console.log(`Halo ${this.nama}, Selamat tidur`)
    }
}

function Mahasiswa(nama, energy){
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;
    // mahasiswa.makan = methodMahasiswa.makan;
    // mahasiswa.main = methodMahasiswa.main;
    // mahasiswa.tidur = methodMahasiswa.tidur;


    return mahasiswa;
}

let luthfi = Mahasiswa('luthfi', 10);
let indra = Mahasiswa('indra', 20);

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