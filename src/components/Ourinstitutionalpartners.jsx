import React from 'react';
import './ourinstitutionalpartners.css';

// Import all college logos from assets folder
import ambedkarLogo from '../assets/AMBEDKAR_COLLEGE-removebg-preview.png';
import amruthaLogo from '../assets/AMRUTHA INSTITUTES.svg';
import acharyaLogo from '../assets/Acharya_Institutes_Logo-removebg-preview.png';
import adichunchanagiriLogo from '../assets/Adichunchangiri-removebg-preview.png';
import alvaLogo from '../assets/Alva\'s_Institution_Logo.png';
import atriaLogo from '../assets/Atria-logo.png';
import bmsitLogo from '../assets/B.M.S._Institute_of_Technology_and_Management_logo.png';
import bmssaLogo from '../assets/BMSSA-removebg-preview.png';
import cmrTechLogo from '../assets/CMR TECH.png';
import cmrUniLogo from '../assets/CMR_UNIVERSITY-removebg-preview.png';
import cityEnggLogo from '../assets/City Engineering College.png';
import dayanandaLogo from '../assets/Dayanda_sagar_academy-removebg-preview.png';
import eastPointLogo from '../assets/EAST-POINT-removebg-preview.png';
import gmitLogo from '../assets/GM_INSTITUTE_OF_TECHNOLOGY_DAVANGERE-removebg-preview.png';
import hkesLogo from '../assets/HKES.avif';
import jdLogo from '../assets/JD-removebg-preview.png';
import jssLogo from '../assets/JSS-BNG.png';
import jainLogo from '../assets/Jain_college-removebg-preview.png';
import kvgLogo from '../assets/KVG_Engineering_College__crest_-removebg-preview.png';
import mountCarmelLogo from '../assets/MOUNT CARAMEL.jpg';
import pesitmLogo from '../assets/PESITM-removebg-preview.png';
import rajarajeshwariLogo from '../assets/RAJARAJESHWARI-removebg-preview.png';
import rvLogo from '../assets/RV-removebg-preview.png';
import rnsLogo from '../assets/Rns-removebg-preview.png';
import sdmLogo from '../assets/SDM_Institute_of_Technology-removebg-preview.png';
import sitLogo from '../assets/SIT_TUMKUR-removebg-preview.png';
import saiVidyaLogo from '../assets/Sai_Vidya_Institute_of_Technology_Logo-removebg-preview.png';
import sharnbasvaLogo from '../assets/Sharnbasva_University_logo.png';
import becLogo from '../assets/bec Logo PNG.avif';
import malnadLogo from '../assets/malnad_-removebg-preview.png';
import revaLogo from '../assets/reva.png';
import ternaLogo from '../assets/terna.jpg';
import vcetLogo from '../assets/vcet-logo.png';
import nitteLogo from '../assets/NitteMeenakshii.jpg';

const Ourinstitutionalpartners = () => {
  const collegeLogos = [
    { id: 1, name: 'Ambedkar College', logo: ambedkarLogo },
    { id: 2, name: 'Amrutha', logo: amruthaLogo },
    { id: 3, name: 'Acharya', logo: acharyaLogo },
    { id: 4, name: 'Adichunchanagiri', logo: adichunchanagiriLogo },
    { id: 5, name: 'Alva', logo: alvaLogo },
    { id: 6, name: 'Atria', logo: atriaLogo },
    { id: 7, name: 'BMSIT', logo: bmsitLogo },
    { id: 8, name: 'BMSSA', logo: bmssaLogo },
    { id: 9, name: 'CMR Tech', logo: cmrTechLogo },
    { id: 10, name: 'CMR University', logo: cmrUniLogo },
    { id: 11, name: 'City Engineering', logo: cityEnggLogo },
    { id: 12, name: 'Dayananda Sagar', logo: dayanandaLogo },
    { id: 13, name: 'East Point', logo: eastPointLogo },
    { id: 14, name: 'GMIT', logo: gmitLogo },
    { id: 15, name: 'HKES', logo: hkesLogo },
    { id: 16, name: 'JD School', logo: jdLogo },
    { id: 17, name: 'JSS', logo: jssLogo },
    { id: 18, name: 'Jain', logo: jainLogo },
    { id: 19, name: 'KVG', logo: kvgLogo },
    { id: 20, name: 'Mount Carmel', logo: mountCarmelLogo },
    { id: 21, name: 'PESITM', logo: pesitmLogo },
    { id: 22, name: 'Rajarajeshwari', logo: rajarajeshwariLogo },
    { id: 23, name: 'RV', logo: rvLogo },
    { id: 24, name: 'RNS', logo: rnsLogo },
    { id: 25, name: 'SDM', logo: sdmLogo },
    { id: 26, name: 'SIT', logo: sitLogo },
    { id: 27, name: 'Sai Vidya', logo: saiVidyaLogo },
    { id: 28, name: 'Sharnbasva', logo: sharnbasvaLogo },
    { id: 29, name: 'BEC', logo: becLogo },
    { id: 30, name: 'Malnad', logo: malnadLogo },
    { id: 31, name: 'REVA', logo: revaLogo },
    { id: 32, name: 'Terna', logo: ternaLogo },
    { id: 33, name: 'VCET', logo: vcetLogo },
    { id: 34, name: 'Nitte Meenakshii', logo: nitteLogo },
  ];

  // Duplicate the array for seamless scrolling
  const duplicatedLogos = [...collegeLogos, ...collegeLogos];

  return (
    <section className="institutional-scrolling-section">
      <div className="institutional-header">
        <h2 className="institutional-title">Our Institutional Partners</h2>
      </div>
      <div className="institutional-scrolling-container">
        {duplicatedLogos.map((college, index) => (
          <div key={`${college.id}-${index}`} className="institutional-logo-item">
            <img
              src={college.logo}
              alt={college.name}
              className="institutional-scrolling-logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ourinstitutionalpartners;
