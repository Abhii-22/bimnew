import React from 'react';
import './ouralumnies.css';
import darGroupLogo from '../assets/Placed_Logo/Logo---dar-group.png';
import larsenToubroLogo from '../assets/Placed_Logo/larsen-toubro-lt-logo-png_seeklogo-211460.png';
import cowiLogo from '../assets/Placed_Logo/Logo_COWI.svg.png';
import mottMacLogo from '../assets/Placed_Logo/Mott_MacDonald-Logo.wine.png';
import parsonsLogo from '../assets/Placed_Logo/Parsons_Corporation_logo.png';
import wspLogo from '../assets/Placed_Logo/WSP_logo.svg.png';
import cracknellLogo from '../assets/Placed_Logo/cracknell.png';
import tataLogo from '../assets/Placed_Logo/images-ytttata.png';

const OurAlumnies = () => {
  const alumnies = [
    { id: 1, name: 'Dar Group', logo: darGroupLogo },
    { id: 2, name: 'Larsen & Toubro', logo: larsenToubroLogo },
    { id: 4, name: 'COWI', logo: cowiLogo },
    { id: 5, name: 'Mott MacDonald', logo: mottMacLogo },
    { id: 6, name: 'Parsons Corporation', logo: parsonsLogo },
    { id: 7, name: 'WSP', logo: wspLogo },
    { id: 8, name: 'Cracknell', logo: cracknellLogo },
    { id: 9, name: 'TATA', logo: tataLogo },
  ];

  // Duplicate the array for seamless scrolling
  const duplicatedAlumnies = [...alumnies, ...alumnies];

  return (
    <section className="alumni-scrolling-section">
      <div className="alumni-header">
        <h2 className="alumni-title">Our Alumni are at</h2>
      </div>
      <div className="alumni-scrolling-container">
        {duplicatedAlumnies.map((alumni, index) => (
          <div key={`${alumni.id}-${index}`} className="alumni-logo-item">
            <img
              src={alumni.logo}
              alt={alumni.name}
              className="alumni-scrolling-logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurAlumnies;