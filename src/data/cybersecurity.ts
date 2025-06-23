export interface CybersecurityProject {
  id: string
  title: string
  description: string
  category: 'SIEM' | 'Threat Hunting' | 'Tools' | 'Research' | 'Writeups'
  date: string
  status: 'published' | 'draft' | 'in-progress'
  tags: string[]
  content?: {
    summary: string
    keyFindings?: string[]
    tools?: string[]
    techniques?: string[]
  }
  links?: {
    googleDoc?: string
    github?: string
    demo?: string
    report?: string
  }
  media?: Array<{
    src: string
    alt?: string
    caption?: string
  }>
}

export const cybersecurityProjects: CybersecurityProject[] = [
  {
    id: 'network-merger',
    title: 'Network Merger and Implementation Plan',
    description: ' As the cybersecurity professional for Company A, I have been assigned to address the security issues and challenges involved in merging the networks of Company B following its acquisition.',
    category: 'Research',
    date: '09/06/2024',
    status: 'published',
    tags: ['Network Security', 'Risk Assessment', 'Security Architecture', 'Threat Analysis'],
    content: {
      summary: 'To ensure that Company B\'s infrastructure can integrate with Company A\'s existing infrastructure. Risk-based decisions will be involved for a smooth transition, utilizing the vulnerability scans, network diagrams, and assessments from Company B, comparing them with Company A\'s risk analysis and network diagram to develop a secure network design to merge the two networks successfully. In the implementation of security designs addressing cloud capabilities/adoption, ensuring compliance, and also budget constraints will need to be taken into account. This paper will give company executives a possible solution to implement the merger.',
      keyFindings: [
        ' Critical Vulnerability Management Issues',
        'Zero Trust Architecture Implementation',
        'Regulatory Compliance Challenges',
        'Cloud Adoption and Migration'
      ],
      tools: ['AWS', 'Network Topology Diagram',],
      techniques: ['Zero Trust Architecture', 'Defense in Depth', 'Vulnerability Scanning']
    },
    links: {
      googleDoc: 'https://docs.google.com/document/d/1cvAj4KNnS03oCdV0ws7tO2JdL3n7JvYNUsHFhsfYCHA/edit?usp=sharing',
    }
  },
  {
    id: 'penetration-testing',
    title: 'Penetration Testing Report',
    description: 'As an information security analyst at Pruhart Tech, I have been tasked to ensure that the testing plan aligns with the security controls within the information environment of Western View Hospital.',
    category: 'Research',
    date: '04/01/2025',
    status: 'published',
    tags: ['Penetration Testing', 'Security Assessment', 'Healthcare Security', 'Compliance Testing'],
    content: {
      summary: 'We will be utilizing Pruhart Tech\'s information security penetration testing method with the cooperation of Western View Hospital\'s IT staff to coordinate a safe and complete test within the approved scope. There will be two testing phases: internal assets and external assets. Western View Hospital has made clear the extent of testing that should be done, and the focus will be on the network level and social engineering. This paper will give an analysis of the penetration testing plan, in addition to any recommendations and solutions.',
      keyFindings: [
        'Lack of Structured Testing Methodology',
        'Insufficient HIPAA Compliance Focus',
        'Inadequate Social Engineering Testing Scope',
        'Missing Operational Considerations',
        'Network Security Vulnerabilities'

      ],
      tools: ['Nmap', 'SET', 'Burp Suite', 'Vishing'],
      techniques: ['Network Segmentation', 'Whitelist access controls', 'NIST SP 800-115']
    },
    links: {
      googleDoc: 'https://docs.google.com/document/d/1PP1dQOOBX1-bTOBH7VkNeHOMrMD6VyFgUNjHpKM28pY/edit?usp=sharing',
    }
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security',
    description: 'As the cloud security engineer at SWBTL LLC, I have been tasked with addressing the security concerns and lack of documentation left behind by a disgruntled employee.',
    category: 'Research',
    date: '06/16/2025',
    status: 'published',
    tags: ['Cloud Security', 'Documentation', 'Employee Offboarding', 'Security Assessment'],
    content: {
      summary: 'SWBTL LLC contracts with the government and processes card payments daily. So it must comply with certain regulations such as the Federal Information Security Modernization Act (FISMA) and the Payment Card Industry Data Security Standard (PCI DSS). With the upcoming NIST SP 800-53 assessment, it\'s critical to secure the organization\'s security posture. Upon assessing and verifying the current vulnerabilities, I will recommend and implement configuration changes that align with business requirements and comply with regulatory guidelines to ensure adherence. This paper will give the company an overview of its current cloud environment and recommendations and mitigations to improve the security posture of the organization.',
      keyFindings: [
        'Role-Based Access Control (RBAC) Misalignment',
        'Azure Key Vault Security Gaps',
        'Backup and Recovery Configuration Issues',
        'Compliance and Regulatory Requirements',
        'Shared Responsibility Model Risks'

      ],
      tools: ['Azure Active Directory', 'Azure Key Vault', 'Azure Storage', 'Azure Monitor'],
      techniques: ['FISMA', 'PCI DSS', 'NIST SP 800-53']
    },
    links: {
      googleDoc: 'https://docs.google.com/document/d/1_11dQOOBX1-bTOBH7VkNeHOMrMD6VyFgUNjHpKM28pY/edit?usp=sharing',
    }
  }
]

export function getProjectById(id: string): CybersecurityProject | undefined {
  return cybersecurityProjects.find(project => project.id === id)
}

export function getAllProjects(): CybersecurityProject[] {
  return cybersecurityProjects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getProjectsByCategory(category: CybersecurityProject['category']): CybersecurityProject[] {
  return cybersecurityProjects.filter(project => project.category === category)
} 