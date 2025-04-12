"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";

interface ConsentPreferences {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function ConsentManager() {
  const { user } = useClerk();
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    essential: true, // Always required
    functional: false,
    analytics: false,
    marketing: false
  });
  
  useEffect(() => {
    // Check if consent was previously given
    const storedConsent = localStorage.getItem("cookieConsent");
    if (!storedConsent) {
      setOpen(true);
    } else {
      setPreferences(JSON.parse(storedConsent));
    }
  }, []);
  
  const savePreferences = async () => {
    const timestamp = new Date().toISOString();
    localStorage.setItem("cookieConsent", JSON.stringify({
      ...preferences,
      timestamp
    }));
    
    // Also store on server for logged-in users
    if (user) {
      try {
        await fetch("/api/user/consent", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...preferences,
            timestamp
          })
        });
      } catch (error) {
        console.error("Failed to save consent preferences", error);
      }
    }
    
    setOpen(false);
  };
  
  const updatePreference = (key: keyof ConsentPreferences, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };
  
  if (!open) {
    return (
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        size="sm"
        className="fixed bottom-4 left-4 z-50"
      >
        Cookie Settings
      </Button>
    );
  }
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-background max-w-md w-full rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Cookie Preferences</h2>
        
        <div className="py-4">
          <div className="text-sm text-muted-foreground mb-4">
            We use cookies to improve your experience on our website. Please select which cookies you allow us to use.
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-base font-medium">Essential Cookies</div>
                <div className="text-sm text-muted-foreground">
                  Required for the website to function. Cannot be disabled.
                </div>
              </div>
              <input 
                type="checkbox" 
                checked={true} 
                disabled 
                className="h-4 w-4" 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-base font-medium">Functional Cookies</div>
                <div className="text-sm text-muted-foreground">
                  Allow us to remember your preferences and settings.
                </div>
              </div>
              <input 
                type="checkbox" 
                checked={preferences.functional}
                onChange={(e) => updatePreference('functional', e.target.checked)}
                className="h-4 w-4" 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-base font-medium">Analytics Cookies</div>
                <div className="text-sm text-muted-foreground">
                  Help us improve by collecting anonymous usage data.
                </div>
              </div>
              <input 
                type="checkbox" 
                checked={preferences.analytics}
                onChange={(e) => updatePreference('analytics', e.target.checked)}
                className="h-4 w-4" 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-base font-medium">Marketing Cookies</div>
                <div className="text-sm text-muted-foreground">
                  Used to deliver relevant content and advertisements.
                </div>
              </div>
              <input 
                type="checkbox" 
                checked={preferences.marketing}
                onChange={(e) => updatePreference('marketing', e.target.checked)}
                className="h-4 w-4" 
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-2 mt-4">
          <Button
            type="button"
            variant="secondary"
            onClick={() => setOpen(false)}
            className="mr-2"
          >
            Reject All
          </Button>
          <Button type="button" onClick={savePreferences}>
            Save Preferences
          </Button>
        </div>
      </div>
    </div>
  );
}
