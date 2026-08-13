export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Ruptech Engineers Pvt. Ltd. website.',
};

export default function PrivacyPage() {
  return (
    <article className="max-w-4xl mx-auto px-gutter py-xl space-y-lg">
      <header>
        <h1 className="font-headline-xl text-headline-xl text-on-surface mb-sm">Privacy Policy</h1>
        <p className="font-body-sm text-body-sm text-on-surface-variant">Last updated: January 2025</p>
      </header>

      {[
        {
          title: '1. Information We Collect',
          content:
            'We collect personal information (name, phone number, email address, company name) that you voluntarily provide when you fill out our contact or quote request forms. We do not collect sensitive personal data.',
        },
        {
          title: '2. How We Use Your Information',
          content:
            'The information you provide is used solely to respond to your inquiry or prepare a quotation. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.',
        },
        {
          title: '3. Data Storage',
          content:
            'Form submissions are stored securely in a private Google Sheet accessible only to authorized Ruptech Engineers staff. We retain this information for the duration of our business relationship plus 7 years for legal/audit purposes.',
        },
        {
          title: '4. Cookies',
          content:
            'This website uses only essential technical cookies required for page functionality. We do not use tracking, advertising, or analytics cookies.',
        },
        {
          title: '5. Third-Party Services',
          content:
            'Our website may embed Google Maps. Please refer to Google\'s Privacy Policy for how they handle data. We use Google Fonts which may log your IP address per Google\'s standard infrastructure.',
        },
        {
          title: '6. Your Rights',
          content:
            'You may request access to, correction, or deletion of any personal data we hold about you. Please contact us at ruptechengineers@gmail.com with your request.',
        },
        {
          title: '7. Contact',
          content:
            'For any privacy-related questions, contact us at: ruptechengineers@gmail.com or by post at Ruptech Engineers Pvt. Ltd., Plot L-237, MIDC, Ahmednagar 414111, Maharashtra, India.',
        },
      ].map((section) => (
        <section key={section.title}>
          <h2 className="font-headline-sm text-headline-sm text-on-surface mb-sm">{section.title}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">{section.content}</p>
        </section>
      ))}
    </article>
  );
}
