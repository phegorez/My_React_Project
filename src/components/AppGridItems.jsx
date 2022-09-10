function AppGridItems(props) {
    const { cactus, onCactusClick } = props;
    return (
        <div className="app-grid-items">
            <img alt="grid-img" src= {cactus.thumbnailUrl} onClick={() => {onCactusClick(cactus);}} />
            <h1>{cactus.title}</h1>
        </div>   
    )
}

export default AppGridItems;