import { useState } from "react";
import axios from "axios";

export default () => {
  const [status, setStatus]: any = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok: any, msg: any) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e: any) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setStatus((prevStatus: any) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/myyvlqrq",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true, "Thank you, your message has been submitted.");
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <section id="contactForm" className="w-full px-8 xl:w-2/4 xl:px-0">
      <h1 className="text-4xl mb-4">Besoin de rentrer en contact ?</h1>
      <hr />
      <form onSubmit={handleOnSubmit} className="flex flex-col space-y-2 mt-2">
        <label htmlFor="email" className="text-xl 2xl:text-3xl">
          Votre email:
        </label>
        <input
          className="rounded-md bg-gray-400 border-transparent 2xl:text-3xl focus:border-gray-200 focus:bg-gray-500 focus:ring-0"
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <label htmlFor="message" className="text-xl 2xl:text-3xl">
          Votre message:
        </label>
        <textarea
          autoComplete="off"
          className="rounded-md bg-gray-400 border-transparent 2xl:text-3xl !mb-4 focus:border-gray-200 focus:bg-gray-500 focus:ring-0"
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          rows={8}
          value={inputs.message}
        />
        <button
          type="submit"
          disabled={status.submitting || status.submitted}
          className="font-semibold text-2xl p-1 2xl:py-4 2xl:px-10 border-2 rounded-3xl h-min self-center box-content disabled:bg-green-500 disabled:border-transparent hover:cursor-pointer hover:bg-gray-200 hover:text-gray-400 mr-2 sm:mr-4 2xl:text-3xl"
        >
          {!status.submitting ? (!status.submitted ? "Envoyer" : "Message envoyé !") : "Envoi..."}
        </button>
      </form>
      {status.info.error && <div className="error">Erreur: {status.info.msg}</div>}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
      <div className="w-full flex justify-end items-end mt-4">
        <a className="font-mono underline text-xl" href="mailto:durandarthur09@outlook.fr">durandarthur09@outlook.fr</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 23 20"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 ml-2 sm:w-12 sm:h-12 flex-no-shrink fill-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      </div>
    </section>
  );
};
