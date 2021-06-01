import React from 'react';
import styled from 'styled-components';
import Compose from '../buttons/Compose';

const Sidebar = () => {
    return (
        <Wrapper>
            <ComposeWrapper>
                <Compose />
            </ComposeWrapper>

            <SideButtonWrappers></SideButtonWrappers>

            <MeetWrapper></MeetWrapper>

            <HangoutsWrapper></HangoutsWrapper>

            <BottomIconsWrapper></BottomIconsWrapper>
        </Wrapper>
    );
};

export default Sidebar;

const Wrapper = styled.div``;
const ComposeWrapper = styled.div``;
const SideButtonWrappers = styled.div``;
const MeetWrapper = styled.div``;
const HangoutsWrapper = styled.div``;
const BottomIconsWrapper = styled.div``;
