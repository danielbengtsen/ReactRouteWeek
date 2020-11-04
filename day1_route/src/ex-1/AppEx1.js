import './App.css';
import Counter from './Counter';
import {JokeFetcher} from './Fetcher';
import MemberTable from './ListDemo';

const interval = 5;
let initialValue = 0;

function App() {
  // Check for localStorage
  if(localStorage.getItem("count") != null) 
  {
    initialValue = Number(localStorage.getItem("count"));
  } 

  return (
    <div className="App">
      <Counter initialValue={initialValue} interval={interval} />
      <JokeFetcher />
      
      <MemberTable />
    </div>
  );
}

export default App;
