import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import { Divider, BookModal, BookCard } from '../../components';
import { COLOURS, DEFAULT_VALUES } from '../../constants';

export default function BookPage() {
  const { bookListName } = useParams()

  const [isModalShow, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(DEFAULT_VALUES.DEFAULT_MODAL_DATA)
  const handleClose = () => setShowModal(false);

  const { isLoading, data } = useQuery(['bestSellerList', bookListName], () =>
  fetch(
    `https://api.nytimes.com/svc/books/v3/lists/current/${bookListName}.json?api-key=LecFH87IXaDgwboplidDpOZjAcIO2in1`
  ).then((res) => res.json())
  )

  if (isLoading) {
    return (
      <div className="text-center py-4">
        <Spinner animation="grow" variant="dark" />
      </div>
    )
  }

  return (
  <Container>
    <div key={data.results.list_name} className='pt-4'>
      <h2>{data.results.list_name}</h2>
    <Divider className='mb-4' colour={COLOURS.rosybrown}/>
    <Row>
      {data.results.books.map(book =>
        <Col key={book.primary_isbn10}
          className='pb-4'
          onClick={()=> {
            setModalData(book);
            setShowModal(true);
        }}
      >
        <BookCard data={book} />
      </Col>
      )}
    </Row>
      {isModalShow?
        <BookModal show={isModalShow} handleClose={handleClose} data={modalData} />
        :
        <></>
      }
    </div>
  </Container>
  )
}
