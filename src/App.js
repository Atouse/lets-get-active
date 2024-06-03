import './App.css';


const References = () => {
  return (
    <div id="refs">
      <h2> References </h2>
      <div className="list">
        <ol >
          <li>
            <span>"The Benefits of Exercise for Your Physical and Mental Health.” <i>Red Cross Canada,</i> 10 Mar. 2021,</span>
            <a href="https://www.redcross.ca/blog/2021/3/the-benefits-of-exercise-for-your-physical-and-mental-health"> www.redcross.ca/blog/2021/3/the-benefits-of-exercise-for-your-physical-and-mental-health. </a>
            </li>
          <li>
            <span><i>Key Statistics and Facts - Participaction,</i> .</span>
            <a href="https://www.participaction.com/the-science/key-facts-and-stats/">www.participaction.com/the-science/key-facts-and-stats/</a></li>
          <li>
            <span><i>Physical Activity, Sedentary Behaviour And ...</i>, .</span>
            <a href="https://health-infobase.canada.ca/src/doc/pass_childrenyouth_en.pdf"> https://health-infobase.canada.ca/src/doc/pass_childrenyouth_en.pdf.</a></li>
          <li> 
            <span>Government of Canada, Statistics Canada. “Health of Canadians Health Outcomes.” <i>Health Outcomes</i>, 22 Nov. 2023, </span>
            <a href="https://www150.statcan.gc.ca/n1/pub/82-570-x/2023001/section1-eng.htm">https://www150.statcan.gc.ca/n1/pub/82-570-x/2023001/section1-eng.htm.</a>
          </li>
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
      <a href="#refs"> {info.reference}</a>
    </div>
  )

}

const faxNoPrinter = {
  "health": {
    "title": "Physical Health Benefits",
    "desc" : "The long term benefits for your health are better cholesterol levels, lower levels of stress, and longer life span. It helps you become resilient to many cardiovascular, chronic and degenerative diseases.",
    "stats" : `Daily physical activities drastically reduce cardiovascular risk factors. The Montreal Heart Institute found that exercise can reduce dangerous cholesterol, blood sugar, and blood pressure levels by 50%.
     A big eye opener is the number of deaths caused by inactivity with approximately 3.2 million deaths attributed to lack of physical exercise and stands as the 4th highest risk factor for premature death and mortality.
     In 2021, 35.5% of Canadians 18 or older were classified as overweight and 29.2% as obese. That's a 3.1% increase from 2015 (26.1%) and continues to show an upward trend.`,
  },
  "mental" : {
    "title" : "Mental Health",
    "desc" : `It sounds strange at first, how is it possible that physical activity help my mental state? The exhaustion after an intense workout is always coupled with a
     feeling of being relaxed and at peace. The reason that feeling comes along is the physical activity release more serotonin in the blood which is a neurotransmitter for 
     the brain to feel good and relaxed. Cardiovascular activities is the ideal way to improve your sleep because it build up your fatigue and mentally relaxed for a better nights 
     sleep. ` ,
    "stats" : ` Doing physical activites also helps with the social aspect of your life as well. 76% of Canadians feel that they are welcomed and accepted when doing recreational and physical activities.
    From 2015 to 2021, the percentage of Canadians aged between 18-34 reporting excellent/good mental health has decreased from around 70% to below 55%, making it clear that there is a mental health decline
    in young adults, piling onto the list of reasons to start exercising `
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
      <a href="#refs">[3]</a>
      <span> Adolescent ages are the most impactful and the most crucial time to change your health behaviour.</span>
      <Informations title={faxNoPrinter.health.title} desc={faxNoPrinter.health.desc} stats={faxNoPrinter.health.stats} reference="[1,2,4]"></Informations>
      <Informations title={faxNoPrinter.mental.title} desc={faxNoPrinter.mental.desc} stats={faxNoPrinter.mental.stats} reference="[2,4]"></Informations>

      <div id="recommended">
        <h1> What you can do to start: </h1>
        <span> The recommended time for ages 19-64 adults for moderately intense exercise is 150 minutes segmented throughout the week with each session having a minimum of 10 minutes. </span>
        <span> It can start with a simple 30 minute walk that is a faster pace than your normal walking speed 5 days a week </span>
        <span> Aim to do some strength training at least 2 days of the week that target the major muscle groups the chest, arms, legs, back and shoulders. </span>

        <div id="images">
          <img id="running" src={require('./assets/running.jpg')} alt="running"></img>

          <div className="list">
            <h2 id="suggestTitle"> List of suggested activities</h2>

            <ul id="suggestList">
              <li>Running</li>
              <li>Biking</li>
              <li>Hiking</li>
              <li>Skipping</li>         
              <li>Weight lifting</li>
              <li>Any sports at your nearest community center</li>
              <li><a href="https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/">List of more activities to do</a></li>
            </ul>
          </div>
          <img id="sports" src={require('./assets/sports.png')} alt="sports"></img>

        </div>



      </div>

      <References></References>
    </div>
  );
}

export default App;
