import "./InvoiceStyle";
import List from "./ListView/ListView"
import { Header, Div, Container, Title, Text, Info } from "./InvoiceStyle";
import Button from '../dist/Button/Button';

const Invoices = () => {
    return ( 
        <Container>
            <Header>
                <Info>
                    <Title>Invoices</Title>
                    <Text>
                        These are the invoices available. 
                    </Text>
                </Info>
                <Button type="button" $agreeButton>
                    Create
                </Button>
            </Header>
            <List />
        </Container>
     );
}
 
export default Invoices;