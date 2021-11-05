import Header from '../Header/Header';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Invoices from '../Invoices/Invoices';
import Wrapper from '../Wrapper/Wrapper';

function App() {
  return (
    <Wrapper>
      <Header />
      <BrowserRouter>
        <Route component={Invoices} />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;