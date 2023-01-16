import { ChatEngine } from 'react-chat-engine';
import './App.css';

function App() {
  return (
    <div className="App">
      <ChatEngine
      height='100vh'
      projectID='15161ddc-27f9-42f8-b140-208f646b85cb'
      userName='priyanka'
      userSecret='1234'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
