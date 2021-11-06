import Header from '../Header/Header';
import {  BrowserRouter as Router,
          Route,
          Switch 
} from 'react-router-dom';
import Invoices from '../Invoices/Invoices';
import Wrapper from '../Wrapper/Wrapper';

function App() {
  return (
    <Wrapper>
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={Invoices} />
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;