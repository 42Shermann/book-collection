import styled from "styled-components"

export default function Divider({ className = '', colour = '' }) {
  const Wrapper = styled.div`
    border-bottom: 3px solid ${colour};
  `
  return (
    <Wrapper className={className} />
  )
}
