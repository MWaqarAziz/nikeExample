import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
     const shoes = {
       "shoes-1": {
         name: "Nike Best Shoes",
         img:
           "https://5.imimg.com/data5/LI/CR/NO/SELLER-91747408/nike-sports-running-shoes-500x500.jpg",
       },
       "shoes-2": {
         name: "Nike Middle Shoes",
         img:
           "https://cdn-images.farfetch-contents.com/13/67/84/29/13678429_21609544_600.jpg",
       },
       "shoes-3": {
         name: "Nike Lowest Shoes",
         img:
           "https://c.static-nike.com/a/images/t_prod_ss/w_640,c_limit,q_auto,f_auto/xr5bg25fjrk6ljzxuuqs/nike-zoom-fly-mercurial-flyknit-off-white-black-white-release-date.jpg",
       },
     };
    const {productId} = useParams();
    const shoes1 = shoes[productId];
    const {name, img} = shoes1;
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt={name}/>
        </div>
    )
}
