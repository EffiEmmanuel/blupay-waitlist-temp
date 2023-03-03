import { Fade } from "react-reveal";
import RoundedFlag from "../RoundedFlag";

function AvailableGlobally() {
  return (
    <section className="w-full mt-60 h-auto doodleBg lg:globally text-center py-20 mb-60">
      <h2 className="text-4xl font-bold text-white">
        BluPay is available Globally!
      </h2>

      {/* FLAGS */}
      <div className="flex flex-col lg:flex-row align-middle w-full justify-center gap-x-28 mt-20 lg:mt-28">
        <Fade duration={600} delay={200}>
          <RoundedFlag country="nigeria" />
        </Fade>

        <Fade duration={600} delay={400}>
          <RoundedFlag country="usa" />
        </Fade>
        <Fade duration={600} delay={600}>
          <RoundedFlag country="uk" />
        </Fade>
        <Fade duration={600} delay={800}>
          <RoundedFlag country="sa" />
        </Fade>
        <Fade duration={600} delay={1000}>
          <RoundedFlag country="80+" />
        </Fade>
      </div>
    </section>
  );
}

export default AvailableGlobally;
