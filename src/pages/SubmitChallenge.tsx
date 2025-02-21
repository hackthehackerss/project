import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';
import { ArrowLeft, Construction, Rocket } from 'lucide-react';
import Navigation from '../components/Navigation';

function SubmitChallenge() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const recaptchaRef = useRef(null);

  const onSubmit = async (data) => {
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      alert('Please verify that you are not a robot.');
      return;
    }

    try {
      // Send email using EmailJS
      await emailjs.send(
        'YOUR_EMAILJS_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_EMAILJS_TEMPLATE_ID', // Replace with your EmailJS template ID
        data,
        'YOUR_EMAILJS_USER_ID' // Replace with your EmailJS user ID
      );
      console.log('Email sent successfully!');
      alert('Your challenge has been submitted successfully!');
      reset(); // Reset the form after submission
    } catch (err) {
      console.error('Failed to send email:', err);
      alert('Failed to submit the challenge. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <Navigation darkMode={true} onToggleDarkMode={() => {}} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-primary-dark/30 rounded-lg p-8 border border-primary-blue/20">
          <div className="text-center">
            <Construction className="w-16 h-16 text-primary-blue mx-auto mb-6 animate-bounce" />
            <h1 className="text-3xl font-bold mb-4">Challenge Submission</h1>
            <p className="text-xl text-gray-400 mb-8">Submit your cybersecurity challenge</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                  <input
                    type="text"
                    {...register('firstName', { required: 'First name is required' })}
                    className="w-full bg-background/50 border border-primary-blue/20 rounded-lg p-3 text-white"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                  <input
                    type="text"
                    {...register('lastName', { required: 'Last name is required' })}
                    className="w-full bg-background/50 border border-primary-blue/20 rounded-lg p-3 text-white"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Username</label>
                <input
                  type="text"
                  {...register('username', { required: 'Username is required' })}
                  className="w-full bg-background/50 border border-primary-blue/20 rounded-lg p-3 text-white"
                />
                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">LinkedIn Profile</label>
                <input
                  type="url"
                  {...register('linkedin', { required: 'LinkedIn profile is required' })}
                  className="w-full bg-background/50 border border-primary-blue/20 rounded-lg p-3 text-white"
                />
                {errors.linkedin && <p className="text-red-500 text-sm mt-1">{errors.linkedin.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">GitHub Repository Link</label>
                <input
                  type="url"
                  {...register('github', { required: 'GitHub repository link is required' })}
                  className="w-full bg-background/50 border border-primary-blue/20 rounded-lg p-3 text-white"
                />
                {errors.github && <p className="text-red-500 text-sm mt-1">{errors.github.message}</p>}
                <p className="text-sm text-gray-400 mt-2">
                  Ensure the GitHub repository includes a full walkthrough of the challenge.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Difficulty</label>
                <select
                  {...register('difficulty', { required: 'Difficulty is required' })}
                  className="w-full bg-background/50 border border-primary-blue/20 rounded-lg p-3 text-white"
                >
                  <option value="">Select difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
                {errors.difficulty && <p className="text-red-500 text-sm mt-1">{errors.difficulty.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                <select
                  {...register('category', { required: 'Category is required' })}
                  className="w-full bg-background/50 border border-primary-blue/20 rounded-lg p-3 text-white"
                >
                  <option value="">Select category</option>
                  <option value="soc">SOC</option>
                  <option value="dfir">DFIR</option>
                  <option value="malware-analysis">Malware Analysis</option>
                </select>
                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
              </div>

              {/* reCAPTCHA Integration */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your reCAPTCHA site key
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-blue text-white font-semibold py-3 rounded-lg hover:bg-secondary-blue transition-colors"
              >
                Submit Challenge
              </button>
            </form>

            <Link
              to="/challenges"
              className="inline-flex items-center text-primary-blue hover:text-secondary-blue transition-colors mt-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Challenges
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitChallenge;


// sign up to: https://www.emailjs.com/
//Create an email template with placeholders for the form fields (e.g., {{firstName}}, {{lastName}}, etc.).
//Get your Service ID, Template ID, and User ID from the EmailJS dashboard.
//Replace the following placeholders in the code with your actual EmailJS credentials:
//YOUR_EMAILJS_SERVICE_ID
//YOUR_EMAILJS_TEMPLATE_ID
//YOUR_EMAILJS_USER_ID

//Run your application and test the form submission. The data should be sent to your email (hackthehackerss@yahoo.com) via EmailJS.
