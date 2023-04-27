import Pagina from "@/components/Pagina"
import apiFilmes from "@/services/apiFilmes"
import { Card, Col, Row } from "react-bootstrap"


const index = ({tvs}) => {
    return (
      <Pagina titulo="Populares">
  
      <Row md={4}>
          {tvs.map(item => (
              <Col key={item.id}>
                  <Card className="mb-3">
                      <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
                      <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <p>Lançamento: {item.release_date}</p>
                          <p>Nota: {item.vote_average}</p>
                          <Link href={'/filmes/' + item.id} className='btn btn-danger'>Detalhes</Link>
                      </Card.Body>
                  </Card>
              </Col>
          ))}
      </Row>
  
  </Pagina>
    )
  }
  
  export default index
  
  export async function getServerSideProps(context) {
  
      const resultado = await apiFilmes.get('/tv/popular?language=pt-BR')
      const tvs = resultado.data.results
  
      return {
          props: {tvs}, 
      }
  }