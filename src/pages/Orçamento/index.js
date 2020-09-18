import React, { useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Header from '../../components/Header';
import { FiCornerDownRight, FiCornerDownLeft } from 'react-icons/fi';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { Container, Col, Row } from 'react-bootstrap';
import Select from '@material-ui/core/Select';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

export default function Orçamentos() {

  const crypto = localStorage.getItem('crypto');
  const nome = localStorage.getItem('nome');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [desenvolvedor, setDesenvolvedor] = useState(1);
  const [design, setDesign] = useState(1);
  const [scrum_master, setScrum_master] = useState(1);
  const [product_owner, setProduct_owner] = useState(1);
  const [project_days, setProject_days] = useState(1);
  const project_total = 1150 * desenvolvedor * project_days + 1050 * design * project_days + 1008 * scrum_master * project_days + 1650 * product_owner * project_days + 200 * project_days;
  const history = useHistory();
  const data = [
    {
      data: {
        desenvolvedor: desenvolvedor,
        design: design,
        scrum_master: scrum_master,
        product_owner: product_owner
      },
      meta: { color: '#d8c7ff' }
    }
  ];

  const captions = {
    desenvolvedor: 'desenvolvedor',
    design: 'design',
    scrum_master: 'scrum master',
    product_owner: 'product owner'
  };

  async function handleAddOrç(e) {
    e.preventDefault();

    const data = { title, description, desenvolvedor, design, scrum_master, product_owner, project_days, project_total };
    try {
      await api.post('/orcamento', data, {
        headers: {
          Authorization: crypto,
        }
      }, history.push('/profile'))
    } catch (err) {
      alert('erro ao cadastrar orçamento.')
    }
  }

  function handleVoltar() {
    history.push('/profile');
    history.go();
  }

  return (
    <>
      <Header />
      <Container className="c-bacg">
        <Row>
          <Col xs="6">
            <h1 style={{ textAlign: 'left' }} className="title-h1">{nome} <br /> simulations for <br /> technology <br /> projects</h1>
            <br />
            <form autocomplete="off" onSubmit={handleAddOrç}>
              <TextField
                className="fild-ani2"
                type="text"
                onChange={e => setTitle(e.target.value)}
                value={title}
                id="outlined-required"
                InputLabelProps={{
                  shrink: true,
                }}
                label="TITLE"
                variant="outlined"
              />
              <TextField
                className="fild-ani2"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e => setDescription(e.target.value)}
                value={description}
                id="outlined-required"
                label="DESCRIPTION"
                variant="outlined"
              />
              <br />

              <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">DV</InputLabel>
                <Select
                  className="selct-anim"
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={desenvolvedor}
                  onChange={e => setDesenvolvedor(e.target.value)}
                  label="Age"
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>

              <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">DS</InputLabel>
                <Select
                  className="selct-anim"
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={design}
                  onChange={e => setDesign(e.target.value)}
                  label="Age"
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>

              <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">SM</InputLabel>
                <Select
                  className="selct-anim"
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={scrum_master}
                  onChange={e => setScrum_master(e.target.value)}
                  label="Age"
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>

              <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">PO</InputLabel>
                <Select
                  className="selct-anim"
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={product_owner}
                  onChange={e => setProduct_owner(e.target.value)}
                  label="Age"
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>

              <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">PD</InputLabel>
                <Select
                  className="selct-anim"
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={project_days}
                  onChange={e => setProject_days(e.target.value)}
                  label="Age"
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
              <br /><br />
              <div className="flex-lix ">
                <h3 className="value-proj">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(project_total)}</h3>
                <button className="button-lix" type="submit"><FiCornerDownRight size={18} color="#f44336" /></button> <br />
                <button className="button-lix" onChange={handleVoltar}><FiCornerDownLeft size={18} color="#f44336" /></button>
              </div>
            </form>
          </Col>
          <Col className="modcol-2">
            <RadarChart
              captions={captions}
              data={data}
              size={450}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
