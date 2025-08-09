import SectionTitle from "../shared/SectionTitle";

const Faq = () => {
    return (
        <div className="bg-base-100 flex flex-col justify-center px-10 pb-10 rounded-2xl">
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">What types of sports accessories are available in your store?</div>
                <div className="collapse-content text-sm">We offer a wide range of sports accessories, including gear, apparel, footwear, and equipment for various sports such as football, basketball, tennis, running, yoga, and more.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">What payment methods do you accept?</div>
                <div className="collapse-content text-sm">We accept multiple payment methods, including credit/debit cards, digital wallets (e.g., PayPal, Google Pay), and direct bank transfers.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">What is your return policy?</div>
                <div className="collapse-content text-sm">We have a 30-day return policy for most items. Products must be unused, in their original packaging, and accompanied by a receipt or proof of purchase.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Do you provide international shipping?</div>
                <div className="collapse-content text-sm">Yes, we ship internationally! Shipping costs and delivery times may vary based on the destination. Check our shipping policy for more details.</div>
            </div>
        </div>
    );
};

export default Faq;