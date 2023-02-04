import React from 'react'
import {Link} from 'react-router-dom'
import {Form, FormGroup, Label,Input,Button} from 'reactstrap'

const EditUser = () => {
  return (
    <Form>
        <FormGroup>
            <Label>Name</Label>
            <Input type="text" placeholder='Edit Name'></Input>
        </FormGroup>
        <Button type='submit'>Submit</Button>
        <Link to="/" className='btn btn-danger m-2'>Cancle</Link>
    </Form>
  )
}

export default EditUser