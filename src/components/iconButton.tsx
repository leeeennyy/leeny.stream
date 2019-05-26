import React from 'react';

interface IconButtonProps {
    icon: JSX.Element
    url: string;
    openInNewTab?: boolean;
}

export const IconButton: React.FunctionComponent<IconButtonProps> = (props) => (
    <div className="button-padding">
        <a className="icon-rounded-button" href={ props.url } target={ props.openInNewTab ? "_blank" : "" }>
            { props.icon }
        </a>
    </div>
);