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
 

  const [offerGiven, setOfferGiven] = useState(false);

  const handleOfferGiven = (e) => {
    setOfferGiven(e.target.value);
  };

  const [offerJoined, setOfferJoined] = useState(false);

  const handleOfferJoined = (e) => {
    setOfferJoined(e.target.value);
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
              {...register("knowanyone", {
                required: true,
              })}
              checked={knowanyone === true}
              onClick={handleKnowAnyone}
            ></Form.Check>
            <Form.Check
              type='checkbox'
              label='No'
              value={'No'}
              name={'knowanyone'}
              {...register("knowanyone", {
                required: true,
              })}
              onClick={handleKnowAnyone}
              checked={knowanyone === false}
            ></Form.Check>
            {errors.knowanyone && <p style={{ color: 'red' }}>Please enter</p>}
          </Form.Group>
          <h3></h3>

                  <br />
                  {knowanyone && (
                    <>
                  <Form.Group as={Col} md='3'>
                    <Form.Label>
                      Name<span style={{ color: 'red' }}> *</span>
                    </Form.Label>
                    <Form.Control 
                    size='sm' 
                    type='text' 
                    placeholder='Name'
                    name={'knowanyone_name'}
                    {...register('knowanyone_name', {
                      required: knowanyone,
                    })}

                    />
                  </Form.Group>
                  <Form.Group as={Col} md='3'>
                    <Form.Label>
                      Designation<span style={{ color: 'red' }}> *</span>
                    </Form.Label>
                    <Form.Control
                      size='sm'
                      type='text'
                      placeholder='Designation'
                      name={'knowanyone_designation'}
                      {...register('knowanyone_designation', {
                        required: knowanyone,
                      })}
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
                      name={'knowanyone_department'}
                      {...register('knowanyone_department', {
                        required: knowanyone,
                      })}
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
                      name={'knowanyone_relation'}
                      {...register('knowanyone_relation', {
                        required: knowanyone,
                      })}
                    />
                  </Form.Group>
                  <h3></h3>
                  <br />
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
              name={'interviewed'}
              checked={interviewed === true}
              onClick={interviewedHandle}
              {...register('interviewed', {
                required: true,
              })}
            ></Form.Check>
            <Form.Check
              type='checkbox'
              label='No'
              value={'No'}
              name={'interviewed'}
              onClick={interviewedHandle}
              checked={interviewed === false}
              {...register('interviewed', {
                required: true,
              })}
            ></Form.Check>
          </Form.Group>
          {interviewed && (
            <>

              {/* Details */}
              <Form.Group as={Col} md='3'>
                <Form.Label>
                  Date of Interview<span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  isInvalid={errors.interviewed_date}
                  size="sm"
                  type="date"
                  {...register("interviewed_date", {
                    required: interviewed,
                  })}
                />
              </Form.Group>
              <Form.Group as={Col} md='3'>
                <Form.Label>
                  Designation<span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  isInvalid={errors.interviewed_designation}
                  size='sm'
                  type='text'
                  placeholder='Designation'
                  {...register('interviewed_designation', {
                    required: interviewed,
                  })}
                />
              </Form.Group>
              <Form.Group as={Col} md='3'>
                <Form.Label>
                  Department<span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  isInvalid={errors.interviewed_department}
                  size='sm'
                  type='text'
                  placeholder='Department'
                  {...register('interviewed_department', {
                    required: interviewed,
                  })}
                />
              </Form.Group>
              <Form.Group as={Col} md='3'>
                <Form.Label>
                  Result of Interview<span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Control
                  isInvalid={errors.interviewed_result}
                  size='sm'
                  type='text'
                  placeholder='Result'
                  {...register('interviewed_result', {
                    required: interviewed,
                  })}
                />
              </Form.Group>

              <Form.Group as={Col} md='12'>
                <Form.Label>
                  Given Offer to join?<span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Check
                  type='radio'
                  label='Yes'
                  value={'Yes'}
                  name={'offerjoined'}
                  checked={offerGiven === 'Yes'}
                  onClick={handleOfferGiven}
                  {...register('offerjoined', {
                    required: true,
                  })}
                ></Form.Check>
                <Form.Check
                  type='radio'
                  label='No'
                  value={'No'}
                  name={'offerjoined'}
                  checked={offerGiven === 'No'}
                  onClick={handleOfferGiven}
                  {...register('offerjoined', {
                    required: true,
                  })}
                ></Form.Check>
                {errors.offerjoined && (
                  <p style={{ color: 'red' }}>Please enter</p>
                )}
              </Form.Group>
              {/* if given the offer to join show another radio */}
              {offerGiven === 'Yes' && (
                <>
              <Form.Group as={Col} md='12'>
                <Form.Label>
                  Joined?<span style={{ color: 'red' }}> *</span>
                </Form.Label>
                <Form.Check
                  type='radio'
                  label='Yes'
                  value={'Yes'}
                  name={'joined'}
                  checked={offerJoined === 'Yes'}
                  onClick={handleOfferJoined}
                  {...register('joined', {
                    required: true,
                  })}

                ></Form.Check>
                <Form.Check
                  type='radio'
                  label='No'
                  value={'No'}
                  name={'joined'}
                  checked={offerJoined === 'No'}
                  onClick={handleOfferJoined}
                  {...register('joined', {
                    required: true,
                  })}

                ></Form.Check>
              </Form.Group>
              {offerJoined === 'No' && (
                <Form.Group as={Col} md='12'>
                  <Form.Label>
                    Reason for not joining<span style={{ color: 'red' }}> *</span>
                  </Form.Label>
                  <Form.Control
                    size='sm'
                    type='text'
                    placeholder='Reason'
                    {...register('reason', {
                      required: true,
                    })}
                  />
                </Form.Group>

              )}
              </>
              )}
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
