import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from '../components/table/Table'

const respoTableHead = [
    '',
    'name',
    'email',
    'username',
    'CIN',
    'Etat Demande'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => {
    const { id, firstName, lastName, email ,username ,cin} = item;
    return (
        <tr key={index}>
            <td>{id}</td>
            <td>{firstName} {lastName}</td>
            <td>{email}</td>
            <td>{username}</td>
            <td>{cin}</td>
            <td> <button id='approuve' style={{padding:'5px', borderRadius:'4px', fontWeight:'bold', backgroundColor:'#00E396'}}>Demande Validé</button></td>
        </tr>
    )
}

const Rmonuments = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8029/users/upgratedusers')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    },[]);
    return (
        <div style={{marginTop:'30px'}}>
            <h2 className="page-header">
                Responsables de monuments
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            {users.length ? 
                                <Table
                                    limit='10'
                                    headData={respoTableHead}
                                    renderHead={(item, index) => renderHead(item, index)}
                                    bodyData={users}
                                    renderBody={(item, index) => renderBody(item, index)}
                                />
                                : <p>Loading...</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Rmonuments
