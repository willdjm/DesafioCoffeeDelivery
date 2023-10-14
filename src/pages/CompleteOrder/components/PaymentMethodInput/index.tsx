import { forwardRef, ReactNode } from 'react'
import { PaymentMethodContainer, ContentContainer } from './styles'

interface PaymentMethodInputProps {
  id: string
  label: string
  icon: ReactNode
  value: string
}

// export function PaymentMethodInput(: PaymentMethodInputProps) {
//   return (

//   )
// }

// eslint-disable-next-line react/display-name
export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, label, icon, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
})
