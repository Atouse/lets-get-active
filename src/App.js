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
      {/* <a href="#refs"> Reference</a> */}
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
  "economic": {

  },
  "mental" : {
    "title" : "Mental Health",
    "desc" : `It sounds strange at first, how is it possible that physical activity help my mental state? The exhaustion after an intense workout is always coupled with a
     feeling of being relaxed and at peace. The reason that feeling comes along is the physical activity release more serotonin in the blood which is a neurotransmitter for 
     the brain to feel good and relaxed. Cardiovascular activities is the ideal way to improve your sleep because it build up your fatigue and mentally relaxed for a better nights 
     sleep. ` ,
    "stats" : ` Doing physical activites also helps with the social aspect of your life as well. 76% of Canadians feel that they are welcomed and accepted when doing recreational and physical activities.
    69% of Canadians agree that getting active such as participating in recreational activities reduces self-harm behaviours and thoughts. `
  }
}
function App() {
  return (
    <div className="App">
      <h1> Benefits of exercising</h1>
      <span> Everyone knows going to the gym means you'll be slimmer, faster and/or stronger, but what most people don't know are the other hidden benefits behind exercising.</span>

      <Informations title={faxNoPrinter.health.title} desc={faxNoPrinter.health.desc} stats={faxNoPrinter.health.stats}></Informations>
      <Informations title={faxNoPrinter.mental.title} desc={faxNoPrinter.mental.desc} stats={faxNoPrinter.mental.stats}></Informations>

      <References ></References>
    </div>
  );
}

export default App;
