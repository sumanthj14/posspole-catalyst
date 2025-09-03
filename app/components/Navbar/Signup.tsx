"use client"
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

type UserType = 'student' | 'university' | 'corporate' | null;

interface FormData {
  // Student form
  fullName?: string;
  dateOfBirth?: string;
  gender?: string;
  email?: string;
  phone?: string;
  currentAddress?: string;
  institutionName?: string;
  studyLevel?: string;
  yearOfStudy?: string;
  fieldOfStudy?: string;
  additionalInfo?: string;
  
  // University form
  instituteName?: string;
  contactPerson?: string;
  city?: string;
  universityName?: string;
  websiteUrl?: string;
  contactFullName?: string;
  contactRole?: string;
  contactDepartment?: string;
  
  // Corporate form
  companyName?: string;
  industry?: string;
  companySize?: string;
  yearEstablished?: string;
  requirement?: string;
}

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState<UserType>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const closeModal = () => {
    setIsOpen(false);
    setSelectedUserType(null);
    setShowForm(false);
    setFormData({});
    setSubmitMessage('');
    setSubmitStatus(null);
    setIsSubmitting(false);
  };

  const openModal = (e?: React.MouseEvent) => {
        e?.preventDefault();
        e?.stopPropagation();
        console.log('Signup button clicked!');
        setIsOpen(true);
    };

  const handleUserTypeSelect = (type: UserType) => {
    setSelectedUserType(type);
  };

  const handleContinue = () => {
    if (selectedUserType) {
      setShowForm(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus(null);

    try {
      const form = e.target as HTMLFormElement;
      const formDataToSubmit = new FormData(form);
      
      const response = await fetch('https://formspree.io/f/xgvlwbze', {
        method: 'POST',
        body: formDataToSubmit,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! We&apos;ll get back to you shortly.');
        // Reset form after successful submission
        setTimeout(() => {
          closeModal();
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderUserTypeSelection = () => (
    <div className="text-center">
      <Dialog.Title as="h3" className="text-xl sm:text-2xl font-bold leading-6 text-blue mb-6 sm:mb-8 px-2">
        SignUp As
      </Dialog.Title>
      
      <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
        <label className="flex items-center p-3 sm:p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition-colors min-h-[3rem] sm:min-h-[3.5rem]">
          <input
            type="radio"
            name="userType"
            value="student"
            checked={selectedUserType === 'student'}
            onChange={() => handleUserTypeSelect('student')}
            className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span className="ml-3 text-base sm:text-lg font-medium text-blue">Student</span>
        </label>
        
        <label className="flex items-center p-3 sm:p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition-colors min-h-[3rem] sm:min-h-[3.5rem]">
          <input
            type="radio"
            name="userType"
            value="university"
            checked={selectedUserType === 'university'}
            onChange={() => handleUserTypeSelect('university')}
            className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span className="ml-3 text-base sm:text-lg font-medium text-blue">University / Institute</span>
        </label>
        
        <label className="flex items-center p-3 sm:p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition-colors min-h-[3rem] sm:min-h-[3.5rem]">
          <input
            type="radio"
            name="userType"
            value="corporate"
            checked={selectedUserType === 'corporate'}
            onChange={() => handleUserTypeSelect('corporate')}
            className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span className="ml-3 text-base sm:text-lg font-medium text-blue">Corporates</span>
        </label>
      </div>
      
      <div className="mt-6 sm:mt-8">
         <button
           onClick={handleContinue}
           disabled={!selectedUserType}
           className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-transparent hover:bg-navyblue hover:text-white disabled:bg-gray-300 disabled:cursor-not-allowed text-gray-700 font-semibold rounded-lg transition-colors border-2 border-gray-300 navbutton min-h-[3rem] sm:min-h-[3.5rem] text-base sm:text-lg"
         >
           Continue
         </button>
       </div>
    </div>
  );

  const renderStudentForm = () => (
    <div>
      <Dialog.Title as="h3" className="text-xl sm:text-2xl font-bold leading-6 text-blue mb-4 sm:mb-6 text-center px-2">
        Student SignUp
      </Dialog.Title>
      
      <form onSubmit={handleFormSubmit} action="https://formspree.io/f/xgvlwbze" method="POST" className="space-y-3 sm:space-y-4">
        <input type="hidden" name="userType" value="Student" />
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name (First & Last)
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName || ''}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base min-h-[2.75rem]"
            placeholder="Enter your full name"
          />
        </div>
        
        <div>
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth (DD/MM/YYYY)
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth || ''}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base min-h-[2.75rem]"
          />
        </div>
        
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
            Gender (Optional)
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender || ''}
            onChange={handleInputChange}
            className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base min-h-[2.75rem]"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email || ''}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base min-h-[2.75rem]"
            placeholder="Enter your email address"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone || ''}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base min-h-[2.75rem]"
            placeholder="Enter your phone number"
          />
        </div>
        
        <div>
          <label htmlFor="currentAddress" className="block text-sm font-medium text-gray-700 mb-1">
            Current Address (City, State, Country)
          </label>
          <input
            type="text"
            id="currentAddress"
            name="currentAddress"
            value={formData.currentAddress || ''}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your current address"
          />
        </div>
        
        <div className="border-t pt-4">
          <h4 className="text-lg font-semibold text-blue mb-3">Academic Information</h4>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="institutionName" className="block text-sm font-medium text-gray-700 mb-1">
                School / College / University Name
              </label>
              <input
                type="text"
                id="institutionName"
                name="institutionName"
                value={formData.institutionName || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base min-h-[2.75rem]"
                placeholder="Enter your institution name"
              />
            </div>
            
            <div>
              <label htmlFor="studyLevel" className="block text-sm font-medium text-gray-700 mb-1">
                Current Level of Study
              </label>
              <select
                id="studyLevel"
                name="studyLevel"
                value={formData.studyLevel || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base min-h-[2.75rem]"
              >
                <option value="">Select level of study</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="yearOfStudy" className="block text-sm font-medium text-gray-700 mb-1">
                Year of Study
              </label>
              <input
                type="text"
                id="yearOfStudy"
                name="yearOfStudy"
                value={formData.yearOfStudy || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., 1st Year, 2nd Year"
              />
            </div>
            
            <div>
              <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-700 mb-1">
                Field of Study / Major
              </label>
              <input
                type="text"
                id="fieldOfStudy"
                name="fieldOfStudy"
                value={formData.fieldOfStudy || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your field of study or major"
              />
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
            Share anything you&apos;d like us to know
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo || ''}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tell us anything else you&apos;d like us to know about you..."
          />
        </div>
        
        {submitMessage && (
          <div className={`p-4 rounded-lg text-center font-medium ${
            submitStatus === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-300' 
              : 'bg-red-100 text-red-800 border border-red-300'
          }`}>
            {submitMessage}
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-transparent hover:bg-navyblue hover:text-white text-gray-700 font-semibold rounded-lg transition-colors border-2 border-gray-300 navbutton disabled:opacity-50 disabled:cursor-not-allowed text-base min-h-[3rem] sm:min-h-[3.5rem]"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );

  const renderUniversityForm = () => (
    <div>
      <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-blue mb-6 text-center">
        University / Institute SignUp
      </Dialog.Title>
      
      <form onSubmit={handleFormSubmit} action="https://formspree.io/f/xgvlwbze" method="POST" className="space-y-4">
        <input type="hidden" name="userType" value="University" />
        <div className="border-b pb-4">
          <h4 className="text-lg font-semibold text-blue mb-3">Organization Information</h4>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="universityName" className="block text-sm font-medium text-gray-700 mb-1">
                University / Institute Name
              </label>
              <input
                type="text"
                id="universityName"
                name="universityName"
                value={formData.universityName || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter university/institute name"
              />
            </div>
            
            <div>
              <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 mb-1">
                Website URL
              </label>
              <input
                type="url"
                id="websiteUrl"
                name="websiteUrl"
                value={formData.websiteUrl || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://www.example.com"
              />
            </div>
          </div>
        </div>
        
        <div className="border-b pb-4">
          <h4 className="text-lg font-semibold text-blue mb-3">Primary Contact Details</h4>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="contactFullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="contactFullName"
                name="contactFullName"
                value={formData.contactFullName || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter contact person's full name"
              />
            </div>
            
            <div>
              <label htmlFor="contactRole" className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <input
                type="text"
                id="contactRole"
                name="contactRole"
                value={formData.contactRole || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter role/position"
              />
            </div>
            
            <div>
              <label htmlFor="contactDepartment" className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <input
                type="text"
                id="contactDepartment"
                name="contactDepartment"
                value={formData.contactDepartment || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter department"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter email address"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter phone number"
              />
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Information / Description (Optional)
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo || ''}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical text-base min-h-[5rem]"
            placeholder="Please provide any additional information about your university/institute or specific requirements..."
          />
        </div>
        
        {submitMessage && (
          <div className={`p-4 rounded-lg text-center font-medium ${
            submitStatus === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-300' 
              : 'bg-red-100 text-red-800 border border-red-300'
          }`}>
            {submitMessage}
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-transparent hover:bg-navyblue hover:text-white text-gray-700 font-semibold rounded-lg transition-colors border-2 border-gray-300 navbutton disabled:opacity-50 disabled:cursor-not-allowed text-base min-h-[3rem] sm:min-h-[3.5rem]"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );

  const renderCorporateForm = () => (
    <div>
      <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-blue mb-6 text-center">
        Corporate SignUp
      </Dialog.Title>
      
      <form onSubmit={handleFormSubmit} action="https://formspree.io/f/xgvlwbze" method="POST" className="space-y-4">
        <input type="hidden" name="userType" value="Corporate" />
        <div className="border-b pb-4">
          <h4 className="text-lg font-semibold text-blue mb-3">Organization Information</h4>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter company name"
              />
            </div>
            
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                Industry / Domain
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select industry/domain</option>
                <option value="IT">IT</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Finance">Finance</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Retail">Retail</option>
                <option value="Consulting">Consulting</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Media & Entertainment">Media & Entertainment</option>
                <option value="Transportation">Transportation</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 mb-1">
                Website URL
              </label>
              <input
                type="url"
                id="websiteUrl"
                name="websiteUrl"
                value={formData.websiteUrl || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://www.example.com"
              />
            </div>
            
            <div>
              <label htmlFor="yearEstablished" className="block text-sm font-medium text-gray-700 mb-1">
                Year Established
              </label>
              <input
                type="number"
                id="yearEstablished"
                name="yearEstablished"
                value={formData.yearEstablished || ''}
                onChange={handleInputChange}
                required
                min="1800"
                max={new Date().getFullYear()}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter year established"
              />
            </div>
          </div>
        </div>
        
        <div className="border-b pb-4">
          <h4 className="text-lg font-semibold text-blue mb-3">Primary Contact Details</h4>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="contactFullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="contactFullName"
                name="contactFullName"
                value={formData.contactFullName || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter contact person's full name"
              />
            </div>
            
            <div>
              <label htmlFor="contactRole" className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <input
                type="text"
                id="contactRole"
                name="contactRole"
                value={formData.contactRole || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter role/position"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter email address"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone || ''}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter phone number"
              />
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="requirement" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Information / Description (Optional)
          </label>
          <textarea
            id="requirement"
            name="requirement"
            value={formData.requirement || ''}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical text-base min-h-[5rem]"
            placeholder="Please provide any additional information about your company or specific requirements..."
          />
        </div>
        
        {submitMessage && (
          <div className={`p-4 rounded-lg text-center font-medium ${
            submitStatus === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-300' 
              : 'bg-red-100 text-red-800 border border-red-300'
          }`}>
            {submitMessage}
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-transparent hover:bg-navyblue hover:text-white text-gray-700 font-semibold rounded-lg transition-colors border-2 border-gray-300 navbutton disabled:opacity-50 disabled:cursor-not-allowed text-base min-h-[3rem] sm:min-h-[3.5rem]"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );

  const renderContent = () => {
    if (!showForm) {
      return renderUserTypeSelection();
    }
    
    switch (selectedUserType) {
      case 'student':
        return renderStudentForm();
      case 'university':
        return renderUniversityForm();
      case 'corporate':
        return renderCorporateForm();
      default:
        return renderUserTypeSelection();
    }
  };

  return (
    <>
      <div className="flex items-center">
        <button 
          type="button" 
          className='justify-end text-lg sm:text-xl font-semibold bg-transparent py-3 sm:py-4 px-4 sm:px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white text-gray-700 cursor-pointer min-h-[44px] sm:min-h-[48px] min-w-[80px] sm:min-w-[100px]'
          onClick={openModal}
          style={{ zIndex: 1000, position: 'relative' }}
        >
          SignUp
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[9999]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-2 sm:p-4 text-center py-4 sm:py-8">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm sm:max-w-md lg:max-w-lg transform rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 text-left align-middle shadow-xl transition-all relative max-h-[90vh] overflow-y-auto">
                  {/* Close button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-400 hover:text-gray-600 transition-colors p-2 sm:p-3 rounded-full hover:bg-gray-100 min-h-[44px] min-w-[44px] sm:min-h-[48px] sm:min-w-[48px] flex items-center justify-center"
                    aria-label="Close modal"
                  >
                    <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                  
                  {renderContent()}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Signup;