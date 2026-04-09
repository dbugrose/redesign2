export default function Faculty() {
  return (
    <section className="bg-white px-4 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <h4
            style={{
              color: "#8C4B55",
              fontSize: "12px",
              letterSpacing: "1.2px",
              fontFamily: "Nimbus Sans, sans-serif",
            }}
            className="mb-2 font-bold uppercase"
          >
            Meet Your Mentors
          </h4>
          <h2 className="font-serif text-4xl text-[#333] md:text-5xl">
            The Atelier Faculty
          </h2>
        </div>

   
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:gap-10">
         
          <div className="flex w-full flex-col md:w-93.25">
            <img
              src="/Faculty1.png"
              alt="Yvonne"
              className="h-124.25 w-full object-cover"
            />
            <div className="mt-6">
              <h3
                style={{
                  fontFamily: "Liberation Serif, serif",
                  fontSize: "24px",
                }}
                className="text-black"
              >
                Yvonne Cabloana
              </h3>
              <p
                style={{ color: "#8C4B55", fontSize: "10px" }}
                className="mb-3 font-bold tracking-wider uppercase"
              >
                Master Weaver
              </p>
              <p
                style={{
                  color: "#504444",
                  fontSize: "14px",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
                className="leading-relaxed"
              >
                With over two decades of experience in intricate bead weaving,
                Yvonne's work has been featured in international galleries. She
                specializes in the delicate balance of tension and texture.
              </p>
            </div>
          </div>

        
          <div className="flex w-full flex-col md:mt-24 md:w-93.25">
            <img
              src="/Faculty2.png"
              alt="Jamie"
              className="h-124.25 w-full object-cover"
            />
            <div className="mt-6">
              <h3
                style={{
                  fontFamily: "Liberation Serif, serif",
                  fontSize: "24px",
                }}
                className="text-black"
              >
                Jamie Eakin
              </h3>
              <p
                style={{ color: "#8C4B55", fontSize: "10px" }}
                className="mb-3 font-bold tracking-wider uppercase"
              >
                Color Theorist
              </p>
              <p
                style={{
                  color: "#504444",
                  fontSize: "14px",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
                className="leading-relaxed"
              >
                Jamie brings a background in fine arts to the bench. Her classes
                focus on the emotive power of palette, teaching students how to
                tell stories through hue and saturation.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col md:w-93.25">
            <img
              src="/Faculty3.png"
              alt="CR"
              className="h-124.25 w-full object-cover"
            />
            <div className="mt-6">
              <h3
                style={{
                  fontFamily: "Liberation Serif, serif",
                  fontSize: "24px",
                }}
                className="text-black"
              >
                CR Redding
              </h3>
              <p
                style={{ color: "#8C4B55", fontSize: "10px" }}
                className="mb-3 font-bold tracking-wider uppercase"
              >
                Sculpture Architect
              </p>
              <p
                style={{
                  color: "#504444",
                  fontSize: "14px",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
                className="leading-relaxed"
              >
                Known for avant-garde silhouettes, CR pushes the boundaries of
                traditional beading. Her technical precision allows students to
                construct complex, structural masterpieces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
