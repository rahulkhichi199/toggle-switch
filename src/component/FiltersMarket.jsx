
import React, { useState, useEffect } from 'react';
import './priceslider.css';





const apiUrl = 'http://localhost:8080/api/';







export default function Filters(props) {



    // const [price, setMinPrice] = useState('');

    // const [prices, setMaxPrice] = useState('');
























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
                                    onChange={(event) => { props.onsearch(event) }}

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

                                        checked />
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


                            <div className='col-4 mb-5'>

                                <div className="imput_fields custom-imput-fields ">
                                    {/*  */}
                                    <label className="price_prod">MIN <br />
                                        <input type="number" onChange={(event) => { props.ontype(event) }} id="price_prod" name="price_prod" />
                                        {/* value={price} */}
                                    </label>
                                    {/*  */}
                                    <span>To</span>
                                    {/*  */}
                                    <label className="price_prod">MAX <br />
                                        <input type="number" id="price_prod" name="price_prod" />
                                    </label>
                                </div>


                            </div>






                            {/* tosel */}




                            <div className="dropdown mx-5 mt-3 col-4">

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
                                        <a className="dropdown-item" href="#" onClick={(event) => { props.onsort(1) }}>
                                            low to high
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={(event) => { props.onsort(-1) }}>
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
