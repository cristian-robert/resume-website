"use client";
import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import TurnstileCaptcha from "@/components/auth/turnstile-captcha";

export default function Register() {
  const { isLoaded, signUp } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the captcha");
      return;
    }
    
    try {
      // Sign up with Clerk
      await signUp.create({
        emailAddress: email,
        password,
      });
      
      // Store consent preferences in your database
      await fetch("/api/user/consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          marketing: marketingConsent,
          analytics: analyticsConsent,
          consentTimestamp: new Date().toISOString()
        })
      });
      
      await signUp.prepareEmailAddressVerification();
      // Redirect to verification page
    } catch (err) {
      console.error(err);
    }
  };
  
  // Form JSX with Clerk fields + consent checkboxes + Turnstile captcha
}