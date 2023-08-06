import IconButton from "../IconButton";
import { ReactComponent as Logo } from "../../../assets/icons/social/twitter.svg";

const ButtonTwitter = (props: { size: number }) => {
    const iconScale = 0.5;
    return (
        <IconButton
            url="https://twitter.com/FeministComms"
            size={props.size}
            desc="Go to Twitter profile"
            circleEnclosed={true}
        >
            <Logo
                className="svg-icon"
                style={{
                    height: props.size * iconScale + "px",
                    width: props.size * iconScale + "px",
                }}
            />
        </IconButton>
    );
};

export default ButtonTwitter;
