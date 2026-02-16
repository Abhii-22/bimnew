import React from "react";
import "./PartnersSection.css";

// Import all available logos from Logos folder
import autodeskLogo from "../assets/Logos/autodesk-learning-partner-logo-rgb-black.png";
import bentleyLogo from "../assets/Logos/Bentley-Training-Partner-Logo.png";
import chaosLogo from "../assets/Logos/Chaos_idHNVPKG7k_0.svg";
import sketchUpLogo from "../assets/Logos/Sketchup_Colour.png";
import ptcLogo from "../assets/Logos/ptc_logo.jpeg";
import bmsLogo from "../assets/Logos/BMS.jpg";
import jdschoolLogo from "../assets/Logos/JDSCHOOL.jpg";
import pesitLogo from "../assets/Logos/PESIT.jpg";
import ramaiaLogo from "../assets/Logos/RAMAIAH-INSTITUTE-OF-TECHNOLOGY.png";
import aicteLogo from "../assets/Logos/aicte.png";
import vtuLogo from "../assets/Logos/VTU.jpg";
import sharnbasvaLogo from "../assets/Logos/Sharnbasva_University_logo.png";
import iitBhubaneswarLogo from "../assets/Logos/Indian_Institute_of_Technology_Bhubaneswar_Logo.png.jpg";
import mediniLogo from "../assets/Logos/Medini_logo.png";
import trainingPartnerLogo from "../assets/Logos/Training_Partner_CMYK.png";

// Import logos from Placed_Logo folder (excluding problematic SVG)
import darGroupLogo from "../assets/Placed_Logo/Logo---dar-group.png";
import cowiLogo from "../assets/Placed_Logo/Logo_COWI.svg.png";
import mottMacLogo from "../assets/Placed_Logo/Mott_MacDonald-Logo.wine.png";
import parsonsLogo from "../assets/Placed_Logo/Parsons_Corporation_logo.png";
import wspLogo from "../assets/Placed_Logo/WSP_logo.svg.png";
import cracknellLogo from "../assets/Placed_Logo/cracknell.png";
import lntLogo from "../assets/Placed_Logo/larsen-toubro-lt-logo-png_seeklogo-211460.png";

const PARTNERS = [
  // Company Partners
  { name: "Autodesk", logo: autodeskLogo },
  { name: "Bentley Systems", logo: bentleyLogo },
  { name: "Chaos", logo: chaosLogo },
  { name: "SketchUp", logo: sketchUpLogo },
  { name: "PTC", logo: ptcLogo },
  { name: "Medini", logo: mediniLogo },
  { name: "NVIDIA", logo: bentleyLogo }, // Using existing logo as placeholder
  { name: "Adobe", logo: chaosLogo }, // Using existing logo as placeholder
  
  // Educational Institutions
  { name: "AICTE", logo: aicteLogo },
  { name: "VTU", logo: vtuLogo },
  { name: "Sharnbasva University", logo: sharnbasvaLogo },
  { name: "PES Institute of Technology", logo: pesitLogo },
  { name: "BMS College of Engineering", logo: bmsLogo },
  { name: "JD School of Design", logo: jdschoolLogo },
  { name: "Ramaiah Institute of Technology", logo: ramaiaLogo },
  { name: "IIT Bhubaneswar", logo: iitBhubaneswarLogo },
  
  // Training Partners
  { name: "Training Partner", logo: trainingPartnerLogo },
  
  // Placed Companies
  { name: "Parsons", logo: parsonsLogo },
  { name: "WSP", logo: wspLogo },
  { name: "Cracknell", logo: cracknellLogo },
  { name: "Larsen & Toubro", logo: lntLogo },
  { name: "Dar Group", logo: darGroupLogo },
  { name: "COWI", logo: cowiLogo },
  { name: "Mott MacDonald", logo: mottMacLogo },
];

function PartnersSection() {
  // Create rows of 4 logos for horizontal layout in each row
  const createRowsOfFour = (partners) => {
    const rows = [];
    for (let i = 0; i < partners.length; i += 4) {
      rows.push(partners.slice(i, i + 4));
    }
    return rows;
  };

  const partnerRows = createRowsOfFour(PARTNERS);
  // Duplicate the rows for seamless vertical scrolling
  const duplicatedRows = [...partnerRows, ...partnerRows];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-content">
          <h2 className="partners-title">Trusted by 100+ Leaders</h2>
          <p className="partners-description">
            Medini Technologies, we believe business is built on trust and
            legacy—values that define meaningful collaborations worldwide. For
            forward-thinking professionals, partnerships are a force multiplier:
            they expand networks, enhance credibility, and drive sustainable
            success. From joint ventures to thought leadership, the right
            alliance can turn challenges into opportunities while meeting global
            standards. Together, we'll create something exceptional
            <br />- For a better tomorrow.
          </p>
        </div>

        <div className="partners-logos" aria-label="Partners and leaders logos">
          <div className="partners-scrolling-card">
            <div className="partners-horizontal-container">
              {duplicatedRows.map((row, rowIndex) => (
                <div key={`row-${rowIndex}`} className="partner-grid-tile">
                  {row.map((partner, partnerIndex) => (
                    <div key={`${partner.name}-${partnerIndex}`} className="partner-mini-card">
                      <img
                        className="partner-scrolling-logo"
                        src={partner.logo}
                        alt={partner.name}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
