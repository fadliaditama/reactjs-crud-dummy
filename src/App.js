import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./component/Beranda";
import ManajemenKeuangan from "./component/ManajemenKeuangan";
import Navbar from "./component/Navbar.jsx";
import {useState} from "react";

function App() {
  const [anggaran, setAnggaran] = useState([
    { _id: 1, nama: "Anggaran Pendidikan", penanggungJawab: "Fadli", jumlahAnggaran: 100000000  },
    { _id: 2, nama: "Anggaran Infrastruktur", penanggungJawab: "Irfan", jumlahAnggaran: 200000000  },
  ]);

  function storeData(inputAnggaran) {
    console.log(inputAnggaran);
    alert("Data berhasil ditambah");
  }

  function updateData(inputAnggaran){
    console.log(inputAnggaran);
    alert("data berhasil diubah");
  }

  function deleteData(anggaran){
    console.log(anggaran);
    alert("data berhasil dihapus");
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/manajemen-keuangan" element={<ManajemenKeuangan daftarAnggaran={anggaran} store={storeData} update={updateData} remove={deleteData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
