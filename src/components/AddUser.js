import React from 'react'
import {Link} from 'react-router-dom'
import {Form, FormGroup,Label,Input,Button} from 'reactstrap'

const AddUser = () => {
  return (
    <div>
        <Form>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" placeholder='Enter Name'></Input>
            </FormGroup>
            <Button type='submit'>Submit</Button>
            <Link to="/" className='btn btn-danger m-2'>Cancle</Link>
        </Form>
    </div>
  )
}

export default AddUser