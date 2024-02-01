import { useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import registerSchema from '../validations/validate-register';

export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState({});
  const [error, setError] = useState({
    firstName: 'Please fill your first name'
  });

  const handleFormSubmit = e => {
    e.preventDefault();
    // const { value, error } = registerSchema.validate(input, {
    //   abortEarly: false
    // });
    // console.dir(error);

    // onSuccess();
  };

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="grid grid-cols-2 p-4 gap-4">
        <div>
          <Input
            placeholder="First name"
            value={input.firstName}
            name="firstName"
            onChange={handleChangeInput}
          />
          {/* {error.firstName ? (
            <small className="text-red-500">{error.firstName}</small>
          ) : null} */}
        </div>
        <div>
          <Input
            placeholder="Last name"
            value={input.lastName}
            name="lastName"
            onChange={handleChangeInput}
          />
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Email address or mobile number"
            value={input.emailOrMobile}
            name="emailOrMobile"
            onChange={handleChangeInput}
          />
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Password"
            value={input.password}
            name="password"
            onChange={handleChangeInput}
            type="password"
          />
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Confirm password"
            value={input.confirmPassword}
            name="confirmPassword"
            onChange={handleChangeInput}
            type="password"
          />
        </div>
        <div className="col-span-full text-center">
          <Button bg="green" color="white">
            Sign up
          </Button>
        </div>
      </div>
    </form>
  );
}
