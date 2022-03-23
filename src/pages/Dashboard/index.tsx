import { Button } from "../../components/atoms/Button"
import { TemplateContainer } from "../../components/templates"
import { Card } from "./components/Card"

export const Dashboard = () => {
    const array = [
        { id: "0", title: "Netflix", category: "streaming", cost: 39.99 },
        { id: "1", title: "Amazon", category: "streaming", cost: 9.99 },
        { id: "2", title: "Internet", category: "web", cost: 79.99 },
        { id: "3", title: "Spotify", category: "streaming", cost: 9.99 },
    ]

    return <TemplateContainer>
        <header className="w-full max-w-screen-lg flex justify-between items-center h-1/6 ">
            <span className="font-bold text-2xl">Go Finances</span>

        <nav className="flex gap-4">
            <Button>Adicionar Nova Conta</Button>
            <Button variant="ghost">Sair</Button>
        </nav>
        </header>

        <main className="w-full max-w-screen-lg h-5/6 grid grid-cols-3 content-start overflow-y-scroll gap-4 p-4">   
                {array.map((item) => (
                    <Card key={item.id} title={item.title} category={item.category} cost={item.cost}/>
                ))}
                
        </main>
    </TemplateContainer>
}