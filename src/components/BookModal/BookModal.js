import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import styled from 'styled-components'
import { COLOURS } from '../../constants';

const DEFAULT_DATA = {
      "age_group": "",
      "amazon_product_url": "https://www.amazon.com/dp/0385549326?tag=NYTBSREV-20",
      "article_chapter_link": "",
      "author": "John Grisham",
      "book_image": "https://storage.googleapis.com/du-prd/books/images/9780385549325.jpg",
      "book_image_width": 329,
      "book_image_height": 500,
      "book_review_link": "",
      "book_uri": "nyt://book/b60f2641-733d-5fcc-aaa1-f6e053b7f53c",
      "contributor": "by John Grisham",
      "contributor_note": "",
      "created_date": "2022-06-08 22:04:27",
      "description": "Three novellas: “Homecoming,” “Strawberry Moon” and “Sparring Partners.”",
      "first_chapter_link": "",
      "price": "0.00",
      "primary_isbn10": "0385549326",
      "primary_isbn13": "9780385549325",
      "publisher": "Doubleday",
      "rank": 1,
      "rank_last_week": 0,
      "sunday_review_link": "",
      "title": "SPARRING PARTNERS",
      "updated_date": "2022-06-09 13:32:53",
      "weeks_on_list": 1,
      "buy_links": [
        {
          "name": "Amazon",
          "url": "https://www.amazon.com/dp/0385549326?tag=NYTBSREV-20"
        }
      ]
}

export default function BookModal({ show = false, handleClose, data = DEFAULT_DATA }) {
  const StyledButton = styled(Button)`
    background-color:${COLOURS.burlywood2};
    border: none;
    color:black;
    
    &:hover{
      background-color:${COLOURS.dimgray};
    }
  `

  return (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title />
    </Modal.Header>
    <Modal.Body>
        <Row>
          <Col>
            <img className='img-fluid mx-auto d-block' src={data.book_image} alt=''/>
          </Col>
          <Col>
            <h3>{data.title}</h3>
            <h4 className='text-muted'>{data.author}</h4>
            <p className='lead'>{data.description}</p>
          </Col>
        </Row>
        <Row className='pt-4'>
        <Col><p className='h4'>Get this book on: </p></Col>
      </Row>
      <Row>
        <ul>
        {data.buy_links.map((link, index) =>
        <li style={{display:'inline-block'}} className='p-1' key={index}>
            <StyledButton href={link.url} target="_blank" >{link.name}</StyledButton>
        </li>
        )}
        </ul>
      </Row>
    </Modal.Body>
    <Modal.Footer/>
  </Modal>
  )
}
