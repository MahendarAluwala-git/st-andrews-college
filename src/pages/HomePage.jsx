import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { 
  AcademicCapIcon, 
  BuildingLibraryIcon, 
  UserGroupIcon, 
  BriefcaseIcon,
  ArrowRightIcon,
  CalendarIcon,
  NewspaperIcon,
  StarIcon,
  SparklesIcon,
  CheckBadgeIcon,
  ChartBarIcon,
  GlobeAltIcon,
  TrophyIcon,
  ChevronRightIcon,
  HeartIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const HomePage = () => {
  const stats = [
    { value: '48+', label: 'Years of Excellence', icon: TrophyIcon, color: 'from-yellow-400 to-yellow-600' },
    { value: '5000+', label: 'Students', icon: UserGroupIcon, color: 'from-blue-400 to-blue-600' },
    { value: '50+', label: 'Courses', icon: AcademicCapIcon, color: 'from-green-400 to-green-600' },
    { value: '300+', label: 'Faculty', icon: BuildingLibraryIcon, color: 'from-purple-400 to-purple-600' },
    { value: '95%', label: 'Placements', icon: BriefcaseIcon, color: 'from-red-400 to-red-600' },
    { value: '25K+', label: 'Alumni', icon: GlobeAltIcon, color: 'from-indigo-400 to-indigo-600' },
  ];

  const courses = [
    {
      name: 'B.Sc. Computer Science',
      duration: '3 Years',
      fees: '₹90,000/year',
      seats: 120,
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Technology',
      description: 'Comprehensive program covering programming, algorithms, databases, and software engineering.',
      highlights: ['AI & ML', 'Industry Projects', 'Internship']
    },
    {
      name: 'MBA',
      duration: '2 Years',
      fees: '₹1,40,000/year',
      seats: 80,
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Management',
      description: 'Focus on leadership, strategy, and business analytics with industry mentors.',
      highlights: ['Dual Specialization', 'Industry Mentors', 'Global Exposure']
    },
    {
      name: 'B.Com',
      duration: '3 Years',
      fees: '₹60,000/year',
      seats: 150,
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Commerce',
      description: 'Comprehensive commerce education with specialization in accounting and finance.',
      highlights: ['CA/CS Integration', 'Financial Markets', 'Taxation']
    },
    {
      name: 'BBA',
      duration: '3 Years',
      fees: '₹75,000/year',
      seats: 100,
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Business',
      description: 'Foundation in business management with practical exposure to corporate world.',
      highlights: ['Summer Internships', 'Industry Visits', 'Soft Skills']
    },
    {
      name: 'M.Sc. Mathematics',
      duration: '2 Years',
      fees: '₹1,00,000/year',
      seats: 50,
      image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Science',
      description: 'Advanced mathematics with focus on pure and applied mathematics.',
      highlights: ['Research Focus', 'Data Science Track', 'Teaching Assistantship']
    },
    {
      name: 'BA Economics',
      duration: '3 Years',
      fees: '₹55,000/year',
      seats: 100,
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Arts',
      description: 'Understanding economic theories, policies, and their real-world applications.',
      highlights: ['Policy Analysis', 'Econometrics', 'Research Projects']
    },
  ];

  const news = [
    {
      title: 'Admissions Open 2025-26',
      date: 'Jan 15, 2025',
      category: 'Admission',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      excerpt: 'Applications now open for all undergraduate and postgraduate programs.',
    },
    {
      title: 'Annual Sports Day 2025',
      date: 'Feb 10, 2025',
      category: 'Event',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      excerpt: 'Join us for the annual sports day celebration with various competitions.',
    },
    {
      title: 'Placement Drive 2025',
      date: 'Mar 5, 2025',
      category: 'Placement',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      excerpt: 'Top companies visiting campus for placements. Register now!',
    },
    {
      title: 'Research Conference',
      date: 'Apr 12, 2025',
      category: 'Academic',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      excerpt: 'International conference on emerging technologies in computer science.',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'B.Sc. CS, 2024',
      content: 'St. Andrew\'s provided me with the perfect platform to launch my career. The faculty and infrastructure are world-class.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Rahul Verma',
      role: 'MBA, 2023',
      content: 'The placement cell is amazing! Got placed in my dream company with an excellent package.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Anjali Patel',
      role: 'M.Sc. Math, 2024',
      content: 'Research facilities are top-notch. The professors are very supportive and knowledgeable.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      name: 'Arjun Singh',
      role: 'BBA, 2024',
      content: 'Great campus life, excellent infrastructure, and supportive staff. The entrepreneurship cell helped me start my own venture.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
  ];

  const events = [
    { name: 'Tech Fest 2025', date: 'Mar 20, 2025', time: '10:00 AM', venue: 'Main Auditorium', image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
    { name: 'Cultural Night', date: 'Mar 25, 2025', time: '6:00 PM', venue: 'Open Air Theatre', image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
    { name: 'Guest Lecture', date: 'Apr 5, 2025', time: '11:00 AM', venue: 'Seminar Hall', image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
  ];

  const campusLife = [
    {
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Modern Labs',
      count: '30+ Labs'
    },
    {
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Sports Complex',
      count: '10+ Sports'
    },
    {
      image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Library',
      count: '50K+ Books'
    },
    {
      image: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      title: 'Student Life',
      count: '20+ Clubs'
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* ===== HERO SECTION - FULLY RESPONSIVE ===== */}
      <section className="relative w-full h-[100vh] min-h-[500px] max-h-[1080px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/90 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Campus"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full 
                          px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6 
                          text-xs sm:text-sm border border-white/20">
              <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-yellow-300" />
              <span className="font-medium">Est. 1975 • NAAC A+</span>
            </div>
            
            {/* Title */}
            <h1 className="font-bold text-white mb-4 sm:mb-6
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                         leading-tight max-w-4xl mx-auto px-2">
              Shape Your Future at <span className="text-primary-300 block sm:inline">St. Andrew's College</span>
            </h1>
            
            {/* Description */}
            <p className="text-white/90 mb-6 sm:mb-8
                        text-sm sm:text-base md:text-lg lg:text-xl
                        max-w-2xl mx-auto px-4">
              Join a community of learners, leaders, and innovators. Excellence in education since 1975.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4">
              <Link 
                to="/admissions" 
                className="bg-white text-primary-600 hover:bg-secondary-100
                         w-full sm:w-auto text-center px-6 py-3 sm:px-8 sm:py-3.5
                         text-sm sm:text-base font-semibold rounded-lg
                         transition-all duration-300 transform hover:scale-105
                         shadow-lg hover:shadow-xl"
              >
                Apply Now
                <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
              </Link>
              <Link 
                to="/about" 
                className="bg-transparent text-white border-2 border-white hover:bg-white/10
                         w-full sm:w-auto text-center px-6 py-3 sm:px-8 sm:py-3.5
                         text-sm sm:text-base font-semibold rounded-lg
                         transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
            
            {/* Stats */}
            <div className="hidden md:flex justify-center gap-6 lg:gap-8 xl:gap-12 mt-12 lg:mt-16 pt-8 border-t border-white/20 w-full max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white">48+</div>
                <div className="text-xs lg:text-sm text-white/60 uppercase tracking-wider mt-1">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white">5000+</div>
                <div className="text-xs lg:text-sm text-white/60 uppercase tracking-wider mt-1">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white">50+</div>
                <div className="text-xs lg:text-sm text-white/60 uppercase tracking-wider mt-1">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white">95%</div>
                <div className="text-xs lg:text-sm text-white/60 uppercase tracking-wider mt-1">Placements</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-1.5 sm:w-1.5 sm:h-2 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION - FULLY RESPONSIVE ===== */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-secondary-50 rounded-xl p-4 sm:p-5 md:p-6 text-center hover:shadow-lg transition-shadow">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-3 rounded-xl bg-gradient-to-br ${stat.color} 
                              flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-900 mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-secondary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COURSES SECTION - FULLY RESPONSIVE ===== */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="badge badge-primary mb-2 sm:mb-3 md:mb-4 inline-block text-xs sm:text-sm">Popular Programs</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-2 sm:mb-3 md:mb-4">
              Featured Courses
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-secondary-600 max-w-2xl mx-auto px-4">
              Choose from a wide range of programs designed for your success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {courses.slice(0, 6).map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="w-full h-40 sm:h-44 md:h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-primary-100 text-primary-800 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-medium">
                      {course.category}
                    </span>
                    <span className="text-xs sm:text-sm text-secondary-500">{course.duration}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-secondary-900 mb-2 line-clamp-1">
                    {course.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary-600 mb-3 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="space-y-1 text-xs sm:text-sm text-secondary-600 mb-3">
                    <p className="flex items-center">
                      <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-primary-500" />
                      Duration: {course.duration}
                    </p>
                    <p className="flex items-center">
                      <UserGroupIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-primary-500" />
                      Seats: {course.seats}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-primary-600">{course.fees}</span>
                    <Link 
                      to="/academics"
                      className="text-xs sm:text-sm text-primary-600 font-medium hover:text-primary-700 flex items-center"
                    >
                      Learn More
                      <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Link to="/academics" className="btn-primary inline-block px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base">
              View All Programs
              <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CAMPUS LIFE SECTION - FULLY RESPONSIVE ===== */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-2 sm:mb-3 md:mb-4">
              Campus Life
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-secondary-600 max-w-2xl mx-auto px-4">
              Experience the vibrant life at St. Andrew's
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {campusLife.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl cursor-pointer h-48 sm:h-56 md:h-64">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              flex items-end p-4 sm:p-5 md:p-6">
                  <div>
                    <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold">{item.title}</h3>
                    <p className="text-white/80 text-xs sm:text-sm">{item.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Link to="/campus-life" className="btn-outline inline-block px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base">
              Explore Campus Life
              <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== NEWS & EVENTS SECTION - FULLY RESPONSIVE ===== */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Latest News */}
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-900">Latest News</h2>
                <NewspaperIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" />
              </div>
              <div className="space-y-3 sm:space-y-4">
                {news.slice(0, 3).map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-100 to-primary-200 
                                    rounded-lg flex-shrink-0 flex items-center justify-center text-2xl sm:text-3xl">
                        {item.image ? '📰' : '📰'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="badge badge-primary text-[10px] sm:text-xs">{item.category}</span>
                          <span className="text-[10px] sm:text-xs text-secondary-500">{item.date}</span>
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold mb-1 line-clamp-1">{item.title}</h3>
                        <p className="text-[10px] sm:text-xs text-secondary-600 line-clamp-2">{item.excerpt}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-900">Upcoming Events</h2>
                <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" />
              </div>
              <div className="space-y-3 sm:space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="bg-white rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="text-center min-w-[45px] sm:min-w-[50px]">
                        <div className="text-lg sm:text-xl font-bold text-primary-600">
                          {event.date.split(' ')[1]}
                        </div>
                        <div className="text-[10px] sm:text-xs text-secondary-500">
                          {event.date.split(' ')[0]}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xs sm:text-sm font-semibold">{event.name}</h3>
                        <p className="text-[10px] sm:text-xs text-secondary-600">
                          {event.time} • {event.venue}
                        </p>
                      </div>
                      <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Link to="/news-events" className="btn-primary inline-block px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base">
              View All News & Events
              <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>
{/* ===== PRINCIPAL'S MESSAGE SECTION - FULLY RESPONSIVE ===== */}
<section className="py-12 sm:py-16 md:py-20 bg-white">
  <div className="container-custom px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
      {/* Principal's Image */}
      <div className="order-2 lg:order-1">
        <div className="relative">
          <div className="w-full max-w-md mx-auto">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl overflow-hidden shadow-xl">
              <div className="w-full h-full flex items-center justify-center">
                <UserCircleIcon className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 text-white/80" />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-100 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-200 rounded-full -z-10"></div>
          </div>
        </div>
      </div>

      {/* Principal's Message Content */}
      <div className="order-1 lg:order-2">
        <span className="badge badge-primary mb-3 sm:mb-4 inline-block text-xs sm:text-sm">From the Principal's Desk</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-4 sm:mb-6">
          Message from Our Principal
        </h2>
        
        <div className="space-y-4 sm:space-y-5">
          <p className="text-sm sm:text-base text-secondary-600 leading-relaxed italic">
            "Education is not the filling of a pail, but the lighting of a fire. At St. Andrew's College, 
            we believe in nurturing not just academic excellence, but the complete development of every student.
          </p>
          
          <p className="text-sm sm:text-base text-secondary-600 leading-relaxed">
            Our commitment to quality education, combined with a focus on values and character building, 
            prepares our students to face the challenges of the modern world with confidence and competence. 
            We strive to create an environment where every student can discover their potential, pursue their 
            passions, and emerge as responsible global citizens.
          </p>
          
          <p className="text-sm sm:text-base text-secondary-600 leading-relaxed">
            With state-of-the-art infrastructure, experienced faculty, and a holistic approach to education, 
            we ensure that our students are well-equipped to excel in their chosen fields and make meaningful 
            contributions to society.
          </p>
        </div>

        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-secondary-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl">
              Dr.
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-secondary-900">Dr. James Anderson</h3>
              <p className="text-xs sm:text-sm text-primary-600">Principal, St. Andrew's College</p>
              <p className="text-xs text-secondary-500 mt-1">Ph.D. (Education) · 25+ years experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* ===== TESTIMONIALS SECTION - FULLY RESPONSIVE ===== */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-2 sm:mb-3 md:mb-4">
              What Our Students Say
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-secondary-600 max-w-2xl mx-auto px-4">
              Hear from our students about their experience at St. Andrew's
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-secondary-50 rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold">{testimonial.name}</h3>
                    <p className="text-[10px] sm:text-xs text-secondary-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-[10px] sm:text-xs text-secondary-600 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION - FULLY RESPONSIVE ===== */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-primary-600">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join St. Andrew's College and become part of a legacy of excellence. 
            Applications for 2025-26 are now open.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link
              to="/admissions"
              className="bg-white text-primary-600 hover:bg-secondary-100
                       w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5
                       text-sm sm:text-base font-semibold rounded-lg
                       transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
              <ArrowRightIcon className="w-4 h-4 ml-2 inline" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-white border-2 border-white hover:bg-white/10
                       w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5
                       text-sm sm:text-base font-semibold rounded-lg
                       transition-all duration-300 transform hover:scale-105"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;