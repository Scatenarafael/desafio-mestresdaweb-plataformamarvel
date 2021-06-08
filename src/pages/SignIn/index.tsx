import { SignInPageContainer, FormContainer, ImgContainer } from "./styles";

export function SignIn() {
  return (
    <SignInPageContainer>
      <FormContainer>
        <img src="/MARVEL-logo.svg" alt="logo-marvel" />
        <div className="title">
          <h2>Bem-vindo(a) de volta!</h2>
          <p>Acesse sua conta:</p>
        </div>
        <form>
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <div className="user-choices">
            <div>
              <input type="radio" />
              <span>Salvar login</span>
            </div>
            <a href="/">Esqueci a senha</a>
          </div>
          <button type="submit">Entrar</button>
        </form>
        <p>
          Ainda não tem o login? <a href="/">Cadastre-se</a>
        </p>
      </FormContainer>
      <ImgContainer>
        <img src="/background-image.svg" alt="avengers" />
      </ImgContainer>
    </SignInPageContainer>
  );
}
