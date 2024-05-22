import React, { useState, useEffect } from 'react'
import ProductCard from '../../productCard/ProductCard'
import BarLoader from "react-spinners/BarLoader";
import ShirtSortingBar from './ShirtsSortingBar';
import { useGetShirtsDetailsQuery } from '../../../features/shirts'


function ShirtsGrid() {


    const [ShirtImages, setShirtImages] = useState([]);
    const { data: ShirtImagesData } = useGetShirtsDetailsQuery()
    const routeName = 'Shirt-description'
    const [loading, setLoading] = useState(false)
    const heading = 'Shirts'


    useEffect(() => {
        if (ShirtImagesData) {
            setShirtImages(ShirtImagesData);
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000)

    }, [ShirtImagesData]);

    return (
        <div className="shirts-wrapper">
            <ShirtSortingBar />
            <div className="row py-4 px-5">
                {
                    ShirtImages.map((ShirtImage, idx) => {
                        return (
                            <div key={idx} className="col-md-6 col-lg-6 col-sm-6 ">
                                {
                                    loading ? <BarLoader color="#000000" width={100} height={1} loading={loading} />
                                        :
                                        <ProductCard data={ShirtImage} routeName={routeName} />
                                }

                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default ShirtsGrid;