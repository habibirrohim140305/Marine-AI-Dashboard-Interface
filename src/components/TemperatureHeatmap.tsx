import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useEffect, useRef } from 'react';

export function TemperatureHeatmap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Create temperature heatmap data
    const cellSize = 20;
    const cols = Math.floor(width / cellSize);
    const rows = Math.floor(height / cellSize);

    // Generate temperature data (simulated)
    const temperatures: number[][] = [];
    for (let i = 0; i < rows; i++) {
      temperatures[i] = [];
      for (let j = 0; j < cols; j++) {
        // Create a wave-like pattern for ocean temperatures
        const centerX = cols / 2;
        const centerY = rows / 2;
        const distanceFromCenter = Math.sqrt(
          Math.pow(j - centerX, 2) + Math.pow(i - centerY, 2)
        );
        const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
        const normalizedDistance = distanceFromCenter / maxDistance;
        
        // Temperature ranges from 15°C to 30°C
        temperatures[i][j] = 15 + (1 - normalizedDistance) * 15 + Math.random() * 3;
      }
    }

    // Draw heatmap
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const temp = temperatures[i][j];
        
        // Color based on temperature (ocean blue to cyan gradient)
        let r, g, b;
        if (temp < 20) {
          // Cold: dark blue
          const factor = (temp - 15) / 5;
          r = Math.floor(0 + factor * 0);
          g = Math.floor(102 + factor * 86);
          b = Math.floor(204 + factor * 1);
        } else if (temp < 25) {
          // Medium: cyan
          const factor = (temp - 20) / 5;
          r = Math.floor(0 + factor * 77);
          g = Math.floor(188 + factor * 20);
          b = Math.floor(212 + factor * 13);
        } else {
          // Warm: light cyan
          const factor = (temp - 25) / 5;
          r = Math.floor(77 + factor * 100);
          g = Math.floor(208 + factor * 47);
          b = Math.floor(225 + factor * 30);
        }

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.9)`;
        ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
        
        // Add subtle border
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);
      }
    }

    // Add some overlay effects for "ocean" look
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, 'rgba(0, 102, 204, 0.1)');
    gradient.addColorStop(0.5, 'rgba(0, 188, 212, 0.1)');
    gradient.addColorStop(1, 'rgba(77, 208, 225, 0.1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }, []);

  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle>Temperature Distribution Map</CardTitle>
        <p className="text-sm text-muted-foreground">Real-time ocean temperature heatmap (°C)</p>
      </CardHeader>
      <CardContent>
        <div className="relative rounded-lg overflow-hidden border border-border">
          <canvas
            ref={canvasRef}
            width={600}
            height={300}
            className="w-full h-auto"
          />
          {/* Legend */}
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg">
            <p className="text-xs mb-2">Temperature (°C)</p>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-6 h-4 bg-[#0066cc] rounded"></div>
                <div className="w-6 h-4 bg-[#00bcd4] rounded"></div>
                <div className="w-6 h-4 bg-[#4dd0e1] rounded"></div>
                <div className="w-6 h-4 bg-[#b3e5fc] rounded"></div>
              </div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-muted-foreground">15°</span>
              <span className="text-xs text-muted-foreground">30°</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
