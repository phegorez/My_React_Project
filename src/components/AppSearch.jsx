function AppSearch (props) {
    const { value, onValueChange } = props;
    return (
        <div className="app-search">
          <input  
            type="text" 
            className='app-search-input'
            placeholder='Search your favorite cactus'
            value={value}
            onChange={(event) => {onValueChange(event.target.value)}}
          />
      </div>
    )
}

export default AppSearch;