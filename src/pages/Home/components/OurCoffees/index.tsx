import { TitleText } from '../../../../components/Typography'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeList, OurCoffesContainer } from './styles'
import { coffees } from '../../../../data/coffees'

export function OurCoffees() {
  return (
    <OurCoffesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffesContainer>
  )
}
