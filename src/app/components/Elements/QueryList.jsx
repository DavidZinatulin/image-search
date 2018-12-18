import * as React from "react";
import 'app/sass/components/Elements/QueryList.scss';

const QueryList = ({ saved, onClick }) => {
    return (
        <div className="query-list">
            {saved.map((item, key) => (
                <div key={key} onClick={() => onClick(item)} className="list-group-item">{item}</div>
            ))}
        </div>
    );
};

export default QueryList;