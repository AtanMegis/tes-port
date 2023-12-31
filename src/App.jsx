import styled from 'styled-components'
import Contact from './components/Contact.jsx'
import Hero from './components/Hero.jsx'
import Who from './components/Who.jsx'
import Works from './components/Works.jsx'
import { BrowserRouter } from 'react-router-dom'

const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    color: white;
    background: url('./img/bg.jpg');
    &::-webkit-scrollbar {
        display: none;
    }
`

function App() {
    return (
        <BrowserRouter>
            <Container>
                <Hero />
                <Who />
                <Works />
                <Contact />
            </Container>
        </BrowserRouter>
    )
}

export default App
