import React from 'react';
import {
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col
} from 'reactstrap';

const ParamsForm = ({params, onParamsChange}) => {

  return (
    <Form className='mb-3'>
      <Row form>
        <Col sm={4}>
          <FormGroup>
            <Label for='description'>Description</Label>
            <Input 
              type='text' 
              name='description' 
              value={params.description} 
              onChange={onParamsChange}
            />
          </FormGroup>
        </Col>
        <Col sm={4}>
          <FormGroup>
            <Label for='location'>Location</Label>
            <Input 
              type='text' 
              name='location' 
              value={params.location} 
              onChange={onParamsChange}
            />
          </FormGroup>
        </Col>
        <Col sm={4} className='d-flex align-items-center'>
          <FormGroup check className='mt-sm-4'>
            <Input 
              type='checkbox' 
              name='full_time' 
              value={params.full_time} 
              onChange={onParamsChange}
            />
            <Label check for='full_time'>Only Full Time</Label>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  )
}

export default ParamsForm
