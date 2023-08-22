import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`

const Logo = styled.img`
    height: 150px;
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
`

const Icon = styled.img`
    width: 25px;
    cursor: pointer;
`
const List = styled.ul`
    display: flex;
    gap: 25px;
    list-style: none;
    font-weight: bold;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`

const ListItem = styled.li`
    cursor: pointer;
    font-size: 18px;
`

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="./img/logo.PNG" />
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>About Me</ListItem>
                        <ListItem>Experiences</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src="./img/search.png"></Icon>
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar
