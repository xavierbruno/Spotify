import  SingleItem  from './SingleItem.jsx'
import { Link } from 'react-router-dom'

const ItemList = ({title, items, itemsArray, path, idPath}) => {
  return (
        <div className='item-list'>
            <div className='item-list__header'>
                <h2>{ title }</h2>
                <Link className="item-list__link" to={path}>
                    Mostrar Tudo
                </Link>
            </div>
            <div className="item-list__container">
                {itemsArray
                    .filter((currentValue, index) => index < items)
                    .map((currObj, index) => (
                    <SingleItem 
                        idPath={idPath}
                        {...currObj}
                        key={`${title}-${index}`} 
                    />
                ))}
            </div>
        </div>  )
}

export default ItemList