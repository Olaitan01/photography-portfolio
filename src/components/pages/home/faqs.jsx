import arrow from "/src/assets/arrow.png"

function Faqs() {
  const faqs = [
    {
        index:1,
      question: "WHAT TYPE OF PHOTOGRAPHY DO YOU SEPCIALIZE IN?",
      answer:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
        index:2,
      question: "HOW CAN I BOOK A PHOTOGRAHY SESSION WITH YOU?",
      answer:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
        index:3,
      question: "WHAT EQUIPMENT DO YOU USE FOR YOUR PHOTOGRAPHY?",
      answer:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      question: "CAN I REQUEST A SPECIFIC LOCATION FOR A SHOOT?",
      answer:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
  ];


  return (
    <div className=" pt-4 w-[90%] m-auto text-headerGrey">
      <div className="border-b-2 border-lightDark pb-2">
        <div>
          <p className="text-grey text-sm font-semilight ">FAQ&apos;S</p>
          <p className="text-headerGrey text-2xl font-semibold w-80">
            FREQUENTLY ASKED QUESTIONS
          </p>
        </div>
      </div>

        <div >
            {faqs.map(faq => 
                <div key={faq.index} className="flex  justify-between items-center border-b-2 gap-2 border-lightDark p-4 ">
                    <div >
                    <p className="text-lg text-primaryGrey w-80">{faq.question}</p>
                    <p className="hidden">{faq.answer}</p>
                    </div>

                    <div  className="w-10 h-10 rounded-[50%] flex justify-center border-2 border-lightDark">
                        <button ><img src={arrow} alt="Faq indicator arrow" className="max-w-full" /></button>
                    </div>
                </div>
                )}
        </div>

    </div>
  );
}

export default Faqs;
