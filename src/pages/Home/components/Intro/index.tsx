import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import logoCoffee from '../../../../assets/coffeeIntro.svg'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { RegularText } from '../../../../components/Typography'
import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroText,
} from './styles'
export function IntroItens() {
  const { colors } = useTheme()
  return (
    <IntroContainer>
      {/* <InfoItens /> */}
      <IntroContent className="container">
        <div>
          <section>
            <IntroText size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroText>
            <RegularText size="l" color="subtitle" weight={400} as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>
          <BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight="fill" />}
              text={'Compra simples e segura'}
              iconBg={colors['brand-yellow-dark']}
            />
            <InfoWithIcon
              icon={<Package weight="fill" />}
              text={'Embalagem mantém o café intacto'}
              iconBg={colors['base-text']}
            />
            <InfoWithIcon
              icon={<Timer weight="fill" />}
              text={'Entrega rápida e rastreada'}
              iconBg={colors['brand-yellow']}
            />
            <InfoWithIcon
              icon={<Coffee weight="fill" />}
              text={'O café chega fresquinho até você'}
              iconBg={colors['brand-purple-dark']}
            />
          </BenefitsContainer>
        </div>
        <img src={logoCoffee} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}
