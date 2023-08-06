import IconButton from "../IconButton";
import { ReactComponent as Logo } from "../../../assets/icons/social/spotify.svg";

const ButtonSpotify = (props: { size: number }) => {
    const iconScale = 0.5;
    return (
        <IconButton
            url="https://open.spotify.com/show/7uarSUYpISt1SBIGGitQFi"
            size={props.size}
            desc="Go to Spotify podcast"
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

export default ButtonSpotify;
