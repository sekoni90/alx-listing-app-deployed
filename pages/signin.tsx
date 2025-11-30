import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SignInPage() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    resetCode: "",
    newPassword: "",
    confirmNewPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication here
    alert(isSignUp ? "Account created successfully!" : "Signed in successfully!");
    router.push("/");
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password here
    setResetEmailSent(true);
    setTimeout(() => {
      setIsForgotPassword(false);
      setIsResetPassword(true);
      setResetEmailSent(false);
    }, 2000);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmNewPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Handle reset password here
    alert("Password reset successfully!");
    setIsResetPassword(false);
    setFormData({...formData, resetCode: "", newPassword: "", confirmNewPassword: ""});
  };

  const handleSocialLogin = (provider: string) => {
    alert(`Signing in with ${provider}...`);
    // Handle social login here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 md:py-16">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        {/* Return Home Button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                {isForgotPassword || isResetPassword ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                )}
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              {isForgotPassword ? "Forgot Password?" : isResetPassword ? "Reset Password" : isSignUp ? "Create Account" : "Welcome Back!"}
            </h1>
            <p className="text-gray-600">
              {isForgotPassword 
                ? "Enter your email to receive a reset code" 
                : isResetPassword 
                ? "Enter the code and your new password"
                : isSignUp 
                ? "Join AlxListing and start your journey" 
                : "Sign in to access your account"}
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button
              type="button"
              onClick={() => handleSocialLogin("Google")}
              className="w-full flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all font-semibold text-gray-700"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin("Facebook")}
              className="w-full flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all font-semibold text-gray-700"
            >
              <svg className="w-5 h-5 mr-3" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Continue with Facebook
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin("GitHub")}
              className="w-full flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all font-semibold text-gray-700"
            >
              <svg className="w-5 h-5 mr-3" fill="#181717" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Continue with GitHub
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-medium">Or sign in with email</span>
            </div>
          </div>

          {/* Forgot Password Form */}
          {isForgotPassword && !isResetPassword && (
            <form onSubmit={handleForgotPassword} className="space-y-4">
              {resetEmailSent ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-center">
                  <svg className="w-12 h-12 text-green-600 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-green-700 font-semibold">Reset code sent to your email!</p>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="you@example.com"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 font-bold bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    Send Reset Code
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsForgotPassword(false)}
                    className="w-full text-gray-600 hover:text-gray-800 font-semibold transition-colors"
                  >
                    Back to Sign In
                  </button>
                </>
              )}
            </form>
          )}

          {/* Reset Password Form */}
          {isResetPassword && (
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Reset Code
                </label>
                <input
                  type="text"
                  required
                  value={formData.resetCode}
                  onChange={(e) => setFormData({...formData, resetCode: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Enter 6-digit code"
                  maxLength={6}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  required
                  value={formData.newPassword}
                  onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  required
                  value={formData.confirmNewPassword}
                  onChange={(e) => setFormData({...formData, confirmNewPassword: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 font-bold bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Reset Password
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsResetPassword(false);
                  setFormData({...formData, resetCode: "", newPassword: "", confirmNewPassword: ""});
                }}
                className="w-full text-gray-600 hover:text-gray-800 font-semibold transition-colors"
              >
                Back to Sign In
              </button>
            </form>
          )}

          {/* Regular Sign In/Sign Up Form */}
          {!isForgotPassword && !isResetPassword && (
            <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="••••••••"
              />
            </div>

            {isSignUp && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="••••••••"
                />
              </div>
            )}

            {!isSignUp && (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsForgotPassword(true)}
                  className="text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full px-6 py-4 font-bold bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              {isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>
          )}

          {!isForgotPassword && !isResetPassword && (
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                {isSignUp 
                  ? "Already have an account? Sign In" 
                  : "Don't have an account? Sign Up"}
              </button>
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="text-blue-600 hover:text-blue-700 font-semibold">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-blue-600 hover:text-blue-700 font-semibold">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
