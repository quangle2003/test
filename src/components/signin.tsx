import { useState } from 'react';


const SigninForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e:any) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert("Đăng nhập thành công")
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tên đăng nhập:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Mật khẩu:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Đăng nhập</button>
    </form>
  );
};

export default SigninForm;