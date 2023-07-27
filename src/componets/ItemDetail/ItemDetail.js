import { useState, useContext} from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import CartContext from '../Context/CartContext'
import './ItemDetail.css'



const ItemDetail = ({id, name, img, category, description, precio, stock}) =>{

    const [quantityAdded, setQuantityAdded] = useState(0)


    const {addProducts} =  useContext(CartContext)

    const handleOnAdd = (quantity) =>{
    
        setQuantityAdded(quantity)
        
        const products ={
            
            id,name,precio,img,stock,category

        }
        addProducts(products, quantity);
    }
    


    return(
        <div className="columns">
            <div className="column">

            </div>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by5">
                                        <img src={img}/>
                                    </figure>
                                </div>
                                <div className="card-content is-flex is-justify-content-center">
                                        <div className='is-flex is-justify-content-center pt-4'>
                                            {category}
                                        </div>
                                        <div className='is-flex is-justify-content-center pt-4'>
                                            {name}
                                        </div>
                                    <div className="content">
                                        {stock}
                                        <br/>
                                        <div className='is-flex is-justify-content-center pt-4'>
                                            {precio}
                                        </div>
                                        <span className='is-flex is-justify-content-center title is-1 pt-4'>{ItemCount}</span>
                                        <footer className="ItemFooter">
                        {
                            quantityAdded > 0 ?(<Link to='/Cart' className="Option">Terminar compra</Link>) : (<ItemCount initial={1}  stock={stock} onAdd={handleOnAdd}/>)

                        }
                           

                    </footer>
                                    </div>
                                    <div className="Volver">
                <Link className="Volver" to={'/'}> <button className="V">Volver atras</button>  </Link></div>   
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        
 
        
    )
}

export default ItemDetail;