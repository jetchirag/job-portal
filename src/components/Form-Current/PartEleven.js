import React from 'react';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { Table } from 'react-bootstrap';

const PartEleven = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [part11, setPart11] = useState(true);
  const handlePart11 = () => {
    setPart11(!part11);
  };
  return (
    <Accordion.Item eventKey='11'>
      <Accordion.Header>11. Peer Recognition / Awards</Accordion.Header>
      <Accordion.Body>
        <Form.Check
          type='checkbox'
          label='if Yes?'
          onClick={handlePart11}
        ></Form.Check>
        {!part11 && (
          <Form.Group>
            <Table responsive='sm'>
              <thead>
                <td>Awards / Honors</td>
                <td>Agency</td>
                <td>Year</td>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {' '}
                    <Form.Control
                      size='sm'
                      type='text'
                      rows={3}
                      disabled={part11}
                      {...register('peerRecognition_awards', {
                        maxLength: 500,
                      })}
                    />
                    {errors.peerRecognition_awards && (
                      <p style={{ color: 'red' }}>
                        Please enter the necessary details
                      </p>
                    )}
                  </td>
                  <td>
                    <Form.Control
                      size='sm'
                      type='text'
                      rows={3}
                      disabled={part11}
                      {...register('peerRecognition_agency', {
                        maxLength: 500,
                      })}
                    />
                    {errors.peerRecognition_agency && (
                      <p style={{ color: 'red' }}>
                        Please enter the necessary details
                      </p>
                    )}
                  </td>
                  <td>
                    <Form.Control
                      size='sm'
                      type='text'
                      rows={3}
                      disabled={part11}
                      {...register('peerRecognition_year', {
                        maxLength: 500,
                      })}
                    />
                    {errors.peerRecognition_year && (
                      <p style={{ color: 'red' }}>
                        Please enter the necessary details
                      </p>
                    )}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Form.Group>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default PartEleven;
