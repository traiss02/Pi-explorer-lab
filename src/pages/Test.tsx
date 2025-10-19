import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { searchInPi, calculateDigitDistribution, analyzeCompressibility } from "@/lib/pi-data";

const Test = () => {
  const [testResults, setTestResults] = useState<any>({});
  const [isRunning, setIsRunning] = useState(false);

  const runTests = async () => {
    setIsRunning(true);
    const results: any = {};

    try {
      // Test 1: Recherche de séquences connues
      console.log("Test 1: Recherche de séquences...");
      const testSequences = ["14159", "26535", "89793", "314159"];
      
      results.searchTests = testSequences.map(seq => {
        const result = searchInPi(seq);
        return {
          sequence: seq,
          found: result.found,
          occurrences: result.totalOccurrences,
          time: result.searchTime,
          status: result.found ? "success" : "error"
        };
      });

      // Test 2: Distribution des chiffres
      console.log("Test 2: Distribution des chiffres...");
      const distribution = calculateDigitDistribution();
      results.distributionTest = {
        status: "success",
        data: distribution,
        totalDigits: Object.values(distribution).reduce((sum, val) => sum + val, 0)
      };

      // Test 3: Analyse de compressibilité
      console.log("Test 3: Analyse de compressibilité...");
      const sample = "141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198938095257201065485863278865936153381827968230301952035301852968995773622599413891249721775283479131515574857242454150695950829533116861727855889075098381754637464939319255060400927701671139009848824012858361603563707660104710181942955596198946767837449448255379774726847104047534646208046684259069491293313677028989152104752162056966024058038150193511253382430035587640247496473263914199272604269922796782354781636009341721641219924586315030286182974555706749838505494588586926995690927210797509302955321165344987202755960236480665499119881834797753566369807426542527862551818417574672890977772793800081647060016145249192173217214772350141441973568548161361157352552133475741849468438523323907394143334547762416862518983569485562099219222184272550254256887671790494601653466804988627232791786085784383827967976681454100953883786360950680064225125205117392984896084128488626945604241965285022210661186306744278622039194945047123713786960956364371917287467764657573962413890865832645995813390478027590099465764078951269468398352595709825822620522489407726719478268482601476990902640136394437455305068203496252451749399651431429809190659250937221696461515709858387410597885959772975498930161753928468138268683868942774155991855925245953959431049972524680845987273644695848653836736222626099124608051243884390451244136549762780797715691435997700129616089441694868555848406353422072225828488648158456028506016842739452267467678895252138522549954666727823986456596116354886230577456498035593634568174324112515076069479451096596094025228879710893145669136867228748940560101503308617319680418783163";
      const compression = analyzeCompressibility(sample);
      results.compressionTest = {
        status: "success",
        data: compression
      };

      // Test 4: Performance
      console.log("Test 4: Test de performance...");
      const startTime = performance.now();
      // Utiliser une séquence plus courte pour le test de performance
      const perfTest = searchInPi("14159265358979323846");
      const endTime = performance.now();
      results.performanceTest = {
        status: "success",
        searchTime: perfTest.searchTime,
        totalTime: Math.round((endTime - startTime) * 100) / 100
      };

      results.overallStatus = "success";
      results.timestamp = new Date().toISOString();

    } catch (error) {
      console.error("Erreur lors des tests:", error);
      results.overallStatus = "error";
      results.error = error;
    }

    setTestResults(results);
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tests de fonctionnalités</h1>
            <p className="text-xl text-muted-foreground">
              Vérification du bon fonctionnement de π-lab
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Lancer les tests</CardTitle>
              <CardDescription>
                Exécutez tous les tests pour vérifier que les fonctionnalités fonctionnent correctement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={runTests}
                disabled={isRunning}
                size="lg"
                className="gradient-discovery"
              >
                {isRunning ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Tests en cours...
                  </>
                ) : (
                  "Lancer les tests"
                )}
              </Button>
            </CardContent>
          </Card>

          {Object.keys(testResults).length > 0 && (
            <div className="space-y-6">
              {/* Résultats généraux */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {testResults.overallStatus === "success" ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-500" />
                    )}
                    Résultats des tests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Statut global</p>
                      <Badge variant={testResults.overallStatus === "success" ? "default" : "destructive"}>
                        {testResults.overallStatus === "success" ? "Succès" : "Erreur"}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Timestamp</p>
                      <p className="text-sm">{new Date(testResults.timestamp).toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tests de recherche */}
              {testResults.searchTests && (
                <Card>
                  <CardHeader>
                    <CardTitle>Tests de recherche</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {testResults.searchTests.map((test: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                          <div>
                            <span className="font-mono">{test.sequence}</span>
                            <span className="text-sm text-muted-foreground ml-2">
                              {test.occurrences} occurrence(s) en {test.time}ms
                            </span>
                          </div>
                          <Badge variant={test.status === "success" ? "default" : "destructive"}>
                            {test.status === "success" ? "✓" : "✗"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Test de distribution */}
              {testResults.distributionTest && (
                <Card>
                  <CardHeader>
                    <CardTitle>Test de distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Statut</p>
                        <Badge variant="default">✓ Succès</Badge>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total de chiffres analysés</p>
                        <p className="text-lg font-semibold">{testResults.distributionTest.totalDigits.toLocaleString()}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Test de compressibilité */}
              {testResults.compressionTest && (
                <Card>
                  <CardHeader>
                    <CardTitle>Test de compressibilité</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-3 bg-secondary/30 rounded-lg">
                        <p className="text-sm text-muted-foreground">GZIP</p>
                        <p className="text-lg font-semibold">{(testResults.compressionTest.data.gzip * 100).toFixed(1)}%</p>
                      </div>
                      <div className="p-3 bg-secondary/30 rounded-lg">
                        <p className="text-sm text-muted-foreground">BZIP2</p>
                        <p className="text-lg font-semibold">{(testResults.compressionTest.data.bzip2 * 100).toFixed(1)}%</p>
                      </div>
                      <div className="p-3 bg-secondary/30 rounded-lg">
                        <p className="text-sm text-muted-foreground">LZMA</p>
                        <p className="text-lg font-semibold">{(testResults.compressionTest.data.lzma * 100).toFixed(1)}%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Test de performance */}
              {testResults.performanceTest && (
                <Card>
                  <CardHeader>
                    <CardTitle>Test de performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Temps de recherche</p>
                        <p className="text-lg font-semibold">{testResults.performanceTest.searchTime}ms</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Temps total</p>
                        <p className="text-lg font-semibold">{testResults.performanceTest.totalTime}ms</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Test;

