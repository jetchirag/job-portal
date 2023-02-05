import React from "react";

import { Accordion } from "react-bootstrap";
import PartOneDetails from "../view-details/PartOneDetails";
import PartThreeDetails from "../view-details/PartThreeDetails";
import PartTwoDetail from "../view-details/PartTwoDetail";
import PartFourDetails from "../view-details/PartFourDetails";
import PartFiveDetails from "../view-details/PartFiveDetails";
import PartSixDetails from "../view-details/PartSixDetails";
import { FormProvider, useForm } from "react-hook-form";
import PartSevenDetails from "../view-details/PartSevenDetails";

const FormDetails = (props) => {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  return (
    <>
      <FormProvider {...methods}>
        <Accordion
          defalultActiveKey={["0"]}
          alwaysOpen
          style={{ padding: "0 5%" }}
        >
          <PartOneDetails data={props.data} />
          <PartTwoDetail data={props.data} />
          <PartThreeDetails data={props.data} />
          <PartFourDetails data={props.data} />
          <PartFiveDetails data={props.data} />
          <PartSixDetails data={props.data} />
          <PartSevenDetails data={props.data} />
        </Accordion>
      </FormProvider>
    </>
  );
};

export default FormDetails;
