import FaqItem from "../FaqItem";

function FAQs() {
  return (
    <div className="mt-10">
      <FaqItem
        question="What is BluPay"
        answer="BluPay simplifies the world of cryptocurrency payments by
                allowing users to send and make crypto payments in stable
                coins, without the hassle of owning a crypto wallet. We
                believe crypto services should be easily accessible to
                evryone!"
      />

      <FaqItem
        question="How fast are transactions on BluPay"
        answer="Just another answer"
      />

      <FaqItem
        question='What is ”crypto payments without a crypto wallet"'
        answer="Just another answer"
      />

      <FaqItem question="Is BluPay free to use" answer="Just another answer" />

      <FaqItem
        question="How many percentage does BluPay charge for its services"
        answer="Just another answer"
      />

      <FaqItem question="Who can use BluPay" answer="Just another answer" />

      <FaqItem
        question="What are the available payout options"
        answer="Just another answer"
      />

      <FaqItem
        question="I am a developer, how can I integrate BluPay in my personal projects?"
        answer="Just another answer"
      />
    </div>
  );
}

export default FAQs;
