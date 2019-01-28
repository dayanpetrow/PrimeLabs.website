import styled from 'styled-components';

/* How to use:
import SectionBackgroundTrees from '../../../images/svgs/section_background_trees.png';
<SectionWithBackground
    background={SectionBackgroundTrees}
    backgroundPosition="center top"
>
    <div className="SecondBackground" />
    {..sections}
</SectionWithBackground>
*/
export const SectionWithBackground = styled.div`
    width: 100%;
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-position: ${props => props.backgroundPosition};
    padding: ${props => props.padding || "80px 0px 40px 0px"};
    @media (max-width: 900px) {
        padding: 20px 0px 20px 0px;
    }
`

/* How to use:
import OvalBackgroundRight from '../../../images/svgs/rightOval.svg';
<RightOvalBackground>
    <img className="Oval" src={OvalBackgroundRight} alt="Oval Background" />
    {..section}
</RightOvalBackground>
*/
export const RightOvalBackground = styled.div`
    position: relative;
    width: 100%;
    padding-top: 40px;
    .Oval {
        position: absolute;
        right: 0px;
        top: ${props => props.top || "-450px"};
        z-index: -3; 
        @media (max-width: 800px) {
            display: none;
        }
    }
`

