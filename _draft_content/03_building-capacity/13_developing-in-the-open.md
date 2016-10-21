# Building Security into your Open Source Practice

One of the most common concerns raised by agencies related to opening code or developing in the open is information security.  There are a number of specific things that any open source project (governmental or otherwise) can do to protect the security of its sensitive information and its production systems. There are also quite a few myths and misconceptions about security in relation to open source that are worth debunking.

## Opening an existing codebase
The first thing to understand when considering open sourcing code is that some types of code and data are categorically inappropriate to be made public.  Secure open source practices protect these kinds of content from publication.  

While there are always exceptions and the list isn't exhaustive, agencies should carefully consider how to limit the risk that the following types of information could be make public as part of an open source offering:
 - passwords
 - private keys
 - server configurations, network topology, and similar information
 - national security and other sensitive information
 - PII
 - content such as inappropriate or offensive language, that could create reputational harm

^ someone smarter than me has created a list like this. NIST?



## Developing in the Open 

Section 5.2.B of the Source Code Policy states that agencies should develop custom code in the open:

`
Engage in Open Development: Software that is custom-developed for or by agencies should, to the extent possible and appropriate, be developed using open development practices. These practices provide an environment in which OSS can flourish and be repurposed. This principle, as well as the one below for releasing source code, include distributing a minimum viable product as OSS; engaging the public before official release; and drawing upon the public’s knowledge to make improvements to the project.
`
At the most basic level, developing in the open means that developers maintain the up-to-date working copy of their code on a publicly accessible repository.  







### For developers


- Make your main codebase open.
 - even if a piece of something needs to remain private not everything needs to remain so.
 - Develop modularly
- Don't bifurcate your project where you don't have to.
   - i.e. content
   - slows you down
    - reviews
    - workflow
    - design
    - versioning

### For Comms
- Work with your Comms team
  - you can still have your "big reveal"
- set expectations at the outset of a project.
  - declare a project "open" in your project charter.
  - staff for feedback and engagement with the public throughout the project
    - BENEFITS: early feedback

### For Security
    - if for some reason api keys etc do get published developing in the open makes that less risky by allowing that to happen earlier.


## Organizational best practices
 - make sure there is a team (real, virtual) in your org who keep track of the open source and monitor and remediate issues, including escalating for security and including process/training improvements. this should be written down and there should be procedures.
 - 
 
## Workflow tips for security
  - gitignore
  - educate your team
  - environmental variables
  - know your tools (aws, github), know the monitoring and notification services they provide, and make sure someone receives those emails.
  - tools
   - commit hooks
     - 18F research on this.
 
# Myth Busting
- security through obscurity
- 
  
# Case Studies
- N-CATS pshtt - https://github.com/dhs-ncats/pshtt







## Licensing


## Developing in the open 

- benefits of public feedback


## Technical practices
  - Code versioning
  - REQUIRED 7.4 Use common third-party repository platforms 
  - REQUIRED Integrate OSS practices into your agency's day-to-day operations (7.1)




## Communications
- you can still have your big reveal
  - case study




- open by default
 - even if a piece of something needs to remain private not everything needs to remain so.
  - modular devlopment
  - set expectations at the outset of a project.
    - declare a project "open" in your project charter.
    - staff for feedback and engagement with the public throughout the project
      - BENEFITS: early feedback
  - don't bifurcate your project where you don't have to.
   - i.e. content
   - slows you down
    - reviews
    - workflow
    - design
    - versioning
- what can't be made public?
 - passowrds
 - sensitive data
 - 





  #Github
## Have a set of practices around using github
- low sensitivity
  - procurement 
  - PII
  - 
- 2fa
- use an avatar
- have a public contact email address
- have your actual name in there
- if you're using your work computer - set gitconfig so that it's using your work email


# Communications and community engagement
Community contributions
- it has to be an expectation that comms won't review every interaction online.
- accounts also associated with personal activities

# Security
It is important to integrate strong security practices into your open source development practices to ensure that only code that is appropriate to share publicly is published.  Read here for more on this topic.
