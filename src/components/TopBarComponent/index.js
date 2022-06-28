import './styles.css';
import React, {useMemo, useState} from "react";
import {ReactComponent as TopBarIcon} from "../../assets/shared/logo.svg";
import {BarItemsComponent} from "../BarItemsComponent";
import {controlIndicator} from "../../helpers/controll.bar.indicator.helper";
import { ReactComponent as HamburgerIcon } from "../../assets/shared/icon-hamburger.svg";
import {useEffect} from "react";

const barItems = [
    {number: '00', label: 'HOME'},
    {number: '01', label: 'DESTINATION'},
    {number: '02', label: 'CREW'},
    {number: '03', label: 'TECHNOLOGY'}
];

const TopBarComponent = ({props}) => {

    useEffect(() => {
        controlIndicator();
        window.addEventListener('resize', () => {
            controlIndicator();
        });
    }, []);

    return (
        <div className="topNavBarWrapper">
            <div className="topBarIcon">
                <TopBarIcon />
            </div>
            {/*{!props.isTabletResolution && (*/}
            {/*    <div className="dividerWrapper">*/}
            {/*        <div className="dividerLine" />*/}
            {/*    </div>*/}
            {/*)}*/}
            {!props.isMobileResolution ? (
                <div className="pagesBarWrapper">
                    <div className="pagesBar" id="nav">
                        <div className="linkPointer" id="pointer" />
                        {barItems.map((item, index) => (
                            <BarItemsComponent
                                key={index}
                                props={{
                                    number: item.number,
                                    label: item.label,
                                    barIndex: index,
                                    activeBarIndex: props.activeBarIndex,
                                    setActiveBarIndex: props.setActiveBarIndex,
                                    isTabletResolution: props.isTabletResolution
                                }}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <HamburgerIcon />
            )}
        </div>
    );
}

export default TopBarComponent;