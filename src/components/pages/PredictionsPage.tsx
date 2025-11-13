import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Trash2, Plus } from 'lucide-react';
import { Badge } from '../ui/badge';

interface Prediction {
  id: string;
  location: string;
  latitude: number;
  longitude: number;
  thetaO: number;
  chl: number;
  predictedRain: number;
  timestamp: string;
}

const initialPredictions: Prediction[] = [
  { id: 'PRD-001', location: 'Pacific Ocean - Zone A', latitude: 15.5, longitude: -120.3, thetaO: 28.5, chl: 2.3, predictedRain: 85, timestamp: '2025-11-11 10:30' },
  { id: 'PRD-002', location: 'Indian Ocean - Zone B', latitude: -10.2, longitude: 75.8, thetaO: 29.2, chl: 1.8, predictedRain: 92, timestamp: '2025-11-11 09:15' },
  { id: 'PRD-003', location: 'Atlantic - Zone C', latitude: 35.7, longitude: -45.2, thetaO: 27.8, chl: 2.1, predictedRain: 78, timestamp: '2025-11-11 08:45' },
  { id: 'PRD-004', location: 'Arctic Ocean - Zone D', latitude: 78.2, longitude: -155.4, thetaO: 2.1, chl: 0.9, predictedRain: 45, timestamp: '2025-11-10 22:30' },
  { id: 'PRD-005', location: 'Mediterranean - Zone E', latitude: 38.5, longitude: 15.3, thetaO: 26.5, chl: 1.5, predictedRain: 62, timestamp: '2025-11-10 20:15' },
];

export function PredictionsPage() {
  const [predictions, setPredictions] = useState<Prediction[]>(initialPredictions);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    location: '',
    latitude: '',
    longitude: '',
    thetaO: '',
    chl: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPrediction: Prediction = {
      id: `PRD-${String(predictions.length + 1).padStart(3, '0')}`,
      location: formData.location,
      latitude: parseFloat(formData.latitude),
      longitude: parseFloat(formData.longitude),
      thetaO: parseFloat(formData.thetaO),
      chl: parseFloat(formData.chl),
      predictedRain: Math.round(Math.random() * 100 + 40), // Simulated prediction
      timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
    };
    setPredictions([newPrediction, ...predictions]);
    setFormData({ location: '', latitude: '', longitude: '', thetaO: '', chl: '' });
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    setPredictions(predictions.filter((p) => p.id !== id));
  };

  const totalPages = Math.ceil(predictions.length / itemsPerPage);
  const paginatedData = predictions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    // Load CSV data
    Papa.parse('/dummy_marine_data.csv', {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        setData(result.data);
      },
      error: (error) => {
        console.error('Error loading CSV:', error);
      },
    });
  }, []);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground">
            Manage and create new oceanographic predictions
          </p>
        </div>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-gradient-to-r from-[#0066cc] to-[#00bcd4] hover:from-[#0052a3] hover:to-[#0097a7] rounded-xl shadow-lg"
        >
          <Plus className="w-4 h-4 mr-2" />
          {showForm ? 'Cancel' : 'Add Prediction'}
        </Button>
      </div>

      {/* Add Prediction Form */}
      {showForm && (
        <Card className="transition-all duration-300 shadow-xl">
          <CardHeader>
            <CardTitle>Add New Prediction</CardTitle>
            <p className="text-sm text-muted-foreground">Enter oceanographic parameters</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Pacific Ocean - Zone A"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="rounded-xl"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="latitude">Latitude</Label>
                  <Input
                    id="latitude"
                    type="number"
                    step="0.01"
                    placeholder="e.g., 15.5"
                    value={formData.latitude}
                    onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
                    className="rounded-xl"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="longitude">Longitude</Label>
                  <Input
                    id="longitude"
                    type="number"
                    step="0.01"
                    placeholder="e.g., -120.3"
                    value={formData.longitude}
                    onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
                    className="rounded-xl"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="thetaO">Temperature (θO) °C</Label>
                  <Input
                    id="thetaO"
                    type="number"
                    step="0.1"
                    placeholder="e.g., 28.5"
                    value={formData.thetaO}
                    onChange={(e) => setFormData({ ...formData, thetaO: e.target.value })}
                    className="rounded-xl"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="chl">Chlorophyll (CHL) mg/m³</Label>
                  <Input
                    id="chl"
                    type="number"
                    step="0.1"
                    placeholder="e.g., 2.3"
                    value={formData.chl}
                    onChange={(e) => setFormData({ ...formData, chl: e.target.value })}
                    className="rounded-xl"
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0066cc] to-[#00bcd4] hover:from-[#0052a3] hover:to-[#0097a7] rounded-xl"
              >
                Generate Prediction
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Predictions Table */}
      <Card className="transition-all duration-300 hover:shadow-xl">
        <CardHeader>
          <CardTitle>All Predictions</CardTitle>
          <p className="text-sm text-muted-foreground">
            Showing {paginatedData.length} of {predictions.length} predictions
          </p>
        </CardHeader>
        <CardContent>
          <div className="rounded-xl border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>ID</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Coordinates</TableHead>
                  <TableHead>θO (°C)</TableHead>
                  <TableHead>CHL (mg/m³)</TableHead>
                  <TableHead>Predicted Rain (mm)</TableHead>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedData.map((pred) => (
                  <TableRow key={pred.id} className="hover:bg-muted/30 transition-colors">
                    <TableCell className="text-primary">{pred.id}</TableCell>
                    <TableCell>{pred.location}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {pred.latitude.toFixed(2)}, {pred.longitude.toFixed(2)}
                    </TableCell>
                    <TableCell>{pred.thetaO.toFixed(1)}</TableCell>
                    <TableCell>{pred.chl.toFixed(1)}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{pred.predictedRain} mm</Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{pred.timestamp}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(pred.id)}
                        className="text-destructive hover:bg-destructive/10 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="rounded-lg"
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="rounded-lg"
              >
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CSV Data Table */}
      <Card>
        <CardHeader>
          <CardTitle>Prediksi Populasi & Tangkapan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-xl border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>Tanggal</TableHead>
                  <TableHead>Suhu Laut (°C)</TableHead>
                  <TableHead>Klorofil (mg/m³)</TableHead>
                  <TableHead>Arus Laut</TableHead>
                  <TableHead>Aktivitas Kapal</TableHead>
                  <TableHead>Hasil Tangkapan (kg)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.slice(0, 50).map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{row.tanggal}</TableCell>
                    <TableCell>{row.suhu_laut?.toFixed(2)}</TableCell>
                    <TableCell>{row.klorofil?.toFixed(2)}</TableCell>
                    <TableCell>{row.arus?.toFixed(2)}</TableCell>
                    <TableCell>{row.aktivitas_kapal}</TableCell>
                    <TableCell>{row.hasil_tangkapan?.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
