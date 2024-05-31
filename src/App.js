import './App.css';


const References = () => {
  return (
    <div id="refs">
      <h2> References </h2>

    </div>
  )
}

const Informations = (info) => {
  return (
    <div id="info">
      <h3> {info.title}</h3>
      <span> {info.desc}</span> 
      <a href="#refs"> Reference</a>
    </div>
  )

}

const faxNoPrinter = {
  "health": {
    "title": "Health Benefits",
    "desc": "The long term benefits for your health are better cholesterol levels, lower levels of stress, and longer life span"
  },
  "social":{

  },
  "economic":{

  }
}
function App() {
  return (
    <div className="App">
      <h1> Benefits of exercising</h1>



      <Informations title={faxNoPrinter.health.title} desc={faxNoPrinter.health.desc}></Informations>





      <References ></References>
    </div>
  );
}

export default App;
