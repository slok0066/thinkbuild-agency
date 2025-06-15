import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | ThinkBuild",
  description: "Terms of Service for ThinkBuild Web & App Development Agency",
};

export default function TermsPage() {
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
        
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-foreground/80 mb-6">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the services provided by ThinkBuild ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
          
          <h2>2. Description of Services</h2>
          <p>
            ThinkBuild provides web and app development services, including but not limited to web design, mobile application development, UI/UX design, digital marketing, e-commerce solutions, and custom software development.
          </p>
          
          <h2>3. User Responsibilities</h2>
          <p>As a user of our services, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information when requested</li>
            <li>Use our services only for lawful purposes</li>
            <li>Not engage in any activity that could harm our systems or interfere with other users</li>
            <li>Respect intellectual property rights</li>
          </ul>
          
          <h2>4. Intellectual Property</h2>
          <p>
            All content provided on our website, including text, graphics, logos, and software, is the property of ThinkBuild or its content suppliers and is protected by copyright laws. The compilation of all content on this site is the exclusive property of ThinkBuild.
          </p>
          
          <h2>5. Payment Terms</h2>
          <p>
            Payment terms will be outlined in individual service agreements. Unless otherwise specified, invoices are due upon receipt. We reserve the right to suspend services for accounts with outstanding balances.
          </p>
          
          <h2>6. Limitation of Liability</h2>
          <p>
            ThinkBuild shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
          </p>
          
          <h2>7. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason.
          </p>
          
          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will provide notice of significant changes by posting an updated version on our website. Your continued use of our services after such modifications constitutes your acceptance of the modified terms.
          </p>
          
          <h2>9. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which ThinkBuild operates, without regard to its conflict of law provisions.
          </p>
          
          <h2>10. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
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