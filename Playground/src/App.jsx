import Header from "./Header"
import Footer from "./Footer"
import ColorPickerApp from "./00_ColorPickerApp"
import ToDoApp from "./00_ToDoApp"
import CounterApp from "./00_CounterApp"
import Card from "./1_Components"
import Results from "./2_Props"
import  List from "./3_ListRendering"
import ClickEvents from "./4_ClickEvents"
import UseStateHook from "./5_UseStateHook"
import OnChangeHandler from "./6_OnChangeHandler"
import UpdaterFunctions from "./7_UpdaterFunctions"
import UseEffectHook from "./8_UseEffectHook"
import "./App.css"

function App() {
  
    const subject =[
        {Id:141, name:"BDA",},
        {Id:142, name:"MLA"},
        {Id:143, name:"CN"},
    ]
    const Students = [
      {Id:201, name:"Saad"},
      {Id:202, name:"Faisal"},
      {Id:203, name:"Prajwal"},
    ]
  return(
    <main>
      <Header/>
      <CounterApp/>
      <ToDoApp/>

      <br/>
        <div className="CardBox">
          <Card
          name = "Mohammed Saad"
          imgurl = "https://media.licdn.com/dms/image/v2/D5603AQHaXr-e4JhvhQ/profile-displayphoto-scale_200_200/B56ZmP3FZIJ8AY-/0/1759055206914?e=2147483647&v=beta&t=7BRIvalfXiica7MRr2oWBC5H0g7h4lytVfI4DP4A9hg"
          description = "A passionate developer with expertise in React.js and web development."
          />
          <Card
          name = "Mohammed Saad"
          imgurl = "https://media.licdn.com/dms/image/v2/D5603AQHaXr-e4JhvhQ/profile-displayphoto-scale_200_200/B56ZmP3FZIJ8AY-/0/1759055206914?e=2147483647&v=beta&t=7BRIvalfXiica7MRr2oWBC5H0g7h4lytVfI4DP4A9hg"
          description = "A passionate developer with expertise in React.js and web development."
          />
          <Results score={8} name="Mohammed Saad"/>     
        </div>
        <br/>
        <div className="CardBox">
        {/* <ClickEvents/> */}
        <UseStateHook/>

        <OnChangeHandler/>     
        </div>  
        <br/>
        <div className="CardBox">
        <ColorPickerApp/>
        </div>
         <List subject={subject} Students={Students}/>
        <div className="CardBox">
        <UpdaterFunctions/>
        </div>
        <div className="CardBox">
        <UseEffectHook/>
        </div>


      <Footer/>
    </main>
  )
}

export default App
