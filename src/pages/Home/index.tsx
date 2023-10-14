import { useCart } from '../../hooks/useCart'
import { IntroItens } from './components/Intro'
import { OurCoffees } from './components/OurCoffees'
import { HomeContainer } from './styles'
export function HomePage() {
  const { cartItems } = useCart()
  return (
    <HomeContainer className="container">
      <IntroItens />
      <OurCoffees />
    </HomeContainer>
  )
}
