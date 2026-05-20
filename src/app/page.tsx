import type { ReactElement, SVGProps } from "react";
import ActiveHeaderNav from "./ActiveHeaderNav";

type ServiceIconName =
  | "company"
  | "regularization"
  | "accounting"
  | "incomeTax"
  | "taxConsulting"
  | "people"
  | "taxPlanning"
  | "smallBusiness";

function ServiceIcon({ name }: { name: ServiceIconName }) {
  const iconProps: SVGProps<SVGSVGElement> = {
    className: "w-9 h-9",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  const lineProps: SVGProps<SVGPathElement> = {
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons: Record<ServiceIconName, ReactElement> = {
    company: (
      <svg {...iconProps}>
        <path {...lineProps} d="M12 39V18l12-7 12 7v21" />
        <path {...lineProps} d="M18 39V25h12v14" />
        <path {...lineProps} d="M16 20h4M28 20h4M16 27h4M28 27h4" />
        <path {...lineProps} d="M9 39h30" />
      </svg>
    ),
    regularization: (
      <svg {...iconProps}>
        <path {...lineProps} d="M14 8h16l6 6v26H14z" />
        <path {...lineProps} d="M30 8v7h7" />
        <path {...lineProps} d="M19 28l4 4 8-10" />
        <path {...lineProps} d="M19 18h7" />
      </svg>
    ),
    accounting: (
      <svg {...iconProps}>
        <path {...lineProps} d="M13 9h22v30H13z" />
        <path {...lineProps} d="M18 15h12" />
        <path {...lineProps} d="M18 23h4M26 23h4M18 30h4M26 30h4" />
        <path {...lineProps} d="M18 36h12" />
      </svg>
    ),
    incomeTax: (
      <svg {...iconProps}>
        <path {...lineProps} d="M15 8h18l5 7v25H15z" />
        <path {...lineProps} d="M33 8v8h5" />
        <path {...lineProps} d="M20 30l8-10" />
        <circle cx="21" cy="21" r="2.2" fill="currentColor" />
        <circle cx="29" cy="30" r="2.2" fill="currentColor" />
      </svg>
    ),
    taxConsulting: (
      <svg {...iconProps}>
        <path {...lineProps} d="M10 36h28" />
        <path {...lineProps} d="M14 36V24h6v12" />
        <path {...lineProps} d="M22 36V18h6v18" />
        <path {...lineProps} d="M30 36V12h6v24" />
        <path {...lineProps} d="M12 17l8-5 8 3 9-7" />
      </svg>
    ),
    people: (
      <svg {...iconProps}>
        <path {...lineProps} d="M18 21a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
        <path {...lineProps} d="M8 39c1.5-7 5.2-11 10-11s8.5 4 10 11" />
        <path {...lineProps} d="M31 22a5 5 0 1 0-1.8-9.6" />
        <path {...lineProps} d="M30 29c4.5.6 7.8 4 9 10" />
      </svg>
    ),
    taxPlanning: (
      <svg {...iconProps}>
        <path {...lineProps} d="M11 39h26" />
        <path {...lineProps} d="M15 34l7-8 6 5 9-14" />
        <path {...lineProps} d="M31 17h6v6" />
        <path {...lineProps} d="M14 10h10" />
        <path {...lineProps} d="M14 16h6" />
      </svg>
    ),
    smallBusiness: (
      <svg {...iconProps}>
        <path {...lineProps} d="M11 22h26l-3-10H14z" />
        <path {...lineProps} d="M14 22v17h20V22" />
        <path {...lineProps} d="M19 39V28h10v11" />
        <path {...lineProps} d="M10 39h28" />
        <path {...lineProps} d="M16 12V8h16v4" />
      </svg>
    ),
  };

  return (
    <div className="relative flex h-16 w-16 items-center justify-center rounded-[18px] border border-[#d8bc87]/70 bg-gradient-to-br from-[#fff8eb] via-[#f4e3c2] to-[#b8892d]/20 text-[#b8892d] shadow-[0_18px_35px_rgba(184,137,45,0.22)]">
      <div className="absolute inset-[5px] rounded-[14px] border border-white/70" />
      <div className="relative drop-shadow-sm">{icons[name]}</div>
    </div>
  );
}

function BrazilCoverageMap() {
  const mapsLink =
    "https://maps.app.goo.gl/W5nKzVLtPupPjTsJ9";

  return (
    <div className="relative overflow-hidden rounded-[30px] border border-[#d8bc87]/20 bg-[#111] p-8 shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(216,188,135,0.18),transparent_32%)]" />
      <div className="relative">
        <div className="mb-8 flex items-start justify-between gap-6">
          <div>
            <p className="text-[#d8bc87] text-sm font-semibold tracking-[0.22em] mb-3">
              ATENDIMENTO ONLINE
            </p>
            <h3 className="text-3xl font-bold text-white">
              Brasil inteiro
            </h3>
          </div>
          <div className="rounded-full border border-[#d8bc87]/30 px-4 py-2 text-sm font-semibold text-[#f4e3c2]">
            Base em Russas/CE
          </div>
        </div>

        <img
          src="/brazil-map.svg"
          alt="Mapa do Brasil com destaque para a base da Zycont em Russas, Ceará"
          className="mx-auto h-[280px] w-full max-w-[430px] object-contain sm:h-[360px]"
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-[#d8bc87]/20 bg-black/20 p-5">
            <p className="text-[#d8bc87] font-semibold mb-2">
              Base Zycont
            </p>
            <p className="text-gray-300">
              Russas/CE
            </p>
            <a
              href={mapsLink}
              target="_blank"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#d8bc87] px-5 py-3 text-sm font-bold text-[#111] shadow-[0_16px_35px_rgba(216,188,135,0.28)] transition hover:bg-[#f4e3c2] hover:scale-[1.02] sm:w-auto"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Ver no Google Maps
            </a>
          </div>
          <div className="rounded-2xl border border-[#d8bc87]/20 bg-black/20 p-5">
            <p className="text-[#d8bc87] font-semibold mb-2">
              Atendimento
            </p>
            <p className="text-gray-300">
              Online em todo o Brasil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const whatsappNumber = "5588994939014";

  const services: Array<{ title: string; text: string; icon: ServiceIconName }> = [
    { title: "Abertura de Empresa", text: "Abrimos sua empresa de forma rápida, segura e sem burocracia.", icon: "company" },
    { title: "Baixa e Regularização", text: "Regularizamos pendências e realizamos baixa empresarial com segurança.", icon: "regularization" },
    { title: "Contabilidade Mensal", text: "Gestão contábil completa para empresas modernas e organizadas.", icon: "accounting" },
    { title: "Imposto de Renda", text: "Declarações para pessoa física e jurídica com agilidade e segurança.", icon: "incomeTax" },
    { title: "Consultoria Tributária", text: "Estratégias inteligentes para reduzir riscos e melhorar resultados.", icon: "taxConsulting" },
    { title: "Departamento Pessoal", text: "Folha de pagamento, admissões, rescisões e obrigações trabalhistas.", icon: "people" },
    { title: "Planejamento Tributário", text: "Planejamento fiscal para empresas pagarem impostos corretamente.", icon: "taxPlanning" },
    { title: "MEI, ME e EPP", text: "Soluções especializadas para pequenos e médios negócios.", icon: "smallBusiness" },
  ];

  const diferenciais = [
    { title: "Atendimento Humanizado", text: "Suporte próximo, rápido e com foco total na necessidade do cliente." },
    { title: "Estratégia Tributária", text: "Planejamento inteligente para reduzir riscos e otimizar resultados." },
    { title: "Atendimento Online", text: "Atendemos empresas de qualquer lugar com praticidade e agilidade." },
    { title: "Segurança Fiscal", text: "Processos organizados e acompanhamento completo das obrigações." },
  ];

  const numeros = [
    { number: "+500", label: "Clientes atendidos" },
    { number: "+100", label: "Empresas regularizadas" },
    { number: "100%", label: "Atendimento humanizado" },
    { number: "Brasil", label: "Atendimento online" },
  ];

  const depoimentos = [
    { text: "Atendimento claro e muito profissional.", author: "Cliente empresarial" },
    { text: "Minha empresa ficou mais organizada.", author: "Empresário atendido" },
    { text: "Suporte rápido e orientação segura.", author: "Cliente Zycont" },
    { text: "Contabilidade próxima e estratégica.", author: "Empresa atendida" },
  ];

  const intencoes = [
    "Quero abrir minha empresa",
    "Quero trocar de contador",
    "Preciso regularizar meu CNPJ",
    "Quero certificado digital",
  ];

  const segmentos = [
    "MEI",
    "Microempresas",
    "Empresas de Pequeno Porte",
    "Prestadores de serviço",
    "Comércio",
    "Profissionais autônomos",
  ];

  const confianca = [
    "Contador registrado no CRC-CE",
    "Atendimento online em todo o Brasil",
    "Especialistas em MEI, ME e EPP",
  ];

  function whatsappLink(servico: string) {
    const message = `Olá! Vim pelo site da Zycont e tenho interesse no serviço de ${servico}. Gostaria de mais informações.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  return (
    <main className="bg-[#f7f1e8] text-[#111] overflow-x-hidden scroll-smooth">
      <style>{`
        html { scroll-behavior: smooth; scroll-padding-top: 112px; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(35px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatImage {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .fade-up { animation: fadeUp .9s ease both; }
        .float-image { animation: floatImage 5s ease-in-out infinite; }
      `}</style>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#eadfce]/80 bg-[#f7f1e8]/95 shadow-sm backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 sm:py-5 flex items-center justify-between gap-3 fade-up">
          <a href="#inicio" aria-label="Ir para o início" className="min-w-0">
            <img src="/logo.png" alt="Zycont" className="w-36 max-w-full sm:w-56 xl:w-[340px]" />
          </a>

          <ActiveHeaderNav />

          <a
            href="https://onvio.com.br/clientcenter/pt/auth?r=%2Fhome"
            target="_blank"
            className="flex shrink-0 bg-[#b8892d] text-white px-3 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm xl:px-8 xl:py-4 xl:text-base rounded-md font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            JÁ SOU CLIENTE
          </a>
        </div>
      </header>

      <section id="inicio" className="max-w-7xl mx-auto px-5 sm:px-8 pt-28 sm:pt-32 xl:pt-36 pb-16 sm:pb-24 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="fade-up">
          <p className="text-[#b8892d] text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.35em] font-semibold mb-6">
            CONTABILIDADE INTELIGENTE
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8 sm:mb-10">
            Soluções modernas para sua empresa crescer.
          </h1>

          <div className="w-20 h-1 bg-[#b8892d] mb-10" />

          <p className="text-[#3b342d] text-xl sm:text-2xl leading-relaxed max-w-xl mb-10 sm:mb-12">
            Atendimento premium, suporte estratégico e soluções contábeis completas para empresas e profissionais que desejam crescer com segurança.
          </p>

          <div className="flex gap-5 flex-wrap">
            <a
              href="https://consulta-cnpj-nu.vercel.app/"
              target="_blank"
              className="w-full sm:w-auto text-center bg-[#b8892d] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-md font-semibold shadow-xl hover:scale-105 transition duration-300"
            >
              CONSULTAR CNPJ
            </a>

            <a
              href="https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao?lang=pt"
              target="_blank"
              className="w-full sm:w-auto text-center bg-[#b8892d] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-md font-semibold shadow-xl hover:scale-105 transition duration-300"
            >
              EMITIR DAS-MEI
            </a>

            <a
              href="#servicos"
              className="w-full sm:w-auto text-center border border-[#b8892d] text-[#b8892d] px-8 sm:px-10 py-4 sm:py-5 rounded-md font-semibold hover:bg-[#b8892d]/10 hover:scale-105 transition duration-300"
            >
              Conhecer serviços →
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {intencoes.map((item) => (
              <a
                key={item}
                href={whatsappLink(item)}
                target="_blank"
                className="rounded-md border border-[#d8bc87] bg-white/55 px-5 py-3 text-sm font-semibold text-[#6d5221] shadow-sm transition hover:border-[#b8892d] hover:bg-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center fade-up">
          <div className="hidden sm:block absolute top-10 right-0 w-[82%] max-w-[520px] h-[92%] border border-[#d8bc87] rounded-[40px] rotate-6" />

          <img
            src="/bruno.jpeg"
            alt="Bruno Oliveira"
            className="relative w-full max-w-[520px] rounded-[24px] sm:rounded-[35px] shadow-2xl object-cover float-image"
          />
        </div>
      </section>

      <section className="py-24 bg-[#111] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16 fade-up">
            <p className="text-[#d8bc87] text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.3em] font-semibold mb-4">
              DIFERENCIAIS
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Por que escolher a Zycont?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-7">
            {diferenciais.map((item) => (
              <div
                key={item.title}
                className="bg-[#1a1a1a] border border-[#d8bc87]/20 rounded-[28px] p-8 hover:-translate-y-2 hover:border-[#d8bc87]/50 hover:shadow-2xl transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#b8892d]/10 mb-6 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#d8bc87]" />
                </div>

                <h3 className="text-2xl font-bold mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f7f1e8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="bg-white rounded-[36px] border border-[#eadfce] shadow-xl p-10 grid md:grid-cols-4 gap-8 text-center">
            {numeros.map((item) => (
              <div
                key={item.label}
                className="border-[#eadfce] md:border-r last:border-r-0"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-[#b8892d] mb-3">
                  {item.number}
                </h3>

                <p className="text-[#5f574d] text-lg">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div>
              <p className="text-[#b8892d] text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.3em] font-semibold mb-4">
                PARA QUEM ATENDEMOS
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Soluções para empresas de diferentes portes
              </h2>
              <p className="text-[#5f574d] text-xl leading-relaxed">
                A Zycont atende empresas em Russas/CE, no Ceará e em todo o Brasil com suporte contábil online, seguro e próximo.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {segmentos.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#eadfce] bg-white px-6 py-5 font-semibold text-[#3b342d] shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] py-12 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-3 gap-6">
          {confianca.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#d8bc87]/20 bg-[#1a1a1a] px-6 py-5 text-center font-semibold text-[#f4e3c2]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="servicos" className="py-24 bg-white/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-[#b8892d] text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.3em] font-semibold mb-4">
              SERVIÇOS
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Soluções completas para sua empresa
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-7">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-[28px] p-8 border border-[#eadfce] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col"
              >
                <div className="mb-6">
                  <ServiceIcon name={service.icon} />
                </div>

                <h3 className="text-2xl font-bold mb-5 leading-snug min-h-[70px]">
                  {service.title}
                </h3>

                <div className="w-10 h-1 bg-[#b8892d] mb-5" />

                <p className="text-[#5f574d] leading-relaxed mb-8 flex-1">
                  {service.text}
                </p>

                <a
                  href={whatsappLink(service.title)}
                  target="_blank"
                  className="mt-auto inline-flex w-full justify-center items-center bg-[#b8892d] text-white px-5 py-3 rounded-xl font-semibold hover:scale-105 hover:bg-[#9f7425] transition duration-300"
                >
                  Solicitar pelo WhatsApp
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-24 bg-[#f7f1e8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-[#b8892d] text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.3em] font-semibold mb-4">
              DEPOIMENTOS
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              O que dizem sobre a Zycont
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {depoimentos.map((item) => (
              <div
                key={item.author}
                className="bg-white rounded-2xl p-6 border border-[#eadfce] shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="text-[#b8892d] text-xl mb-5 tracking-[0.12em]">
                  ★★★★★
                </div>

                <p className="text-[#3b342d] text-lg leading-relaxed mb-6 font-medium">
                  “{item.text}”
                </p>

                <div className="w-10 h-1 bg-[#b8892d] mb-4" />

                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6d5221]">
                  {item.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-[#b8892d]/10 blur-3xl rounded-[40px]" />

          <img
            src="/sobre.jpeg"
            alt="Sobre Bruno Oliveira"
            className="relative w-full rounded-[24px] sm:rounded-[35px] shadow-2xl"
          />

          <div className="absolute left-4 right-4 bottom-4 sm:left-6 sm:right-6 sm:bottom-6 rounded-2xl border border-[#d8bc87]/40 bg-[#111]/90 px-4 sm:px-6 py-4 sm:py-5 text-white shadow-2xl backdrop-blur-md">
            <p className="text-[#d8bc87] text-sm font-semibold tracking-[0.22em] mb-2">
              CONTADOR RESPONSÁVEL
            </p>
            <h3 className="text-xl sm:text-2xl font-bold leading-tight">
              Bruno Oliveira
            </h3>
            <p className="mt-1 text-[#f4e3c2] font-semibold">
              CRC-CE 029358/O-0
            </p>
          </div>
        </div>

        <div>
          <p className="text-[#b8892d] text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.3em] font-semibold mb-4">
            SOBRE A ZYCONT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Contabilidade estratégica e moderna
          </h2>

          <p className="text-[#4b443d] text-xl leading-relaxed mb-6">
            A Zycont Contabilidade Inteligente nasceu com o propósito de oferecer soluções modernas, estratégicas e humanizadas para empresas que desejam crescer com segurança.
          </p>

          <p className="text-[#4b443d] text-xl leading-relaxed">
            Atuamos com foco em excelência, atendimento premium e suporte completo para MEI, ME, EPP e demais empresas que precisam de uma contabilidade eficiente e atualizada.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#111] text-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-[#d8bc87] text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.3em] font-semibold mb-4">
              FAQ
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Perguntas frequentes
            </h2>
          </div>

          <div className="space-y-6">
            {[
              ["Quanto custa abrir uma empresa?", "O valor pode variar conforme o tipo de empresa, atividade e regime tributário. Entre em contato para receber uma análise personalizada."],
              ["Posso trocar de contador a qualquer momento?", "Sim. A Zycont orienta a transição para que sua empresa mude de contabilidade com organização e segurança."],
              ["A Zycont ajuda a escolher o melhor regime tributário?", "Sim. Fazemos análise do perfil da empresa para orientar o regime mais adequado e reduzir riscos fiscais."],
              ["Vocês cuidam da parte fiscal e trabalhista?", "Sim. Atuamos com contabilidade mensal, obrigações fiscais, departamento pessoal e acompanhamento das rotinas da empresa."],
              ["Vocês atendem online?", "Sim. Atendemos clientes de forma online com praticidade, segurança e suporte completo em todo o Brasil."],
              ["A Zycont atende MEI, ME e EPP?", "Sim. Atuamos com soluções contábeis completas para MEI, Microempresas e Empresas de Pequeno Porte."],
              ["Vocês atendem empresas em Russas/CE?", "Sim. Atendemos em Russas, no Ceará e também de forma online para empresas de outras regiões do Brasil."],
            ].map(([q, a]) => (
              <div
                key={q}
                className="bg-[#1a1a1a] border border-[#d8bc87]/20 rounded-[24px] p-8 hover:border-[#d8bc87]/50 transition"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {q}
                </h3>

                <p className="text-gray-300 leading-relaxed text-lg">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-black text-white py-24 border-t border-[#d8bc87]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[#d8bc87] text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.3em] font-semibold mb-4">
              FALE CONOSCO
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Atendimento contábil online para empresas em todo o Brasil
            </h2>

            <p className="text-gray-300 text-xl leading-relaxed mb-8">
              Nossa base fica em Russas/CE, mas a Zycont acompanha clientes de forma digital, com suporte próximo, seguro e organizado para empresas em diferentes regiões.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                className="inline-flex w-full justify-center rounded-xl bg-[#b8892d] px-7 py-4 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-[#9f7425] sm:w-auto"
              >
                Chamar no WhatsApp
              </a>

              <a
                href="mailto:contato.zycont@gmail.com?subject=Curr%C3%ADculo%20-%20Trabalhe%20Conosco%20Zycont&body=Ol%C3%A1%2C%20equipe%20Zycont.%0A%0ASegue%20meu%20curr%C3%ADculo%20para%20an%C3%A1lise.%0A%0ANome%3A%0ATelefone%3A%0ACidade%2FUF%3A"
                className="inline-flex w-full justify-center rounded-xl border border-[#d8bc87]/45 px-7 py-4 font-semibold text-[#f4e3c2] transition hover:bg-[#d8bc87]/10 sm:w-auto"
              >
                Enviar currículo
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Abrir empresa",
                "Trocar de contador",
                "Regularizar CNPJ",
                "Falar com especialista",
              ].map((item) => (
                <a
                  key={item}
                  href={whatsappLink(item)}
                  target="_blank"
                  className="rounded-xl border border-[#d8bc87]/25 bg-[#111] px-4 py-3 text-center font-semibold text-[#f4e3c2] transition hover:border-[#d8bc87]/60 hover:bg-[#d8bc87]/10"
                >
                  {item}
                </a>
              ))}
            </div>

            <div id="trabalhe-conosco" className="mt-8 scroll-mt-28 rounded-2xl border border-[#d8bc87]/15 bg-[#111] p-5">
              <p className="text-[#d8bc87] font-semibold tracking-[0.18em] text-sm mb-2">
                TRABALHE CONOSCO
              </p>
              <p className="text-gray-300 leading-relaxed">
                Quer fazer parte da equipe Zycont? Envie seu currículo pelo botão acima.
              </p>
            </div>
          </div>

          <BrazilCoverageMap />
        </div>
      </section>

      <footer className="bg-black text-gray-300 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-4 gap-12 pb-14 border-b border-white/10">
            <div className="md:col-span-2">
              <img src="/logo.png" alt="Zycont" className="w-56 max-w-full sm:w-[320px] mb-8" />

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Contabilidade inteligente, moderna e estratégica para empresas que desejam crescer com segurança, organização e suporte profissional.
              </p>
            </div>

            <div>
              <h3 className="text-[#d8bc87] font-bold text-xl mb-6">
                Navegação
              </h3>

              <div className="space-y-4 text-gray-400">
                <p><a href="#inicio" className="hover:text-[#d8bc87] transition">Início</a></p>
                <p><a href="#servicos" className="hover:text-[#d8bc87] transition">Serviços</a></p>
                <p><a href="#sobre" className="hover:text-[#d8bc87] transition">Sobre</a></p>
                <p><a href="#trabalhe-conosco" className="hover:text-[#d8bc87] transition">Trabalhe conosco</a></p>
                <p><a href="#contato" className="hover:text-[#d8bc87] transition">Fale conosco</a></p>
              </div>
            </div>

            <div>
              <h3 className="text-[#d8bc87] font-bold text-xl mb-6">
                Fale conosco
              </h3>

              <div className="space-y-4 text-gray-400">
                <p>WhatsApp: (88) 99493-9014</p>
                <p>
                  Instagram:{" "}
                  <a
                    href="https://www.instagram.com/zycont_contabilidade"
                    target="_blank"
                    className="hover:text-[#d8bc87] transition"
                  >
                    @zycont_contabilidade
                  </a>
                </p>
                <p>E-mail: contato.zycont@gmail.com</p>
                <p>Russas/CE</p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-gray-500">
            <p>© 2026 Zycont Contabilidade Inteligente — Todos os direitos reservados.</p>
            <p>Desenvolvido para uma contabilidade mais inteligente.</p>
          </div>
        </div>
      </footer>

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        aria-label="Chamar a Zycont no WhatsApp"
        className="fixed bottom-6 right-6 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition z-50"
      >
        <svg
          className="h-8 w-8"
          viewBox="0 0 32 32"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M16.04 4C9.42 4 4.04 9.32 4.04 15.86c0 2.1.56 4.15 1.62 5.95L4 28l6.36-1.62a12.15 12.15 0 0 0 5.68 1.43C22.66 27.81 28 22.49 28 15.95S22.66 4 16.04 4Zm0 21.78c-1.82 0-3.6-.49-5.15-1.41l-.37-.22-3.77.96 1.01-3.63-.25-.38a9.84 9.84 0 0 1-1.5-5.24c0-5.43 4.5-9.85 10.03-9.85 5.52 0 10.01 4.46 10.01 9.94 0 5.43-4.49 9.83-10.01 9.83Zm5.5-7.36c-.3-.15-1.77-.86-2.04-.96-.27-.1-.47-.15-.67.15-.2.29-.77.96-.95 1.15-.17.19-.35.22-.65.07-.3-.15-1.27-.46-2.42-1.47-.89-.79-1.5-1.76-1.67-2.06-.18-.29-.02-.45.13-.6.14-.13.3-.34.45-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.59-.92-2.18-.24-.57-.49-.49-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.29-1.05 1.01-1.05 2.47s1.07 2.87 1.22 3.06c.15.2 2.1 3.17 5.09 4.45.71.3 1.26.48 1.69.62.71.22 1.36.19 1.88.12.57-.08 1.77-.71 2.02-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </main>
  );
}
