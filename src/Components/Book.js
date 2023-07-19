import "./Book.css"

const Book= (props)=>{
    const {imageAddress,title,auther,price}= props

    
    // const {year,title,auther}= props

    // const imageAddress = 'https://images-eu.ssl-images-amazon.com/images/I/51Kmfmb1LCL._AC_SX184_.jpg'
    // const title = 'The Hidden Hindu'
    // const auther= 'Akshat Gupta'
    // const price = "30"
    return(
        <div className="book">
            <img src={imageAddress}/>
            <div className='book-info'>
             <h3>{title}</h3>
             <p className="book-auther">by {auther}</p>
             <p className="book-price">$ {price}</p>
            <button>Add to Cart</button></div>
        </div>
    //     <div className="book">
    //         <div className='book-info'>
    //          <h3>{title}</h3>
    //          <p className="book-auther">by {auther}</p>
    //          <p className="book-price">$ {year}</p>
    //         <button>Add to Cart</button></div>
    //     </div>
    )
}


export default Book