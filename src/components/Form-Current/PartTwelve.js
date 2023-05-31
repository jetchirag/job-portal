import React from 'react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PartTwelve = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [knowanyone, setKnowAnyone] = useState(false);
  const handleKnowAnyone = () => {
    setKnowAnyone(!knowanyone);
  };

  const [interviewed, setInterviewed] = useState(false);
  const interviewedHandle = () => {
    setInterviewed(!interviewed);
  };
  const [know, setKnow] = useState(['set']);
  const addKnow = () => {
    setKnow([...know, 'set']);
  };
  const removeKnow = () => {
    const copyArr = [...know];
    if (copyArr.length > 1) copyArr.splice(-1);
    else return;
    setKnow(copyArr);
  };

  return (
    <Accordion.Item eventKey='12'>
      <Accordion.Header>10. Other Information</Accordion.Header>
      <Accordion.Body>
        <Row className='mb-3'>
          {/* <Form.Group
            as={Col}
            md="12"
            {...register("previoussalary", {
              required: true,
            })}
          >
            <Form.Label>
              Present / Last Drawn salary (monthly in INR)
            </Form.Label>
            <Form.Control size="sm" type="text" placeholder="Amount" />
            {errors.previoussalary && (
              <p style={{ color: "red" }}>Please enter</p>
            )}
          </Form.Group>
          <Form.Group
            as={Col}
            md="12"
            {...register("noticeperiod", {
              required: true,
            })}
          >
            <Form.Label>Notice period (in Days)</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Days" />
            {errors.noticeperiod && (
              <p style={{ color: "red" }}>Please enter</p>
            )}
          </Form.Group> */}
          <Form.Group as={Col} md='12'>
            <Form.Label>Do You Know anyone in MUJ ?</Form.Label>
            <Form.Check
              type='checkbox'
              label='Yes'
              value={'Yes'}
              name={'knowanyone'}
              // {...register("knowanyone", {
              //   required: true,
              // })}
              onClick={handleKnowAnyone}
            ></Form.Check>
            {/* <Form.Check
              type="radio"
              label="No"
              value={"No"}
              name={"knowanyone"}
              {...register("knowanyone", {
                required: true,
              })}
            ></Form.Check> */}
            {errors.knowanyone && <p style={{ color: 'red' }}>Please enter</p>}
          </Form.Group>
          <h3></h3>
          {knowanyone &&
            know.map(() => {
              return (
                <>
                  <br />
                  <Form.Group as={Col} md='3'>
                    <Form.Label>
                      Name<span style={{ color: 'red' }}> *</span>
                    </Form.Label>
                    <Form.Control size='sm' type='text' placeholder='Name' />
                  </Form.Group>
                  <Form.Group as={Col} md='3'>
                    <Form.Label>
                      Designation<span style={{ color: 'red' }}> *</span>
                    </Form.Label>
                    <Form.Control
                      size='sm'
                      type='text'
                      placeholder='Designation'
                    />
                  </Form.Group>
                  <Form.Group as={Col} md='3'>
                    <Form.Label>
                      Department<span style={{ color: 'red' }}> *</span>
                    </Form.Label>
                    <Form.Control
                      size='sm'
                      type='text'
                      placeholder='Department'
                    />
                  </Form.Group>
                  <Form.Group as={Col} md='3'>
                    <Form.Label>
                      Relation<span style={{ color: 'red' }}> *</span>
                    </Form.Label>
                    <Form.Control
                      size='sm'
                      type='text'
                      placeholder='Relation'
                    />
                  </Form.Group>
                  <h3></h3>
                  <br />
                </>
              );
            })}
          {knowanyone && (
            <>
              <button
                type='button'
                onClick={addKnow}
                className='add-more-btn sm'
              >
                Add More
              </button>{' '}
              <button
                type='button'
                onClick={removeKnow}
                className='add-more-btn sm'
              >
                Remove Last
              </button>
            </>
          )}
          <Form.Group as={Col} md='12'>
            <Form.Label>
              Have you ever been interviewed in MUJ earlier?
              <span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Check
              type='checkbox'
              label='Yes?'
              value={'Yes'}
              name={'knowanyone'}
              // {...register("knowanyone", {
              //   required: true,
              // })}
              onClick={interviewedHandle}
            ></Form.Check>
          </Form.Group>
          {interviewed && (
            <>
              <Form.Group as={Col} md='12'>
                <Form.Label>
                  Given Offer to join?<span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Check
                  type='radio'
                  label='Yes'
                  value={'Yes'}
                  name={'offerjoined'}
                  {...register('offerjoined', {
                    required: true,
                  })}
                ></Form.Check>
                <Form.Check
                  type='radio'
                  label='No'
                  value={'No'}
                  name={'offerjoined'}
                  {...register('offerjoined', {
                    required: true,
                  })}
                ></Form.Check>
                {errors.offerjoined && (
                  <p style={{ color: 'red' }}>Please enter</p>
                )}
              </Form.Group>
              <Form.Group as={Col} md='12'>
                <Form.Label>
                  Joined?<span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Check
                  type='radio'
                  label='Yes'
                  value={'Yes'}
                  name={'joined'}
                ></Form.Check>
                <Form.Check
                  type='radio'
                  label='No'
                  value={'No'}
                  name={'joined'}
                ></Form.Check>
              </Form.Group>
            </>
          )}
          <Form.Group as={Col} md='12'>
            <Form.Label>
              Have you ever been punished during your service or convicted by a
              court of law?<span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Check
              type='radio'
              label='Yes'
              isInvalid={errors.convicted}
              value={'Yes'}
              name={'convicted'}
              {...register('convicted', {
                required: true,
              })}
            ></Form.Check>
            <Form.Check
              type='radio'
              label='No'
              isInvalid={errors.convicted}
              value={'No'}
              name={'convicted'}
              {...register('convicted', {
                required: true,
              })}
            ></Form.Check>
          </Form.Group>
          <Form.Group as={Col} md='12'>
            <Form.Label>
              <u>is Yes, Please Explain</u>
              <span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Control size='sm' type='text' placeholder='Explain' />
          </Form.Group>
          <Form.Group as={Col} md='12'>
            <Form.Label>
              Do you have any case pending against you in court of law?
              <span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Check
              type='radio'
              label='Yes'
              value={'Yes'}
              name={'pendingcases'}
              isInvalid={errors.pendingcases}
              id={'pendingcases'}
              {...register('pendingcases', {
                required: true,
              })}
            ></Form.Check>
            <Form.Check
              isInvalid={errors.pendingcases}
              type='radio'
              label='No'
              value={'No'}
              name={'pendingcases'}
              id={'pendingcases'}
              {...register('pendingcases', {
                required: true,
              })}
            ></Form.Check>
          </Form.Group>
          <Form.Group as={Col} md='12'>
            <Form.Label>
              <u>is Yes, Please Explain</u>
              <span style={{ color: 'red' }}> *</span>
            </Form.Label>
            <Form.Control size='sm' type='text' placeholder='Explain' />
          </Form.Group>
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default PartTwelve;
