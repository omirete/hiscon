import "./LoadingScreen.css";

function LoadingScreen(props: { isLoading: boolean }) {
    return (
        <div
            id="loading-screen"
            className={"loading-screen" + (props.isLoading ? "" : " fade-out")}
        >
            <p className="loading-text">Loading...</p>
        </div>
    );
}

export default LoadingScreen;
