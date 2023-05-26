import React from 'react'
import { useEffect, useState } from 'react'
import { IProduct } from '../type/product'

interface IProps {
    products: IProduct[],
}

const Homepage = (props: any) => {
    const [data, setData] = useState<IProduct[]>([])

    useEffect(() => {
        // console.log(props.products);
        setData(props.products)
        console.log(data);
    }, [props.products])


    return (
        <div>
            <h2>Home Page</h2>
            <div>
                {data.map(product => {
                    return (
                        <div key={product._id}>
                            <h2>{product.name}</h2>
                        </div>
                    )
                })}
            </div>
            {/* <div className="container mt-5">
                <div className="row">
                    <div className="col-sm box me-5">
                        <img src='https://picsum.photos/250/250' />
                        <h3 className='mt-4'>Sản phẩm 1</h3>
                    </div>
                    <div className="col-sm box me-5">
                        <img src='https://picsum.photos/250/250' />
                        <h3 className='mt-4'>Sản phẩm 2</h3>
                    </div>
                    <div className="col-sm box ">
                        <img src='https://picsum.photos/250/250' />
                        <h3 className='mt-4'>Sản phẩm 3</h3>
                    </div>
                </div>
            </div> */}

        </div>
    )
}
// Homepage.defaultProps = {
//     products: []
// };

export default Homepage