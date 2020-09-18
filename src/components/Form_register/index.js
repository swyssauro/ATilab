import React, { useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { FiCornerDownRight } from 'react-icons/fi';

export default function Register() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        await api.post('/usuarios', { nome, email, password })
            .then(resp => {
                const { data } = resp;
                if (data) {
                    history.push('/login');
                    history.go();
                }
            });
    }

    return (
        <>
            <form autocomplete="off" onSubmit={handleSubmit}>
                <TextField
                    className="fild-ani1 ani-ipnt-name"
                    id="outlined-required"
                    label="nome"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => setNome(e.target.value)}
                    value={nome}
                    variant="outlined"
                />
                <br />
                <TextField
                    className="fild-ani1"
                    id="outlined-required"
                    label="email"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    variant="outlined"
                />
                <TextField
                    className="fild-ani2"
                    type="password"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    id="outlined-required"
                    label="password"
                    variant="outlined"
                />
                <br />
                <button className="button-submit" type="submit"><FiCornerDownRight color="#e54848" size="25" /></button>
            </form>
        </>
    );
}