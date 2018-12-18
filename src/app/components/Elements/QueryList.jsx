import * as React from "react";
import 'app/sass/components/Elements/QueryList.scss';
import { default as labels } from "assets/dictionaries/globalDictionary.json";

const QueryList = ({ saved, onClick }) => {
    return (
        <div className="query-list">
            <div>{labels.saved_queries}:</div>
            {saved.map((item, key) => (
                <div key={key} onClick={() => onClick(item)} className="list-group-item">{item}</div>
            ))}
        </div>
    );
};

export default QueryList;