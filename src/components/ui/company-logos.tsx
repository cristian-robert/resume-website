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
    };

    // Common image styles for all logos - using object-contain to maintain aspect ratio
    const imageClassName = `object-contain w-full h-full ${className}`;

    // No scaling to keep logos intelligible
    const imageStyle = {};

    // Logo-specific adjustments
    if (companyLower.includes("deutsche bank")) {
      return (
        <div className="relative rounded-full overflow-hidden flex items-center justify-center bg-white" style={containerStyle}>
          <Image
            src="/dblogo.png"
            alt="Deutsche Bank"
            fill
            className={imageClassName}
            style={imageStyle}
          />
        </div>
      );
    } else if (companyLower.includes("twispay")) {
      return (
        <div className="relative rounded-full overflow-hidden flex items-center justify-center bg-white" style={containerStyle}>
          <Image
            src="/twispaylogo.jpeg"
            alt="Twispay"
            fill
            className={imageClassName}
            style={imageStyle}
          />
        </div>
      );
    } else if (companyLower.includes("2checkout") || companyLower.includes("verifone")) {
      return (
        <div className="relative rounded-full overflow-hidden flex items-center justify-center bg-white" style={containerStyle}>
          <Image
            src="/2checkout.png"
            alt="2Checkout"
            fill
            className={imageClassName}
            style={imageStyle}
          />
        </div>
      );
    } else if (companyLower.includes("emag")) {
      return (
        <div className="relative rounded-full overflow-hidden flex items-center justify-center bg-white" style={containerStyle}>
          <Image
            src="/emaglogo.avif"
            alt="eMAG"
            fill
            className={imageClassName}
            style={imageStyle}
          />
        </div>
      );
    } else if (companyLower.includes("ubisoft")) {
      return (
        <div className="relative rounded-full overflow-hidden flex items-center justify-center bg-white" style={containerStyle}>
          <Image
            src="/ubisoftlogo.png"
            alt="Ubisoft"
            fill
            className={imageClassName}
            style={imageStyle}
          />
        </div>
      );
    }

    // Default icon
    return <Building size={size} className={className} />;
  };

  return getCompanyLogo();
}
