
import { ProgressBar } from 'react-bootstrap';

const Progress = (props) => {
  const progress = props.pro;

  return (
    <div className="progressBar row">
      <p className="text-white fw-bolder ps-2 col-2">{progress.title}</p>

      <ProgressBar
        now={progress.percentage}
        label={`${progress.percentage}% completed`}
        className="col-10 p-0"
      />
    </div>
  );
};
export default Progress;

{
  /* <div className="progress d-flex py-3 my-1">
<p className=" text-dark fw-bolder ps-2">{progress.title}</p>
<div className="progress-bar " role="progressbar" style={width= 25%} aria-valuenow={"25"} aria-valuemax={"100"}></div>
</div> */
}
