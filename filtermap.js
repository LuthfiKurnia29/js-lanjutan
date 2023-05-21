// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//FILTER
    //Mencara angka >= 3
        // FOR
        // const newAngka = [];
        // for( let i = 0; i < angka.length; i++ ){
        //     if(angka[i] >= 3){
        //         newAngka.push(angka[i]);
        //     }
        // }
        // console.log(newAngka);

        //FILTER
        // const newAngka = angka.filter(e => e >= 3);
        // console.log(newAngka);

//MAP
    //Kalikan semua angka dengan 2
    // const newAngka = angka.map(e => e*2);
    // console.log(angka);
    // console.log(newAngka);

//REDUCE
    //Jumlahkan seluruh elemen pd array
    // const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // console.log(newAngka);

// Method Chain
    //Cari angka > 5
    //Kalikan
    //Jumlahkan
    // const hasil = angka.filter(e => e > 5)
    //                 .map(e => e * 3)
    //                 .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // console.log(hasil);



// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

//pilih hanya yang js lanjutan
let jslanjutan = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

//ambil durasi masing2 video
.map(item => item.dataset.duration)

// ubah durasi mnjd float lalu ubah menit->detik
.map(waktu => {
    // 10:30 -> [10, 30] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})

// Jumlahkan semua detiknya
.reduce((total, detik) => total + detik, 0); 

// Ubah formatnya jam-menit-detik

let jam = Math.floor(jslanjutan / 3600);
jslanjutan = jslanjutan - jam * 3600;

const menit = Math.floor(jslanjutan / 60);

const detik = jslanjutan - menit * 60;

//simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`
const jmlVideo =  videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pjmlVideo = document.querySelector('.jumlah-video');
pjmlVideo.textContent = `${jmlVideo} Video`

console.log(jmlVideo);