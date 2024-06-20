// alert("samlekom")


// prompt('Nama Saya: ')

/*
const = value tidak bisa diubah
let = value bisa diubah atau ditimpa
var = value bisa diubah atau ditimpa

prompt = nampilkan pop up form
**/

/*
let nama = 'Joko'
let usia = 33
let alamat = 'sidoarjo'
let tinggiBadan = 188
let beratBadan 
let pasangan = 2 

beratBadan = 88 //mengisi nilai variabel

if(pasangan == null){
    pasangan = "belum punya"
}else{
    pasangan = 'sudah punya'
}

let saldoAwal = 50000
let saldoTambahan = 80000

const saldoAkhir = saldoAwal+saldoTambahan

// switch(pasangan) {
//     case 1:
//         pasangan = 'punya 1 aja'
//     break
//     case 2:
//         pasangan = 'playboy'
//     break
//     default:
//         pasangan = "belum punya"
//         break
// }

// cara panggil semua variable sekaligus
alert (
    `Nama saya ${nama} sekarang usia saya ${usia} tinggi badan saya ${tinggiBadan}cm serta berat badan saya ${beratBadan}kg. beralamat di ${alamat} dan status saya ${pasangan}`)

alert (`Saldo awal saya Rp.${saldoAwal} & tambahan saldo saya Rp.${saldoTambahan} jadi total saldo saya Rp.${saldoAkhir}`)
**/

// ARRAY

/*
push = masukin nilai baru pada variable array
shift = hapus index pertama pada array
pop = hapus index terakhir pada array
**/

// let namaGuru =['Jodi', 'Joko', 'Siti']
// namaGuru.push('Fikri', 'rahmah') 
// namaGuru.shift()
// namaGuru.pop()
// alert(namaGuru)

// CARA LAIN ARRAY
// let namaMurid = []
// namaMurid [0] = 'didi'
// namaMurid [1] = 'sasa'

// namaMurid.pop()

// alert(namaMurid)


// LOOPING

/**
 * while = mencari kondisi lalu dieksekusi
 * do while = dieksekusi dahulu lalu mencari kondisi
 */

// const namaGuru = ['Joko', 'didi', 'sasa', 'lala']

// for(let i = 0; i < namaGuru.length; i++){
//     console.log(namaGuru[i])
// }

let i = 0
// while(i < 10){
//     i++
//     console.log('alwan')
// }

do{
    i++
    console.log('alwan')
}while (i < 10)