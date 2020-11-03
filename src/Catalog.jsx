import React, { Fragment} from 'react';
import Footer from './footer';
import Header from './header';
import Banner from './banner';
import Items from './items';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchField } from './actions/actionCreators';
export default function Catalog(props) {
    const { search } = useSelector(state => state.skills);
    const dispatch = useDispatch();

    const handleSearch = evt => {
        const { value } = evt.target;
        dispatch(changeSearchField(value));
    };

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Banner></Banner>
                        <section className="catalog">
                            <h2 className="text-center">Каталог</h2>
                            <form className="catalog-search-form form-inline">
                                <input className="form-control" placeholder="Поиск"  type="search" value={search} onChange={handleSearch} />
                            </form>
                            <Items history={props.history}></Items>
                        </section>
                    </div>
                </div>
            </main>
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}