import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, LineChart, Code, AlertCircle, Shield, Eye, Database, Zap, Users } from "lucide-react";
import Navigation from "@/components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-float">
            <Badge variant="secondary" className="mb-4">Plateforme expérimentale et pédagogique</Badge>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gradient">π-lab</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto">
              Explorez les décimales de π avec rigueur scientifique
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Une plateforme de recherche et d'analyse des décimales de π, conçue pour chercheurs, 
              curieux et passionnés de mathématiques. Découvrez des patterns, analysez la complexité 
              et comprenez les limites mathématiques fondamentales.
            </p>
            
            <div className="flex gap-4 justify-center mt-8">
              <Link to="/recherche">
                <Button size="lg" className="gradient-discovery text-lg">
                  <Search className="mr-2 h-5 w-5" />
                  Commencer une recherche
                </Button>
              </Link>
              <Link to="/api">
                <Button size="lg" variant="outline" className="text-lg">
                  <Code className="mr-2 h-5 w-5" />
                  Documentation API
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:border-primary/40 transition-all">
              <CardHeader>
                <Database className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>Recherche approfondie</CardTitle>
                <CardDescription>
                  Cherchez des séquences dans les milliards de décimales de π. 
                  Visualisez les positions, fréquences et patterns avec des outils 
                  de recherche avancés et des algorithmes optimisés.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-all">
              <CardHeader>
                <LineChart className="h-10 w-10 mb-4 text-accent" />
                <CardTitle>Analyse statistique</CardTitle>
                <CardDescription>
                  Évaluez la compressibilité et la complexité de Kolmogorov 
                  (via proxies pratiques). Explorez les propriétés de normalité 
                  présumée de π à travers des visualisations interactives.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-scientific/20 hover:border-scientific/40 transition-all">
              <CardHeader>
                <Zap className="h-10 w-10 mb-4 text-scientific" />
                <CardTitle>API puissante</CardTitle>
                <CardDescription>
                  Intégrez nos données dans vos projets via une API REST moderne. 
                  Accédez programmatiquement aux recherches, analyses et exports 
                  pour vos propres expérimentations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Ethical Disclaimers */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <AlertCircle className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h2 className="text-3xl font-bold mb-4">Transparence et limites</h2>
            <p className="text-muted-foreground">
              Une approche scientifique rigoureuse nécessite honnêteté sur nos capacités et limitations.
            </p>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Eye className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Normalité de π (conjecturée)</h3>
                    <p className="text-sm text-muted-foreground">
                      On suppose que π est normal (chaque séquence apparaît avec fréquence uniforme), 
                      mais ce n'est pas prouvé mathématiquement. Nos analyses s'appuient sur cette hypothèse.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Incomputabilité de Kolmogorov</h3>
                    <p className="text-sm text-muted-foreground">
                      La complexité de Kolmogorov est mathématiquement incomputable. Nous utilisons 
                      des algorithmes de compression (gzip, bz2) comme approximations pratiques.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Limites de performance</h3>
                    <p className="text-sm text-muted-foreground">
                      Les recherches exhaustives sur de très longues séquences peuvent prendre 
                      beaucoup de temps (complexité algorithmique). Nous limitons certaines requêtes 
                      pour garantir une expérience utilisateur fluide.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Database className="h-6 w-6 text-scientific flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Proxy de compressibilité</h3>
                    <p className="text-sm text-muted-foreground">
                      Les compresseurs standards (gzip, bzip2) servent d'approximation de la complexité. 
                      Ce ne sont pas des mesures exactes mais des indicateurs fiables pour comparer des séquences.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Usage éducatif et expérimental</h3>
                    <p className="text-sm text-muted-foreground">
                      Cette plateforme vise la pédagogie et la recherche exploratoire. Les résultats 
                      ne doivent pas être utilisés pour des décisions critiques sans validation externe.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à explorer π ?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Rejoignez chercheurs et curieux dans cette aventure mathématique
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/recherche">
              <Button size="lg" className="gradient-discovery">
                Lancer votre première recherche
              </Button>
            </Link>
            <Link to="/api">
              <Button size="lg" variant="outline">
                Explorer la documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>π-lab - Plateforme expérimentale et pédagogique</p>
          <p className="mt-2">Recherche rigoureuse • Transparence totale • Open source</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
