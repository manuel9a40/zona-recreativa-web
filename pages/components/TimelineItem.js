
import '../../timeline-style.css'

function validate(time)
{
    if (typeof time !== 'undefined')
        return time;
    else
        return '';
}

const TimelineItem = ({ data }) => (
    <div className="timeline-item row my-2 ml-4 col-12">
        <div className="timeline-item-content py-1 col-auto d-block-flex ">
            <h6 className="row">
                <time className="badge badge-pill ml-2 badge-success col-auto">
                    { validate(validate(data).time) }
                </time>
                <span className="tag col-auto mt-md-0 mt-2 ml-md-auto">
                {"Duración: " + validate(validate(data).duracion)} //validate(data) may return '' and remove text if duracion is null
                </span>
            </h6>

            <p className="mb-1 ml-0">
                { validate(validate(data).text) }
            </p>
            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem;
