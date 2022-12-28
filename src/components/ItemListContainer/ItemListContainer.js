import  './ItemListContainer.css'
const itemListContainer = ({ greeting }) => {
    return (
        <div className= 'ItemListContainer'>
        <h1>{greeting}</h1>
        </div>
    )
}
export default itemListContainer