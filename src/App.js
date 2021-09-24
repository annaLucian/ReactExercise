
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon"
import PokemonMoves from "./PokemonMoves";
import Counter from "./Counter";
import Weather from "./Weather";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";


const date = new Date().toLocaleDateString();
const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
const logWhenClicked = () => {
  console.log("imagen was clicked!")
}
function App() {

  return (
    <div>
      <Logo appNmae="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />

      <PokemonMovesSelector />
      <PokemonCity />
      <Counter incrementBy={1} />
      <Counter incrementBy={5} />
      <Weather />

    </div>
  );
}


export default App;
