import React, { useState } from "react";

const Form = ({ addContact, contacts }) => {
  const [form, setForm] = useState({ fullname: "", phone_number: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      alert("Lütfen bilgileri doldurunuz...");
      return false;
    } else {
      setForm({ fullname: "", phone_number: "" });
      addContact([...contacts, form]);
      console.log(form);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          onChange={onChangeInput}
          value={form.fullname}
        ></input>
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          onChange={onChangeInput}
          value={form.phone_number}
        ></input>
      </div>
      <div>
        <button className="btn">Add</button>
      </div>
    </form>
  );
};

export default Form;
