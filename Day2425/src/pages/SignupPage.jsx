import { useState } from "react";

const SignupPage = () => {
  const [sendingOtp, setSendingOtp] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [email, setEmail] = useState("");

  const handleSendOtp = async (e) => {
    try {
      setSendingOtp(true);
      e.preventDefault();

      const email = e.target.email.value;
      setEmail(email);
      console.log("Sending OTP to:", email);

      const resp = await fetch("http://localhost:2500/api/v1/auth/otp", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resp.json();
      
      console.log(data);
      setIsOtpSent(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
    } finally {
      setSendingOtp(false);
    }
  };
  
  if (isOtpSent) {
    return (
        <div>
            <form>
                <input type="text" value={email} disabled placeholder="Enter OTP" className="border border-gray-300 rounded p-2 mb-4" />
            </form>
        </div>
    )
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSendOtp}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Signup
        </h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          disabled={sendingOtp}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          {sendingOtp ? "Sending..." : "Send OTP"}
        </button>
      </form>
    </div>
  );
};

export { SignupPage };
