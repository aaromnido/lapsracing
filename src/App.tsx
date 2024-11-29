import { Header } from './components/Header';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;