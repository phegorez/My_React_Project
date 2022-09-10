

function AppPost(props) {
    const {cactus, onBgClick} = props;
    return (
        <div className="cactus-post">
            <div className="cactus-post-bg" onClick={onBgClick}/>
            <div className="cactus-post-content">
                <img src={cactus.thumbnailUrl} />
                <h4>{cactus.title}</h4>
            </div>
        </div>
    )
}

export default AppPost;