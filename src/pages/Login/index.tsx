import { Button } from "../../components/atoms/Button"
import { InputText } from "../../components/molecules/inputText"
import { Link } from "../../components/molecules/Link"
import { SidebarHero } from "../../components/organism/SidebarHero"
import { TemplateContainer, TemplateContent, TemplateMainHeroSection} from "../../components/templates"

export const Login = () => {
  return (
    <TemplateContainer>
        <TemplateContent>
            <SidebarHero/>
            <TemplateMainHeroSection>
              <h1 className="font-bold text-3xl">Controle seus gastos</h1>
              <form className="flex flex-col w-full gap-4">
                <InputText label="Email: " type='email'/>
                <InputText label="Senha: " type='password'/>
                <Button>Log In</Button>
              </form>
              <Link href="/register">Criar Conta</Link>
            </TemplateMainHeroSection>
        </TemplateContent>
    </TemplateContainer>
  )
}
