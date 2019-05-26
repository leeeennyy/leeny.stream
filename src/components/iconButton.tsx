import React from 'react';

export interface IconButtonProps {
    icon: JSX.Element
    url: string;
    openInNewTab?: boolean;
}

export const IconButton = (props: IconButtonProps) => (
    <div className="button-padding">
        <a className="icon-rounded-button" href={props.url} target={props.openInNewTab ? "_blank" : ""}>{props.icon}</a>
    </div>
);