import React from 'react'
import { Link } from 'react-router-dom';

export const LaunchIndex = () => {
    const shoes = {
        'shoes-1' :{
            name : 'Nike Best Shoes',
            img: 'https://5.imimg.com/data5/LI/CR/NO/SELLER-91747408/nike-sports-running-shoes-500x500.jpg'
        },
        'shoes-2' : {
            name : 'Nike Middle Shoes',
            img: 'https://cdn-images.farfetch-contents.com/13/67/84/29/13678429_21609544_600.jpg'
        },
        'shoes-3' : {
           name : 'Nike Lowest Shoes',
           img : 'https://c.static-nike.com/a/images/t_prod_ss/w_640,c_limit,q_auto,f_auto/xr5bg25fjrk6ljzxuuqs/nike-zoom-fly-mercurial-flyknit-off-white-black-white-release-date.jpg'
        }
    }
    return (
      <div>
        <ul>
          {Object.entries(shoes).map(([detailId, { name, img }]) => (
            <li key={detailId}>
              <Link to={detailId}>
             
                <h4>{name}</h4>
                <img src={img} alt={name} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
}
