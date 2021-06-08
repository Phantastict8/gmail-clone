import React from 'react';
import styled from 'styled-components';

import { Checkbox } from '@material-ui/core';

import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';

const EmailItem = ({ starred, from, subject, message, received, read }) => {
    return (
        <Wrapper>
            <Checkbox />
            <IconButton onClick>
                {starred ? (
                    <StarIcon htmlColor="#f7cb69" />
                ) : (
                    <StarBorderIcon />
                )}
            </IconButton>
        </Wrapper>
    );
};

export default EmailItem;

const Wrapper = styled.div``;
