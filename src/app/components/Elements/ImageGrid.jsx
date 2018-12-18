import * as React from "react";
import { default as labels } from "assets/dictionaries/globalDictionary.json";
import 'app/sass/components/Elements/ImageGrid.scss';
import Button from "app/components/Elements/Button";

const ImageGrid = ({ data, loading, notFound, loadMore }) => {
    const loader = loading && (
        <div className="image-grid__loader-overlay">
            <div className="image-grid__loader-container">
                <div className="loader"></div>
                <h3>{labels.loading}...</h3>
            </div>
        </div>
    );

    const loadMoreButton = !loading && data.length > 0 && (
        <div className="image-grid__button-container">
            <Button onClick={loadMore} label={labels.load_more} className="btn-success"/>
        </div>
    );

    const noResultsFound = notFound && <div>{labels.no_results_found}</div>;

    const scrollContainer = (
        <div className="image-grid__scroll-container">
            {noResultsFound}
            <div className="card-columns">
                {data.map((item, key) => (
                    <div key={key} className="card">
                        <img src={item.urls.thumb} alt="" className="card-img-top"/>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="image-grid">
            <div className="position-relative">
                {scrollContainer}
                {loader}
            </div>
            {loadMoreButton}
        </div>
    );
};

export default ImageGrid;