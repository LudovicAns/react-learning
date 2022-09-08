import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <div className="movieContainer">
        <Card title="Avengers" subtitle="SF - Marvel" />
      <Card title="IronMan" subtitle="SF - Marvel" />
      <Card title="Captain America" subtitle="SF - Marvel" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
