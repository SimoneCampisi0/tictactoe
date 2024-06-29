import './LoginForm.css';
import { useState } from "react";

function LoginForm() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("form: ", form);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  }

  return (
      <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-80 mb-10 p-5 rounded-lg bg-neutral-900">
          <div className="flex flex-col justify-center items-center">
            <label>Username</label>
            <input className="text-black p-2" type="text" name="username" value={form.username} onChange={handleInputChange} />

            <label>Email</label>
            <input className="text-black p-2" type="email" name="email" value={form.email} onChange={handleInputChange} />

            <label>Password</label>
            <input className="text-black p-2" type="password" name="password" value={form.password} onChange={handleInputChange} />
          </div>

          <button className="border border-black rounded text-white hover:bg-sky-950 transition" type="submit">Invia</button>
        </form>
      </>
  );
}

export default LoginForm;
