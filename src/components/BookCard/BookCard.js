import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

export default function BookCard({ data }) {
  const StyledCard = styled(Card)`
    width: 200px;
    transition: transform .2s;

    &:hover{
        transform: scale(1.10);
    }
  `

  return (
    <StyledCard>
        <Card.Img variant="top" className='img-fluid' src={data.book_image} />
    </StyledCard>
  )
}
