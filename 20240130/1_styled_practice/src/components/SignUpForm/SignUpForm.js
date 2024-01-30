import React from "react";

function SignUpForm() {
  const inputClassName =
    "h-10 px-5 border-b-3 border-b-2 border-gray-300  bg-transparent mt-4 mb-8 focus:border-yellow-300";
  const labelClassName = "font-bold text-xl";

  return (
    <div className="flex flex-col">
      <label for="id" className={labelClassName}>
        ID
      </label>
      <input
        name="id"
        type="id"
        placeholder="Typing Your ID"
        className={inputClassName}
      />
      <label for="pw" className={labelClassName}>
        Password
      </label>
      <input
        name="pw"
        type="pw"
        placeholder="Typing Your Password"
        className={inputClassName}
      />
      <label for="introduce" className={labelClassName}>
        Introduce
      </label>
      <textarea
        name="introduce"
        placeholder="Typing Your Introduction"
        className={inputClassName}
      />
      <button className="font-bold text-xl border-2 border-solid border-gray-300 rounded-full py-3 bg-slate-300 text-white">
        SignUp
      </button>
    </div>
  );
}

export default SignUpForm;
