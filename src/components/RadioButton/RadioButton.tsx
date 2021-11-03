import React, { Dispatch, ReactElement } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { changeCompletion as changeCompletionAction } from 'store/actions';
import switchTheme from 'utils/themeSwitch';
import themeContext from 'hoc/themeContext';

const StyledInput = styled.input<{ themeCtx: string }>`
    &[type='radio'] {
        width: 24px;
        height: 24px;
        appearance: none;
        margin-right: 20px;
        position: relative;
        border-radius: 50%;
        transition: all 1s;
        border: 1px solid ${({ themeCtx, theme }) => switchTheme(themeCtx, 'colorBorder', theme)};
    }
    &[type='radio']:hover {
        cursor: pointer;
        border-radius: 50%;
        border: 2px solid linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    }
    &[type='radio']:before {
        content: '';
        width: 22px;
        height: 22px;
        overflow: hidden;
        position: absolute;
        border-radius: 50%;
        transition: all 1s;
        background-color: ${({ themeCtx, theme }) => switchTheme(themeCtx, 'colorSurface', theme)};
    }
    &[type='radio']:checked:before {
        background: linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    }
`;

interface IRadioButton {
    item: string;
    completion: boolean;
    themeContext: string;
    changeCompletion: (arg0: string) => void;
}
const RadioButton = ({ completion, changeCompletion, item, themeContext }: IRadioButton): ReactElement => (
    <StyledInput
        themeCtx={themeContext}
        type="radio"
        checked={completion}
        onClick={() => changeCompletion(item)}
    />
);

const DispatchToProps = (dispatch: Dispatch<any>) => ({
    changeCompletion: (item: string) => dispatch(changeCompletionAction(item)),
});

export default connect(null, DispatchToProps)(themeContext(RadioButton));
