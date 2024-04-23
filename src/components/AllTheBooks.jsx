
import Card from 'react-bootstrap/Card';
// import exampleImg from '../assets/images/the-deep-sky.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import books from '../data/books/fantasy.json'
import star from '../assets/images/star.svg'

function AllTheBooks() {
    return (
      <Container>
        <Row className='align-items-center my-5 justify-content-center'>
            <Col xs={12}>

                <h5 className='mb-5 fw-bold fs-3'>Fantasy Books</h5>

                {books.map((book, i) => {
                    return (
                <Card className='book-card' key={`book-${i}`}>
                <Card.Img className='card-img-top' variant="top" src={book.img}/>
                <Card.Body className='card-body'>
                    <Card.Title className='card-title'>{book.title}</Card.Title>
                    <div className='d-flex alig-items-center justify-content-between'>
                    <div className='d-flex alig-items-center gap-1'>
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    </div>
                    <Card.Text className='card-price'>
                    {book.price}$
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
                    )
                })}

            </Col>
        </Row>
    </Container>
  );
}

export default AllTheBooks;