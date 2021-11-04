import "./InvoiceStyle";
import { Header, Div, Container, Title, Text, Info } from "./InvoiceStyle";
import Button from '../dist/Button/Button';

const Invoices = () => {
    return ( 
        <Container>
            <Header>
                <Info>
                    <Title>Invoices</Title>
                    <Text>
                        There are no invoices currently available.
                    </Text>
                </Info>
                <Button type="button" $primary>
                    Create
                </Button>
            </Header>
        </Container>
     );
}
 
export default Invoices;