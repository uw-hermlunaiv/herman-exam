import React, {
  useState,
} from 'react';
import {
  useDispatch, useSelector,
} from 'react-redux';
import Input from '../components/Input';
import {
  IUserRequest,
} from '../interfaces/User';
import {
  RootState,
} from '../store';
import signInUser from '../store/thunks/auth.thunk';

const defaultState: IUserRequest = {
  UserName: '', // test@bizbloqs.com
  Password: '', // 111111
};

function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.auth.loading);
  const [form, setForm] = useState<IUserRequest>({
    ...defaultState,
  });
  const [errors, setErrors] = useState<IUserRequest>({
    ...defaultState,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({
      ...defaultState,
    });

    if (!form.UserName) {
      setErrors((currentState) => ({
        ...currentState,
        UserName: 'UserName is required!',
      }));
    }

    if (!form.Password) {
      setErrors((currentState) => ({
        ...currentState,
        Password: 'Password is required!',
      }));
    }

    if (errors.UserName || errors.Password) return;

    dispatch(signInUser(form));
  };

  return (
    <div className="h-screen grid place-items-center bg-gray-100">
      <form
        className="bg-white flex flex-col max-w-[500px] w-full p-8 gap-y-4 rounded-xl shadow-xl"
        onSubmit={handleSubmit}
      >
        <Input
          label="Username"
          placeholder="Username"
          name="UserName"
          value={form.UserName}
          onChange={handleInputChange}
          error={errors.UserName}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Password"
          name="Password"
          value={form.Password}
          onChange={handleInputChange}
          error={errors.Password}
        />
        <button
          type="submit"
          className="bg-green-400 text-green-100 p-2 rounded-lg"
          disabled={loading}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignIn;
