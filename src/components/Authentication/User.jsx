import React, { useEffect, useState } from 'react'
import { getItemInLocalStorage } from '../../utils/localStorage';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

function User() {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState(false);
    const [showPassword, setShowPassWord] = useState(false);
    const togglePassword = () => {
        setPassword(!password);
      };

      const [formData, setFormData] = useState("")


    useEffect(() => {
        const userName = localStorage.getItem("Name");
        console.log(userName)
        setUser(userName)
    })

    const onChange = (e) => {
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };
   

    return (
        <div>
            <p className='text-2xl md:text-4xl my-5 text-center'>{user}</p>
        <div className='flex justify-center items-center min-h-screen'>
        <div className='w-full max-w-md'>
          <div className='mt-4'>
            <button onClick={() => setShowPassWord(!showPassword)} className='w-full bg-green-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
              Change Password
            </button>
            {showPassword && 
              <div className='mt-4'>
                <div className='flex flex-col gap-2 relative'>
                  <label htmlFor='password' className='font-medium'>
                  Enter New Password:
                  </label>
                  <input
                    name='password'
                    id='password'
                    className='rounded-sm p-1 px-2 border border-black'
                    placeholder='********'
                    type={password ? 'text' : 'password'}
                    onChange={onChange}
                    value={formData.password}
                  />
                  <div className='p-1 rounded-full absolute top-12 right-2 transform -translate-y-1/2 cursor-pointer font'>
                    {password ? (
                      <AiFillEye onClick={togglePassword} />
                    ) : (
                      <AiFillEyeInvisible onClick={togglePassword} />
                    )}
                  </div>
                </div>
                <button className='w-full bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline'>
                  Save Password
                </button>
              </div>
            }
          </div>
        </div>
      </div>
      </div>
    )
}

export default User