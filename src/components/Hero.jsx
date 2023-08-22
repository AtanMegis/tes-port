import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar.jsx'

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        height: 200vh;
    }
`

const Container = styled.div`
    height: 100%;
    width: 1400px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    @media only screen and (max-width: 768px) {
        flex: 1;
        align-items: center;
    }
`

const Title = styled.h1`
    font-size: 74px;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Line = styled.img`
    height: 30px;
`

const Subtitle = styled.h2`
    color: #da4ea2;
`

const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
    line-height: 1.6;
    @media only screen and (max-width: 768px) {
        padding: 20px;
        text-align: center;
    }
`

const Button = styled.button`
    background-color: #da4ea2;
    color: white;
    font-weight: 500;
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

const Right = styled.div`
    flex: 3;
    position: relative;
    @media only screen and (max-width: 768px) {
        flex: 1;
        width: 100%;
    }
`

const Img = styled.img`
    width: 800px;
    height: 600px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @media only screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
    }

    @keyframes animate {
        to {
            transform: translateY(20px);
        }
    }
`

const Hero = () => {
    return (
        <Section id="hero">
            <Navbar />
            <Container>
                <Left>
                    <Title>Get to Know Me!</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>My Name's Christian Megis</Subtitle>
                    </WhatWeDo>
                    <Desc>
                        I'm a web development enthusiast actively seeking new
                        challenges. My persistence and high motivation drive me
                        to excel in creating engaging work experiences.
                    </Desc>
                    <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1sfWfaVYizTUutfNl53jC7n7118uNN1Iq/view?usp=drive_link"
                    >
                        <Button>My Resume</Button>
                    </a>
                </Left>
                <Right>
                    {/* <Canvas>
                        <Suspense fallback={null}>
                            <OrbitControls enableZoom={false} />
                            <ambientLight intensity={1} />
                            <directionalLight position={[3, 2, 1]} />
                            <Sphere args={[1, 100, 200]} scale={2.4}>
                                <MeshDistortMaterial
                                    color="#3d1c56"
                                    attach="material"
                                    distort={0.5}
                                    speed={2}
                                />
                            </Sphere>
                        </Suspense>
                    </Canvas> */}
                    <Img src="./img/hero.png" />
                </Right>
            </Container>
        </Section>
    )
}

export default Hero
