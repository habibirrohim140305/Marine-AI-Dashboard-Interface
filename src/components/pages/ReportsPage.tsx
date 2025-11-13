import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Download, FileText, TrendingUp } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const monthlyData = [
  { month: 'Jan', temp: 27.2, chl: 2.1, rain: 65 },
  { month: 'Feb', temp: 27.8, chl: 2.3, rain: 72 },
  { month: 'Mar', temp: 28.1, chl: 2.0, rain: 68 },
  { month: 'Apr', temp: 28.5, chl: 2.2, rain: 75 },
  { month: 'May', temp: 29.0, chl: 1.9, rain: 82 },
  { month: 'Jun', temp: 29.3, chl: 1.8, rain: 88 },
];

const comparisonData = [
  { region: 'Pacific', actual: 85, predicted: 82 },
  { region: 'Indian', actual: 92, predicted: 95 },
  { region: 'Atlantic', actual: 78, predicted: 75 },
  { region: 'Arctic', actual: 45, predicted: 48 },
  { region: 'Mediterranean', actual: 62, predicted: 60 },
];

export function ReportsPage() {
  const handleDownload = (format: string) => {
    console.log(`Downloading report in ${format} format...`);
    // Simulate download
    alert(`Report download started (${format})`);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <p className="text-muted-foreground">
          View and download analytical reports and insights
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066cc] to-[#1976d2] flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Reports</p>
                <h3 className="text-2xl">156</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00bcd4] to-[#26c6da] flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Predictions</p>
                <h3 className="text-2xl">2,847</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4dd0e1] to-[#80deea] flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg Accuracy</p>
                <h3 className="text-2xl">94.3%</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1976d2] to-[#0d47a1] flex items-center justify-center shadow-lg">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Downloads</p>
                <h3 className="text-2xl">432</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Download Section */}
      <Card className="transition-all duration-300 hover:shadow-xl">
        <CardHeader>
          <CardTitle>Download Reports</CardTitle>
          <p className="text-sm text-muted-foreground">Export data and analytics in various formats</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button
              onClick={() => handleDownload('CSV')}
              className="h-16 bg-gradient-to-r from-[#0066cc] to-[#1976d2] hover:from-[#0052a3] hover:to-[#0d47a1] rounded-xl shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CSV
            </Button>
            <Button
              onClick={() => handleDownload('PDF')}
              className="h-16 bg-gradient-to-r from-[#00bcd4] to-[#26c6da] hover:from-[#0097a7] hover:to-[#00acc1] rounded-xl shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </Button>
            <Button
              onClick={() => handleDownload('Excel')}
              className="h-16 bg-gradient-to-r from-[#4dd0e1] to-[#80deea] hover:from-[#26c6da] hover:to-[#4dd0e1] rounded-xl shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Excel
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trends */}
        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardHeader>
            <CardTitle>Monthly Trends</CardTitle>
            <p className="text-sm text-muted-foreground">Temperature, Chlorophyll, and Rainfall</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0f2f7" />
                <XAxis dataKey="month" stroke="#5a7a8f" style={{ fontSize: '12px' }} />
                <YAxis stroke="#5a7a8f" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e0f2f7',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="temp"
                  stroke="#0066cc"
                  strokeWidth={2}
                  name="Temperature (°C)"
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="chl"
                  stroke="#00bcd4"
                  strokeWidth={2}
                  name="Chlorophyll (mg/m³)"
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="rain"
                  stroke="#4dd0e1"
                  strokeWidth={2}
                  name="Rainfall (mm)"
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Actual vs Predicted */}
        <Card className="transition-all duration-300 hover:shadow-xl">
          <CardHeader>
            <CardTitle>Actual vs Predicted Rainfall</CardTitle>
            <p className="text-sm text-muted-foreground">Comparison by region</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0f2f7" />
                <XAxis dataKey="region" stroke="#5a7a8f" style={{ fontSize: '12px' }} />
                <YAxis stroke="#5a7a8f" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e0f2f7',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <Legend />
                <Bar dataKey="actual" fill="#0066cc" name="Actual (mm)" radius={[8, 8, 0, 0]} />
                <Bar dataKey="predicted" fill="#00bcd4" name="Predicted (mm)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reports */}
      <Card className="transition-all duration-300 hover:shadow-xl">
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
          <p className="text-sm text-muted-foreground">Generated analytical reports</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: 'Monthly Oceanographic Summary - November 2025', date: '2025-11-11', size: '2.4 MB' },
              { name: 'AI Model Performance Report - Q4 2025', date: '2025-11-10', size: '1.8 MB' },
              { name: 'Regional Rainfall Analysis - Pacific Ocean', date: '2025-11-09', size: '3.1 MB' },
              { name: 'Chlorophyll Distribution Study - October 2025', date: '2025-11-08', size: '2.7 MB' },
              { name: 'Temperature Anomaly Report - Annual Review', date: '2025-11-07', size: '4.2 MB' },
            ].map((report, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0066cc] to-[#00bcd4] flex items-center justify-center">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p>{report.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {report.date} • {report.size}
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="rounded-lg">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
