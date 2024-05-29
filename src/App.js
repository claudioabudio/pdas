import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App() {
  return (
    <div>
      <section class="hero">
        <div class="hero-body">
          <p class="title">Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="alexa" handle="@alexa99" image={AlexaImage} description='Alexa was designed by Amazon to help you buy things' />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="cortana"
                handle="@cortana32"
                image={CortanaImage}
                description='Cortana was developed by Microsoft to help you out with Windows'
              />
            </div>
            <div className="column is-4">
              <ProfileCard title="siri" handle="@siri01" image={SiriImage} description='Siri was created by Apple and uses Voice recognition and AI'/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App