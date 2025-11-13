import Papa from 'papaparse';
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function AnalyticsModelPage() {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({
    suhu_laut: '',
    klorofil: '',
    arus: '',
    aktivitas_kapal: '',
  });
  const [prediction, setPrediction] = useState(null);
  const [conversation, setConversation] = useState([]);
  const [userMessage, setUserMessage] = useState('');

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

  const handlePredict = () => {
    // Simulate prediction logic
    const simulatedPrediction = {
      hasil_tangkapan: Math.random() * 500, // Random prediction for demonstration
    };
    setPrediction(simulatedPrediction);
  };

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      setConversation((prev) => [...prev, { sender: 'User', message: userMessage }]);
      setTimeout(() => {
        setConversation((prev) => [
          ...prev,
          { sender: 'AI', message: 'Terima kasih atas pertanyaannya! Saya akan menganalisis lebih lanjut.' },
        ]);
      }, 1000);
      setUserMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f0f9ff] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">Model AI & Analytics</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visualisasi prediksi model dan percakapan dengan AI
          </p>
        </div>

        {/* Input Form */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Suhu Laut (°C)</label>
              <input
                type="number"
                value={inputData.suhu_laut}
                onChange={(e) => setInputData({ ...inputData, suhu_laut: e.target.value })}
                className="block w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Klorofil (mg/m³)</label>
              <input
                type="number"
                value={inputData.klorofil}
                onChange={(e) => setInputData({ ...inputData, klorofil: e.target.value })}
                className="block w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Arus Laut</label>
              <input
                type="number"
                value={inputData.arus}
                onChange={(e) => setInputData({ ...inputData, arus: e.target.value })}
                className="block w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Aktivitas Kapal</label>
              <input
                type="number"
                value={inputData.aktivitas_kapal}
                onChange={(e) => setInputData({ ...inputData, aktivitas_kapal: e.target.value })}
                className="block w-full px-4 py-2 border rounded-md"
              />
            </div>
          </div>
          <button
            onClick={handlePredict}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Prediksi
          </button>
        </div>

        {/* Prediction Output */}
        {prediction && (
          <div className="mt-8 p-6 bg-green-100 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Hasil Prediksi</h2>
            <p className="text-lg">Perkiraan Hasil Tangkapan: {prediction.hasil_tangkapan.toFixed(2)} kg</p>
          </div>
        )}

        {/* Prediction Chart */}
        <div className="mb-16">
          <h2 className="text-2xl mb-4">Grafik Prediksi</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="prediction" stroke="#0077b6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* AI Chat */}
        <div className="mt-12">
          <h2 className="text-2xl mb-4">Percakapan dengan AI</h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md max-h-96 overflow-y-auto">
            {conversation.map((chat, index) => (
              <div
                key={index}
                className={`mb-4 ${chat.sender === 'AI' ? 'text-left' : 'text-right'}`}
              >
                <p
                  className={`inline-block px-4 py-2 rounded-lg ${
                    chat.sender === 'AI'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {chat.message}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ketik pesan..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg"
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}