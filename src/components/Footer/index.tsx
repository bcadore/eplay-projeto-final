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
            <LinkItem
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </LinkItem>
          </li>
          <li>
            <LinkItem
              title="Clique aqui para acessar jogos de ação"
              to="/categories#action"
            >
              Ação
            </LinkItem>
          </li>
          <li>
            <LinkItem
              title="Clique aqui para acessar jogos de esportes"
              to="/categories#sports"
            >
              Esportes
            </LinkItem>
          </li>
          <li>
            <LinkItem
              title="Clique aqui para acessar jogos de simulação"
              to="/categories#simulation"
            >
              Simulação
            </LinkItem>
          </li>
          <li>
            <LinkItem
              title="Clique aqui para acessar jogos de luta"
              to="/categories#fight"
            >
              Luta
            </LinkItem>
          </li>
        </LinksList>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso Rápido</SectionTitle>
        <LinksList>
          <li>
            <LinkItem
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </LinkItem>
          </li>
          <li>
            <LinkItem
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
            >
              Em Breve
            </LinkItem>
          </li>
        </LinksList>
      </FooterSection>
      <p>{currentYear} - &copy; EPLAY Todos os direitos reservados.</p>
    </div>
  </Container>
)

export default Footer
