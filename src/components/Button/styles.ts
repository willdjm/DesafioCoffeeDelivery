import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.colors['brand-yellow']};
  border: none;
  border-radius: 6px;
  padding: 0.75rem 2.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors['base-white']};
  font-size: ${({ theme }) => theme.textSizes['components-button-g']};
  line-height: 1.3rem;
  margin-top: 0.7rem;
  text-transform: uppercase;
  transition: 0.5s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`
