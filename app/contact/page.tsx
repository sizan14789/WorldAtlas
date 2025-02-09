import ContactFormComponent from "./contact";

export const metadata = {
  title: "Contact",
  description: "Contact page of World Atlas"
}

const Contact = () => {

  return (
    <main className="m-auto flex flex-col">
      <div className="secs flex flex-col justify-center my-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8">Contact Us</h2>
        <ContactFormComponent />
      </div>
    </main>
  );
};

export default Contact;
