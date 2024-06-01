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
      <h4> Some stats to note: </h4>
      <span> {info.stats} </span>
      <a href="#refs"> Reference</a>
    </div>
  )

}

const faxNoPrinter = {
  "health": {
    "title": "Health Benefits",
    "desc" : "The long term benefits for your health are better cholesterol levels, lower levels of stress, and longer life span. It helps you become resilient to a plethora of cardiovascular, chronic and degenerative diseases.",
    "stats" : `Daily physical activities drastically reduce cardiovascular risk factors. The Montreal Heart Institute found that exercise can reduce dangerous cholesterol, blood sugar, and blood pressure levels by 50%.
     A big eye opener is the number of deaths caused by inactivity with approximately 3.2 million deaths attributed to lack of physical exercise and stands as the 4th highest risk factor for premature death and mortality.`
  },
  "social": {

  },
  "economic": {

  },
  "mental" : {
    "title" : "Mental Health",
    "desc" : "" ,
    "stats" : ""
  }
}
function App() {
  return (
    <div className="App">
      <h1> Benefits of exercising</h1>
      <span> Everyone knows going to the gym means you'll be slimmer, faster and/or stronger, but what most people don't know are the other hidden benefits behind exercising.</span>

      <Informations title={faxNoPrinter.health.title} desc={faxNoPrinter.health.desc} stats={faxNoPrinter.health.stats}></Informations>





      <References ></References>
    </div>
  );
}

export default App;
