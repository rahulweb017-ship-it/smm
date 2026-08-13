import { useMemo, useState, useRef } from 'react'
import { projects, type Project } from '../data/siteData'
import { JewelleryCaseStudy } from './JewelleryCaseStudy'
import { ScaloCaseStudy } from './ScaloCaseStudy'
import { FalcoCaseStudy } from './FalcoCaseStudy'
import { RethinkCaseStudy } from './RethinkCaseStudy'
import { KhalsaCaseStudy } from './KhalsaCaseStudy'
import { JrcCaseStudy } from './JrcCaseStudy'
import { FibaxCaseStudy } from './FibaxCaseStudy'
import { EmmbrosCaseStudy } from './EmmbrosCaseStudy'
import { LuisCaseStudy } from './LuisCaseStudy'
import { GetSetGoCaseStudy } from './GetSetGoCaseStudy'
import { LimcoCaseStudy } from './LimcoCaseStudy'
import { ReplugCaseStudy } from './ReplugCaseStudy'
import { RoofingCaseStudy } from './RoofingCaseStudy'
import { ArvindCaseStudy } from './ArvindCaseStudy'
import { PclCaseStudy } from './PclCaseStudy'
import { AuroCoinCaseStudy } from './AuroCoinCaseStudy'

const projectDescriptions: Record<string, string> = {
  'The Forsted Vault': 'Exquisite fine jewellery and custom master craftsmanship',
  'Scalo Restaurant': 'Premium restaurant branding and social campaign creative',
  'Falco Power E-Drive': 'Next-generation electric drive and smart power systems',
  'Rethink UX/UI Studio': 'Creative digital product agency and UX/UI design portfolio',
  'Khalsa Immigration': 'Global visa strategy, Express Entry, and client success campaigns',
  'JRC Home Remodeling': 'Luxury kitchen, bath, and whole-home remodeling craftsmanship',
  'Fibax Pharma': 'Pharmaceutical branding, Ayurvedic tonics, and 3D motion packaging',
  'Emmbros Autocomp': 'Automotive closed die forgings, axle spindles, and heavy components',
  'Imperial Branding Agency': 'Short-form video creation, brand activation films, and viral media direction',
  'Get Set Go Digital': 'UI/UX design, native mobile apps, technical SEO, and social media marketing',
  'Limco Logistics': 'Global air freight charters, vehicle transport by air, and trade campaigns',
  'Replug': 'Next-gen TWS earbuds, smart charging series, and e-commerce brand collateral',
  'Roofing Bucks County': 'Residential roof replacements, GAF shingle systems, gutters, and emergency repair',
  'Arvind Herbal Labs': 'Ayurvedic formulations, bio-herbal feed additives, and veterinary healthcare',
  'PCL Dental & Skin Care': 'Sedation dentistry, cosmetic smile design, and clinical skincare campaigns',
  'AuroCoin': 'Decentralized autonomous currency, smart contracts, and yield protocol',
  'Doxy': 'Sleek, telemedicine-optimized patient engagement',
  'Rival': 'High-performance metrics and analytics dashboard',
  'Office Space': 'Dynamic real estate leasing and booking workspace',
  'Bam Course': 'Premium culinary art mastery and gourmet training',
  'Secured Fi': 'Military-grade cryptographic asset custody platform',
  'Form Assembly': 'Intelligent enterprise data and form builder',
  'Everafter': 'Collaborative customer onboarding and success portals',
  'Lever Edge': 'Automated algorithmic trading and edge leverage',
  'Robin': 'Centralized cloud team coordination and tracking',
  'Code de la route': 'Interactive adaptive learning for driver education',
  'Resolute': 'Secure multi-tenant software delivery pipelines',
  'Daml': 'Unified multi-party smart contract execution layer',
  '56K Cloud': 'High-density scalable Kubernetes clustering',
  'Good Use': 'Social impact measurement and ESG auditing tools',
  'Kargo': 'Decentralized logistic logistics fleet management'
}

interface ProjectCardProps {
  project: Project
  index: number
  getColSpanClass: (index: number) => string
  onViewProject?: () => void
}

function ProjectCard({ project, index, getColSpanClass, onViewProject }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    setHovered(true)
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    setHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <li
      className={`test-reveal relative grid gap-[5px] md:gap-[10px] ${getColSpanClass(index)}`}
    >
      <div
        onClick={onViewProject}
        onMouseEnter={project.video ? handleMouseEnter : undefined}
        onMouseLeave={project.video ? handleMouseLeave : undefined}
        className="view-project-tooltip group relative cursor-pointer rounded-[15px] lg:rounded-[30px] overflow-hidden duration-[0.3s]"
      >
        <img
          className="w-full h-auto object-cover aspect-[680/510] rounded-[15px] lg:rounded-[30px] duration-500 group-hover:scale-[1.03]"
          alt={project.title}
          src={project.image}
          loading="lazy"
        />

        {project.video && (
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover rounded-[15px] lg:rounded-[30px] duration-500 transition-opacity ${
              hovered ? 'opacity-100 scale-[1.03]' : 'opacity-0'
            }`}
            playsInline
            preload="auto"
            loop
            muted
          >
            <source src={project.video} type="video/mp4" />
          </video>
        )}

        {/* Hover overlay with standard premium View Project button */}
        <div
          className={`absolute inset-0 bg-[#28282e]/20 flex items-center justify-center transition-opacity duration-300 z-20 ${
            hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <span className="bg-white text-[#28282e] text-[11px] md:text-[13px] font-black uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md transform translate-y-2 group-hover:translate-y-0 transition duration-300">
            View Project
          </span>
        </div>
        
        <span className="absolute top-[10px] md:top-[24px] left-[10px] md:left-[20px] bg-white text-[8px] md:text-[14px] font-bold px-[10px] md:px-[20px] py-[4px] md:py-[10px] rounded-[30px] shadow-sm text-[#28282e] z-10">
          {project.category}
        </span>
      </div>
      
      <div className="grid font-bold cursor-pointer mt-1" onClick={onViewProject}>
        <span className="leading-none text-[14px] md:text-[20px] text-[#28282e]">{project.title}</span>
        <span className="text-[12px] md:text-[14px] text-[#949ea9] leading-[1.3] font-medium mt-1">
          {projectDescriptions[project.title] || 'Bringing care a step closer'}
        </span>
      </div>
    </li>
  )
}

export function WorkSection() {
  const [active, setActive] = useState('All')
  const [isJewelleryStudyOpen, setIsJewelleryStudyOpen] = useState(false)
  const [isScaloStudyOpen, setIsScaloStudyOpen] = useState(false)
  const [isFalcoStudyOpen, setIsFalcoStudyOpen] = useState(false)
  const [isRethinkStudyOpen, setIsRethinkStudyOpen] = useState(false)
  const [isKhalsaStudyOpen, setIsKhalsaStudyOpen] = useState(false)
  const [isJrcStudyOpen, setIsJrcStudyOpen] = useState(false)
  const [isFibaxStudyOpen, setIsFibaxStudyOpen] = useState(false)
  const [isEmmbrosStudyOpen, setIsEmmbrosStudyOpen] = useState(false)
  const [isLuisStudyOpen, setIsLuisStudyOpen] = useState(false)
  const [isGetSetGoStudyOpen, setIsGetSetGoStudyOpen] = useState(false)
  const [isLimcoStudyOpen, setIsLimcoStudyOpen] = useState(false)
  const [isReplugStudyOpen, setIsReplugStudyOpen] = useState(false)
  const [isRoofingStudyOpen, setIsRoofingStudyOpen] = useState(false)
  const [isArvindStudyOpen, setIsArvindStudyOpen] = useState(false)
  const [isPclStudyOpen, setIsPclStudyOpen] = useState(false)
  const [isAuroCoinStudyOpen, setIsAuroCoinStudyOpen] = useState(false)

  const filterList1 = ['All', 'IT Solutions Marketing', 'Short Video Content Creation', 'Bank & Finance', 'Blockchain', 'Education', 'E-Commerce', 'Food & Drinks']
  const filterList2 = ['Immigration', 'Healthcare', 'Animal Health', 'Dental & Skin Care', 'Home Remodeling', 'UX/UI', 'E-Bikes', 'Logistics', 'Roofing Services', 'Jewellery', 'Industry']

  const visibleProjects = useMemo(
    () => (active === 'All' ? projects : projects.filter((project) => project.category === active)),
    [active],
  )

  const getColSpanClass = (index: number) => {
    return index < 6 ? 'lg:col-span-3' : 'lg:col-span-2'
  }

  return (
    <div id="work">
      {/* Filters Header Section */}
      <section className="site-container projectGridFilter relative z-[20] font-bold text-[12px] lg:text-[14px] grid grid-cols-[40%_30%_30%] md:grid-cols-[36%_25%_15%_12%] lg:grid-cols-[3%_33%_25%_15%_12%] md:gap-[3%] pt-[80px] lg:pt-[100px] mb-[40px] lg:mb-[70px]">
        <div className="hidden lg:block lg:col-start-2 font-[800]">
          <span className="block mb-2 text-[#28282e]">Companies we help grow</span>
          <svg width="206" height="7" viewBox="0 0 206 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5.5H203L198.857 1" stroke="#28282e" strokeWidth="2" />
          </svg>
        </div>
        
        <div className="h3 text-[30px] bigger font-[800] text-[#28282e] leading-none self-start">Work.</div>
        
        <div>
          <ul className="projectGridFilterIndustry flex flex-col gap-2">
            {filterList1.map((filter) => (
              <li
                key={filter}
                role="button"
                tabIndex={0}
                onClick={() => setActive(filter)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') setActive(filter)
                }}
                className={`cursor-pointer transition-colors duration-300 ${
                  active === filter ? 'on text-[#28282e]' : 'text-[#949ea9] hover:text-[#28282e]'
                }`}
              >
                {filter}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <ul className="projectGridFilterType flex flex-col gap-2">
            {filterList2.map((filter) => (
              <li
                key={filter}
                role="button"
                tabIndex={0}
                onClick={() => setActive(filter)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') setActive(filter)
                }}
                className={`cursor-pointer transition-colors duration-300 ${
                  active === filter ? 'on text-[#28282e]' : 'text-[#949ea9] hover:text-[#28282e]'
                }`}
              >
                {filter}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="site-container mb-[80px] lg:mb-[150px]">
        <ul className="ProjectsList grid gap-[25px_14px] md:gap-[40px_20px] grid-cols-2 lg:grid-cols-6 items-start">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              getColSpanClass={getColSpanClass}
              onViewProject={
                project.title === 'The Forsted Vault'
                  ? () => setIsJewelleryStudyOpen(true)
                  : project.title === 'Scalo Restaurant'
                  ? () => setIsScaloStudyOpen(true)
                  : project.title === 'Falco Power E-Drive'
                  ? () => setIsFalcoStudyOpen(true)
                  : project.title === 'Rethink UX/UI Studio'
                  ? () => setIsRethinkStudyOpen(true)
                  : project.title === 'Khalsa Immigration'
                  ? () => setIsKhalsaStudyOpen(true)
                  : project.title === 'JRC Home Remodeling'
                  ? () => setIsJrcStudyOpen(true)
                  : project.title === 'Fibax Pharma'
                  ? () => setIsFibaxStudyOpen(true)
                  : project.title === 'Emmbros Autocomp'
                  ? () => setIsEmmbrosStudyOpen(true)
                  : project.title === 'Imperial Branding Agency'
                  ? () => setIsLuisStudyOpen(true)
                  : project.title === 'Get Set Go Digital'
                  ? () => setIsGetSetGoStudyOpen(true)
                  : project.title === 'Limco Logistics'
                  ? () => setIsLimcoStudyOpen(true)
                  : project.title === 'Replug'
                  ? () => setIsReplugStudyOpen(true)
                  : project.title === 'Roofing Bucks County'
                  ? () => setIsRoofingStudyOpen(true)
                  : project.title === 'Arvind Herbal Labs'
                  ? () => setIsArvindStudyOpen(true)
                  : project.title === 'PCL Dental & Skin Care'
                  ? () => setIsPclStudyOpen(true)
                  : project.title === 'AuroCoin'
                  ? () => setIsAuroCoinStudyOpen(true)
                  : undefined
              }
            />
          ))}
        </ul>
      </section>

      {/* Jewellery Case Study Presentation Overlay */}
      <JewelleryCaseStudy
        isOpen={isJewelleryStudyOpen}
        onClose={() => setIsJewelleryStudyOpen(false)}
      />

      {/* Scalo Case Study Presentation Overlay */}
      <ScaloCaseStudy
        isOpen={isScaloStudyOpen}
        onClose={() => setIsScaloStudyOpen(false)}
      />

      {/* Falco Power E-Drive Case Study Presentation Overlay */}
      <FalcoCaseStudy
        isOpen={isFalcoStudyOpen}
        onClose={() => setIsFalcoStudyOpen(false)}
      />

      {/* Rethink UX/UI Studio Case Study Presentation Overlay */}
      <RethinkCaseStudy
        isOpen={isRethinkStudyOpen}
        onClose={() => setIsRethinkStudyOpen(false)}
      />

      {/* Khalsa Immigration Case Study Presentation Overlay */}
      <KhalsaCaseStudy
        isOpen={isKhalsaStudyOpen}
        onClose={() => setIsKhalsaStudyOpen(false)}
      />

      {/* JRC Home Remodeling Case Study Presentation Overlay */}
      <JrcCaseStudy
        isOpen={isJrcStudyOpen}
        onClose={() => setIsJrcStudyOpen(false)}
      />

      {/* Fibax Pharma Case Study Presentation Overlay */}
      <FibaxCaseStudy
        isOpen={isFibaxStudyOpen}
        onClose={() => setIsFibaxStudyOpen(false)}
      />

      {/* Emmbros Autocomp Case Study Presentation Overlay */}
      <EmmbrosCaseStudy
        isOpen={isEmmbrosStudyOpen}
        onClose={() => setIsEmmbrosStudyOpen(false)}
      />

      {/* Imperial Branding Agency Short Video Case Study Presentation Overlay */}
      <LuisCaseStudy
        isOpen={isLuisStudyOpen}
        onClose={() => setIsLuisStudyOpen(false)}
      />

      {/* Get Set Go Digital IT Solutions Case Study Presentation Overlay */}
      <GetSetGoCaseStudy
        isOpen={isGetSetGoStudyOpen}
        onClose={() => setIsGetSetGoStudyOpen(false)}
      />

      {/* Limco Logistics Air & Freight Case Study Presentation Overlay */}
      <LimcoCaseStudy
        isOpen={isLimcoStudyOpen}
        onClose={() => setIsLimcoStudyOpen(false)}
      />

      {/* Replug Smart Audio & Accessories Case Study Presentation Overlay */}
      <ReplugCaseStudy
        isOpen={isReplugStudyOpen}
        onClose={() => setIsReplugStudyOpen(false)}
      />

      {/* Roofing Bucks County Case Study Presentation Overlay */}
      <RoofingCaseStudy
        isOpen={isRoofingStudyOpen}
        onClose={() => setIsRoofingStudyOpen(false)}
      />

      {/* Arvind Herbal Labs Case Study Presentation Overlay */}
      <ArvindCaseStudy
        isOpen={isArvindStudyOpen}
        onClose={() => setIsArvindStudyOpen(false)}
      />

      {/* PCL Dental & Skin Care Case Study Presentation Overlay */}
      <PclCaseStudy
        isOpen={isPclStudyOpen}
        onClose={() => setIsPclStudyOpen(false)}
      />

      {/* AuroCoin Blockchain Case Study Presentation Overlay */}
      <AuroCoinCaseStudy
        isOpen={isAuroCoinStudyOpen}
        onClose={() => setIsAuroCoinStudyOpen(false)}
      />
    </div>
  )
}




