import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/utils'
import { ConfirmationSectionContainer } from './styles'

const DELIVERY_PRICE = 3.5
export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const formatedTotalItems = formatMoney(cartItemsTotal)
  const formatedCartTotal = formatMoney(DELIVERY_PRICE + cartItemsTotal)
  const formatedDeliveryPrice = formatMoney(DELIVERY_PRICE)
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R${formatedTotalItems}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R${formatedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText size="l" color="subtitle" weight={700}>
          Total
        </RegularText>
        <RegularText size="l" color="subtitle" weight={700}>
          R${formatedCartTotal}
        </RegularText>
      </div>
      <Button
        text="CONFIRMAR PEDIDO"
        type="submit"
        disabled={cartQuantity <= 0}
      />
    </ConfirmationSectionContainer>
  )
}
