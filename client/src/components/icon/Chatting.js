import { withRouter } from 'react-router-dom';

import { NaviIcon, NaviText} from "../../styles/style";

function ChattingIcon(props) {
    const goChat = () => props.history.push(`/chat/${props.id}`);
    if (props.selected) {
        return (
            <NaviIcon onClick={goChat} selected>
                <svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.16035 21V5C3.16035 3.89543 4.05579 3 5.16035 3H19.1604C20.2649 3 21.1604 3.89543 21.1604 5V15C21.1604 16.1046 20.2649 17 19.1604 17H9.16035C8.72749 16.9992 8.30617 17.1396 7.96035 17.4L3.16035 21ZM5.16035 5V17L7.29435 15.4C7.64 15.1393 8.06143 14.9988 8.49435 15H19.1604V5H5.16035Z" />
                </svg>
                <NaviText>
                    채팅 목록
                </NaviText>
            </NaviIcon>
        );
    } else {
        return (
            <NaviIcon onClick={goChat}>
                <svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.16035 21V5C3.16035 3.89543 4.05579 3 5.16035 3H19.1604C20.2649 3 21.1604 3.89543 21.1604 5V15C21.1604 16.1046 20.2649 17 19.1604 17H9.16035C8.72749 16.9992 8.30617 17.1396 7.96035 17.4L3.16035 21ZM5.16035 5V17L7.29435 15.4C7.64 15.1393 8.06143 14.9988 8.49435 15H19.1604V5H5.16035Z" />
                </svg>
                <NaviText>
                    채팅 목록
                </NaviText>
            </NaviIcon>
        );
    }
}

export default withRouter(ChattingIcon);