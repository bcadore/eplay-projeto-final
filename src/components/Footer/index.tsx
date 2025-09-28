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
            <LinkItem>RPG</LinkItem>
          </li>
          <li>
            <LinkItem>Ação</LinkItem>
          </li>
          <li>
            <LinkItem>Aventura</LinkItem>
          </li>
          <li>
            <LinkItem>Estratégia</LinkItem>
          </li>
          <li>
            <LinkItem>FPS</LinkItem>
          </li>
        </LinksList>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso Rápido</SectionTitle>
        <LinksList>
          <li>
            <LinkItem>Novidades</LinkItem>
          </li>
          <li>
            <LinkItem>Promoções</LinkItem>
          </li>
          <li>
            <LinkItem>Em Breve</LinkItem>
          </li>
        </LinksList>
      </FooterSection>
      <p>{currentYear} - &copy; EPLAY Todos os direitos reservados.</p>
    </div>
  </Container>
)

export default Footer
