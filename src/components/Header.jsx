import logo from "../assets/logoRS.svg"
function Header() {
  //vai retornar o HTMl que vai ser renderizado
  return (
    <header>
      <img src={logo} alt="Logo da Empresa"/>
      <h3>Avaliação de Atendimento</h3>
    </header>
  )
}

export default Header //Retorna o componente para ser usado em outros arquivos