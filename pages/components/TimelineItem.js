
import '../../timeline-style.css'

function getTime(time)
{
    if (typeof time !== 'undefined')
        return time;
    else
        return '';
}

const TimelineItem = ({ data }) => (
    <div className="timeline-item row my-2 ml-4 col-12">
        <div className="timeline-item-content py-1 col-auto d-block-flex ">
            <h5>
                <time className="badge badge-pill badge-success">
                    { typeof data !== 'undefined' ? getTime(data.time) : '' }
                </time>
            </h5>
            <p className="mb-1">
                { typeof data !== 'undefined' ? data.text : '' }
            </p>
            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem;
