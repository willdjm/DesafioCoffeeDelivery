import { RegularText, TitleText } from '../../components/Typography'
import {
  GradientContainer,
  OrderConfirmedContainer,
  OrderDetailsContainer,
} from './styles'
import orderCompleted from './../../assets/order-completed.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../CompleteOrder'
import { paymentMethods } from '../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function OrderConfirmedPage() {
  const { colors } = useTheme()
  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()
  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>

  return (
    <OrderConfirmedContainer className="container">
      <TitleText size="l">Uhu! Pedido confirmado</TitleText>
      <RegularText size="l" color="subtitle">
        Agora é só aguardar que logo o café chegará até você
      </RegularText>
      <section>
        <GradientContainer>
          <OrderDetailsContainer>
            <InfoWithIcon
              icon={<MapPin />}
              iconBg={colors['brand-purple']}
              text={
                <RegularText>
                  Entrega em{' '}
                  <strong>
                    {state.street}, {state.number}
                  </strong>
                  <br />
                  {state.district} - {state.city}, {state.uf}
                </RegularText>
              }
            ></InfoWithIcon>
            <InfoWithIcon
              icon={<Clock />}
              iconBg={colors['brand-yellow']}
              text={
                <RegularText>
                  Previsão de entrega
                  <br />
                  <strong>20 min - 30 min </strong>
                </RegularText>
              }
            ></InfoWithIcon>
            <InfoWithIcon
              icon={<CurrencyDollar />}
              iconBg={colors['brand-yellow-dark']}
              text={
                <RegularText>
                  Pagamento na entrega
                  <br />
                  <strong>
                    {paymentMethods[state.paymentMethod].label as string}
                  </strong>
                </RegularText>
              }
            ></InfoWithIcon>
          </OrderDetailsContainer>
        </GradientContainer>
        <img src={orderCompleted} alt="" />
      </section>
    </OrderConfirmedContainer>
  )
}
