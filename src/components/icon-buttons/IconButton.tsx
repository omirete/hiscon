import { ReactNode } from "react";
import "./IconButton.css";

export interface IconButtonProps {
    onClick?: () => void;
    url: string;
    circleEnclosed: boolean;
    size: number;
    children: ReactNode;
    desc: string;
}

const IconButton = (props: IconButtonProps) => {
    return (
        <div className="icon-button" onClick={props.onClick}>
            <a
                href={props.url}
                className={props.circleEnclosed ? " circle-enclosed" : ""}
                style={{
                    height: props.size + "px",
                    width: props.size + "px",
                }}
            >
                {props.children}
            </a>
        </div>
    );
};

export default IconButton;
