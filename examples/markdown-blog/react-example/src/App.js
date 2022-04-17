import { Button, Typography, Container } from '@nickgdev/hellerui';
import '@nickgdev/hellerui/lib/index.css';
import '@nickgdev/hellerui/lib/themes/pinched.css';
import '@nickgdev/hellerui/lib/themes/dark.css';
import './App.css';

const { Heading, Paragraph } = Typography;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading color="white">hellerui</Heading>
        <hr color="white" style={{ width: '50%' }} />
        <Paragraph color="white" italic>
          a design system that wants to live
        </Paragraph>
      </header>
    </div>
  );
}

export default App;
