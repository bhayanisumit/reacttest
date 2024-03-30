import { useState, useEffect } from "react";
import exclamation from "../icons/exclamation-mark.svg";
import { Tooltip } from "react-tooltip";
import Button from "../components/button/button";
import InputField from "../components/input/inputfield";
import Label from "../components/label/label";
import Caption from "../components/caption/caption";
import Image from "../components/image/image";
import Href from "../components/href/href";

function Home() {
  const handlerSaveDraft = () => {
    console.log("savedraft handler");
  };
  const handlerSubmitBtn = () => {
    console.log("handler submit button");
  };
  const handlerChange = (e) => {
    console.log("e", e.target.value);
  };

  return (
    <section className="p-4 mt-3">
      <div className="container mb-4">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="h3 mb-0 text-info">Let's get to Know you better</h1>
          </div>
        </div>
        <Caption name="Basic Details" />
          <div className="row mt-5">
          <div className="col-3 text-center">
           <Label htmlfor="cname" label=" Candidate Name(*)" classname="col-form-label" />
          </div>
          <div className="col-5">
            <InputField
              type="text"
              id="cname"
              classname="form-control"
              name="name"
              placeholder="Enter name..."
              onChange={handlerChange}
            />
          </div>
          <div className="col-2 text-end">
            <span className="form-text">
            <Href dataId="my-tooltip"
                dataClassName="tooltip-custom-class"
                dataToolTipHtml="<b>You full name</b> <br/> Required and alphabets only"
                dataTooltipPlace="right" label=<Image source={exclamation} alt="image" height="34" /> />
               
            </span>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-3 text-center">
            <label htmlFor="inputPassword6" className="col-form-label">
              Candidate Email(*)
            </label>
          </div>
          <div className="col-5">
            <input
              type="text"
              id="inputPassword6"
              className="form-control"
              placeholder="Enter email..."
            />
          </div>
          <div className="col-2 text-end">
            <span className="form-text">
              <a
                href="#/"
                data-tooltip-id="my-tooltip"
                data-tooltip-class-name="tooltip-custom-class"
                data-tooltip-html="<b>You full name</b> <br/> Required and alphabets only"
                data-tooltip-place="right"
              >
                {" "}
                <img src={exclamation} alt="ex" height={34} />
              </a>
            </span>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-3 text-center">
            <label htmlFor="inputPassword6" className="col-form-label">
              Candidate Phone(*)
            </label>
          </div>
          <div className="col-5">
            <input
              type="text"
              id="inputPassword6"
              className="form-control"
              placeholder="Enter Phone..."
            />
          </div>
          <div className="col-2 text-end">
            <span className="form-text">
              <a
                href="#/"
                data-tooltip-id="my-tooltip"
                data-tooltip-class-name="tooltip-custom-class"
                data-tooltip-html="<b>You full name</b> <br/> Required and alphabets only"
                data-tooltip-place="right"
              >
                {" "}
                <img src={exclamation} alt="ex" height={34} />
              </a>
            </span>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-3 text-center">
            <label htmlFor="inputPassword6" className="col-form-label">
              Marital Status(*)
            </label>
          </div>
          <div className="col-5">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Single
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Married
              </label>
            </div>
          </div>
          <div className="col-2 text-end">
            <span className="form-text">
              <a
                href="#/"
                data-tooltip-id="my-tooltip"
                data-tooltip-class-name="tooltip-custom-class"
                data-tooltip-html="<b>You full name</b> <br/> Required and alphabets only"
                data-tooltip-place="right"
              >
                {" "}
                <img src={exclamation} alt="ex" height={34} />
              </a>
            </span>
          </div>
        </div>
        <Caption name="Education Details" />
        
        <div className="row mt-5">
          <div className="col-3 text-center">
            <label htmlFor="inputPassword6" className="col-form-label">
              Education(*)
            </label>
          </div>
          <div className="col-5">
            <select className="form-select" aria-label="Default select example">
              <option selected>Select Education....</option>
              <option value="1">BCA</option>
              <option value="2">MCA</option>
              <option value="3">MAC</option>
            </select>
          </div>
          <div className="col-2 text-end">
            <span className="form-text">
              <a
                href="#/"
                data-tooltip-id="my-tooltip"
                data-tooltip-class-name="tooltip-custom-class"
                data-tooltip-html="<b>You full name</b> <br/> Required and alphabets only"
                data-tooltip-place="right"
              >
                {" "}
                <img src={exclamation} alt="ex" height={34} />
              </a>
            </span>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-3 text-center">
            <label htmlFor="inputPassword6" className="col-form-label">
              Institute/College/University(*)
            </label>
          </div>
          <div className="col-5">
            <input
              type="text"
              id="inputPassword6"
              className="form-control"
              placeholder="Enter University/College..."
            />
          </div>
          <div className="col-2 text-end">
            <span className="form-text">
              <a
                href="#/"
                data-tooltip-id="my-tooltip"
                data-tooltip-class-name="tooltip-custom-class"
                data-tooltip-html="<b>You full name</b> <br/> Required and alphabets only"
                data-tooltip-place="right"
              >
                {" "}
                <img src={exclamation} alt="ex" height={34} />
              </a>
            </span>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-3 text-center">
            <label htmlFor="inputPassword6" className="col-form-label">
              Completion Year(*)
            </label>
          </div>
          <div className="col-5">
            <input
              type="text"
              id="inputPassword6"
              className="form-control"
              placeholder="Enter Year..."
            />
          </div>
          <div className="col-2 text-end">
            <span className="form-text">
              <a
                href="#/"
                data-tooltip-id="my-tooltip"
                data-tooltip-class-name="tooltip-custom-class"
                data-tooltip-html="<b>You full name</b> <br/> Required and alphabets only"
                data-tooltip-place="right"
              >
                {" "}
                <img src={exclamation} alt="ex" height={34} />
              </a>
            </span>
          </div>
        </div>
        <Caption name="Employment History" />
        
        <div className="row mt-5">
          <div className="col-3 text-center">
            <label htmlFor="inputPassword6" className="col-form-label">
              Company name(*)
            </label>
          </div>
          <div className="col-5">
            <input
              type="text"
              id="12"
              className="form-control"
              placeholder="Enter Company name..."
            />
          </div>
          <div className="col-2 text-end">
            <span className="form-text">
              <a
                href="#/"
                data-tooltip-id="my-tooltip"
                data-tooltip-class-name="tooltip-custom-class"
                data-tooltip-html="<b>You full name</b> <br/> Required and alphabets only"
                data-tooltip-place="right"
              >
                {" "}
                <img src={exclamation} alt="ex" height={34} />
              </a>
            </span>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-3 text-center">
            <label htmlFor="inputPassword6" className="col-form-label">
              Designation/Title(*)
            </label>
          </div>
          <div className="col-5">
            <input
              type="text"
              id="12"
              className="form-control"
              placeholder="Enter Designation..."
            />
          </div>
          <div className="col-2 text-end">
            <span className="form-text">
              <a
                href="#/"
                data-tooltip-id="my-tooltip"
                data-tooltip-class-name="tooltip-custom-class"
                data-tooltip-html="<b>You full name</b> <br/> Required and alphabets only"
                data-tooltip-place="right"
              >
                {" "}
                <img src={exclamation} alt="ex" height={34} />
              </a>
            </span>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-3 text-center">
            <label htmlFor="inputPassword6" className="col-form-label">
              Start Year & Month(*)
            </label>
          </div>
          <div className="col-5">
            <input
              type="date"
              id="12"
              className="form-control"
              placeholder="Enter Start Year mm/yyyy..."
            />
          </div>
          <div className="col-2 text-end">
            <span className="form-text">
              <a
                href="#/"
                data-tooltip-id="my-tooltip"
                data-tooltip-class-name="tooltip-custom-class"
                data-tooltip-html="<b>You full name</b> <br/> Required and alphabets only"
                data-tooltip-place="right"
              >
                {" "}
                <img src={exclamation} alt="ex" height={34} />
              </a>
            </span>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-3 text-center">
            <label htmlFor="inputPassword6" className="col-form-label">
              End Year & Month(*)
            </label>
          </div>
          <div className="col-5">
            <input
              type="date"
              id="12"
              className="form-control"
              placeholder="Enter End Year mm/yyyy..."
            />
          </div>
          <div className="col-2 text-end">
            <span className="form-text">
              <a
                href="#/"
                data-tooltip-id="my-tooltip"
                data-tooltip-class-name="tooltip-custom-class"
                data-tooltip-html="<b>You full name</b> <br/> Required and alphabets only"
                data-tooltip-place="right"
              >
                {" "}
                <img src={exclamation} alt="ex" height={34} />
              </a>
            </span>
          </div>
        </div>
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
