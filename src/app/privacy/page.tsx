import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | ThinkBuild",
  description: "Privacy Policy for ThinkBuild Web & App Development Agency",
};

export default function PrivacyPage() {
  return (
    <main className="container py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/" 
          className="text-primary hover:text-primary/80 flex items-center gap-2 mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-foreground/80 mb-6">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <h2>1. Introduction</h2>
          <p>
            ThinkBuild ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
          
          <h2>2. Information We Collect</h2>
          <p>We may collect information about you in various ways, including:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when filling out forms on our website.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website, including your IP address, browser type, pages visited, and time spent on our site.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information.</li>
          </ul>
          
          <h2>3. How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including:</p>
          <ul>
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our services</li>
            <li>To monitor the usage of our services</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
          
          <h2>4. Disclosure of Your Information</h2>
          <p>We may disclose your information in the following situations:</p>
          <ul>
            <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition.</li>
            <li><strong>With Your Consent:</strong> We may disclose your information for any other purpose with your consent.</li>
            <li><strong>Legal Requirements:</strong> To comply with legal obligations or protect our rights.</li>
          </ul>
          
          <h2>5. Security of Your Information</h2>
          <p>
            We implement appropriate security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2>6. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> thinkbuild8@gmail.com<br />
            <strong>Address:</strong> ThinkBuild Headquarters, 123 Tech Avenue, Digital City
          </p>
        </div>
      </div>
    </main>
  );
} 