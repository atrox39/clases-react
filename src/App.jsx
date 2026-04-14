import './App.css';

function App() {
  const tiendaNombre = "Fake Store";
  const stockDisponible = true;

  return (
    <div className="main-container">
      <h1>Bienvenida a {tiendaNombre}</h1>
      <p>Explora nuestro catálogo de productos.</p>
            
      {/* Las llaves {} nos permiten inyectar lógica de JS */}
      {stockDisponible ? (
        <button onClick={() => alert('¡Pronto verás los productos!')}>
          Ver Catálogo
        </button>
      ) : (
        <p>Lo sentimos, no hay stock disponible.</p>
      )}
    </div>
  );
}

export default App;
