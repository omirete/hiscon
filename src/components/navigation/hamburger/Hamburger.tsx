import { ReactComponent as Logo } from "../../../assets/icons/ui/hamburger-bars.svg";
import "./Hamburger.css";

const Hamburger = (props: { onClick: () => void; size: number }) => {
    const iconScale = 0.8;
    return (
        <div
            className="hamburger"
            onClick={props.onClick}
            style={{
                height: props.size * iconScale + "px",
                width: props.size * iconScale + "px",
            }}
        >
            <Logo
                className="svg-icon"
                style={{
                    height: props.size * iconScale + "px",
                    width: props.size * iconScale + "px",
                }}
            />
        </div>
    );
};

export default Hamburger;
