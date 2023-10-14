import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityInputContainer } from './styles'

interface QuantityInputProps {
  quantity: number
  size?: 'medium' | 'small'
  onIncrease: () => void
  onDecrease: () => void
}
export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = 'medium',
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper onClick={onDecrease} disabled={quantity <= 0}>
        <Minus size={14} weight="bold" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="bold" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
