import React from 'react';
import './legal.css';

function Copyright() {
    return (
        <div className="legal-container">
            <h1>Copyright Infringement Notice Procedure</h1>
            
            <div className="legal-section">
                <p>
                    If you believe that any copyright infringement exists on Skool Games, please use the following process 
                    to notify us. We will act expeditiously to remove infringing material once informed. All claims of 
                    copyright infringement should be in writing and should be directed to our Designated Agent below:
                </p>

                <div className="contact-info">
                    <p>Copyright Manager</p>
                    <p>Aubree Carter Skool Games LLC</p>
                    <p>9429 Kuhn Inlet</p>
                    <p>Port Carmen, NJ 07591-2685</p>
                </div>

                <p>Your notice must contain the following information:</p>
                
                <ol>
                    <li>
                        Your physical or electronic signature (as either the owner of an exclusive right that is 
                        allegedly infringed or as a person authorized to act on behalf of such owner).
                    </li>
                    
                    <li>
                        Identification of the copyrighted work claimed to have been infringed or, if multiple 
                        copyrighted works on Skool Games are covered by a single claim, a representative list 
                        of such works.
                    </li>
                    
                    <li>
                        Identification of the material that is claimed to be infringing or to be the subject 
                        of infringing activity and that is to be removed or access to which is to be disabled, 
                        and information reasonably sufficient to permit us to locate the material.
                    </li>
                    
                    <li>
                        Information reasonably sufficient to permit us to contact you, such as an address, 
                        telephone number and, if available, an electronic mail address.
                    </li>
                    
                    <li>
                        A statement that you believe in good faith that use of the material in the manner 
                        complained of is not authorized by the copyright owner, its agent or the law.
                    </li>
                    
                    <li>
                        A statement that the information in the notice is accurate and that, under penalty 
                        of perjury, you are the owner of an exclusive right that is allegedly infringed or 
                        are authorized to act on behalf of such owner.
                    </li>
                </ol>

                <p className="note">
                    Please note: This procedure is exclusively for notifying us that your copyrighted material 
                    has been infringed. We will promptly investigate and take appropriate action in accordance 
                    with applicable intellectual property laws.
                </p>
            </div>
        </div>
    );
}

export default Copyright;
