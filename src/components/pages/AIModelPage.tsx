import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Brain, Sparkles, TrendingUp } from 'lucide-react';

export function AIModelPage() {
  const [thetaO, setThetaO] = useState('');
  const [chl, setChl] = useState('');
  const [prediction, setPrediction] = useState<number | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate AI model prediction
    setTimeout(() => {
      const theta = parseFloat(thetaO);
      const chlValue = parseFloat(chl);
      
      // Simple mock prediction formula
      const predictedRain = Math.round(
        40 + (theta * 1.5) + (chlValue * 10) + (Math.random() * 20)
      );
      const modelConfidence = Math.round(85 + Math.random() * 10);

      setPrediction(predictedRain);
      setConfidence(modelConfidence);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <p className="text-muted-foreground">
          Use AI model to predict rainfall based on oceanographic parameters
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Form */}
        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              AI Prediction Input
            </CardTitle>
            <p className="text-sm text-muted-foreground">Enter oceanographic parameters</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePredict} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="thetaO">Sea Surface Temperature (θO) °C</Label>
                <Input
                  id="thetaO"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 28.5"
                  value={thetaO}
                  onChange={(e) => setThetaO(e.target.value)}
                  className="h-12 rounded-xl"
                  required
                />
                <p className="text-xs text-muted-foreground">Typical range: -2°C to 35°C</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="chl">Chlorophyll (CHL) mg/m³</Label>
                <Input
                  id="chl"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 2.3"
                  value={chl}
                  onChange={(e) => setChl(e.target.value)}
                  className="h-12 rounded-xl"
                  required
                />
                <p className="text-xs text-muted-foreground">Typical range: 0.1 to 10 mg/m³</p>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-[#0066cc] to-[#00bcd4] hover:from-[#0052a3] hover:to-[#0097a7] rounded-xl shadow-lg"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Brain className="w-4 h-4 mr-2" />
                    Predict Rainfall
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Prediction Result */}
        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-secondary" />
              Prediction Result
            </CardTitle>
            <p className="text-sm text-muted-foreground">AI-generated rainfall forecast</p>
          </CardHeader>
          <CardContent>
            {prediction === null ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0066cc]/10 to-[#00bcd4]/10 flex items-center justify-center mb-4">
                  <Brain className="w-10 h-10 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">
                  Enter parameters and click Predict to see results
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Main Prediction */}
                <div className="p-6 bg-gradient-to-br from-[#0066cc] to-[#00bcd4] rounded-2xl text-white text-center">
                  <p className="text-sm opacity-90 mb-2">Predicted Rainfall</p>
                  <h2 className="text-5xl mb-1">{prediction}</h2>
                  <p className="text-xl">millimeters</p>
                </div>

                {/* Confidence Score */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Model Confidence</span>
                    <span className="text-sm">{confidence}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#0066cc] to-[#00bcd4] transition-all duration-1000"
                      style={{ width: `${confidence}%` }}
                    />
                  </div>
                </div>

                {/* Input Summary */}
                <div className="space-y-2 p-4 bg-muted/50 rounded-xl">
                  <p className="text-sm">Input Parameters:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Temperature</p>
                      <p>{thetaO}°C</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Chlorophyll</p>
                      <p>{chl} mg/m³</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Model Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066cc] to-[#1976d2] flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Model Accuracy</p>
                <h3 className="text-2xl">94.3%</h3>
                <p className="text-xs text-muted-foreground mt-1">On validation set</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00bcd4] to-[#26c6da] flex items-center justify-center shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Model Type</p>
                <h3 className="text-xl">Neural Network</h3>
                <p className="text-xs text-muted-foreground mt-1">Deep learning model</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4dd0e1] to-[#80deea] flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Training Data</p>
                <h3 className="text-2xl">50K+</h3>
                <p className="text-xs text-muted-foreground mt-1">Historical records</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Model Details */}
      <Card className="transition-all duration-300 hover:shadow-xl">
        <CardHeader>
          <CardTitle>Model Information</CardTitle>
          <p className="text-sm text-muted-foreground">Technical details and performance metrics</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/50 rounded-xl">
                <p className="text-sm text-muted-foreground">Algorithm</p>
                <p>Deep Neural Network (DNN)</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-xl">
                <p className="text-sm text-muted-foreground">Input Features</p>
                <p>Temperature, Chlorophyll</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-xl">
                <p className="text-sm text-muted-foreground">Output</p>
                <p>Rainfall Prediction (mm)</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-xl">
                <p className="text-sm text-muted-foreground">Last Updated</p>
                <p>November 10, 2025</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
