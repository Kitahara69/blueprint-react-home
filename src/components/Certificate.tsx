import React from 'react';
import '../styles/Certificate.css';

interface CertificateProps {
  hasCompletedFinalTest: boolean;
  userName: string;
  certificateTitle: string;
  onTakeFinalTest?: () => void;
  onPrintPDF?: () => void;
}

const Certificate: React.FC<CertificateProps> = ({
  hasCompletedFinalTest,
  userName,
  certificateTitle,
  onTakeFinalTest,
  onPrintPDF
}) => {
  return (
    // New wrapper div to contain both the title and the main container
    <div className="certificate-wrapper">
      {/* certificate-title is now outside the certificate-container */}
      <h2 className="certificate-section-title">Certificate</h2>
      
      <div className="certificate-container">
        {!hasCompletedFinalTest ? (
          <div className="certificate-locked">
            <div className="lock-icon">🔒</div>
            <p className="certificate-locked-text">
              Take final test to earn a certificate
            </p>
            <button className="take-test-button" onClick={onTakeFinalTest}>
              Take final test
            </button>
          </div>
        ) : (
          <div className="certificate-preview">
            <div className="certificate-document">
              <div className="certificate-header">TalkyHands - American Sign Language Learning Platform</div>
              <div className="certificate-title-main">Certificate of Achievement</div>
              <div className="certificate-subtitle">in American Sign Language Proficiency</div>
              <div className="certificate-badge">🏆</div>
              <div style={{ margin: '20px 0', fontSize: '16px', color: '#666' }}>This certifies that</div>
              <div className="certificate-recipient">{userName}</div>
              <div className="certificate-completion">
                has successfully completed the ASL fundamentals course and demonstrated 
                proficiency in American Sign Language basics
              </div>
              <div className="certificate-footer">
                <div className="signature-line"></div>
                <div className="signature-text">TalkyHands Instructor</div>
                <div style={{ marginTop: '15px', fontSize: '11px', color: '#999' }}>
                  Certificate ID: TH-{Date.now().toString().slice(-6)}<br />
                  Date: {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
            <button className="print-pdf-button" onClick={onPrintPDF}>
              Print as PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificate;
