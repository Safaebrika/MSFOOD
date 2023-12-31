import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Contacts() {
    const [contacts, setContacts] = useState([]);

    const deleteContact = (contactId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`/api/contact/${contactId}`);
                    Swal.fire(
                        'Deleted!',
                        'Your contact has been deleted.',
                        'success'
                    );
                    fetchContact();
                } catch (error) {
                    console.log(error);
                }
            }
        });
    };

    const fetchContact = () => {
        axios.get('/api/contact')
            .then(res => {
                setContacts(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    };
    useEffect(() => {
        fetchContact();
    }, []);
    return !!contacts?.length && (

            <div className=' shadow mt-5'>
                <div className='p-2'>
                    <table className='table  ' >
                        <thead>
                            <tr>
                                <th  className="text-center py-3"> Username</th>

                                <th  className="text-center py-3">Email</th>
                                <th className="text-center py-3" >Message</th>
                            <th className="text-center py-3" >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map(contact => (
                                <tr key={contact.id}>
                                    <td className="text-center py-3">{contact.Username}</td>
                                    <td className="text-center py-3">{contact.email}</td>
                                    <td className="text-center py-3">{contact.message}</td>
                                    <td className="text-center py-3">
                                        {/* <div style={{ display: 'flex', justifyContent: 'center' }}> */}
                                            <div  onClick={() => deleteContact(contact.id)} className="btn btn-sm btn-danger mx-auto   ">

                                               <i className='fa fa-trash '></i>
                                            </div>
                                        {/* </div> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

    );
}
