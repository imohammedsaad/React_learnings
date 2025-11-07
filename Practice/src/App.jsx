import Header from "./Header"
import Footer from "./Footer"
import Card from "./1_Components"
import Results from "./2_Props"
import  List from "./3_ListRendering"
import "./App.css"

function App() {
  return(
    <main>
      <Header/>
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
        </div>
        <Results score={8} name="Mohammed Saad"/>     
        <Results/> 
        <List/>
      <Footer/>
    </main>
  )
}

export default App
