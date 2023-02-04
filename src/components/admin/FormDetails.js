import React from "react";
import PartTwoDetail from "../view-details/PartTwoDetail";
import { Accordion } from "react-bootstrap";
import PartThreeDetails from "../view-details/PartThreeDetails";
import { FormProvider, useForm } from "react-hook-form";


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
          <PartTwoDetail data={props.data} />
          <PartThreeDetails data={props.data} />
        </Accordion>
      </FormProvider>
    </>
  );
};

export default FormDetails;
