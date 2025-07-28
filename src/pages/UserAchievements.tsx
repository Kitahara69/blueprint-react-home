import React, { useState } from 'react';
import AllBadges from '../components/AllBadges'; // Assuming AllBadges is in the same directory or adjust path
import Certificate from '../components/Certificate'; // Assuming Certificate is in the same directory or adjust path
import '../styles/UserAchievements.css'; // Import the CSS file

interface Badge {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  icon: string;
}

const UserAchievements: React.FC = () => {
  // Sample user data - in a real app, this would come from props or context
  const [hasCompletedFinalTest, setHasCompletedFinalTest] = useState(false);
  const userName = "Tomato Juice";
  const certificateTitle = "Certificate of ASL Proficiency";

  const badges: Badge[] = [
    {
      id: '1',
      title: 'First Sign-in',
      description: 'Complete your first ASL lesson',
      completed: true,
      icon: '👤'
    },
    {
      id: '2',
      title: '5 Day Streak',
      description: 'Practice ASL signs 5 days in a row',
      completed: true,
      icon: '🔥'
    },
    {
      id: '3',
      title: 'Quiz Win!',
      description: 'Complete any quiz in less than 1 min',
      completed: true,
      icon: '⚡'
    },
    {
      id: '4',
      title: 'First Word',
      description: 'Learn your first ASL sign',
      completed: true,
      icon: '✋'
    },
    {
      id: '5',
      title: 'Alphabet Master',
      description: 'Master all 26 letters in ASL',
      completed: false,
      icon: '🔤'
    },
    {
      id: '6',
      title: 'Number Pro',
      description: 'Learn numbers 1-20 in ASL',
      completed: false,
      icon: '🔢'
    },
    {
      id: '7',
      title: 'Basic Phrases',
      description: 'Complete basic phrases module',
      completed: false,
      icon: '💬'
    },
    {
      id: '8',
      title: 'Daily Signs',
      description: 'Learn 50 common daily signs',
      completed: false,
      icon: '📅'
    },
    {
      id: '9',
      title: 'Speed Signer',
      description: 'Sign 10 words in under 30 seconds',
      completed: false,
      icon: '🏃'
    },
    {
      id: '10',
      title: 'Final Champion',
      description: 'Take the final test and complete',
      completed: false,
      icon: '🏆'
    }
  ];

  const handleTakeFinalTest = () => {
    // In a real app, this would navigate to the test or trigger a test modal
    console.log('Taking final test...');
    // For demo purposes, let's simulate completing the test
    setHasCompletedFinalTest(true);
  };

  const handlePrintPDF = () => {
    // In a real app, this would generate and download a PDF
    console.log('Printing certificate as PDF...');
    
    // Create a new window with only the certificate content
    const certificateContent = document.querySelector('.certificate-document');
    if (certificateContent) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Certificate - ${certificateTitle}</title>
              <style>
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                .certificate-document {
                  background: white;
                  border: 3px solid #0066cc;
                  border-radius: 15px;
                  padding: 60px 40px;
                  text-align: center;
                  max-width: 600px;
                  margin: 0 auto;
                  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                  position: relative;
                }
                .certificate-document::before {
                  content: '';
                  position: absolute;
                  top: 15px;
                  left: 15px;
                  right: 15px;
                  bottom: 15px;
                  border: 1px solid #0066cc;
                  border-radius: 8px;
                  pointer-events: none;
                }
                .certificate-header { color: #0066cc; font-size: 16px; font-weight: 600; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px; }
                .certificate-title-main { font-size: 32px; font-weight: bold; color: #333; margin: 20px 0; }
                .certificate-subtitle { font-size: 18px; color: #666; margin-bottom: 30px; font-style: italic; }
                .certificate-recipient { font-size: 24px; color: #0066cc; font-weight: 600; margin: 20px 0; border-bottom: 2px solid #0066cc; padding-bottom: 10px; display: inline-block; }
                .certificate-completion { font-size: 16px; color: #666; margin: 20px 0; line-height: 1.5; }
                .certificate-badge { width: 80px; height: 80px; background: linear-gradient(135deg, #FFB74D, #FF9800); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 40px; color: white; margin: 20px auto; box-shadow: 0 4px 15px rgba(255, 183, 77, 0.3); }
                .certificate-footer { margin-top: 40px; font-size: 14px; color: #999; }
                .signature-line { border-top: 1px solid #ccc; width: 200px; margin: 30px auto 10px; }
                .signature-text { font-size: 12px; color: #666; }
              </style>
            </head>
            <body>
              <div class="certificate-document">
                <div class="certificate-header">TalkyHands - American Sign Language Learning Platform</div>
                <div class="certificate-title-main">Certificate of Achievement</div>
                <div class="certificate-subtitle">in American Sign Language Proficiency</div>
                <div class="certificate-badge">🏆</div>
                <div style="margin: 30px 0; font-size: 16px; color: #666;">This certifies that</div>
                <div class="certificate-recipient">${userName}</div>
                <div class="certificate-completion">has successfully completed the ASL fundamentals course and demonstrated proficiency in American Sign Language basics</div>
                <div class="certificate-footer">
                  <div class="signature-line"></div>
                  <div class="signature-text">TalkyHands Instructor</div>
                  <div style="margin-top: 20px; font-size: 12px; color: #999;">
                    Certificate ID: TH-${Date.now().toString().slice(-6)}<br>
                    Date: ${new Date().toLocaleDateString()}
                  </div>
                </div>
              </div>
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      }
    }
  };

  return (
    <div className="user-achievements-container">
      <h1 className="user-achievements-title">
        Achievements
      </h1>
      <AllBadges badges={badges} />
      <Certificate
        hasCompletedFinalTest={hasCompletedFinalTest}
        userName={userName}
        certificateTitle={certificateTitle}
        onTakeFinalTest={handleTakeFinalTest}
        onPrintPDF={handlePrintPDF}
      />
    </div>
  );
};

export default UserAchievements;
