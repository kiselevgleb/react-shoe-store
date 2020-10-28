import React, { Fragment, useState, useEffect  } from 'react';
import Footer from './footer';
import Header from './header';
import Banner from './banner';
import Items from './items';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchField } from './actions/actionCreators';
export default function Catalog() {
    const { items, categories, hits, loading, error, search } = useSelector(state => state.skills);
    const dispatch = useDispatch();

    const handleSearch = evt => {
        const { value } = evt.target;
        dispatch(changeSearchField(value));
    };
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_ITEMS_URL}`)
    //         .then(response => response.json())
    //         .then(rates => {
    //             setProducts(rates);
    //         });
    // })

    return (
        <Fragment>
            <Header></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner></Banner>
                        <section className="catalog">
                            <h2 className="text-center">Каталог</h2>
                            <form className="catalog-search-form form-inline">
                                <input className="form-control" placeholder="Поиск"  type="search" value={search} onChange={handleSearch} />
                            </form>
                            <Items></Items>
                        </section>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </Fragment>
    )
}