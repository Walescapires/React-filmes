import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Cabecalho from './Cabecalho'
import { Container } from 'react-bootstrap'

const Pagina = (props) => {
  return (
    <>
    <Cabecalho />
    <div className='bg-secondary py-3 text-white text-center mb-3'>
        <Container>
            <h1>{props.titulo}</h1>
        </Container>
    </div>

    <Container className='mb-5 pb-4'>
        {props.children}
    </Container>

    <div style={{ width: '100%'}} className='bg-secondary position-fixed bottom-0 py-3 text-white text-center'>
        <p>Todos os direitos reservados</p>
    </div>    
    </>
  )
}

export default Pagina