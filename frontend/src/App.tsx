import { useEffect, useState } from "react";

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
    <div className="App">
      <header className="App-header">
        <h1>Fullstack App with FastAPI and React</h1>
        {items.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </header>
      <main></main>
    </div>
  );
}

export default App;
