import React, { useState } from 'react';

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    location: '',
    resume: null
  });

  const jobOpenings = [
    {
      id: 1,
      title: 'Dairy Farmer',
      icon: 'fa-tractor',
      type: 'Full-time',
      location: 'Multiple Locations',
      department: 'Farming Operations',
      description: 'Join our sustainable farming team to manage daily dairy operations, care for livestock, and ensure high-quality milk production.',
      responsibilities: [
        'Manage daily milking operations and herd health',
        'Monitor feed quality and nutrition plans',
        'Maintain farm equipment and facilities',
        'Implement sustainable farming practices',
        'Track production data and animal records'
      ],
      requirements: [
        '2+ years experience in dairy farming',
        'Knowledge of modern milking systems',
        'Understanding of animal welfare standards',
        'Physical stamina for outdoor work',
        'Valid driver\'s license'
      ]
    },
    {
      id: 2,
      title: 'Factory Process Worker',
      icon: 'fa-industry',
      type: 'Full-time',
      location: 'Production Facility',
      department: 'Manufacturing',
      description: 'Work in our state-of-the-art dairy processing facility to produce high-quality cheese, butter, and dairy products.',
      responsibilities: [
        'Operate dairy processing equipment',
        'Monitor production line quality',
        'Follow food safety protocols',
        'Package finished dairy products',
        'Maintain clean work environment'
      ],
      requirements: [
        'Food handling experience preferred',
        'Attention to detail',
        'Ability to stand for long periods',
        'Team player mentality',
        'Basic math skills'
      ]
    },
    {
      id: 3,
      title: 'Delivery Driver',
      icon: 'fa-truck',
      type: 'Full-time',
      location: 'Regional Routes',
      department: 'Logistics',
      description: 'Join our distribution team to deliver fresh dairy products to restaurants, hotels, and retail partners.',
      responsibilities: [
        'Plan and execute delivery routes',
        'Maintain cold chain integrity',
        'Load and unload dairy products',
        'Complete delivery documentation',
        'Provide excellent customer service'
      ],
      requirements: [
        'Valid commercial driver\'s license',
        'Clean driving record',
        'Experience with refrigerated trucks',
        'Good time management skills',
        'Customer service orientation'
      ]
    },
    {
      id: 4,
      title: 'Machine Operator',
      icon: 'fa-microchip',
      type: 'Full-time',
      location: 'Processing Plant',
      department: 'Technical Operations',
      description: 'Operate and maintain specialized dairy processing machinery for cheese production and packaging lines.',
      responsibilities: [
        'Set up and calibrate processing equipment',
        'Monitor machine performance',
        'Perform routine maintenance',
        'Troubleshoot technical issues',
        'Ensure production quality standards'
      ],
      requirements: [
        'Technical certification preferred',
        'Experience with industrial machinery',
        'Problem-solving skills',
        'Safety-conscious mindset',
        'Basic computer literacy'
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    alert(`Application submitted for ${selectedJob.title}!\nWe'll review your application and contact you soon.`);
    setShowApplicationForm(false);
    setSelectedJob(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      location: '',
      resume: null
    });
  };

  if (showApplicationForm && selectedJob) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dairy-cream to-white pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <button 
            onClick={() => setShowApplicationForm(false)}
            className="mb-6 text-primary-600 hover:text-primary-700 flex items-center gap-2 transition"
          >
            <i className="fas fa-arrow-left"></i> Back to Careers
          </button>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-primary-600 p-6 text-white">
              <h1 className="text-2xl font-bold">Apply for {selectedJob.title}</h1>
              <p className="mt-2 opacity-90">Please fill out the application form below</p>
            </div>
            
            <form onSubmit={handleSubmitApplication} className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location/City *</label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    placeholder="New York, NY"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Relevant Experience *</label>
                <textarea
                  name="experience"
                  required
                  rows="4"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="Describe your relevant work experience, skills, and qualifications..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Resume/CV *</label>
                <input
                  type="file"
                  name="resume"
                  required
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition transform hover:scale-105"
                >
                  Submit Application <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="career" className="min-h-screen bg-gradient-to-br from-dairy-cream to-white pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center reveal mb-12">
          <span className="text-primary-600 font-semibold tracking-wide">JOIN OUR TEAM</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-gray-800">Careers at Pure Dairy</h1>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Be part of a global dairy leader committed to quality, sustainability, and innovation.
            We're looking for passionate individuals to join our growing family.
          </p>
        </div>

        {/* Why Join Us Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 reveal">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-chart-line text-2xl text-primary-600"></i>
            </div>
            <h3 className="font-bold text-lg">Growth Opportunities</h3>
            <p className="text-gray-500 text-sm mt-2">Advance your career with training and development</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-shield-alt text-2xl text-primary-600"></i>
            </div>
            <h3 className="font-bold text-lg">Safe Workplace</h3>
            <p className="text-gray-500 text-sm mt-2">Commitment to health, safety, and wellbeing</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-globe text-2xl text-primary-600"></i>
            </div>
            <h3 className="font-bold text-lg">Global Team</h3>
            <p className="text-gray-500 text-sm mt-2">Work with international dairy experts</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-leaf text-2xl text-primary-600"></i>
            </div>
            <h3 className="font-bold text-lg">Sustainable Mission</h3>
            <p className="text-gray-500 text-sm mt-2">Contribute to eco-friendly dairy practices</p>
          </div>
        </div>

        {/* Job Openings */}
        <div className="reveal">
          <h2 className="text-3xl font-bold text-center mb-8">Current Openings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <i className={`fas ${job.icon} text-3xl`}></i>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{job.type}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span><i className="fas fa-map-marker-alt mr-1"></i> {job.location}</span>
                    <span><i className="fas fa-building mr-1"></i> {job.department}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  
                  <details className="mt-3 group">
                    <summary className="cursor-pointer text-primary-600 font-semibold hover:text-primary-700">
                      View Responsibilities & Requirements
                    </summary>
                    <div className="mt-3 pl-4 space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Key Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {job.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>
                  
                  <button
                    onClick={() => handleApply(job)}
                    className="mt-6 w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2"
                  >
                    Apply Now <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden reveal">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <i className="fas fa-heart text-4xl text-primary-600 mb-4"></i>
              <h3 className="text-2xl font-bold mb-4">Our Work Culture</h3>
              <p className="text-gray-600 mb-4">
                At Pure Dairy International, we believe our employees are our greatest asset. 
                We foster an inclusive, collaborative environment where innovation thrives and 
                every team member contributes to our mission of delivering excellence.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>Comprehensive training programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>Career advancement pathways</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>Diverse and inclusive workplace</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>Employee recognition programs</span>
                </div>
              </div>
            </div>
            <div 
              className="h-64 md:h-auto bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format")',
                backgroundSize: 'cover'
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;