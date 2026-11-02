import { useState } from "react";

function KartuMahasiswa({nama = "Ucok", nim = "0", prodi = "NN"}) {
    const [absensi, setAbsensi] = useState(0);

    return (
        <>
        <p>Nama: {nama}</p>
        <p>NIM: {nim}</p>
        <p>Prodi: {prodi}</p>
        <p>Absensi: {absensi}</p>
        <button onClick={() => setAbsensi(absensi + 1)}>Tambah Absen</button>
        <button onClick={() => setAbsensi(absensi - 1)}>Kurangi Absen</button>
        </>
    );
}

export default KartuMahasiswa;