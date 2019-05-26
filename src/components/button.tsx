import React from 'react';

export interface ButtonProps {
    text: string;
    url: string;
    openInNewTab?: boolean;
}
export const Button = (props: ButtonProps) => (
    <div className="button-padding">
        <a className="rounded-button" href={props.url} target={props.openInNewTab ? "_blank" : ""}>{props.text}</a>
    </div>
);