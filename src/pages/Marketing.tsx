import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Megaphone, Users, Newspaper } from "lucide-react";

const Marketing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan Marketing</h1>
            <p className="text-xl text-muted-foreground">
              Stratégie d'acquisition pour π-lab
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Channel 1: Academic Communities */}
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>Communautés académiques</CardTitle>
                <CardDescription>
                  Chercheurs, étudiants, professeurs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Badge className="mb-2">Message d'accroche</Badge>
                  <p className="text-sm">
                    "Explorez π comme jamais : recherche rapide, analyses statistiques, 
                    et compressibilité. Parfait pour vos cours, publications ou simple curiosité. 
                    100% gratuit pour l'éducation."
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-sm">Canaux :</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Forums mathématiques (MathOverflow, r/math)</li>
                    <li>• Newsletters académiques</li>
                    <li>• Conférences scientifiques</li>
                    <li>• Partenariats avec universités</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Channel 2: Developer Community */}
            <Card>
              <CardHeader>
                <Megaphone className="h-10 w-10 mb-4 text-accent" />
                <CardTitle>Développeurs & Data Scientists</CardTitle>
                <CardDescription>
                  Tech community, open-source
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Badge className="mb-2">Message d'accroche</Badge>
                  <p className="text-sm">
                    "API moderne pour manipuler π : SDK TypeScript/Python, 
                    1M+ décimales disponibles, webhook support. Gratuit jusqu'à 1k req/jour. 
                    Open-source et documenté."
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-sm">Canaux :</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• GitHub (repo showcase, SDKs)</li>
                    <li>• Dev.to, Hacker News</li>
                    <li>• Twitter/X tech community</li>
                    <li>• Product Hunt launch</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Channel 3: Media & Content */}
            <Card>
              <CardHeader>
                <Newspaper className="h-10 w-10 mb-4 text-scientific" />
                <CardTitle>Médias & Vulgarisation</CardTitle>
                <CardDescription>
                  Presse, YouTube, podcasts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Badge className="mb-2">Message d'accroche</Badge>
                  <p className="text-sm">
                    "Trouvez votre date de naissance dans π ! Découvrez comment ce nombre 
                    infini cache peut-être tous les secrets de l'univers. 
                    Une expérience interactive et éducative unique."
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-sm">Canaux :</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Chaînes YouTube scientifiques</li>
                    <li>• Podcasts de vulgarisation</li>
                    <li>• Articles de presse tech/science</li>
                    <li>• Collaborations avec influenceurs STEM</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Marketing Strategy */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Stratégie de contenu</CardTitle>
              <CardDescription>
                Créer de la valeur pour attirer et retenir les utilisateurs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Contenu éducatif :</h4>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Blog : "La complexité de Kolmogorov expliquée simplement"</li>
                    <li>• Tutoriels : "Comment analyser π avec notre API"</li>
                    <li>• Études de cas : recherches académiques utilisant π-lab</li>
                    <li>• Infographies : visualisations des propriétés de π</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Engagement communautaire :</h4>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Challenges mensuels de recherche</li>
                    <li>• Open-source bounties pour améliorer l'algorithme</li>
                    <li>• Discord/Slack pour discussions scientifiques</li>
                    <li>• Newsletter avec découvertes de la communauté</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Metrics & KPIs */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>KPIs de succès</CardTitle>
              <CardDescription>
                Mesurer l'impact et l'adoption
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="p-4 bg-primary/10 rounded-lg text-center">
                  <div className="text-3xl font-bold text-primary mb-1">10k+</div>
                  <div className="text-sm text-muted-foreground">Utilisateurs actifs/mois</div>
                  <div className="text-xs text-muted-foreground mt-1">(Objectif 6 mois)</div>
                </div>

                <div className="p-4 bg-accent/10 rounded-lg text-center">
                  <div className="text-3xl font-bold text-accent mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Utilisateurs API</div>
                  <div className="text-xs text-muted-foreground mt-1">(Objectif 6 mois)</div>
                </div>

                <div className="p-4 bg-scientific/10 rounded-lg text-center">
                  <div className="text-3xl font-bold text-scientific mb-1">5</div>
                  <div className="text-sm text-muted-foreground">Publications citant π-lab</div>
                  <div className="text-xs text-muted-foreground mt-1">(Objectif 1 an)</div>
                </div>

                <div className="p-4 bg-secondary/50 rounded-lg text-center">
                  <div className="text-3xl font-bold mb-1">80%</div>
                  <div className="text-sm text-muted-foreground">Taux de rétention</div>
                  <div className="text-xs text-muted-foreground mt-1">(Utilisateurs retournant)</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
