import React from 'react'
import Layout from '../components/layout/layout'
import Search from '../components/search/search'
import Item from '../components/Items/item'
import Data from '../assets/data.json'
function Home() {

  return (
    <div>
      <Layout>
        <div className='container mt-2  mb-2'>
          <Search />
        </div>
        <div className='container' >
          <div className='row'>
            {Data.map((item) => {
              return (
                <Item key={item.itemNo} img={item.itemImg} itemName={item.itemName} price={item.ItemPrice} />
              );
            })}
          </div>
        </div>
      </Layout >
    </div >
  )
}

export default Home