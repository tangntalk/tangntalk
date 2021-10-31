import { withRouter } from 'react-router-dom';

import { NaviIcon } from "../../styles/style";
import styled from "styled-components";

function UserIcon(props) {
    const goUser = () => props.history.push('/');
    if (props.selected) {
        return (
            <NaviIcon onClick={goUser} selected>
                <svg width="25" height="25" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.16035 21H3.16035V20C3.16476 16.1358 6.29619 13.0044 10.1604 13H14.1604C18.0245 13.0044 21.1559 16.1358 21.1604 20V21H19.1604V20C19.157 17.2399 16.9204 15.0033 14.1604 15H10.1604C7.4003 15.0033 5.16366 17.2399 5.16035 20V21ZM12.1604 12C9.39893 12 7.16035 9.76142 7.16035 7C7.16035 4.23858 9.39893 2 12.1604 2C14.9218 2 17.1604 4.23858 17.1604 7C17.157 9.76005 14.9204 11.9967 12.1604 12ZM12.1604 4C10.5035 4 9.16035 5.34315 9.16035 7C9.16035 8.65685 10.5035 10 12.1604 10C13.8172 10 15.1604 8.65685 15.1604 7C15.1604 5.34315 13.8172 4 12.1604 4Z" />
                </svg>
                <Text>
                    친구 목록
                </Text>
            </NaviIcon>
        );
    } else {
        return (
            <NaviIcon onClick={goUser}>
                <svg width="25" height="25" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.16035 21H3.16035V20C3.16476 16.1358 6.29619 13.0044 10.1604 13H14.1604C18.0245 13.0044 21.1559 16.1358 21.1604 20V21H19.1604V20C19.157 17.2399 16.9204 15.0033 14.1604 15H10.1604C7.4003 15.0033 5.16366 17.2399 5.16035 20V21ZM12.1604 12C9.39893 12 7.16035 9.76142 7.16035 7C7.16035 4.23858 9.39893 2 12.1604 2C14.9218 2 17.1604 4.23858 17.1604 7C17.157 9.76005 14.9204 11.9967 12.1604 12ZM12.1604 4C10.5035 4 9.16035 5.34315 9.16035 7C9.16035 8.65685 10.5035 10 12.1604 10C13.8172 10 15.1604 8.65685 15.1604 7C15.1604 5.34315 13.8172 4 12.1604 4Z" />
                </svg>
                <Text>
                    친구 목록
                </Text>
            </NaviIcon>
        );
    }
}

export default withRouter(UserIcon);

export const Text = styled.div`
    word-break:keep-all;
    font-size:0.8em;
    font-weight:bold;
    overflow:hidden;
`