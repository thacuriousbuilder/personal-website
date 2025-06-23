import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Navigation */}
      <section className="mb-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-gray-600 hover:text-[#008080] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* Header */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
          {/* Profile Picture */}
          <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/images/aboutme.jpeg"
              alt="Profile picture"
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Header Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-black mb-4">
              A curious mind exploring the intersection of technology and human possibilities.
            </p>
            <p className="text-sm font-bold text-gray-600">
             &quot;The greatest joy is taking the production of your thoughts and imprinting your will into reality&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Background Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Background</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-4">
            I&apos;m a Software Engineer transitioning to cybersecurity with 3+ years of secure development experience. My journey started with 
            a curiosity about how technology works and evolved into a deep interest in understanding systems and how to protect them.
          </p>
          <p className="mb-4">
            When I&apos;m not diving into security, you&apos;ll find me building indie apps, 
            reading books that challenge my perspective, or exploring new technologies. I believe in the power 
            of continuous learning and the importance of passing on knowledge with the ones that follow.
          </p>
          <p>
            My approach combines technical expertise with creative problem-solving, always asking &quot;why?&quot; 
            and &quot;how can we make this better?&quot; Whether it&apos;s building tools, or 
            creating apps that solve real problems, I&apos;m driven by the challenge of making technology work 
            for people, not against them.
          </p>
          <p className='text-gray-600 mt-4'>
            There&apos;s a beautiful quote from Michelangelo that I abide by: <span className="font-bold">&quot;Criticize by creating&quot;</span>
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-black-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Western Governors University</h3>
            <p className="text-gray-600 mb-1">Master of Science in Cybersecurity and Information Assurance</p>
            <p className="text-sm text-gray-500">2024 - present</p>
            <p className="text-gray-700 mt-2">
              Advanced studies in cybersecurity principles, information assurance, risk management, and security architecture. 
              Focus on developing expertise in protecting digital assets and implementing robust security frameworks.
            </p>
          </div>
          <div className="space-y-6">
          <div className="border-l-4 border-black-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Lehman College</h3>
            <p className="text-gray-600 mb-1">Bachelor of Science in Computer Science</p>
            <p className="text-sm text-gray-500">2020 - 2023</p>
            <p className="text-gray-700 mt-2">
              Comprehensive foundation in computer science fundamentals including algorithms, data structures, 
              software engineering, and system design. Developed strong analytical and problem-solving skills 
              through hands-on programming projects and theoretical coursework.
            </p>
          </div>
          </div>
          
          <div className="border-l-4 border-black-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Cybersecurity Certifications</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium">CompTIA PenTest+</p>
                <p className="text-sm text-gray-500">04/30/2025</p>
              </div>
              <div>
                <p className="font-medium">CompTIA CYSA+</p>
                <p className="text-sm text-gray-500">10/15/2024</p>
              </div>
              <div>
                <p className="font-medium">ISC2 CC</p>
                <p className="text-sm text-gray-500">06/24/2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work History Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Work History</h2>
        <div className="space-y-8">
          {/* Current Role */}
          <div className="relative">
            <div className="absolute left-4 top-0 w-3 h-3 bg-black rounded-full"></div>
            <div className="ml-12">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <span className="text-sm text-gray-500">August 2021 - January 2024</span>
              </div>
              <p className="text-gray-600 mb-2">Company: Uvii</p>
              <ul className="text-gray-700 space-y-3">
                <li>•  Collaborated with a cross-functional team to redesign mobile application architecture using React Native, resulting
                in a 35% improvement in app speed and a 30% increase in user satisfaction based on post-implementation surveys</li>
                <li>• Implemented robust security measures in the mobile app, including encryption for data at rest and in transit,
                secure API communication, and protection against common mobile app vulnerabilities</li>
                <li>• Refactored 50+ components from old mobile app to new app, incorporating secure coding practices and input
                validation to prevent injection attacks</li>
                <li>• Mentored 3 interns on secure coding practices, collectively contributing 100+ lines of secure code to the GitHub
                code base</li>
              </ul>
            </div>
          </div>

          {/* Previous Role */}
          <div className="relative">
            <div className="absolute left-4 top-0 w-3 h-3 bg-black rounded-full"></div>
            <div className="ml-12">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                <span className="text-sm text-gray-500">May 2021 - August 2021</span>
              </div>
              <p className="text-gray-600 mb-2">Company: Innov Makiti</p>
              <ul className="text-gray-700 space-y-1">
                <li>• Developed a product listing feature with filter and sort controls, enhancing user navigation and product
                discoverability, ensuring proper input sanitization to prevent SQL injection attacks</li>
                <li>• Incorporated advanced search functionality, including autocomplete and synonym matching, increasing search
                success rates by 50%</li>
                <li>• Managed client relations, gathering feedback and iterating on product design to enhance user satisfaction</li>
                <li>• Assisted in incident response and forensic analysis</li>
              </ul>
            </div>
          </div>

          {/* Internship */}
          <div className="relative">
              <div className="absolute left-4 top-0 w-3 h-3 bg-black rounded-full"></div>
            <div className="ml-12">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Front-End Developer Intern</h3>
                <span className="text-sm text-gray-500">January 2021 - April 2022</span>
              </div>
              <p className="text-gray-600 mb-2">Company: Wall Street Journal</p>
              <ul className="text-gray-700 space-y-1">
                <li>•Developed an internal ML dashboard tool using Python and React that analyzed headlines and suggested
                improvements</li>
                <li>• Assisted in migrating core site components to Next.js, improving page load times by 29%</li>
                <li>• Resolved 10 bugs that were pushed to the production environments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Security</h3>
            <div className="flex flex-wrap gap-2">
              {['SIEM', 'EDR', 'Threat Hunting', 'Incident Response', 'Penetration Testing', 'Vulnerability Assessment', 'Forensics', 'Malware Analysis'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Development</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'AWS', 'Docker', 'Git', 'TypeScript', 'React Native', 'Expo', 'Supabase', 'React Native Elements'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 