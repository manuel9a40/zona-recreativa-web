import testData from './testData.json';
import '../../timeline-style.css'
import TimelineItem from './TimelineItem'

const Timeline = () =>
    testData.length > 0 && (
        <div className="timeline-container col-12">
            {testData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

export default Timeline;
