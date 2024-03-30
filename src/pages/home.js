import { useState, useEffect } from "react";
import exclamation from "../icons/exclamation-mark.svg";
import { Tooltip } from "react-tooltip";
import Button from "../components/button/button";
import InputField from "../components/input/inputfield";
import Label from "../components/label/label";
import Caption from "../components/caption/caption";
import Image from "../components/image/image";
import Href from "../components/href/href";
import Select from "../components/select/select";

function Home() {
  const [formData, setFormData] = useState({})
  const handlerSaveDraft = () => {
    console.log("savedraft handler");
  };
  const handlerSubmitBtn = () => {
    console.log("handler submit button");
  };
  const handlerChange = (e) => {
    console.log("e", e.target.value);
  };
  const covertMinMaxVal = (val) => val.split('_')[0] + ' ' + val.split('_')[1] + ' = ' + val.split('_')[2]
  
const mergeData = (jsonData) =>{
  let uniqueData = [];
  for (let i = 0; i < jsonData?.fields?.length; i++) {
    if(uniqueData.indexOf(jsonData?.fields[i]?.section) === -1){
      uniqueData.push(jsonData?.fields[i]?.section)
    }
  }
 
  var sectionData = [];
  for (let i = 0; i < uniqueData.length; i++) {
    const data = jsonData?.fields?.filter((obj) => obj.section === uniqueData[i]);
    if (data.length > 0) sectionData.push({ section: uniqueData[i], data: data , sectionName : data[0].section_name });
  }
  const tmp = {form_header : jsonData.form_header , fields : sectionData }
  setFormData(tmp);
}

const fetchData = async() =>{
 fetch('data.json').then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    mergeData(data);
  })
  .catch(error => console.error('There has been a problem with your fetch operation:', error));
}

  useEffect(()=> {
   fetchData()
  },[])

  return (
    <section className="p-4 mt-3">
      <div className="container mb-4">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="h3 mb-0 text-info">{formData?.form_header}</h1>
          </div>
        </div>

        
        { formData?.fields?.map((sectionData,index) => (<div key={index}>
            <Caption   name={sectionData.sectionName} />
            {sectionData?.data?.map((el,index) =>(<div key={index} className="row mt-5">
          <div className="col-3 text-center">
           <Label htmlfor={el.field_id} label={`${el.field_label}(*)`} classname="col-form-label" />
          </div>
           <div className="col-5">
          {el.field_type === "text"  &&  <InputField  
              type={el.field_type}
              id={el.field_id}
              classname="form-control"
              placeholder={`Enter ${el.field_label}...`}
              onChange={handlerChange}
            /> }
            {el.field_type === "radio" && 
              el.field_options.map((radioData,index) =>( <div key={index} className="form-check form-check-inline">
              <InputField
              type={el.field_type}
              id={`${el.field_id}-${index}`}
              name={el.field_id}
              value={radioData.label}
              classname="form-check-input"
              onChange={handlerChange}
            /> <Label classname="form-check-label" label={radioData.label} forhtml={`${el.field_id}-${index}`} />
                 
              </div> ))
            } 
            { el.field_type === "select" && <Select classname="form-select"  optionData={el.field_options} labelforSelected="Select Education..." />}     
          </div>
          <div className="col-2 text-end">
            <span className="form-text">
            <Href dataId="my-tooltip"
                dataClassName="tooltip-custom-class"
                dataToolTipHtml={`<b>${el.info}</b> <br/> ${ el.field_id === "completed_year"?  el.validations[0] + " and " + covertMinMaxVal(el.validations[1]) + ", " +  covertMinMaxVal(el.validations[2])  :  el.validations.join(' and ') +  ' only'} `}
                dataTooltipPlace="right" label=<Image source={exclamation} alt="image" height="34" /> />
            </span>
          </div>
        </div>))}
            </div>
        ))
  }
      <div className="row mt-5 ">
          <div className="col-12 text-center">
            <Button
              classname="btn btn-lg btn-light cust-right-margin  border border-2 border-dark fw-semibold"
              onClick={handlerSaveDraft}
              label="Save Draft"
            />
            <Button
              classname="btn btn-lg btn-primary cust-right-margin  border border-2 border-dark fw-semibold"
              onClick={handlerSubmitBtn}
              label="Submit"
            />
          </div>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
         </section>
       
  );
}

export default Home;
