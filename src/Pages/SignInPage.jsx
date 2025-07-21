import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#fff",
      padding: "1rem"
    }}>
      <SignIn />
    </div>
  );
} 