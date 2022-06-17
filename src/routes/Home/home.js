import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Stack from 'react-bootstrap/esm/Stack';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { COLOURS, IMAGES, DEFAULT_VALUES } from '../../constants';
import { BookModal, BookCard, Divider } from '../../components';
import styled from 'styled-components';

export function Home() {
  const [isModalShow, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(DEFAULT_VALUES.DEFAULT_MODAL_DATA)
  const handleClose = () => setShowModal(false);

  const BookQuery = useQuery('BookList', async () =>
  fetch(
    `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=LecFH87IXaDgwboplidDpOZjAcIO2in1`
  ).then((res) => res.json())
)

  const NewsQuery = useQuery('NewsList', async () =>
  fetch(
    `https://api.nytimes.com/svc/topstories/v2/books.json?api-key=LecFH87IXaDgwboplidDpOZjAcIO2in1`
  ).then((res) => res.json())
  )

if (BookQuery.isLoading || NewsQuery.isLoading) {
  return (
    <div className="text-center py-4">
      <Spinner animation="grow" variant="dark" />
    </div>
  )
  }

  const StyledLink = styled(Link)`
    text-decoration:none; 
    color:${COLOURS.dimgray}; 
    margin-top:1rem;
    transition: transform .2s;

    &:hover{
      transform: scale(1.25);
    }
  `

  return (
  <>
  <div style={{ backgroundImage:`url(${IMAGES.BG_Main})`, height:'50%', backgroundSize:'cover', backgroundPositionY:'bottom' }}>
  <Carousel style={{ width:'50%', margin:'auto', padding:'10px 0px'}}>
    <Carousel.Item>
    <img
    className="d-block w-100"
    src="https://res.cloudinary.com/dikzhc5yg/image/upload/v1655205230/banners/banner2_cqqm7y.webp"
    alt="First slide"
    />
    </Carousel.Item>
    <Carousel.Item>
    <img
    className="d-block w-100"
    src="https://res.cloudinary.com/dikzhc5yg/image/upload/v1655204623/banners/banner3_pozwhi.webp"
    alt="First slide"
    />
    </Carousel.Item>
    <Carousel.Item>
    <img
    className="d-block w-100"
    src="https://res.cloudinary.com/dikzhc5yg/image/upload/v1655204425/banners/17_July_2077_iocpls.webp"
    alt="First slide"
    />
    </Carousel.Item>
  </Carousel>
  </div>
  <Container>
    <div className='py-4'>
      <h1>What's New?</h1>
      <p className='lead'>Read lastest news about book from The New York Times</p>
      <Row sm={2}>
      {NewsQuery.data.results.slice(0, 4).map((news, index) =>
        <Col key={index} className='mb-2'>
          <Stack className='mx-auto' direction='horizontal' gap={2}>
            <img className='img-fluid mx-auto d-block' src={news.multimedia[2].url} alt=''/>
            <Row>
              <h4 style={{color:COLOURS.dimgray}}>{news.title}</h4>
              <p>{news.abstract}</p>
              <a href={news.url} target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'black'}}><strong>Read more</strong></a>
            </Row>
          </Stack>
        </Col>
      )}
      </Row>
    </div>
    <div>
      <h1>Titles You'll Love </h1>
      <p className='lead'>Curated from the New York Times's Best Sellers List</p>
    {BookQuery.data.results.lists.map(list =>
    <div key={list.list_id} className='pt-4'>
      <Stack direction='horizontal'>
        <h2>{list.list_name}</h2>
        <StyledLink to={`/${list.list_name}`} className = "ms-auto" ><strong>View More</strong></StyledLink>
      </Stack>
    <Divider className='mb-4' colour={COLOURS.rosybrown}/>
    <Row>
      {list.books.map(book =>
        <Col key={book.primary_isbn10}
          onClick={()=> {
            setModalData(book);
            setShowModal(true);
          }}
        >
          <BookCard data={book} />
        </Col>
      )}
    </Row>
    </div>
    )}
    </div>
    <BookModal show={isModalShow} handleClose={handleClose} data={modalData} />
  </Container>
  </>
  );
  }