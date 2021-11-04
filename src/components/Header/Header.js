import "./HeaderStyle";
import { Button } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { StyledHeader, StyledHeading } from "./HeaderStyle";

const Header = () => {
    return(
        <StyledHeader> 
            <StyledHeading>
                Inact
            </StyledHeading>
        </StyledHeader>
    );

}

export default Header;