import React from 'react'
import { useGetOrdersByEmailQuery } from '../../redux/feature/orders/ordersApi'
import { useAuth } from '../../context/AuthContext';
const OrderPage = () => {
const {currentUser} = useAuth();
  const {data: orders=[], isLoading , isError} = useGetOrdersByEmailQuery(currentUser.email);
  if(isLoading)return <div>Loading....</div>
  if(isError)return <div>Error in getting  orders data</div>
  return (
    <div className='container mx-auto p-6'>
        <h2 className='text-2xl font-semibold mb-4'>Your orders</h2>
      {
        orders.length === 0 ? (<div>No orders found</div>): (
            <div>
                {
                    orders.map((order , index)=>(
                        <div key={order._id} className='border-b mb-4 pb-4'>
                            <p className="p-1 bg-secondary text-white w-10 rounded"># {index+1}</p>
                            <h3 className='font-bold'>OrderId: {order?._id}</h3>
                            <h2 className='text-gray-600'>Name: {order.name}</h2>
                            <h2 className='text-gray-600'>Email: {order.email}</h2>
                            <h2 className='text-gray-600'>Phone: {order.phone}</h2>
                            <h2 className='text-gray-600'>Total Price: ${order.totalPrice}</h2>
                            <h2 className='text-gray-600'>Address: </h2>
                            <p>{order.address.street}, {order.address.city} , {order.address.state} , {order.address.country} , {order.address.zipcode}</p>
                            <h3 className='font-semibold mt-2'>Products Id: </h3>
                            <ul>
                              {order.productIds.map((productId)=>(
                                <li key={productId}>
                                  {productId}
                                </li>
                              ))}
                            </ul>
                        
                        </div>
                    ))
                }
            </div>
        )
      }
    </div>
  )
}

export default OrderPage
