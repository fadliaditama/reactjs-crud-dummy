import React from "react";
import {useState} from "react";

function ManajemenKeuangan({ daftarAnggaran, store, update, remove }){
    // console.log(daftarAnggaran);

    const [form,setForm] = useState("");
    const [inputAnggaran, setInputAnggaran] = useState();
    function handleNamaAnggaran(event) {
        setInputAnggaran({...inputAnggaran, nama: event.target.value });
    }
    function handlePenanggungJawab(event) {
        setInputAnggaran({...inputAnggaran, penanggungJawab: event.target.value });
    }
    function handleJumlahAnggaran(event) {
        setInputAnggaran({...inputAnggaran, jumlahAnggaran: event.target.value });
    }
    //data

    //event handling
    function showCreate(){
        setForm("create");
    }
        
    function showEdit(anggaran){
        setInputAnggaran(anggaran);
        setForm("edit");
    }

    function submitAdd(event){
        event.preventDefault();
        store(inputAnggaran);
    }

    function submitChange(event){
        event.preventDefault();
        update(inputAnggaran);
        setForm("");
    }

    function deleteData(anggaran){
        remove(anggaran);
    }
    
    return(
        <div className="container mt-3">
            <h1 className="text-center">Manajemen Keuangan</h1>
            {form == "create" && (
                <div id="formTambah">
                    <h5>Tambah Anggaran</h5>
                    <hr/>
                    <form className="form-row" onSubmit={submitAdd}>
                        <div className="col-3">
                            <input type="text" name="nama" className="form-control mx-2" onChange={handleNamaAnggaran} placeholder="Nama Anggaran" ></input>
                        </div>
                        <div className="col-3">
                            <input type="text" name="penanggungJawab" className="form-control mx-2" onChange={handlePenanggungJawab} placeholder="Penanggung Jawab" ></input>
                        </div>
                        <div className="col-2">
                            <input type="text" name="jumlahAnggaran" className="form-control mx-2" onChange={handleJumlahAnggaran} placeholder="Jumlah Anggaran" ></input>
                        </div>
                        <div className="col-2">
                            <input type="submit" className="btn btn-primary ml-5" value="Simpan"></input>
                        </div>
                    </form>
                </div>
            )}
            {form == "edit" && (
                <div id="formEdit" onSubmit={submitChange}>
                    <h5>Ubah Anggaran</h5>
                    <hr/>
                    <form className="form-row">
                        <div className="col-3">
                            <input type="text" name="nama" className="form-control mx-2" placeholder="Nama Anggaran" onChange={handleNamaAnggaran} value={inputAnggaran.nama}></input>
                        </div>
                        <div className="col-3">
                            <input type="text" name="penanggungJawab" className="form-control mx-2" placeholder="Penanggung Jawab" onChange={handlePenanggungJawab} value={inputAnggaran.penanggungJawab}></input>
                        </div>
                        <div className="col-2">
                            <input type="text" name="jumlahAnggaran" className="form-control mx-2" placeholder="Jumlah Anggaran" onChange={handleJumlahAnggaran} value={inputAnggaran.jumlahAnggaran}></input>
                        </div>
                        <div className="col-2">
                            <input type="submit" className="btn btn-warning ml-5" value="Ubah"></input>
                            <input type="submit" className="btn btn-danger ml-5" value="Batal"></input>
                        </div>
                    </form>
                </div>
            )}

            <div id="daftarAnggaran">
                <h2 className="mt-3">Daftar Anggaran</h2>
                <hr />
                <button className="btn btn-primary m-2" onClick={showCreate}>Tambah Anggaran Keuangan</button>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Nama Anggaran</th>
                            <th>Penanggung Jawab</th>
                            <th>Jumlah Anggaran</th>
                        </tr>
                    </thead>
                    <tbody>
                        {daftarAnggaran.map((anggaran,index) =>(
                            <tr key={index}>
                                <td>{index +1}</td>
                                <td>{anggaran.nama}</td>
                                <td>{anggaran.penanggungJawab}</td>
                                <td>{anggaran.jumlahAnggaran}</td>
                                <td>
                                    <button className="btn btn-info mr-3" onClick={() => showEdit(anggaran)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => deleteData(anggaran)}>Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManajemenKeuangan;