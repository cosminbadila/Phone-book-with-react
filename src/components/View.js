import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'


export const View = ({ numere, stergeNumarul }) => {

    return numere.map(numar => (

        <tr key={numar.telefon}>
            <td>{numar.nume}</td>
            <td>{numar.prenume}</td>
            <td>{numar.telefon}</td>
            <td className='delete-btn' onClick={()=>stergeNumarul(numar.telefon)}>
                <Icon style={{ color: 'red' }} size={20} icon={trash}/>
            </td>           
        </tr>

    ))
}