import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className='home'>
<img className='home_image' src='https://www.amazon.in/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg' alt='' />     

<div className='home_row'>
<Product 
id='12344'
title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
price={11.96}
rating={5}
image='https://www.amazon.in/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg'

/>
<Product 
id='12345'
title='Kenwood KMX750RD/ KMix'
price={119.99}
rating={4}
image='https://images-na.ssl-images-amazon.com/images/I/81J8k1depdL._SL1500_.jpg'

/>
</div> 
<div className='home_row'>
<Product 
id='12346'
title='Mi Band 2 (Black)
'
price={116}
rating={3}
image='https://images-na.ssl-images-amazon.com/images/I/514%2BrsIcUfL._SL1000_.jpg'

/>
<Product 
id='12347'
title='Amazon Echo - Black (1st Generation)'
price={99}
rating={3}
image='https://images-na.ssl-images-amazon.com/images/I/61aN%2BSE-F9L._AC_SL1000_.jpg'

/>
<Product 
id='12348'
title='Microsoft Surface Pro Intel Core-i5 7th Gen 12.3-inch Touchscreen Tablet (8GB/128GB SSD/Windows 10 Pro/Silver/0.770 kg), KJR-00001
'
price={1196}
rating={3}
image='https://images-na.ssl-images-amazon.com/images/I/51JeS53PnxL._SL1000_.jpg'

/>
</div>
<div className='home_row'>
<Product 
id='12349'
title='Redmi Note 7 (Onyx Black, 4GB RAM, 64GB Storage)'
price={219}
rating={3}
image='https://images-na.ssl-images-amazon.com/images/I/51RyYe9toxL.jpg'

/>
</div>
</div>
    )
}

export default Home
