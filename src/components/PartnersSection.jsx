import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";



// logos (keep your imports same)
import autodeskLogo from "../assets/Logos/autodesk-learning-partner-logo-rgb-black.png";
import bentleyLogo from "../assets/Logos/Bentley-Training-Partner-Logo.png";
import sketchUpLogo from "../assets/Logos/Sketchup_Colour.png";
import chaosLogo from "../assets/Logos/Chaos_idHNVPKG7k_0.svg";
import ptcLogo from "../assets/Logos/ptc_logo.jpeg";

import bmsLogo from "../assets/Logos/BMS.jpg";
import jdschoolLogo from "../assets/Logos/JDSCHOOL.jpg";
import pesitLogo from "../assets/Logos/PESIT.jpg";
import ramaiaLogo from "../assets/Logos/RAMAIAH-INSTITUTE-OF-TECHNOLOGY.png";
import aicteLogo from "../assets/Logos/aicte.png";
import vtuLogo from "../assets/Logos/VTU.jpg";
import sharnbasvaLogo from "../assets/Logos/Sharnbasva_University_logo.png";

// import atkinsLogo from "../assets/Logos/Atkins_logo.svg";
import darGroupLogo from "../assets/Placed_Logo/Logo---dar-group.png";
import cowiLogo from "../assets/Placed_Logo/Logo_COWI.svg.png";
import mottMacLogo from "../assets/Placed_Logo/Mott_MacDonald-Logo.wine.png";
import parsonsLogo from "../assets/Placed_Logo/Parsons_Corporation_logo.png";
import wspLogo from "../assets/Placed_Logo/WSP_logo.svg.png";
import cracknellLogo from "../assets/Placed_Logo/cracknell.png";
import lntLogo from "../assets/Placed_Logo/larsen-toubro-lt-logo-png_seeklogo-211460.png";

function PartnersSection() {
    const location = useLocation();
    const [scrollPosition1, setScrollPosition1] = useState(0);
    const [scrollPosition2, setScrollPosition2] = useState(0);
    const [scrollPosition3, setScrollPosition3] = useState(0);
    const [scrollPosition4, setScrollPosition4] = useState(0);

    const isAutodeskCourseOpen = () => {
        const path = location.pathname.toLowerCase();
        return (
            path.includes("/mediniedutech/courses/") &&
            (path.includes("autocad") ||
                path.includes("revit") ||
                path.includes("fusion") ||
                path.includes("maya") ||
                path.includes("3ds-max") ||
                path.includes("civil-3d") ||
                path.includes("navisworks") ||
                path.includes("infrawork"))
        );
    };

    const partnersColumn1 = [
        ...(isAutodeskCourseOpen()
            ? [{ id: 1, name: "Autodesk", logo: autodeskLogo }]
            : []),
        { id: 2, name: "Autodesk", logo: autodeskLogo },
        { id: 3, name: "Bentley Systems", logo: bentleyLogo },
        { id: 4, name: "SketchUp", logo: sketchUpLogo },
        { id: 5, name: "Chaos", logo: chaosLogo },
        { id: 6, name: "PTC", logo: ptcLogo },
    ];

    const partnersColumn2 = [
        { id: 21, name: "AICTE", logo: aicteLogo },
        { id: 22, name: "VTU", logo: vtuLogo },
        { id: 23, name: "Sharnbasva University", logo: sharnbasvaLogo },
        { id: 24, name: "PES Institute of Technology", logo: pesitLogo },
    ];

    const partnersColumn3 = [
        { id: 25, name: "BMS College of Engineering", logo: bmsLogo },
        { id: 26, name: "JD School of Design", logo: jdschoolLogo },
        { id: 27, name: "Ramaiah Institute of Technology", logo: ramaiaLogo },
    ];

    const partnersColumn4 = [
        { id: 45, name: "Parsons", logo: parsonsLogo },
        { id: 46, name: "WSP", logo: wspLogo },
        { id: 47, name: "Cracknell", logo: cracknellLogo },
        { id: 48, name: "Larsen & Toubro", logo: lntLogo },
        // { id: 49, name: "Atkins", logo: atkinsLogo },
        { id: 50, name: "Dar Group", logo: darGroupLogo },
        { id: 51, name: "COWI", logo: cowiLogo },
        { id: 52, name: "Mott MacDonald", logo: mottMacLogo },
    ];

    useEffect(() => {
        const speed = 16;

        const i1 = setInterval(
            () => setScrollPosition1((p) => (p > 100 ? 0 : p + 0.02)),
            speed
        );
        const i2 = setInterval(
            () => setScrollPosition2((p) => (p > 100 ? 0 : p + 0.02)),
            speed
        );
        const i3 = setInterval(
            () => setScrollPosition3((p) => (p > 100 ? 0 : p + 0.02)),
            speed
        );
        const i4 = setInterval(
            () => setScrollPosition4((p) => (p > 100 ? 0 : p + 0.02)),
            speed
        );

        return () => {
            clearInterval(i1);
            clearInterval(i2);
            clearInterval(i3);
            clearInterval(i4);
        };
    }, []);

    return (
        <section className="partners-section">
            <div className="partners-container">
                <div className="content">
                    {/* LEFT */}
                    <div className="left">
                        <h2>Trusted by 150+ Institution and organization</h2>
                        <p>
                            Medini Technologies believes business is built on trust and
                            legacy—values that define meaningful collaborations worldwide.
                            Partnerships expand networks, enhance credibility, and drive
                            sustainable success.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="right">
                        <div className="columns">
                            {[partnersColumn1, partnersColumn2, partnersColumn3, partnersColumn4].map(
                                (column, colIndex) => {
                                    const pos = [
                                        scrollPosition1,
                                        scrollPosition2,
                                        scrollPosition3,
                                        scrollPosition4,
                                    ][colIndex];

                                    const up = colIndex % 2 === 0;

                                    return (
                                        <div key={colIndex} className="column">
                                            <div
                                                className="track"
                                                style={{
                                                    transform: `translateY(${up ? -pos : pos}%)`,
                                                }}
                                            >
                                                {column.map((item) => (
                                                    <LogoCard key={item.id} item={item} />
                                                ))}
                                            </div>

                                            <div
                                                className="track"
                                                style={{
                                                    transform: `translateY(${up ? 100 - pos : -100 + pos
                                                        }%)`,
                                                }}
                                            >
                                                {column.map((item) => (
                                                    <LogoCard key={`dup-${item.id}`} item={item} />
                                                ))}
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`


//! Partical Effect

.logo-card {
  position: relative; /* ⭐ REQUIRED */
  overflow: hidden;   /* ⭐ REQUIRED */

  height: 128px;
  margin: 12px;
  padding: 16px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #fde68a;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
}
  .logo-card img {
  position: relative; /* ⭐ important */
  z-index: 2;          /* ⭐ above particles */

  max-height: 64px;
  max-width: 80%;
  object-fit: contain;
}
// !End here 
        .partners-section {
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
          padding: 64px 0;
          background: linear-gradient(to bottom, #ffffff, #f9fafb);
        }

        .partners-container {
          width: 100%;
          max-width: none;
          margin: 0;
          padding: 0 24px;
        }

        .content {
          display: flex;
          gap: 48px;
          align-items: center;
        }

        .left {
          flex: 1;
        }

        .left h2 {
          font-size: 2.4rem;
          font-weight: 700;
          color: #29354d;
          margin-bottom: 20px;
        }

        .left p {
          color: #6b7280;
          line-height: 1.7;
          text-align: justify;
        }

        .right {
          flex: 1;
        }

        .columns {
          display: flex;
          gap: 16px;
        }

        .column {
          width: 25%;
          height: 400px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(to bottom, #ffffff, #f3f4f6, #ffffff);
        }

        .track {
          position: absolute;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.8s linear;
        }

        .logo-card {
          height: 128px;
          margin: 12px;
          padding: 16px;
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid #fde68a;
          box-shadow: 0 6px 18px rgba(0,0,0,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .logo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(0,0,0,0.12);
        }

        .logo-card img {
          max-height: 64px;
          max-width: 80%;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .content {
            flex-direction: column;
          }

          .right {
            display: none;
          }
        }
      `}</style>
        </section>
    );
}

function LogoCard({ item }) {
    return (
        <div className="logo-card">
            <img src={item.logo} alt={item.name} />
        </div>
    );
}



export default PartnersSection;