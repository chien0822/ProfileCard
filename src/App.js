import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App(){
    return(
        <div>
            <div>Personal Digital Assistants</div>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard
                                title="Alexa"
                                handle="@alexa99"
                                image={AlexaImage}
                                description="Alexa is an AI assistant that helps with tasks, music, shopping, and smart home control."
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard
                                title="Cortana"
                                handle="@cortana32"
                                image={CortanaImage}
                                description="Cortana is a digital assistant for Windows, helping with reminders, productivity, and searches."
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard
                                title="Siri"
                                handle="@siri01"
                                image={SiriImage}
                                description="Siri is Apple's voice assistant that provides help with calls, messages, navigation, and device control."
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;