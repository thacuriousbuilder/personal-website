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
              src="/images/me.jpeg"
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
            I&apos;m a Cybersecurity Software Engineer with hands-on experience integrating security controls 
            into the software development lifecycle. My journey started with a curiosity about how technology 
            works and evolved into a deep interest in understanding systems and how to protect them.
          </p>
          <p className="mb-4">
            With experience in secure coding, vulnerability assessment, cloud-based security services, and 
            DevSecOps practices, I work across engineering teams to develop, test, and deliver secure software 
            systems. When I&apos;m not diving into security, you&apos;ll find me building indie apps, reading 
            books that challenge my perspective, or exploring new technologies.
          </p>
          <p>
            My approach combines technical expertise with creative problem-solving, always asking &quot;why?&quot; 
            and &quot;how can we make this better?&quot; Whether it&apos;s building secure cloud architectures 
            or creating apps that solve real problems, I&apos;m driven by the challenge of making technology work 
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
            <p className="text-sm text-gray-500">May 2024 - December 2025</p>
            <p className="text-gray-700 mt-2">
              Advanced studies in cybersecurity principles, information assurance, risk management, and security architecture. 
              Focus on developing expertise in protecting digital assets and implementing robust security frameworks.
            </p>
          </div>
          
          <div className="border-l-4 border-black-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Lehman College</h3>
            <p className="text-gray-600 mb-1">Bachelor of Science in Computer Science</p>
            <p className="text-sm text-gray-500">January 2021 - May 2023</p>
            <p className="text-gray-700 mt-2">
              Comprehensive foundation in computer science fundamentals including algorithms, data structures, 
              software engineering, and system design. Developed strong analytical and problem-solving skills 
              through hands-on programming projects and theoretical coursework.
            </p>
          </div>
          
          <div className="border-l-4 border-black-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Cybersecurity Certifications</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium">CompTIA PenTest+</p>
                <p className="text-sm text-gray-500">Earned 2024</p>
              </div>
              <div>
                <p className="font-medium">CompTIA CySA+</p>
                <p className="text-sm text-gray-500">Earned 2024</p>
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
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="space-y-8">
          {/* Current Role */}
          <div className="relative">
            <div className="absolute left-4 top-0 w-3 h-3 bg-black rounded-full"></div>
            <div className="ml-12">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Volunteer Cloud Security Engineer</h3>
                <span className="text-sm text-gray-500">October 2024 - Present</span>
              </div>
              <p className="text-gray-600 mb-2">Company: Guineans Succeeding In America (GSA)</p>
              <ul className="text-gray-700 space-y-3">
                <li>• Built and deployed an internal analytics platform that enables leadership to analyze member demographics,
                      including student and professional populations, geographic distribution, employer affiliations, and educational
                      backgrounds.</li>
                <li>• Collaborated directly with organizational stakeholders to identify reporting needs, translate requirements into
                actionable dashboards, and improve data visibility for strategic planning and community engagement.</li>
                <li>• Improved the security and reliability of cloud-hosted systems supporting 500+ members by implementing role-based
                access control (RBAC), least-privilege IAM policies, and security best practices.</li>
              </ul>
            </div>
          </div>

          {/* Previous Role */}
          <div className="relative">
            <div className="absolute left-4 top-0 w-3 h-3 bg-black rounded-full"></div>
            <div className="ml-12">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <span className="text-sm text-gray-500">June 2022 - January 2024</span>
              </div>
              <p className="text-gray-600 mb-2">Company: Uvii</p>
              <ul className="text-gray-700 space-y-3">
                <li>• Collaborated on redesigning the React Native architecture for a college student communication platform, improving
                application performance by 35% and increasing user satisfaction by 30%.</li>
                <li>• Automated development and troubleshooting workflows using scripting and internal tooling improvements to reduce
                repetitive manual tasks and improve engineering efficiency.</li>
                <li>• Integrated multi-factor authentication (MFA), encrypted sensitive data in transit and at rest, and secured API
                communication to strengthen platform security and protect user information.</li>
              </ul>
            </div>
          </div>

          {/* Internship */}
          <div className="relative">
            <div className="absolute left-4 top-0 w-3 h-3 bg-black rounded-full"></div>
            <div className="ml-12">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Front-End Developer Intern</h3>
                <span className="text-sm text-gray-500">February 2022 - April 2022</span>
              </div>
              <p className="text-gray-600 mb-2">Company: Wall Street Journal</p>
              <ul className="text-gray-700 space-y-3">
                <li>• Built an internal machine learning-powered dashboard using Python and React to analyze editorial headlines,
                enabling newsroom teams to make more data-informed content decisions.</li>
                <li>• Collaborated with engineers and editorial stakeholders to develop internal tooling that streamlined content analysis
                and improved workflow efficiency.</li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 w-3 h-3 bg-black rounded-full"></div>
            <div className="ml-12">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
                <span className="text-sm text-gray-500">June 2021 - August 2021</span>
              </div>
              <p className="text-gray-600 mb-2">Company: Uvii</p>
              <ul className="text-gray-700 space-y-3">
                <li>• Refactored 50+ React Native components to support a new design system, improving maintainability and creating
                a more consistent, scalable application architecture.</li>
              </ul>
            </div>
          </div>
        </div>
        
      </section>

      {/* Projects Section */}
      {/* <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="space-y-8">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">End-of-Life (EOL) Directory</h3>
            <p className="text-sm text-gray-500 mb-3">AWS (Lambda, DynamoDB, S3, API Gateway, IAM, KMS, CloudTrail)</p>
            <ul className="text-gray-700 space-y-2">
              <li>• Designed and deployed a serverless, secure AWS architecture to manage vendor device lifecycle data (Cisco, Dell, Honeywell)</li>
              <li>• Implemented IAM least-privilege policies and KMS-managed encryption keys to protect sensitive lifecycle data in transit and at rest</li>
              <li>• Simulated realistic vendor data using JSON and AWS CLI batch-writes to DynamoDB, demonstrating knowledge of secure data ingestion and compliance logging via CloudTrail</li>
              <li>• Applied cloud security best practices, including input validation, audit logging, and serverless architecture isolation to minimize attack surface</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Crowdsource Weather App</h3>
            <p className="text-sm text-gray-500 mb-3">AWS (Cognito, API Gateway, Lambda, DynamoDB, WAF, KMS) - In Progress</p>
            <ul className="text-gray-700 space-y-2">
              <li>• Architecting a real-time, user-authenticated weather reporting platform where individuals submit localized &quot;feels-like&quot; weather updates</li>
              <li>• Integrated Amazon Cognito with multi-factor authentication (MFA) and JWT-based identity tokens to ensure secure user access and data integrity</li>
              <li>• Configured AWS WAF and Shield to protect API endpoints from injection and DDoS attacks, while GuardDuty monitors for anomalous activity and unauthorized access attempts</li>
              <li>• Designed DynamoDB encryption and access controls with fine-grained IAM roles and KMS encryption keys, ensuring least-privilege data protection and auditability through CloudTrail</li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Security & Software Assurance</h3>
            <div className="flex flex-wrap gap-2">
              {['Secure SDLC', 'Software Assurance', 'Vulnerability Assessment', 'Threat Modeling', 'Risk Assessment', 'Incident Response', 'Static & Dynamic Analysis', 'Penetration Testing'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Development & Programming</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'JavaScript', 'SQL', 'Bash', 'PowerShell', 'React', 'Node.js', 'TypeScript', 'React Native', 'Git', 'GitHub'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">DevSecOps & Cloud</h3>
            <div className="flex flex-wrap gap-2">
              {['CI/CD Pipelines', 'Terraform', 'Checkov', 'Trivy', 'Docker', 'AWS', 'Azure Sentinel', 'GuardDuty', 'CloudTrail', 'IAM'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Additional Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['Splunk', 'Microsoft Sentinel', 'Nmap', 'OWASP ZAP', 'Burp Suite', 'Lambda', 'DynamoDB', 'Cognito', 'KMS'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
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