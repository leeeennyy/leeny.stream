import React from 'react';

interface ButtonProps {
    text: string;
    url: string;
    openInNewTab?: boolean;
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => (
    <div className="button-padding">
        <a className="rounded-button" href={props.url} target={props.openInNewTab ? "_blank" : ""}>{props.text}</a>
    </div>
);