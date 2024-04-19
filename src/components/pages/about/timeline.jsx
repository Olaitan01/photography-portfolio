function Timeline() {
  const timelines = [
    {
      year: "YEAR - 2005",
      story:
        "In 2005, Damien acquired her first camera, igniting her passion for photography. She started experimenting with landscapes and candid shots, marking the beginning of her visual storytelling journey.",
    },
    {
      year: "YEAR - 2010",
      story:
        "Damien pursued a degree in Fine Arts with a focus on photography, refining her technical skills and artistic sensibilities.",
    },
    {
      year: "YEAR - 2012",
      story:
        "In 2012, Damien held her first solo exhibition, showcasing her unique perspective on nature and people through her lens.",
    },
    {
      year: "YEAR - 2015",
      story:
        "Damien officially launched her photography business in 2015, offering portrait, event, and commercial photography services.",
    },
    {
      year: "YEAR - 2017",
      story:
        "Damien's work took her beyond the USA, capturing breathtaking scenes and cultures from around the world.",
    },
    {
      year: "YEAR - 2020",
      story:
        "In 2020, Damien's dedication and creativity earned her several prestigious photography awards, solidifying her position as a visionary photographer.",
    },
  ];

  return (
    <div className="w-[90%] m-auto py-16 ">
      <p className="text-sm font-normal text-grey pb-2">JOURNEY</p>
      <p className="text-2xl font-semibold pb-6">
        DAMIEN&apos;S JOURNEY - A TIMELINE
      </p>

      <div className="flex justify-between flex-wrap items-stretch border-lightDark border-t-2 py-6">
        {timelines.map((timeline, index) => (
          <div
            key={index}
            className="timeline-box text-textGrey border-2 border-lightDark rounded-md p-6 w-[100%] lg:w-[49%]  my-2"
          >
            <p className="text-2xl font-semibold pb-2 lg:text-3xl lg:pb-4">
              {timeline.year}
            </p>
            <p className="text-sm font-normal">{timeline.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
