import RoundedFlag from "../RoundedFlag";

function AvailableGlobally() {
  return (
    <section className="w-full mt-60 h-auto doodleBg lg:globally text-center py-20 mb-60">
      <h2 className="text-4xl font-bold text-white">
        BluPay is available Globally!
      </h2>

      {/* FLAGS */}
      <div className="flex flex-col lg:flex-row align-middle w-full justify-center gap-x-28 mt-20 lg:mt-28">
        <RoundedFlag country="nigeria" />
        <RoundedFlag country="usa" />
        <RoundedFlag country="uk" />
        <RoundedFlag country="sa" />
        <RoundedFlag country="80+" />
      </div>
    </section>
  );
}

export default AvailableGlobally;
