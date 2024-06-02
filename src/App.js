import './App.css';


const References = () => {
  return (
    <div id="refs">
      <h2> References </h2>
      <div className="list">
        <ol >
          <li><a href="https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/">List of more activities to do</a></li>
          <li><a href="https://www.redcross.ca/blog/2021/3/the-benefits-of-exercise-for-your-physical-and-mental-health"> Red cross </a></li>
          <li><a href="https://www.participaction.com/the-science/key-facts-and-stats/"> Participaction </a></li>
          <li><a href="https://health-infobase.canada.ca/src/doc/pass_childrenyouth_en.pdf"> Inactivity stats </a></li>
        </ol>
      </div>
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
      <span> About 9.5% of children and youths meet the </span>
      <a href="https://csepguidelines.ca/">24-hour movement guideline</a>
      <span> and the average number of hours they spend sitting or being inactive is 8.4 hours a day.</span>
      <Informations title={faxNoPrinter.health.title} desc={faxNoPrinter.health.desc} stats={faxNoPrinter.health.stats}></Informations>
      <Informations title={faxNoPrinter.mental.title} desc={faxNoPrinter.mental.desc} stats={faxNoPrinter.mental.stats}></Informations>

      <div id="recommended">
        <h1> What you can do to start: </h1>
        <span> The recommended time for ages 19-64 adults for moderately intense exercise is 150 minutes segmented throughout the week with each session having a minimum of 10 minutes. </span>
        <span> It can start with a simple 30 minute walk that is a faster pace than your normal walking speed 5 days a week </span>
        <span> Aim to do some strength training at least 2 days of the week that target the major muscle groups the chest, arms, legs, back and shoulders. </span>
        <div className="list">
          <h2> List of suggested activities</h2>

          <ul>
            <li>Running</li>
            <li>Biking</li>
            <li>Hiking</li>
            <li>Skipping</li>
            <li>Any sports at your nearest community center</li>
          </ul>
        </div>


      </div>

      <References></References>
    </div>
  );
}

export default App;
