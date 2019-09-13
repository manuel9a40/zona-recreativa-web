
import '../../timeline-style.css'
import TimelineItem from './TimelineItem'

const Timeline = (props) =>
    console.log(props.info) || props.info.length > 0 && (
        <div className="timeline-container col-12">
            {props.info.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

export default Timeline;
