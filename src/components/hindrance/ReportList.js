import "../../assets/styles/modals.css";
import Reports from "./Reports"



const ReportList = (props) =>  {

  const {
    reports,
    selectHindranceCenter
  } = props


  return (
    <div className="hindrance-modal-reports">
      <ul>
        {reports.map((report, index) => (
          <Reports 
            key={index} 
            report={report} 
            selectHindranceCenter={selectHindranceCenter}
          />
        ))}
      </ul>
    </div>
  );
}

export default ReportList