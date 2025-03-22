import { useEffect, useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface Item {
  id: number;
  name: string;
  description: string;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch items from the backend using async/await
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/items`);
        const data = await response.json();
        setItems(data);
        setLoading(false);
      } catch (error) {
        setError(error as string);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen font-sans bg-slate-900">
      <header className="pt-16 pb-12 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text">
          Fullstack App with FastAPI and React
        </h1>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <Card
              key={item.id}
              className="bg-slate-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <CardHeader>
                <CardTitle className="text-slate-300">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
