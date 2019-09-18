
import '../style/timeline-style.css'

function ifData(data)
{
    if (typeof data !== 'undefined')
        return data;
    else
        return ;
}

function validate(time)
{
    if (typeof time !== 'undefined')
        return time;
    else
        return ;
}

function getDuration(dur)
{
    if (typeof dur !== 'undefined')
        return 'Duracion: ' + dur;
    else
        return ;
}

const TimelineItem = ({ data }) => (
    <div className="timeline-item row my-2 ml-4 col-12">
        <div className="timeline-item-content py-1 col-auto d-block-flex ">
            <h6 className="row">
                <time className="badge badge-pill ml-2 badge-success col-auto">
                    { data!=undefined && data.time }
                </time>
                <span className="tag col-auto mt-md-0 mt-2 ml-md-auto">
                { data!=undefined && data.duracion }
                </span>
            </h6>

            <p className="mb-1 ml-0">
                { data!=undefined && data.text }
            </p>
            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem;
