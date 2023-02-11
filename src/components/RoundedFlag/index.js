function RoundedFlag(props) {
  console.log("COUNTRYYYY:", props.country);

  const imageName = `${props.country}.png`;
  console.log("FILE NAME:", imageName);

  if (props.country === "nigeria") {
    return (
      <div
        className={`h-28 w-28 lg:h-44 lg:w-44 rounded-full mx-auto mt-8 lg:mt-0 lg:mx-0 bg-no-repeat bg-center bg-cover bg-[url('../../public/images/flags/nigeria.png')]`}
      ></div>
    );
  } else if (props.country === "usa") {
    return (
      <div
        className={`h-28 w-28 lg:h-44 lg:w-44 rounded-full mx-auto mt-8 lg:mt-0 lg:mx-0 bg-no-repeat bg-center bg-cover bg-[url('../../public/images/flags/usa.png')]`}
      ></div>
    );
  } else if (props.country === "uk") {
    return (
      <div
        className={`h-28 w-28 lg:h-44 lg:w-44 rounded-full mx-auto mt-8 lg:mt-0 lg:mx-0 bg-no-repeat bg-center bg-cover bg-[url('../../public/images/flags/uk.png')]`}
      ></div>
    );
  } else if (props.country === "sa") {
    return (
      <div
        className={`h-28 w-28 lg:h-44 lg:w-44 rounded-full mx-auto mt-8 lg:mt-0 lg:mx-0 bg-no-repeat bg-center bg-cover bg-[url('../../public/images/flags/sa.png')]`}
      ></div>
    );
  } else if (/\d/.test(props.country)) {
    return (
      <div className="h-28 w-28 lg:h-44 lg:w-44 rounded-full mx-auto mt-8 lg:mt-0 lg:mx-0 bg-no-repeat bg-center bg-cover bg-blupayBlue flex justify-center align-middle">
        <p className="text-3xl lg:text-5xl font-extrabold text-white my-auto">
          {props.country}
        </p>
      </div>
    );
  } else {
    return (
      <div
        className={`h-44 w-44 rounded-full mx-auto mt-8 lg:mt-0 lg:mx-0 bg-no-repeat bg-center bg-cover bg-[url('../../public/images/flags/nigeria.png')]`}
      ></div>
    );
  }
}

export default RoundedFlag;
