import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'

import React from 'react'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Resume' })

const Resume = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold">Raphael C Chookagian</h1>
      <br />
      <p className="text-lg font-semibold">Cybersecurity | Software Development</p>
      <p>
        <a href="github.com/cesarderio">github.com/cesarderio</a> |{' '}
        <a href="linkedin.com/in/raphaelchookagian">linkedin.com/raphaelchookagian</a>
      </p>
      <p>Seattle, WA | RaphaelChookagian@gmail.com | 206-455-4743</p>

      <hr className="my-4" />

      <p>
        Versatile security operations and software developer Specializing in full-stack JavaScript.
        Highly skilled and driven, with a background as a combat veteran with previous security
        clearance. Adaptable team player with international experience and advanced coursework
        knowledge.
      </p>
      <br />

      <h2 className="text-xl font-semibold">TECHNICAL SKILLS</h2>
      <ul className="list-disc pl-6">
        <br />
        <li>
          <b>Languages</b>: JavaScript, Python, Bash, Powershell, HTML5, CSS3, SQL
        </li>
        <br />
        <li>
          <b>Skills and Tools</b>: AWS, Autopsy, Azure, Bootstrap, BurpSuite, Cisco Packet Tracer,
          CTF, DBAN, Docker, DynamoDB, EC2, Elastic Beanstalk, Express, Excalidraw, Expo, Figma,
          Gatsby, Git, GitHub, Hashcat, Heroku, Hydra, Kali, Linux, MacOS, Maltego, Medusa,
          MetaSploit, Miro, MongoDB, Nessus, Netcat, Netlify, Nmap, Node, NoSQL, NPM, pfSense,
          PostgreSQL, Proxmox, React, Recon-ng, RDP, S3, Scapy, S.E.T., SNS SpiceWorks, Splunk, SQS,
          SSH, Svelte, Ubuntu, Veeam, Vercel, Virtualbox, VSCode, Vim, Windows, Windows Registry,
          WireShark
        </li>
        <br />
        <li>
          <b>Certification</b>: CompTIA ITF+
        </li>
      </ul>

      <br />
      <br />
      <h2 className="text-xl font-semibold">PROJECTS</h2>

      <div className="my-4">
        <h3 className="text-lg font-semibold">NVST, Sep 2023 - github.com/NVST</h3>
        <ul>
          <li>
            A Python-based script that simplifies the process of network scanning and reporting.
          </li>
          <li>
            Automated integration of Nikto, gobuster, and enum4linux based on detected services.
          </li>
        </ul>
      </div>
      <div className="my-4">
        <h3 className="text-lg font-semibold">PassTrap, Jul 2023 - github.com/PassTrap</h3>
        <ul>
          <li>A user-friendly password manager application built using Python and Tkinter.</li>
          <li>
            Provides a secure solution for storing & managing passwords for websites & services.
          </li>
        </ul>
      </div>
      <div className="my-4">
        <h3 className="text-lg font-semibold">DreamHub, Feb 2023 - github.com/DJRMZ</h3>
        <ul>
          <li>
            Mobile application to track sleep and utilize AI to create images of users’ dreams.
          </li>
          <li>Built with React Native, Expo, Clerk, Supabase, NativeWind, and UI Kitten.</li>
        </ul>
      </div>
      <div className="my-4">
        <h3 className="text-lg font-semibold">KnonSense, May 2023 - github.com/KnonSense</h3>
        <ul>
          <li>
            Simulated the transitioning of a growing company into an office with an integrated
            Network and Security.
          </li>
          <li>
            Built with VirtualBox, Ubuntu, GitHub, Windows and pfSense VMs, and Cisco Packet Tracer.
          </li>
        </ul>
      </div>
      <div className="my-4">
        <h3 className="text-lg font-semibold">GXTechnic, Jun 2023 - github.com/GXtechnic</h3>
        <ul>
          <li>
            Simulated the integration of other businesses into the existing company cloud
            infrastructure.
          </li>
          <li>Built with AWS, pfSense, Windows, Windows Active Directory and OpenSwan.</li>
        </ul>
      </div>

      <h2 className="text-xl font-semibold">EDUCATION</h2>
      <ul className="list-disc pl-6">
        <br />
        <li>Code Fellows, Seattle, WA</li>
        <ul className="list-disc pl-6">
          <li>Certificate - Cybersecurity Engineering - 2023</li>
          <li>Certificate - Advanced Software Development in Full-Stack JavaScript - 2023</li>
        </ul>
        <br />
        <li>Art Institute of Seattle, Seattle, WA</li>
        <ul className="list-disc pl-6">
          <li>Associate of Applied Arts Degree</li>
        </ul>
      </ul>

      <br />
      <h2 className="text-xl font-semibold">EXPERIENCE</h2>
      <ul className="list-disc pl-6">
        <br />
        <li>
          CodeFellows, Seattle, WA, Teaching Assistant, Oct 2023 – Present
          <ul className="list-disc pl-6">
            <li>Mentor and assist students in learning cybersecurity and software development.</li>
            <li>Work with instructors to optimize teaching methods and assess student progress.</li>
          </ul>
        </li>
        <br />
        <li>
          Nordstrom, Seattle, WA, Photographer, Oct 2015 – Dec 2022
          <ul className="list-disc pl-6">
            <li>Maintained professional relationships with modeling and marketing agencies.</li>
            <li>Photographed high-quality images for both print and Internet distribution.</li>
          </ul>
        </li>
        <br />
        <li>
          Nordstrom, Seattle, WA, Digital Photography Technician, Oct 2012 – Oct 2015
          <ul className="list-disc pl-6">
            <li>Maintained and archived photographs on computers and backup servers.</li>
            <li>Assisted photographers in planning, staging and executing photoshoots.</li>
          </ul>
        </li>
        <br />
        <li>
          U.S. Army National Guard, Dec 2006 - Dec 2011
          <ul className="list-disc pl-6">
            <li>Team Leader, Operations Instructor</li>
            <li>Honorable Discharge</li>
          </ul>
        </li>
        <br />
        <li>
          U.S. Army, Jun 2003 – Dec 2006
          <ul className="list-disc pl-6">
            <li>Team Leader, Operation Iraqi Freedom</li>
            <li>Honorable Discharge</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Resume
