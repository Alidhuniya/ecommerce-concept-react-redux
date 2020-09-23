import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import AllProducts from './AllProducts';
import {
    InstantSearch,
  Hits,
  SearchBox,
//   Pagination,
//   Highlight,
//   ClearRefinements,
//   RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import "../App.scss";


const searchClient = algoliasearch(
  'B1G2GM9NG0',
  'aadef574be1f9252bb48d4ea09b5cfe5'
);

class Search extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <h1>React InstantSearch e-commerce demo</h1>
        <InstantSearch indexName="demo_ecommerce" searchClient={searchClient}>
        <div className="left-panel">
        
            <Configure hitsPerPage={1} />
          </div>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={AllProducts} />
            
          </div>
        </InstantSearch>
      </div>
    );
  }
}



export default Search;
