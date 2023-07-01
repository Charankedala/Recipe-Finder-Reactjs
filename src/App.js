
import './App.scss';
import Header from './component/Header'
import Tabs from './component/Tabs'
import RecipeLists from './component/RecipeLists'

function App() {
  const[loader,setLoader] = useState(true)
  return (
    <div className="App">
      <Header />
      <Tabs setLoader={setLoader} />
      <RecipeLists setLoader={setLoader}/>
      {loader && <div className='loader'>
        <div className='spinner'></div> 
        </div>}
    </div>

 );
}

export default App;
