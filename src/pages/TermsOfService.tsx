import LegalLayout, { type LegalSection } from "@/components/LegalLayout";

const sections: LegalSection[] = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      "By accessing or using the services provided by Amor VIP Concierge (\"we\", \"us\", or \"our\"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
      "Our services include luxury concierge arrangements such as villa rentals, yacht charters, car hire, beach club and nightclub access, lifestyle management, and related bookings across the Costa del Sol and Marbella, Spain.",
    ],
  },
  {
    heading: "2. Bookings and Reservations",
    body: [
      "All bookings are made through Amor VIP Concierge as an intermediary between clients and third-party suppliers. We act on behalf of our clients to arrange services with carefully selected providers.",
      "Availability, pricing, and specifications of services are subject to change. A booking is only confirmed once a deposit or full payment has been received and written confirmation has been issued by our team.",
      "Prices are quoted in euros (€) unless otherwise stated. Taxes, such as IVA (VAT), may apply and will be indicated at the time of booking.",
    ],
  },
  {
    heading: "3. Payments",
    body: [
      "For most services, a deposit is required to secure a booking, with the remaining balance due before or on the day of the service, as agreed in your confirmation.",
      "Payment methods and bank details will be provided by our team. By making a payment, you confirm that you are authorised to use the selected payment method.",
    ],
  },
  {
    heading: "4. Cancellations and Refunds",
    body: [
      "Cancellation terms vary depending on the supplier and the type of service booked. Specific cancellation and refund conditions will be communicated at the time of booking.",
      "As a general guide, cancellations made well in advance may be eligible for a partial refund, while cancellations close to the service date or no-shows are typically non-refundable. Third-party supplier cancellation policies will take precedence where applicable.",
    ],
  },
  {
    heading: "5. Client Responsibilities",
    body: [
      "You agree to provide accurate information when making a booking and to comply with all applicable laws and the rules of each supplier, venue, or vessel.",
      "You are responsible for the conduct of all individuals in your party. We reserve the right to refuse or terminate a service where the behaviour of any guest poses a risk to safety, property, or the enjoyment of others.",
    ],
  },
  {
    heading: "6. Third-Party Suppliers",
    body: [
      "We work with independent third-party suppliers including villa owners, yacht operators, vehicle providers, and venues. While we select reputable partners, we do not own or directly control these third parties.",
      "Accordingly, Amor VIP Concierge acts as an agent on behalf of clients and accepts no liability for the acts, omissions, or negligence of third-party suppliers beyond our reasonable control.",
    ],
  },
  {
    heading: "7. Liability",
    body: [
      "Our services are provided on an \"as is\" basis. To the fullest extent permitted by law, Amor VIP Concierge shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services or those of our third-party suppliers.",
      "Our total liability in connection with any booking shall not exceed the amount of the service fee or commission we receive in respect of that booking.",
    ],
  },
  {
    heading: "8. Changes to These Terms",
    body: [
      "We may update these Terms of Service from time to time. The most current version will always be available on this page, and the \"Last updated\" date will reflect the most recent revision.",
    ],
  },
  {
    heading: "9. Governing Law",
    body: [
      "These Terms of Service are governed by the laws of Spain. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Málaga, Spain.",
    ],
  },
];

export default function TermsOfService() {
  return (
    <LegalLayout
      title="Terms of Service"
      intro="The terms that govern your use of Amor VIP Concierge and the concierge services we arrange across Marbella and the Costa del Sol."
      updated="September 2026"
      sections={sections}
    />
  );
}
