"use client";

import type { FormEvent } from "react";

type ContactLeadFormProps = {
  whatsappNumber: string;
};

export default function ContactLeadForm({ whatsappNumber }: ContactLeadFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const city = formData.get("city");
    const profile = formData.get("profile");
    const message = formData.get("message");

    const whatsappMessage = [
      "Olá! Vim pelo site da Zycont e gostaria que entrassem em contato comigo.",
      "",
      `Nome: ${name}`,
      `Telefone: ${phone}`,
      `Cidade: ${city}`,
      `Perfil: ${profile}`,
      `Mensagem: ${message}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-[#d8bc87]/20 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-[#d8bc87]";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          className={fieldClass}
          name="name"
          placeholder="Nome"
          required
        />
        <input
          className={fieldClass}
          name="phone"
          placeholder="WhatsApp"
          required
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <input
          className={fieldClass}
          name="city"
          placeholder="Cidade/UF"
          required
        />
        <select className={fieldClass} name="profile" required defaultValue="">
          <option value="" disabled>
            Como podemos ajudar?
          </option>
          <option>Quero abrir empresa</option>
          <option>Quero trocar de contabilidade</option>
          <option>Sou MEI, ME ou EPP</option>
          <option>Preciso de imposto de renda</option>
          <option>Outro atendimento</option>
        </select>
      </div>

      <textarea
        className={`${fieldClass} min-h-28 resize-none`}
        name="message"
        placeholder="Conte rapidamente o que você precisa"
        required
      />

      <button
        type="submit"
        className="w-full rounded-xl bg-[#b8892d] px-6 py-4 font-semibold text-white shadow-xl transition duration-300 hover:scale-[1.02] hover:bg-[#9f7425]"
      >
        Enviar dados pelo WhatsApp
      </button>
    </form>
  );
}
