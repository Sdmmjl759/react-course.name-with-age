import styled from 'styled-components'

const Card = styled.div`
  {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${props => props.theme.background};
    box-shadow: rgba(0, 0, 0, 0.5) 1px 4px 20px;
    width:80%;
    max-width: 50rem;
    border-radius: 15px;
    margin:${props => props.theme.margin};
    padding: 1.5rem 2rem;
    color: ${props => props.theme.text};
  }
`

Card.defaultProps = {
  theme: {
    background: "#042d55",
    text: "#e7ebf0",
    margin: "3rem auto"
  }
}

export default Card;