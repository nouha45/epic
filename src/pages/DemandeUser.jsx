import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from '../components/table/Table'

const respoTableHead = [
    '',
    'name',
    'email',
    'username',
    'state',
    'Etat Demande'
]

const UpgradeUser = (userId) => {
    axios.put(`http://localhost:8029/users/upgrade/monuments/manager/${userId}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

const renderHead = (item, index) => <th key={index}>{item}</th>


const renderBody = (item, index) => {
    const { id, firstName, lastName, email, username, state } = item;
    return (
      <tr key={index}>
        <td>{id}</td>
        <td>{firstName} {lastName}</td>
        <td>{email}</td>
        <td>{username}</td>
        <td>{state}</td>
        <td> <button id='approuve' onClick={() => UpgradeUser(id)} style={{padding:'5px', borderRadius:'4px', fontWeight:'bold'}}>Approuver</button></td>
      </tr>
    )
  }

const DemandeUser = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
    axios.get('http://localhost:8029/users/normalusers')
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}, [users]);

    return (
        <div style={{marginTop:'30px'}}>
            <h2 className="page-header">
                Demande de devenir Responsable Monument 
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
                                : <p>Aucune demande n'est arrivé </p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default DemandeUser
