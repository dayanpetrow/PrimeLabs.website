import React from 'react';
import { StyledHomePartnersWrapper } from './styledHomePartners'
import { SectionTitle } from '../../common/';
import Lykke from '../../../images/home_partners/lykke-logo@3x.png';
import SmartValor from '../../../images/home_partners/smart-valor-logo@3x.png';
import Aidonic from '../../../images/home_partners/aidonic-logo@3x.png';

const HomePartners = () => (
    <div>
        <SectionTitle mainText={"Partners & Media"} shadowText={"Our partners"} />
        <StyledHomePartnersWrapper>
            <div className="HomePartners__content-wrapper">
                <div className="HomePartners__partner">
                    <img src={Lykke} alt="dasdasdas" />
                </div>
                <div className="HomePartners__partner">
                    <img src={SmartValor} alt="dasdasdas" />
                </div>
                <div className="HomePartners__partner">
                    <img src={Aidonic} alt="dasdasdas" />
                </div>
            </div>
        </StyledHomePartnersWrapper>
    </div>
)

export default HomePartners;