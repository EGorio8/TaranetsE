const Header = (props)=>{
    console.log(props)
    return(
        <div className="Header">
            <div>
                <img src="" alt="" className="logo" />
            </div>
            <div className="nav-bar">
                {
                    props.menu.map((ele, index)=>{
                        return(
                            <div key={index} className="nav.item">
                        {ele}
                        </div> 
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Header