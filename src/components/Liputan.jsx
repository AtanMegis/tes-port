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

        ul {
            margin-top: -20px;
        }
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

const Liputan = () => {
    return (
        <Desc>
            <ul>
                <Li>
                    Led daily stand-up meeting and collaborated alongside the
                    Front End Team & Product Manager to complete tasks in
                    pursuance of deadlines
                </Li>
                <Li>
                    Implemented APIs that have been developed by Back End Team
                    to the client side in accordance to UI/UX design and managed
                    SEO sitemap
                </Li>
                <Li>
                    Analysed requirements and gave task assignments to Front End
                    team in effective way
                </Li>
                <Li>
                    Compiled Product Requirement Document as a daily project
                    managements
                </Li>
            </ul>
        </Desc>
    )
}

export default Liputan
