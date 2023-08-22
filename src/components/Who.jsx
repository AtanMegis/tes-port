import React, { Suspense } from 'react'
import styled from 'styled-components'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cube from './Cube'

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    margin-top: 50px;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`

const Title = styled.h1`
    font-size: 74px;

    @media only screen and (max-width: 768px) {
        font-size: 60px;
    }
`

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    @media only screen and (max-width: 768px) {
        align-items: center;
        text-align: center;
    }
`

const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
    line-height: 1.6;
`

const Who = () => {
    return (
        <Section id="who">
            <Container>
                <Left>
                    <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
                        <Suspense fallback={null}>
                            <ambientLight intensity={1.2} />
                            <directionalLight position={[3, 2, 1]} />
                            <Cube />
                            <OrbitControls enableZoom={false} autoRotate />
                        </Suspense>
                    </Canvas>
                </Left>
                <Right>
                    <Title>About Me</Title>
                    <Desc>
                        I'm a recent IT college graduate with a strong sense of
                        discipline and responsibility. My vigorous approach to
                        challenges and my excitement for learning new things
                        have been key drivers in my academic and personal
                        journey. I am eager to channel these qualities into my
                        professional endeavors, contributing effectively to
                        teams and embracing continuous growth.
                    </Desc>
                </Right>
            </Container>
        </Section>
    )
}

export default Who
