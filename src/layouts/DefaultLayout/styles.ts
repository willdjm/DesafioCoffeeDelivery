import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 5rem);
  height: 100vh;
  margin: 2rem auto;
  /* padding: 1rem 2.5rem; */
  background: ${(props) => props.theme['gray-100']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  .container {
    width: 100%;
    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;
  }
`
