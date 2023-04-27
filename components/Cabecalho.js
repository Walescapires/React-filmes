import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/filmes/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Filmes" id='basic-nav-dropdown'>
              <NavDropdown.Item href="/filmes/populares">Populares</NavDropdown.Item>
              <NavDropdown.Item href="/filmes/cartaz">Em Cartaz</NavDropdown.Item>
              <NavDropdown.Item href="/filmes/lancamento">Lançamento</NavDropdown.Item>
              </NavDropdown>
              <Nav className="me-auto">
              <NavDropdown title="Ator" id='basic-nav-dropdown'>
              <NavDropdown.Item href="/tv/populares">Populares</NavDropdown.Item>
              <NavDropdown.Item href="/tv/cartaz">Em Cartaz</NavDropdown.Item>
              <NavDropdown.Item href="/tv/lancamento">Lançamento</NavDropdown.Item>
              </NavDropdown>
              <Nav className="me-auto">
              <NavDropdown title="Series" id='basic-nav-dropdown'>
              <NavDropdown.Item href="/tv/popular">Populares</NavDropdown.Item>
              <NavDropdown.Item href="/tv/cartaz">No ar</NavDropdown.Item>
              <NavDropdown.Item href="/tv/lancamento">Lançamento</NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho