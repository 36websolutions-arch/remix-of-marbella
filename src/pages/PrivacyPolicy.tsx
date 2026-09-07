import LegalLayout, { type LegalSection } from "@/components/LegalLayout";

const sections: LegalSection[] = [
  {
    heading: "1. Introduction",
    body: [
      "Amor VIP Concierge (\"we\", \"us\", or \"our\") is a luxury concierge service based in Marbella, Spain. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services or contact us.",
      "We are committed to handling your personal data responsibly and in accordance with the EU General Data Protection Regulation (GDPR) and Spanish data protection law.",
    ],
  },
  {
    heading: "2. Information We Collect",
    body: [
      "We collect information that you provide directly to us, such as your name, email address, phone number, and any details required to arrange your booking, including dates, group size, and preferences.",
      "We may also collect technical information such as your IP address and browsing activity when you visit our website, in order to improve its performance and security.",
    ],
  },
  {
    heading: "3. How We Use Your Information",
    body: [
      "We use your personal information to process and fulfil your bookings, to communicate with you about your requests, and to provide a tailored concierge experience.",
      "We may also use your information to respond to enquiries, send relevant updates about our services (where you have agreed to receive them), and to meet our legal and administrative obligations.",
    ],
  },
  {
    heading: "4. Sharing Your Information",
    body: [
      "We share your information only with the third-party suppliers necessary to deliver your booking, such as villa owners, yacht operators, vehicle providers, and venues.",
      "We do not sell your personal data to any third party. Suppliers receive only the information required to deliver the specific service you have requested.",
    ],
  },
  {
    heading: "5. Data Retention",
    body: [
      "We retain your personal information for as long as necessary to fulfil the purposes described in this policy and to meet our legal and accounting obligations. After this period, your data will be deleted or anonymised.",
    ],
  },
  {
    heading: "6. Your Rights",
    body: [
      "Under the GDPR, you have the right to access, correct, or delete your personal data, as well as the right to restrict or object to certain processing and the right to data portability.",
      "To exercise any of these rights, please contact us at Amorvipconcierge@gmail.com. You also have the right to lodge a complaint with the Spanish Data Protection Agency (AEPD).",
    ],
  },
  {
    heading: "7. Security",
    body: [
      "We take appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, or misuse. However, no method of transmission over the internet is completely secure.",
    ],
  },
  {
    heading: "8. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. The most current version will always be available on this page, and the \"Last updated\" date will reflect the most recent revision.",
    ],
  },
  {
    heading: "9. Contact Us",
    body: [
      "If you have any questions about this Privacy Policy or how we handle your personal data, please contact us at Amorvipconcierge@gmail.com.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="How Amor VIP Concierge collects, uses, and safeguards your personal information, in line with the EU GDPR and Spanish data protection law."
      updated="September 2026"
      sections={sections}
    />
  );
}
