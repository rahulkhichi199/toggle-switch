
import React, { useState, useEffect } from 'react';
import './priceslider.css';








export default function Filters() {



    const [price, setPrice] = useState('150');


    const lowest = async () => {

        console.log('clicked');



    }




    const highest = async () => {

        console.log('clicked');



    }








    return (
        <div className="container-fluid col-12 mt-5">
            <div className="col-12">
                <div className="col-12"  >
                    <h4 className="text-success font-weight-bold">Filter by<span className='fas fa-sliders-h'></span></h4>


                    <div className='row '>


                        <nav className='navbar navbar-expand-lg navbar-light bg-light border-top p-3'>
                            <form className='form-inline my-2 my-lg-0' style={{ "display": "flex", "margin": "auto" }}>
                                <input
                                    className='form-control mr-sm-2  '
                                    type='search'
                                    placeholder='Search'
                                    aria-label='Search'
                                    name='search'

                                />
                                <button
                                    className='btn btn-outline-success my-2 my-sm-0'
                                    type='submit'
                                    disabled={true}
                                >
                                    Search
                                </button>
                            </form>
                        </nav>

                        <div className='border-top border-bottom bg-light p-4' style={{ "display": "flex" }}>


                            <div className='col-4'>
                                <div className='form-check mx-4'>

                                    <input
                                        className='form-check-input'
                                        type='checkbox'
                                        name='category'

                                        id='flexCheckChecked'

                                    />
                                    <label
                                        className='form-check-label'
                                        htmlFor='flexCheckChecked'
                                    >

                                        ART
                                    </label>




                                </div>
                                <div className='form-check mx-4'>

                                    <input
                                        className='form-check-input '
                                        type='checkbox'
                                        name='category'

                                        id='flexCheckChecked'

                                    />
                                    <label
                                        className='form-check-label'
                                        htmlFor='flexCheckChecked'
                                    >

                                        MUSIC
                                    </label>




                                </div>



                            </div>

                            {/* tosel */}


                            <div className='col-4'>
                                <div className="slideBlock">
                                    <div className="strack"></div>
                                    <div className="slideProgress" style={{ "width": (price / 400 * 100) + "%" }}></div>
                                    <input
                                        onChange={(e) => setPrice(
                                            e.target.value >= 0 && e.target.value <= 400 ? e.target.value : '100'
                                        )}
                                        value={price}
                                        type="range"
                                        name="range"
                                        id="range"
                                        min="0" max="400" />
                                    <div className="Price">${price}</div>
                                </div>
                                <div className="imput_fields custom-imput-fields">
                                    <label className="price_prod">Price <small>(US$)</small><br />
                                        <input type="text" onChange={(e) => setPrice(e.target.value >= 100 && e.target.value <= 400 ? e.target.value : '100')} id="price_prod" name="price_prod" value={price} />
                                    </label>
                                </div>


                            </div>











                            <div className="dropdown mx-5 c0l-4">

                                <strong>Sort by price : </strong>
                                <button
                                    style={{ backgroundColor: "rgb(255, 35, 145)" }}
                                    className="btn dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton2"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Select any
                                </button>


                                <ul
                                    className="dropdown-menu dropdown-menu-light"
                                    aria-labelledby="dropdownMenuButton2"
                                >
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={lowest}>
                                            low to high
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={highest}>
                                            high to low
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>



                    </div>
                    {/* sss */}
                    <div className='col-md-9'>

                        <div className='row'>



                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
