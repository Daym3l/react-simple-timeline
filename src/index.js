import React from 'react';
import './style.css';
import PropTypes from 'prop-types';


const TimelineItem = ({ data }) => {
    return <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            <label className="label-info">{data.author}</label>
            <span className="circle" />
        </div>
    </div>
};

const SimpleTimeLine = props => {
    const { timelineData } = props;
    return <React.Fragment>       
     
        {timelineData.length > 0 && <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>}
    </React.Fragment>
}

SimpleTimeLine.propTypes = {
    timelineData: PropTypes.array.isRequired
}

export default SimpleTimeLine;