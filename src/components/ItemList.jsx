import Item from './Item';
import './ItemList.scss';

const ItemList = props => {
  const { products } = props;

  return (
    <div className='item-list'>
      {
        products?.map((product, key) => (
          <Item key={key} product={product} />
        ))
      }
    </div>
  );
};


export default ItemList;

