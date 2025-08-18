import React from "react";

const UserForm = ({setUsername, setPassword, handleSubmit}) => {
  return (
    <form className="bg-teal-100/50 p-6 min-w-sm rounded-md shadow-md shadow-teal-700 " onSubmit={handleSubmit}>
      <fieldset className="border-1 border-teal-700/80 rounded-sm ">
        <legend className="text-teal-700 mx-auto">Nome de Usuário</legend>
        <input
          name="username"
          id="username"
          type="text"
          required
          onChange={(e) => setUsername(e.target.value)}
          className="w-full text-md py-2 px-4 text-teal-600 "
        />
      </fieldset>
      <fieldset className="border-1 border-teal-700/80 rounded-sm ">
        <legend className="text-teal-700 mx-auto">Senha</legend>
        <input
          name="password"
          id="password"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full text-md px-4 py-2 text-teal-600 "
        />
      </fieldset>
      <button className="w-full bg-teal-600 text-teal-100 mt-2 py-2 px-4 rounded-md hover:bg-teal-500 hover:text-teal-50 transition-colors cursor-pointer" type="submit">
        Login
      </button>
    </form>
  );
};

export default UserForm;
