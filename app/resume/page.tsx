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
      <p className="text-lg font-semibold">Cybersecurity | Software Development</p>
      <p>
        <a href="github.com/cesarderio">github.com/cesarderio</a> |{' '}
        <a href="linkedin.com/in/raphaelchookagian">linkedin.com/raphaelchookagian</a>
      </p>
      <p>Seattle, WA | RaphaelChookagian@gmail.com | 206-455-4743</p>

      <hr className="my-4" />

      <h2 className="text-xl font-semibold">
        Versatile security operations and software developer
      </h2>
      <p>
        Specializing in full-stack JavaScript. Highly skilled and driven, with a background as a
        combat veteran with previous security clearance. Adaptable team player with international
        experience and advanced coursework knowledge.
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
          <b>Skills and Tools</b>: Linux, Windows, Mac, VS Code, Vim, Git, GitHub, Chart.js, React,
          MongoDB, Node.js, Express.js, Netlify, Heroku, NPM, Bootstrap, React-Bootstrap/Native,
          PostgreSQL, Gatsby, Expo, AWS, DynamoDB, EC2, Elastic Beanstalk, S3, SQS, SNS, Svelte,
          Miro, Figma, RDP, SSH, Ubuntu, SpiceWorks, Windows Registry, pfSense, DBAN, Cisco Packet
          Tracer, Virtualbox, Proxmox, Docker, Splunk, Kali Linux, Autopsy, WireShark, Burp Suite,
          Nessus, MetaSploit, NoSQL
        </li>
        <br />
        <li>
          <b>Certification</b>: CompTIA ITF+
        </li>
      </ul>

      <br />
      <h2 className="text-xl font-semibold">PROJECTS</h2>
      <div className="my-4">
        <h3 className="text-lg font-semibold">DreamHub, Feb 2023 - github.com/DJRMZ</h3>
        <p>
          Mobile application to track sleep and utilize AI to create images of users’ dreams. Built
          with React Native, Expo, Clerk, Supabase, NativeWind, and UI Kitten.
        </p>
      </div>
      <div className="my-4">
        <h3 className="text-lg font-semibold">KnonSense, May 2023 - github.com/KnonSense</h3>
        <p>
          Simulated the transitioning of a growing company into an office with an integrated Network
          and Security. Built with VirtualBox, Ubuntu, GitHub, Windows and pfSense VMs, and Cisco
          Packet Tracer.
        </p>
      </div>
      <div className="my-4">
        <h3 className="text-lg font-semibold">GXTechnic, Jun 2023 - github.com/GXtechnic</h3>
        <p>
          Simulated the integration of other businesses into the existing company cloud
          infrastructure. Built with AWS, pfSense, Windows, Windows Active Directory, and OpenSwan.
        </p>
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
