const tambah = (nilai1, nilai2) => nilai1 + nilai2;

console.log (`Hasil penjumlahannya adalah ${tambah(5,10)}`);

const buah1 = "apel";
const buah2 = "jeruk";
const buah3 = "mangga";
const buah4 = "pisang";

const buah = ["apel", "jeruk", "mangga", "pisang"];

console.log(`Buah terakhir = ${buah[buah.length - 1]}`);

for (let i = 0; i < mahasiswa.length; i++) {
    console.log(`Nama: ${mahasiswa[i].Nama}`);
}

mahasiswa,map(mahasiswa => {
  console.log(`Nama: ${Nama}`)
})

const grading = function(nilai) {
  let grade = "";

  if (nilai <= 4 && nilai > 3.5) {
    grade = "Cumlaude (Dengan Pujian)";
  } else if (nilai <= 3.5 && nilai > 2.75) {
    grade = "Sangat Memuaskan";
  } else if (nilai <= 2.75 && nilai >= 2) {
    grade = "Memuaskan";
  } else if (nilai < 2 && nilai >= 0) {
    grade = "Pulang besok belajar lagi";
  } else {
    grade = "Gatau";
  }

  return grade;
}

// array object
const mahasiswa = [
  {
    NIM: 2201001,
    Nama: "Budi Santoso",
    Prodi: "Sistem Informasi",
    IPK: 3.45
  },
  {
    NIM: 2201002,
    Nama: "Siti Aminah",
    Prodi: "Teknik Informatika",
    IPK: 3.82
  },
  {
    NIM: 2201003,
    Nama: "Agus Wijaya",
    Prodi: "Informatika",
    IPK: 3.20
  },
  {
    NIM: 2201004,
    Nama: "Dewi Lestari",
    Prodi: "Rekayasa Perangkat Lunak",
    IPK: 3.61
  },
  {
    NIM: 2201005,
    Nama: "Rizky Pratama",
    Prodi: "Sistem Informasi",
    IPK: 2.95
  }
];

const mahasiswaSI = mahasiswa.filter(mhs => mhs.Prodi === "Sistem Informasi");

console.log(mahasiswaSI);