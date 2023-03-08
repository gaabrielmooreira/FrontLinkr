import styled from "styled-components"
import { DARKGRAY, WHITE } from "../../constants/COLORS.js"

export default function BaseScreen({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:${DARKGRAY};
    width:100%;
    min-height:100vh;
    padding-top:calc(72px + 78px);
    color:${WHITE};
`