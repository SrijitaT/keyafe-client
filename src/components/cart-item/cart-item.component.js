import "./cart-item.styles.scss";
export default function CartItem({item:{id,title,unit_price,img_url,quantity}}) {    
    return (
      <div className="cart-item">
        <img src={img_url} alt="item"/>
        <div className="item-details">
          <span className="name">{title}</span>
          <span className="price">{quantity} x &#8377;{unit_price}</span>
        </div>
      </div>
    )
  }