"use client"

import { ContactForm } from "@/utils";
import { useState } from "react";

const ContactFormComponent = () => {
  const [ Message, setMessage ] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const messageField = form.elements.namedItem(
      "message"
    ) as HTMLTextAreaElement;
    setMessage({
      name: name.value,
      email: email.value,
      message: messageField.value,
    });
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleFormSubmit}>
      <input
        type="text"
        required
        autoComplete="off"
        name="name"
        placeholder="Name?"
        className="py-3 px-5 bg-transparent border-[0.5px] rounded-md border-off-white min-w-72 sm:min-w-80 md:min-w-96"
      />
      <input
        type="email"
        placeholder="Enter your email"
        required
        autoComplete="off"
        name="email"
        className="py-3 px-5 bg-transparent border-[0.5px] rounded-md border-dimmed-texts"
      />
      <textarea
        rows={6}
        placeholder="Your message...."
        required
        autoComplete="off"
        name="message"
        className="py-3 px-5 bg-transparent border-[0.5px] rounded-md border-dimmed-texts"
      />
      <button
        type="submit"
        className="mr-auto py-3 px-8 rounded-md border-[0.5px] border-off-white"
      >
        Send
      </button>
    </form>
  );
};

export default ContactFormComponent;
