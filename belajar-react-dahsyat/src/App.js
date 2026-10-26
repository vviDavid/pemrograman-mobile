import ProfilMahasiswa from './components/ProfilMahasiswa';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProfilMahasiswa nama="Dapid" nim="2422121747" prodi="TI" semester="5" />
      <ProfilMahasiswa nama="Kina" nim="2422114016" prodi="SI" semester="5" />
    </div>
  );
}

export default App;