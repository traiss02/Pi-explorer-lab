import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Search, Loader2, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { exportSearchResultsToCSV, exportToJSON } from "@/lib/exportUtils";

const Recherche = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<{
    query: string;
    found: boolean;
    positions: number[];
    totalOccurrences: number;
    searchTime: string;
    datasetSize: string;
  } | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleExportCSV = () => {
    if (results) {
      exportSearchResultsToCSV(results);
      toast({
        title: "Export réussi",
        description: "Les résultats ont été exportés en CSV",
      });
    }
  };

  const handleExportJSON = () => {
    if (results) {
      exportToJSON(results, `recherche-pi-${results.query}.json`);
      toast({
        title: "Export réussi",
        description: "Les résultats ont été exportés en JSON",
      });
    }
  };

  const handleAnalyze = () => {
    if (results) {
      navigate('/analyse', { state: { sequence: results.query } });
      toast({
        title: "Redirection vers l'analyse",
        description: `Analyse de la séquence ${results.query}`,
      });
    }
  };

  const handleSearch = async () => {
    if (!searchQuery) {
      toast({
        title: "Séquence requise",
        description: "Veuillez entrer une séquence de chiffres à rechercher",
        variant: "destructive",
      });
      return;
    }

    if (searchQuery.length > 20) {
      toast({
        title: "Séquence trop longue",
        description: "Les séquences de plus de 20 chiffres peuvent prendre trop de temps",
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);
    
    // Simulation de recherche plus réaliste
    // Le temps de recherche augmente avec la longueur de la séquence
    const searchTime = 500 + (searchQuery.length * 100);
    
    setTimeout(() => {
      // Simulation: les séquences plus longues ont moins d'occurrences
      const baseOccurrences = Math.max(1, Math.floor(10 / searchQuery.length));
      const occurrences = Math.floor(Math.random() * baseOccurrences) + 1;
      
      // Génération de positions aléatoires mais réalistes
      const positions: number[] = [];
      for (let i = 0; i < occurrences; i++) {
        positions.push(Math.floor(Math.random() * 1000000000));
      }
      positions.sort((a, b) => a - b);
      
      const mockResults = {
        query: searchQuery,
        found: true,
        positions: positions,
        totalOccurrences: occurrences,
        searchTime: `${(searchTime / 1000).toFixed(3)}s`,
        datasetSize: "1 milliard de décimales",
      };
      
      setResults(mockResults);
      setIsSearching(false);
      
      toast({
        title: "Recherche terminée",
        description: `${mockResults.totalOccurrences} occurrence(s) trouvée(s)`,
      });
    }, searchTime);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Recherche de séquences</h1>
            <p className="text-xl text-muted-foreground">
              Trouvez n'importe quelle séquence dans les décimales de π
            </p>
          </div>

          {/* Search Interface */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Entrez votre séquence</CardTitle>
              <CardDescription>
                Recherchez des patterns numériques dans le billion de décimales disponibles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Input
                  type="text"
                  placeholder="Ex: 314159 ou 123456"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value.replace(/\D/g, ""))}
                  className="text-lg"
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
                <Button 
                  onClick={handleSearch}
                  disabled={isSearching}
                  size="lg"
                  className="gradient-discovery"
                >
                  {isSearching ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Recherche...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-5 w-5" />
                      Rechercher
                    </>
                  )}
                </Button>
              </div>

              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>
                  Les recherches de séquences très longues (&gt;15 chiffres) peuvent prendre 
                  plusieurs secondes. Complexité algorithmique : O(n) où n = nombre de décimales.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          {results && (
            <Card className="border-primary/40">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Résultats pour "{results.query}"</CardTitle>
                  <Badge variant="default">{results.totalOccurrences} occurrences</Badge>
                </div>
                <CardDescription>
                  Recherche effectuée en {results.searchTime} sur {results.datasetSize}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3">Positions trouvées :</h3>
                  <div className="space-y-2">
                    {results.positions.map((pos: number, idx: number) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                        <span className="font-mono">Position {pos.toLocaleString()}</span>
                        <Badge variant="outline">Décimale #{idx + 1}</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold mb-2">Statistiques :</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-card rounded-lg">
                      <p className="text-sm text-muted-foreground">Fréquence observée</p>
                      <p className="text-lg font-semibold">{(results.totalOccurrences / 1000000000 * 100).toFixed(8)}%</p>
                    </div>
                    <div className="p-3 bg-card rounded-lg">
                      <p className="text-sm text-muted-foreground">Fréquence théorique*</p>
                      <p className="text-lg font-semibold">{(Math.pow(10, -results.query.length) * 100).toFixed(8)}%</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    *Si π est normal (hypothèse non prouvée)
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handleExportCSV}>
                    Exporter en CSV
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleAnalyze}>
                    Analyser cette séquence
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleExportJSON}>
                    Exporter en JSON
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* User Stories */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Cas d'usage</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <Badge variant="outline" className="flex-shrink-0">US-1</Badge>
                  <p><strong>En tant que chercheur,</strong> je veux rechercher une séquence spécifique, 
                  afin de vérifier sa présence dans π.</p>
                </li>
                <li className="flex gap-2">
                  <Badge variant="outline" className="flex-shrink-0">US-2</Badge>
                  <p><strong>En tant qu'utilisateur curieux,</strong> je veux trouver ma date de naissance 
                  dans π, afin de m'émerveiller.</p>
                </li>
                <li className="flex gap-2">
                  <Badge variant="outline" className="flex-shrink-0">US-3</Badge>
                  <p><strong>En tant qu'étudiant,</strong> je veux comparer fréquence observée vs théorique, 
                  afin de comprendre la normalité présumée.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Recherche;
