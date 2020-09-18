import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

export default function Profile() {

    const [orçamento, setOrçamento] = useState([]);
    const cryptoID = localStorage.getItem('crypto');

    useEffect(() => {
        api.get('/profile', {
            headers: {
                Authorization: cryptoID,
            }
        }).then(response => {
            setOrçamento(response.data);
            console.log(response.data)
        })
    }, [cryptoID]);

    async function handleDeleteOrç(id) {
        try {
            await api.delete(`orcamento/${id}`, {
                headers: {
                    Authorization: cryptoID,
                }
            });
            setOrçamento(orçamento.filter(orçamento => orçamento.id !== id));
        } catch (err) {
            alert('erro ao deletar.')
        }
    }

    return (
        <>
            <ul>
                {orçamento.map(orçamento => (
                    <li style={{ marginBlockStart: '20px' }} className="lsit-st" key={orçamento.id}>
                        <p className="title-orç">{orçamento.title}</p>
                        <p className="title-desc">{orçamento.description}</p>
                        <div className="items">
                            <p className="p-items">{orçamento.desenvolvedor}</p>
                            <p className="p-items">{orçamento.design}</p>
                            <p className="p-items">{orçamento.product_owner}</p>
                            <p className="p-items">{orçamento.scrum_master}</p>
                            <p className="p-items">{orçamento.project_days}</p>
                        </div>
                        <div className="items">
                            <p className="p-items">desenvolvedor</p><hr />
                            <p className="p-items">design</p><hr />
                            <p className="p-items">product owner</p><hr />
                            <p className="p-items">scrum master</p><hr />
                            <p className="p-items">project days</p>
                        </div>
                        <div style={{ marginBlockStart: '20px' }} className="flex-lix">
                            <h3 className="value-proj">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(orçamento.project_total)}</h3>
                            <button className="" type="button" onClick={() => handleDeleteOrç(orçamento.id)}><FiTrash2 size={20} color="#f44336" /></button></div>
                    </li>
                ))}
            </ul>
        </>
    );
}
