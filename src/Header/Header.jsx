let Header = (props) => {
    console.log("incoming props:", props)
    return (
        // Fragment
        <> 
            <h1>{props.title}!</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.slogan}</p>

            <hr />
        </>
    )
}

export default Header