import KartuMahasiswa from './components/KartuMahasiswa';
import './App.css';

const mahasiswa = [
  {
    nama: "Budi Santoso",
    nim: "231002",
    prodi: "Informatika"
  },
  {
    nama: "Siti Aminah",
    nim: "231003",
    prodi: "Sistem Informasi"
  },
  {
    nama: "Rina Putri",
    nim: "231004",
    prodi: "Informatika"
  }
]

function App() {
  return (
    <div className="App">
      {mahasiswa.map((mhs) => (
        <KartuMahasiswa nama={mhs.nama} nim={mhs.nim} prodi={mhs.prodi} />
      ))}
    </div>
  );
}

export default App;