import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Code, BookOpen, Zap, Github, MessageSquare } from "lucide-react";

const Api = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">API & Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Intégrez π-lab dans vos projets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Quick Start */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" />
                  Quick Start
                </CardTitle>
                <CardDescription>
                  Commencez en quelques minutes avec notre API REST
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-secondary/50 p-4 rounded-lg font-mono text-sm">
                  <div className="text-muted-foreground mb-2"># Installation</div>
                  <div>npm install @pi-lab/sdk</div>
                  <div className="mt-4 text-muted-foreground"># Ou utilisez directement l'API REST</div>
                  <div>curl https://api.pi-lab.dev/v1/search?q=314159</div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Exemple en JavaScript :</h4>
                  <div className="bg-card p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{`import { PiLab } from '@pi-lab/sdk';

const client = new PiLab({ apiKey: 'YOUR_API_KEY' });

// Rechercher une séquence
const results = await client.search('314159');
console.log(results.positions);

// Analyser la compressibilité
const analysis = await client.analyze('123456789', {
  algorithms: ['gzip', 'bzip2']
});`}</pre>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Endpoints */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Endpoints principaux
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge>GET</Badge>
                      <code className="text-sm">/v1/search</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Rechercher une séquence dans π
                    </p>
                  </div>

                  <div className="border-l-2 border-accent pl-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary">POST</Badge>
                      <code className="text-sm">/v1/analyze</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Analyser la complexité d'une séquence
                    </p>
                  </div>

                  <div className="border-l-2 border-scientific pl-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge>GET</Badge>
                      <code className="text-sm">/v1/digits</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Récupérer n décimales à partir d'une position
                    </p>
                  </div>

                  <div className="border-l-2 border-primary pl-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge>GET</Badge>
                      <code className="text-sm">/v1/stats</code>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Obtenir les statistiques globales
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rate Limits & Pricing */}
            <Card>
              <CardHeader>
                <CardTitle>Limites & Tarification</CardTitle>
                <CardDescription>
                  Plans adaptés à tous les usages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Free Tier</h4>
                      <Badge variant="outline">0€/mois</Badge>
                    </div>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• 1000 requêtes/jour</li>
                      <li>• Séquences jusqu'à 12 chiffres</li>
                      <li>• Support communautaire</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Pro</h4>
                      <Badge>49€/mois</Badge>
                    </div>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• 100k requêtes/jour</li>
                      <li>• Séquences jusqu'à 20 chiffres</li>
                      <li>• Support prioritaire</li>
                      <li>• Webhooks & export batch</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Enterprise</h4>
                      <Badge variant="secondary">Sur mesure</Badge>
                    </div>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Illimité</li>
                      <li>• Déploiement on-premise</li>
                      <li>• SLA garanti</li>
                      <li>• Données personnalisées</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Documentation & Resources */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-scientific" />
                  Ressources & Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-auto flex-col items-start p-4 gap-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <div className="text-left">
                      <div className="font-semibold">Documentation complète</div>
                      <div className="text-xs text-muted-foreground">
                        Guides, références API, exemples
                      </div>
                    </div>
                  </Button>

                  <Button variant="outline" className="h-auto flex-col items-start p-4 gap-2">
                    <Github className="h-6 w-6 text-foreground" />
                    <div className="text-left">
                      <div className="font-semibold">GitHub</div>
                      <div className="text-xs text-muted-foreground">
                        Code source, SDKs, issues
                      </div>
                    </div>
                  </Button>

                  <Button variant="outline" className="h-auto flex-col items-start p-4 gap-2">
                    <MessageSquare className="h-6 w-6 text-accent" />
                    <div className="text-left">
                      <div className="font-semibold">Discord Community</div>
                      <div className="text-xs text-muted-foreground">
                        Support, discussions, updates
                      </div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* MVP Dev Priority */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Priorités MVP pour les développeurs</CardTitle>
                <CardDescription>
                  Stack recommandé et roadmap de développement
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Stack technique recommandé :</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Frontend</Badge>
                      <span className="text-sm">React + TypeScript + TailwindCSS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Backend</Badge>
                      <span className="text-sm">Node.js + Express + PostgreSQL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Cache</Badge>
                      <span className="text-sm">Redis pour requêtes fréquentes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Deploy</Badge>
                      <span className="text-sm">Docker + Cloud provider (AWS/GCP)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Priorités de développement MVP :</h4>
                  <ol className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <Badge className="flex-shrink-0">P1</Badge>
                      <span>Système de recherche basique (séquences &lt;10 chiffres, dataset 1M décimales)</span>
                    </li>
                    <li className="flex gap-2">
                      <Badge className="flex-shrink-0">P1</Badge>
                      <span>Interface utilisateur responsive avec résultats en temps réel</span>
                    </li>
                    <li className="flex gap-2">
                      <Badge className="flex-shrink-0">P2</Badge>
                      <span>API REST avec authentification simple (API key)</span>
                    </li>
                    <li className="flex gap-2">
                      <Badge className="flex-shrink-0">P2</Badge>
                      <span>Module d'analyse de compressibilité (gzip uniquement au début)</span>
                    </li>
                    <li className="flex gap-2">
                      <Badge className="flex-shrink-0">P3</Badge>
                      <span>Visualisations statistiques (distribution, tests Chi²)</span>
                    </li>
                    <li className="flex gap-2">
                      <Badge className="flex-shrink-0">P3</Badge>
                      <span>Système d'export (CSV, JSON) avec disclaimers éthiques</span>
                    </li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* User Stories */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>User Stories - API</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <Badge variant="outline" className="flex-shrink-0">US-7</Badge>
                    <p><strong>En tant que développeur,</strong> je veux une API REST documentée, 
                    afin d'intégrer π-lab dans mon application.</p>
                  </li>
                  <li className="flex gap-2">
                    <Badge variant="outline" className="flex-shrink-0">US-8</Badge>
                    <p><strong>En tant que startup,</strong> je veux un plan tarifaire flexible, 
                    afin de scaler progressivement sans coûts initiaux élevés.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Api;
