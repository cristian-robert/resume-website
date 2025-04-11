"use client";

import Image from "next/image";
import { Building } from "lucide-react";

type CompanyLogoProps = {
  company: string;
  className?: string;
  size?: number;
};

export function CompanyLogo({ company, className = "", size = 24 }: CompanyLogoProps) {
  // Map company names to their logo images
  const getCompanyLogo = () => {
    const companyLower = company.toLowerCase();
    const imageSize = size * 1.5; // Make the image slightly larger than the icon size

    // Common styles for all logo containers
    const containerStyle = {
      width: imageSize,
      height: imageSize,
      padding: '2px', // Add some padding to prevent logos from touching the edges
    };

    // Common image styles for all logos
    const imageClassName = `object-contain ${className}`;

    // Logo-specific adjustments
    if (companyLower.includes("deutsche bank")) {
      return (
        <div className="relative" style={containerStyle}>
          <Image
            src="/dblogo.png"
            alt="Deutsche Bank"
            fill
            className={imageClassName}
            style={{ padding: '2px' }} // DB logo needs a bit more padding
          />
        </div>
      );
    } else if (companyLower.includes("twispay")) {
      return (
        <div className="relative" style={containerStyle}>
          <Image
            src="/twispaylogo.jpeg"
            alt="Twispay"
            fill
            className={imageClassName}
            style={{ padding: '3px' }} // Twispay logo needs more padding
          />
        </div>
      );
    } else if (companyLower.includes("2checkout") || companyLower.includes("verifone")) {
      return (
        <div className="relative" style={containerStyle}>
          <Image
            src="/2checkout.png"
            alt="2Checkout"
            fill
            className={imageClassName}
            style={{ padding: '2px' }}
          />
        </div>
      );
    } else if (companyLower.includes("emag")) {
      return (
        <div className="relative" style={containerStyle}>
          <Image
            src="/emaglogo.avif"
            alt="eMAG"
            fill
            className={imageClassName}
            style={{ padding: '2px' }}
          />
        </div>
      );
    } else if (companyLower.includes("ubisoft")) {
      return (
        <div className="relative" style={containerStyle}>
          <Image
            src="/ubisoftlogo.png"
            alt="Ubisoft"
            fill
            className={imageClassName}
            style={{ padding: '2px' }}
          />
        </div>
      );
    }

    // Default icon
    return <Building size={size} className={className} />;
  };

  return getCompanyLogo();
}
