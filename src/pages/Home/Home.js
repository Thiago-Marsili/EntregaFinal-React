import ItemDetailContainer from '../../componets/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../../componets/ItemListContainer/ItemListContainer'
import './Home.css'


export default function Home() {
  return (
    <div className="Home">
      <section className="ProductContainer">
        <ItemListContainer className="productC" />
      </section>
      
    </div>
  );
}

