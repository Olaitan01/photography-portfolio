import { useState } from "react";
import arrow from "/src/assets/arrow.png";

function Faqs() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const faqs = [
    {
      question: "WHAT TYPE OF PHOTOGRAPHY DO YOU SPECIALIZE IN?",
      answer:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      question: "HOW CAN I BOOK A PHOTOGRAHY SESSION WITH YOU?",
      answer:
        "Book a photography session by contacting me directly to check availability and discuss your preferences.",
    },
    {
      question: "WHAT EQUIPMENT DO YOU USE FOR YOUR PHOTOGRAPHY?",
      answer:
        "I use top-tier professional equipment tailored to each shoot's specific needs, ensuring high-quality results.",
    },
    {
      question: "CAN I REQUEST A SPECIFIC LOCATION FOR A SHOOT?",
      answer:
        "Absolutely! I am flexible and open to shooting at locations of your choice to ensure your vision comes to life.",
    },
  ];

  function toggleQuestion(index){
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((item) => item !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  }
   
  


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

      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex  justify-between items-start border-b-2 gap-2 border-lightDark p-4 "
          >
            <div>
              <p className="text-lg text-primaryGrey w-80">{faq.question}</p>
              {openIndexes.includes(index) && (
              <p className={`overflow-hidden transition-height duration-500 text-[1rem] text-grey font-normal ${
                openIndexes.includes(index) ? 'h-auto' : 'h-0'
              }`}>{faq.answer}</p>


            )}
            </div>

            <div>
              <button
                className="w-10 h-10 rounded-full flex justify-center items-center border-2 border-lightDark"
                onClick={() => toggleQuestion(index)}
              >
                <img src={arrow} alt="Faq indicator arrow"  className={`transform transition-transform duration-500 ${openIndexes.includes(index) ? 'rotate-190' : 'rotate-180'}`} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
