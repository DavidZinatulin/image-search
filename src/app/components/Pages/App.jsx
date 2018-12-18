import * as React from "react";
import { connect } from "react-redux";
import 'app/sass/components/Pages/App.scss';
import { default as labels } from "assets/dictionaries/globalDictionary.json";
import { searchForm } from "app/structures/searchForm";
import { generateFormValues } from "app/utils/helpers";
import { initialLoad, loadImages } from "app/redux/actions/imagesActions";
import { saveQuery } from "app/redux/actions/queriesActions";
import { IMAGES_TO_LOAD } from "app/utils/constants";
import Form from "app/components/Elements/Form";
import ImageGrid from "app/components/Elements/ImageGrid";
import QueryList from "../Elements/QueryList";
import Button from "app/components/Elements/Button";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            [searchForm.name]: generateFormValues(searchForm.fields)
        };

        this._handleFormUpdate = this._handleFormUpdate.bind(this);
        this._submitSearchForm = this._submitSearchForm.bind(this);
        this._loadMoreImages = this._loadMoreImages.bind(this);
        this._saveQuery = this._saveQuery.bind(this);
        this._loadQuery = this._loadQuery.bind(this);
    }

    _handleFormUpdate(formName, formField, formValue) {
        const newValues = { ...this.state[formName], [formField]: formValue };

        this.setState({ [formName]: newValues });
    }

    _submitSearchForm() {
        const query = this.state[searchForm.name].query;

        this.props.initialLoad(query);
    }

    _loadMoreImages() {
        const query = this.state[searchForm.name].query,
            previouslyLoaded = this.props.images.data,
            page = Math.ceil(previouslyLoaded.length / IMAGES_TO_LOAD) + 1;

        this.props.loadImages(query, page, previouslyLoaded);
    }

    _saveQuery() {
        const query = this.state[searchForm.name].query,
            previouslySaved = this.props.queries.saved;

        this.props.saveQuery(query, previouslySaved);
    }

    _loadQuery(query) {
        this._handleFormUpdate(searchForm.name, 'query', query);
        this.props.initialLoad(query);
    }

    render() {
        const { images, queries } = this.props,
            currentQuery = this.state[searchForm.name].query,
            disableQuerySave = currentQuery === '' || currentQuery === queries.saved[0];

        return (
            <div className="app">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <Form
                                structure={searchForm}
                                values={this.state.searchForm}
                                onUpdate={this._handleFormUpdate}
                                onSubmit={this._submitSearchForm}
                            />
                        </div>
                        <div className="col-sm-4 app__inline-buttons">
                            <Button
                                onClick={this._submitSearchForm}
                                label={labels.search}
                                className="btn-primary"
                            />
                            <Button
                                onClick={this._saveQuery}
                                label={labels.save}
                                className="btn-success"
                                disabled={disableQuerySave}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <ImageGrid {...images} loadMore={this._loadMoreImages}/>
                        </div>
                        <div className="col-sm-4">
                            <QueryList {...queries} onClick={this._loadQuery}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    images: state.imagesReducer,
    queries: state.queriesReducer
});

const mapDispatchToProps = dispatch => ({
    loadImages: (query, page, previouslyLoaded) => dispatch(loadImages(query, page, previouslyLoaded)),
    initialLoad: (query) => dispatch(initialLoad(query)),
    saveQuery: (query, previouslySaved) => dispatch(saveQuery(query, previouslySaved))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);