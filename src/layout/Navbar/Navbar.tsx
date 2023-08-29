import {Container, StyledNav} from "./Navbar.styles.ts";
import {FiMenu} from "react-icons/fi";
import {ButtonFill} from "../../styles/styles.tsx";
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toggleMenu} from "../../store/menu/menuSlice.ts";

const Navbar = () => {

    const dispatch = useDispatch();
    const { pathname, state } = useLocation();

    if(pathname === '/404') {
        return null;
    }


    return (
        <StyledNav>
            <div className='nav__menu'>
                <FiMenu onClick={() => dispatch(toggleMenu(true))} />
            </div>
            <Container>
                <div className='nav__page-title'>

                </div>

                <ButtonFill>
                    <span>+</span>
                </ButtonFill>
            </Container>
        </StyledNav>
    );
};

export default Navbar;
