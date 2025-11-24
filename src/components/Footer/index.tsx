import {
  Container,
  FooterSection,
  LinkItem,
  LinksList,
  SectionTitle
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <LinksList>
          <li>
            <LinkItem to="/categories#rpg">RPG</LinkItem>
          </li>
          <li>
            <LinkItem to="/categories#action">Ação</LinkItem>
          </li>
          <li>
            <LinkItem to="/categories#sports">Esportes</LinkItem>
          </li>
          <li>
            <LinkItem to="/categories#simulation">Simulação</LinkItem>
          </li>
          <li>
            <LinkItem to="/categories#fight">Luta</LinkItem>
          </li>
        </LinksList>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso Rápido</SectionTitle>
        <LinksList>
          <li>
            <LinkItem to="/#on-sale">Promoções</LinkItem>
          </li>
          <li>
            <LinkItem to="/#coming-soon">Em Breve</LinkItem>
          </li>
        </LinksList>
      </FooterSection>
      <p>{currentYear} - &copy; EPLAY Todos os direitos reservados.</p>
    </div>
  </Container>
)

export default Footer
