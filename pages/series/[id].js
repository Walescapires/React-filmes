import Pagina from "@/components/Pagina"
import apiFilmes from "@/services/apiFilmes"
import Link from "next/link"
import { Col, Row } from "react-bootstrap"


const Detalhes = ({ tvs }) => {
    return (
      <Pagina titulo={ator.name}>
  
              
              <h2 className='mt-4'>Séries de TV</h2>
              <Row>
                  {tvs.map(item => (
                      <Col className='mb-4' md={2} title={item.name}>
                          <Link href={'/filmes/' + item.id}>
                              <Card.Img title={item.name} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                          </Link>
                      </Col>
                  ))}
              </Row>
  
          </Pagina>
    )
  }
  
  export default Detalhes
  
  export async function getServerSideProps(context) {
  
      const id = context.params.id
  
     
      const resTv = await apiFilmes.get('/tv/popular?language=pt-BR')
      const tvs = resTv.data.cast
  
      return {
          props: { tvs },
      }
  }