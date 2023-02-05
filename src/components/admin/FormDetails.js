import React from "react";

import { Accordion, Button } from "react-bootstrap";
import PartOneDetails from "../view-details/PartOneDetails";
import PartThreeDetails from "../view-details/PartThreeDetails";
import PartTwoDetail from "../view-details/PartTwoDetail";
import PartFourDetails from "../view-details/PartFourDetails";
import PartFiveDetails from "../view-details/PartFiveDetails";
import PartSixDetails from "../view-details/PartSixDetails";
import { FormProvider, useForm } from "react-hook-form";
import PartSevenDetails from "../view-details/PartSevenDetails";
import PartEightDetails from "../view-details/PartEightDetails";
import PartNineTenDetails from "../view-details/PartNineTenDetails";
import PartElevenDetails from "../view-details/PartEleven";
import PartTwelveDetails from "../view-details/PartTwelveDetails";

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
          alwaysClose
          style={{ padding: "0 5%" }}
        >
          <PartOneDetails data={props.data} />
          <PartTwoDetail data={props.data} />
          <PartThreeDetails data={props.data} />
          <PartFourDetails data={props.data} />
          <PartFiveDetails data={props.data} />
          <PartSixDetails data={props.data} />
          <PartSevenDetails data={props.data} />
          <PartEightDetails data={props.data} />
          <PartNineTenDetails data={props.data} />
          <PartElevenDetails data={props.data} />
          <PartTwelveDetails data={props.data} />
          <Button onClick={props.reject}>Reject</Button>
          <Button onClick={props.accept}>Accept</Button>
        </Accordion>
      </FormProvider>
    </>
  );
};

export default FormDetails;
