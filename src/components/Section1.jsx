import iconBrandRecognition from "/images/icon-brand-recognition.svg";
import iconDetailedRecords from "/images/icon-detailed-records.svg";
import iconFullyCustomizable from "/images/icon-fully-customizable.svg";

import "./styles/section1.css";
function Section1() {
  return (
    <div className="Section1">
      <h2 className="section1-heading">Advanced Statistics</h2>
      <p className="section1-paragrah">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="brand-detail-wrapper">
        <div className="brand-details detail1">
          <div className="brand-detail-wrapper-img detail1-wrapper-img">
            <img
              className="detail-img"
              src={iconBrandRecognition}
              alt="icon brand recognition"
            />
          </div>
          <h4 className="detail1-heading brand-detail-heading">
            Brand Recognition
          </h4>
          <p className="detail1-paragraph brand-detail-paragraph">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="brand-details detail2">
          <div className="brand-detail-wrapper-img detail2-wrapper-img">
            <img
              className="detail-img"
              src={iconDetailedRecords}
              alt="icon detailed records"
            />
          </div>
          <h4 className="detail2-heading brand-detail-heading">
            Detailed Records
          </h4>
          <p className="detail2-paragraph brand-detail-paragraph">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="brand-details detail3">
          <div className="brand-detail-wrapper-img detail3-wrapper-img">
            <img
              className="detail-img"
              src={iconFullyCustomizable}
              alt="icon fully customizable"
            />
          </div>
          <h4 className="detail1-heading brand-detail-heading">
            Fully Customizable
          </h4>
          <p className="detail3-paragraph brand-detail-paragraph">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
      <div className="hr"></div>
    </div>
  );
}

export default Section1;
