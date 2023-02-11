import blupayPaymentGateway from "../../../public/images/User dashboard - Pay with card page.png";
import blupayWithdrawalPage from "../../../public/images/User dashboard - Withdrawal.png";
const { default: FeatureShowcase } = require("../FeatureShowcase");

function BluPayFeatures() {
  return (
    <section className="mt-80 lg:mt-80 bg-white">
      <div className="px-14 md:px-30 lg:px-40 text-center">
        <FeatureShowcase
          firstLineText="Make Crypto Payments"
          secondLineText="without a crypto wallet"
          image={blupayPaymentGateway}
          subText="Send crypto payments easily with your Mastercard or Visa card on the go!"
        />
        <FeatureShowcase
          isReversed={true}
          firstLineText="Multiple payout options"
          secondLineText="to suit your needs."
          image={blupayWithdrawalPage}
          subText="Choose from our available list of payout options to get paid the way you want."
        />
        {/* <div className="mt-56 flex w-full gap-x-10 justify-between">
              <div className="self-center max-w-lg">
                <h2 className="font-bold text-4xl">
                  <span className="text-blupayBlue">Make Crypto Payments</span>
                  <br />
                  without a crypto wallet.
                </h2>
                <p className="mt-10">
                  Clients who do not own a crypto wallet can pay you in crypto
                  easily using their MasterCard or Visa Card.
                </p>
              </div>
              <Image
                src={blupayPaymentGateway}
                alt="Send crypto payments easily with your Mastercard or Visa card on the go!"
                className="max-w-2xl"
              />
            </div> */}
        {/* <div className="mt-56 flex w-full gap-x-10 justify-between">
              <Image
                src={blupayPaymentGateway}
                alt="Send crypto payments easily with your Mastercard or Visa card on the go!"
                className="max-w-2xl"
              />

              <div className="self-center max-w-lg">
                <h2 className="font-bold text-4xl">
                  <span className="text-blupayBlue">
                    Multiple payout options
                  </span>
                  <br />
                  to suit your needs.
                </h2>
                <p className="mt-10">
                  Choose from our available list of payout options to get paid
                  the way you want.
                </p>
              </div>
            </div> */}
      </div>
    </section>
  );
}
export default BluPayFeatures;
