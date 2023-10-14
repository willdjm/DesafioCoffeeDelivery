import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import logoCoffee from '../../assets/logo.svg'
import { useCart } from '../../hooks/useCart'
export function Header() {
  const { cartQuantity } = useCart()
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logoCoffee} alt="" />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={24} weight="fill" />
            Location, UF
          </HeaderButton>
          <NavLink to="/completeOrder">
            <HeaderButton variant="orange">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={24} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
