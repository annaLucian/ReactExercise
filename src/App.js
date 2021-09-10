
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon"

const date = new Date().toLocaleDateString();
const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
function App() {
  return (
    <div>
      <Logo appNmae="Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />

    </div>
  );
}


export default App;
