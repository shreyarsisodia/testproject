const Playerpage=({match})=>
{
    return(<div>
        <h2>{match.params.id}{match.params.title}</h2>
    </div>)
}
export default Playerpage;