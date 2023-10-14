import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`

export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`
export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  button {
    background: ${({ theme }) => theme.colors['brand-yellow']};
    border: none;
    border-radius: 6px;
    padding: 1rem 0;
    transition: 0.5s;

    &:hover {
      background: ${({ theme }) => theme.colors['brand-yellow-dark']};
    }
  }
`
