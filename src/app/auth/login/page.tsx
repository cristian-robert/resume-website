// /app/auth/login/page.tsx
"use client";
import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TurnstileCaptcha from "@/components/auth/turnstile-captcha";

export default function Login() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setError("Please complete the captcha verification");
      return;
    }
    
    setLoading(true);
    setError("");
    
    try {
      // Verify captcha token server-side
      const verification = await fetch("/api/auth/verify-turnstile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: captchaToken })
      });
      
      if (!verification.ok) {
        throw new Error("Captcha verification failed");
      }
      
      // Sign in with Clerk
      const result = await signIn.create({
        identifier: email,
        password,
      });
      
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard"); // Redirect to dashboard
      } else {
        console.error("Sign in failed", result);
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };
  
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Log In</h1>
      
      {error && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <TurnstileCaptcha onVerify={(token) => setCaptchaToken(token)} />
        
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </Button>
      </form>
    </div>
  );
}