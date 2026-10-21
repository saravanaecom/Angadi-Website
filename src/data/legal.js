// DRAFT legal text: have it reviewed before going live. Update COMPANY once the registered name is known.
import { PHONE_DISPLAY } from './site'

export const LEGAL_UPDATED = '21 October 2026'
const COMPANY = 'Angadi'
const CONTACT = `call or WhatsApp +91 ${PHONE_DISPLAY}`

export const LEGAL_LINKS = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-and-conditions', label: 'Terms & Conditions' },
  { to: '/refund-policy', label: 'Refund Policy' },
]

export const LEGAL_PAGES = {
  privacy: {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description: `How ${COMPANY} collects, uses and protects your information when you use our website and billing software.`,
    intro: `${COMPANY} ("we", "us") respects your privacy. This policy explains what information we collect when you visit our website or use Angadi billing software, and how we use and protect it.`,
    sections: [
      ['Information we collect', [
        'Contact details you share with us, such as your name, shop name, phone number, email and address, when you book a demo, start a trial or contact support.',
        'Business data you enter into the software, such as items, customers, suppliers, bills, stock and reports. This data belongs to you.',
        'Basic technical data, such as device type, browser, app version and error logs, used to keep the software working well.',
      ]],
      ['How we use your information', [
        'To set up your account, install the software, provide training and give support.',
        'To process payments for subscriptions and send invoices and renewal reminders.',
        'To improve our software and fix problems.',
        'To send you service messages and, only if you agree, offers and product updates. You can opt out at any time.',
      ]],
      ['Your business data', [
        'We do not sell your business data or your customers\' data to anyone.',
        'Our support team may access your data only when you ask for help, and only as needed to solve the issue.',
        'Cloud backups are stored with reputed hosting providers using secure connections.',
      ]],
      ['Sharing with others', [
        'We share information only with service providers who help us run our business, such as payment gateways, SMS and WhatsApp providers and cloud hosting, and only for that purpose.',
        'We may share information if required by law or by a government authority.',
      ]],
      ['Data security and retention', [
        'We use reasonable technical and organisational measures to protect your information. No system is completely secure, so please keep your passwords safe.',
        'We keep your information while your account is active and as long as needed for legal, tax and accounting purposes. You can ask us to export or delete your data after your subscription ends.',
      ]],
      ['Cookies', [
        'Our website may use basic cookies and analytics to understand visits and improve the site. You can block cookies in your browser settings.',
      ]],
      ['Your rights', [
        'You can ask to see, correct or delete the personal information we hold about you, subject to legal requirements.',
      ]],
      ['Contact us', [
        `For any privacy question or request, ${CONTACT}.`,
      ]],
    ],
  },
  terms: {
    path: '/terms-and-conditions',
    title: 'Terms & Conditions',
    description: `Terms and conditions for using the ${COMPANY} website and Angadi billing software, trial and subscriptions.`,
    intro: `These terms apply when you use the ${COMPANY} website or Angadi billing software. By starting a trial, buying a plan or using the software, you agree to these terms.`,
    sections: [
      ['Licence to use', [
        'We give you a non-exclusive, non-transferable licence to use Angadi software for your own business, for the plan and number of users, counters or branches you have paid for.',
        'You may not copy, resell, rent, reverse engineer or modify the software.',
      ]],
      ['Free trial', [
        'The 14-day free trial lets you try the software before buying. Trial features may be limited, and trial data may be removed if you do not continue.',
      ]],
      ['Plans and payment', [
        'Prices are shown in Indian Rupees and GST is charged as applicable.',
        'Subscriptions must be renewed on time to keep using the software and receive updates and support. We will remind you before renewal.',
        'We may change prices for future renewals with prior notice.',
      ]],
      ['Your responsibilities', [
        'You are responsible for the accuracy of the data you enter, including prices, tax rates and GST details, and for your own tax filings.',
        'Keep your login details safe and give access only to trusted staff.',
        'Use the software only for lawful business purposes.',
      ]],
      ['Support and updates', [
        'Support is provided by phone, WhatsApp and remote access during our support hours. Updates and new features are provided as part of active subscriptions.',
        'Hardware such as printers, scanners and scales is covered by the hardware maker\'s warranty, not by us.',
      ]],
      ['Data and backups', [
        'Your business data belongs to you. We provide cloud backup, but we recommend keeping your own backups too.',
      ]],
      ['Limitation of liability', [
        `We work hard to keep the software accurate and available, but it is provided "as is". ${COMPANY} is not liable for indirect losses, loss of profit or loss of data. Our total liability is limited to the amount you paid us in the last 12 months.`,
      ]],
      ['Termination', [
        'You can stop using the software at any time. We may suspend accounts that break these terms or do not pay renewal charges.',
      ]],
      ['Governing law', [
        'These terms are governed by the laws of India. Courts in Chennai, Tamil Nadu will have jurisdiction.',
      ]],
      ['Contact us', [
        `For any question about these terms, ${CONTACT}.`,
      ]],
    ],
  },
  refund: {
    path: '/refund-policy',
    title: 'Refund Policy',
    description: `Refund and cancellation policy for Angadi billing software subscriptions, licences and services.`,
    intro: 'We offer a 14-day free trial so you can check that Angadi fits your business before you pay. Please read this policy before buying.',
    sections: [
      ['Free trial first', [
        'Every plan can be tried free for 14 days with free installation and training. We encourage you to test billing, stock and reports in your own shop during the trial.',
      ]],
      ['Software subscriptions and licences', [
        'Once a subscription or licence is activated, the payment is generally not refundable.',
        'If you were charged twice or charged by mistake, we will refund the extra amount in full.',
        'If a serious problem in our software stops your billing and our team cannot fix it within 7 working days of your complaint, you may request a refund for the unused period.',
      ]],
      ['Customisation and services', [
        'Charges for customisation, data migration, installation visits and training are not refundable once the work has started.',
      ]],
      ['Hardware', [
        'Hardware supplied through us is covered by the maker\'s warranty. Returns and replacements follow the maker\'s policy.',
      ]],
      ['Cancellation', [
        'You can cancel auto-renewal at any time before the renewal date. Your plan stays active until the end of the paid period.',
      ]],
      ['How to request a refund', [
        `To request a refund, ${CONTACT} with your shop name, invoice number and the reason.`,
        'Approved refunds are paid back to the original payment method within 7 to 10 working days.',
      ]],
    ],
  },
}
