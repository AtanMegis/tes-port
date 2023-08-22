import React from 'react'
import styled from 'styled-components'

const Desc = styled.div`
    width: auto;
    height: auto;
    padding: 20px;
    background-color: transparent;
    border-radius: 10px;
    color: white;

    @media only screen and (max-width: 768px) {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
`
const Li = styled.div`
    display: list-item;
    font-size: 24px;
    margin-bottom: 20px;
    max-width: 800px;
    line-height: 1.6;
    font-family: roboto;
    -webkit-text-stroke: 0.5px white;
`

const Yabb = () => {
    return (
        <Desc>
            <ul>
                <Li>
                    Learned from technical skill, soft skill & extracted daily
                    modules that focused on dynamic website interface using
                    React with professional mentors
                </Li>
                <Li>
                    Participated on Capstone Project at the end of event as a
                    final project
                </Li>
                <Li>
                    Enhanced English Skill related to technology industries
                    using Cakap platform
                </Li>
            </ul>
        </Desc>
    )
}
export default Yabb
