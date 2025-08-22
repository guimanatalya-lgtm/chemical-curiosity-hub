import HeroSection from '@/components/HeroSection';
import ChemicalCard from '@/components/ChemicalCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import saltImage from '@/assets/salt-crystals.jpg';
import moleculeImage from '@/assets/nacl-molecule.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              O Que São Bases e Elementos?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bases são substâncias químicas que podem aceitar prótons ou doar pares de elétrons. 
              Elementos químicos são substâncias puras formadas por átomos do mesmo tipo. 
              Juntos, eles formam compostos essenciais para nossa vida cotidiana.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gradient-primary text-primary-foreground shadow-chemical">
              <CardHeader>
                <CardTitle className="text-2xl">Bases Químicas</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Substâncias fundamentais da química
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-primary-foreground/90">
                  <li>• Aceitam prótons (H+) em soluções</li>
                  <li>• Aumentam a concentração de íons OH-</li>
                  <li>• Têm pH maior que 7</li>
                  <li>• Essenciais em processos biológicos</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-secondary text-secondary-foreground shadow-chemical">
              <CardHeader>
                <CardTitle className="text-2xl">Elementos Químicos</CardTitle>
                <CardDescription className="text-secondary-foreground/80">
                  Blocos fundamentais da matéria
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-secondary-foreground/90">
                  <li>• Substâncias puras com um tipo de átomo</li>
                  <li>• Organizados na tabela periódica</li>
                  <li>• Combinam-se para formar compostos</li>
                  <li>• Presentes em tudo ao nosso redor</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Daily Examples Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Exemplos do Cotidiano
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Veja como bases e elementos químicos fazem parte da sua rotina diária
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ChemicalCard
              title="Cloreto de Sódio"
              formula="NaCl"
              description="O sal de cozinha mais comum, essencial para a vida"
              dailyUse="Usado para temperar alimentos, conservar carnes, fazer soro fisiológico e regular funções corporais. Fundamental para o equilíbrio de eletrólitos no organismo."
              image={saltImage}
              gradient="primary"
            />
            
            <ChemicalCard
              title="Bicarbonato de Sódio"
              formula="NaHCO₃"
              description="Base fraca amplamente utilizada no dia a dia"
              dailyUse="Fermento em pães e bolos, antiácido estomacal, limpeza doméstica, clareamento dental e desodorante natural. Neutraliza ácidos eficientemente."
              gradient="secondary"
            />
            
            <ChemicalCard
              title="Hidróxido de Sódio"
              formula="NaOH"
              description="Base forte conhecida como soda cáustica"
              dailyUse="Produção de sabões e detergentes, desentupimento de pias, fabricação de papel e produtos de limpeza industrial. Sempre usar com cuidado!"
              gradient="primary"
            />
            
            <ChemicalCard
              title="Carbonato de Cálcio"
              formula="CaCO₃"
              description="Composto presente em rochas e organismos"
              dailyUse="Suplemento de cálcio, antiácido, fabricação de giz, tinta branca, pasta de dente e como aditivo alimentar para fortificação."
              gradient="secondary"
            />
            
            <ChemicalCard
              title="Ácido Acético"
              formula="CH₃COOH"
              description="Ácido presente no vinagre comum"
              dailyUse="Conservação de alimentos, tempero culinário, limpeza doméstica, tratamento de verrugas e produção de condimentos diversos."
              gradient="primary"
            />
            
            <ChemicalCard
              title="Óxido de Ferro"
              formula="Fe₂O₃"
              description="Ferrugem comum, pigmento natural vermelho"
              dailyUse="Pigmento em tintas e cerâmicas, suplementos de ferro, produção de aço, cosméticos e protetor solar mineral com cor."
              gradient="secondary"
            />
          </div>
        </div>
      </section>

      {/* Featured Example Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Destaque: Cloreto de Sódio (NaCl)
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O composto químico mais essencial da nossa alimentação
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-primary text-primary-foreground p-6 rounded-lg shadow-chemical">
                <h3 className="text-2xl font-bold mb-4">Composição Química</h3>
                <p className="leading-relaxed">
                  O cloreto de sódio é formado pela ligação iônica entre o sódio (Na⁺) e o cloro (Cl⁻). 
                  Esta ligação cria cristais cúbicos estáveis que conhecemos como sal de cozinha.
                </p>
              </div>
              
              <div className="bg-gradient-secondary text-secondary-foreground p-6 rounded-lg shadow-chemical">
                <h3 className="text-2xl font-bold mb-4">Importância Biológica</h3>
                <p className="leading-relaxed">
                  Essencial para o funcionamento do sistema nervoso, regulação da pressão arterial, 
                  equilíbrio hídrico celular e transmissão de impulsos nervosos no corpo humano.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-card-custom border">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Aplicações Industriais</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Produção de cloro e soda cáustica</li>
                  <li>• Derretimento de gelo nas estradas</li>
                  <li>• Curtimento de couro</li>
                  <li>• Fabricação de vidro e sabão</li>
                  <li>• Processamento de alimentos</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src={moleculeImage}
                alt="Estrutura molecular do NaCl"
                className="w-full rounded-lg shadow-chemical"
              />
              <img 
                src={saltImage}
                alt="Cristais de sal"
                className="w-full rounded-lg shadow-chemical"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-primary text-primary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Química ao Seu Redor</h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            A química está presente em cada momento da nossa vida, desde os alimentos que consumimos 
            até os produtos que utilizamos. Compreender esses processos nos ajuda a valorizar a ciência 
            e fazer escolhas mais conscientes.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;