import React, { useState, useEffect } from 'react'
import { View } from './components/View';
import img from './assets/empty.png'

const getData = () => {
  const data = localStorage.getItem('numere');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

export const App = () => {
  const [numere, setnumere] = useState(getData());

  const [nume, setNume] = useState('');
  const [prenume, setPrenume] = useState('');
  const [telefon, setTelefon] = useState('');

  const handleAddNumberSubmit = (e) => {
    e.preventDefault();

    let numar = {
      nume,
      prenume,
      telefon,
    }
    setnumere([...numere, numar]);
    setNume('');
    setPrenume('');
    setTelefon('');
  }

  const stergeNumarul=(telefon)=>{
    const filterNumbers=numere.filter((element,index)=>{
      return element.telefon !== telefon
    })
    setnumere(filterNumbers);
  }

  useEffect(() => {
    localStorage.setItem('numere', JSON.stringify(numere));
  }, [numere])

  return (
    <div className='wrapper'>

      <h1>Agenda telefonica</h1>
      <div className='main'>
        <div className='form-container'>
          <form autoComplete='off' className='form-group' onSubmit={handleAddNumberSubmit}>

            <label>Nume :</label>
            <input type='text' className='form-control' required onChange={(e) => setNume(e.target.value)} value={nume}></input> <br></br>
            <label>Prenume :</label>
            <input type='text' className='form-control' required onChange={(e) => setPrenume(e.target.value)} value={prenume}></input> <br></br>
            <label>Numar de telefon :</label>
            <input type='number' className='form-control' required onChange={(e) => setTelefon(e.target.value)} value={telefon}></input> <br></br>
            <button type='submit' className='btn btn-success btn-md'>Adauga in agenda</button>

          </form>
        </div>
        <div className='view-container'>
          {numere.length > 0 && <>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>
                      Nume :
                    </th>
                    <th>
                      Prenume :
                    </th>
                    <th>
                      Telefon :
                    </th>
                    <th>
                      Sterge
                    </th>
                  </tr>
                </thead>

                <tbody>
                <View numere={numere} stergeNumarul={stergeNumarul}/>
                </tbody>

              </table>

            </div>
            <button className='btn btn-danger btn-md'onClick={()=>setnumere([])}>Sterge toate numerele !</button>
          </>}
          {numere.length < 1 && <div>
              <img src={img}></img>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default App