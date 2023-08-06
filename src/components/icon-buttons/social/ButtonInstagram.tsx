import IconButton from "../IconButton";
import { ReactComponent as Logo } from "../../../assets/icons/social/instagram.svg";

const ButtonInstagram = (props: { size: number }) => {
    const iconScale = 0.4;
    return (
        <IconButton
            url="https://www.instagram.com/historiadelaconchapodcast/"
            size={props.size}
            desc="Go to Instagram profile"
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

export default ButtonInstagram;
