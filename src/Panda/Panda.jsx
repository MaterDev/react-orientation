let Panda = ({disposition, name}) => {
    console.log(disposition, name)
    return ( <>
        <h3>Hey, Im a friendly panda! 🐼</h3>
        <h4>Disposition: {disposition}</h4>
        <h4>Name: {name}</h4>
    </>)
}

export default Panda