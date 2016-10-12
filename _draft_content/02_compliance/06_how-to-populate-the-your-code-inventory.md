

#Populating your code inventory#

##Overview##
Code.gov will provide a platform to find custom-developed source code intended both for Government-wide reuse and release as open source. Code.gov will compile an aggregate source code inventory from each of the covered federal agencies respective code inventories. In order to balance the need for flexibility to cover range of government code repositories against the  consistency necessary for searching and discovery, we've prepared a metadata schema to help catalog each agency's inventory. And as with all open source projects, the schema itself is a work in progres. As of this writing, we're released version 1.0 of the metadata schema.


Agencies should make the “code.json” available in the root folder of their website (e.g., https://www.gsa.gov/code.json), and code.gov will retrieve these JSON files daily (this is a similar approach to Project Open Data - Data.gov).

##Schema Specification##
Each covered agency should prepare an inventory of its custom-developed source code as described in Section 05: https://github.com/presidential-innovation-fellows/code-gov-web/blob/master/_draft_content/02_compliance/05-metadata-schema-definition.md

##How to build your agency's code inventory
###Step 1. Reach out to bureaus and offices
Federal agencies should include in their inventories custom code built or procured by subsidiary bureaus and offices.  The process of engaging bureaus and offices should help identify (1) what custom code is being developed, (2) who's developing, (3) where the code repositories are being hosted, and (4) what development environments are being used. Not only will this information be helpful in building the agency's inventories, but may also highlight areas for efficiency improvements and cost savings.

Do any of your bureaus have innovative or promising approaches to managing their code? Do they have an opportunity to connect and share best practices regarding custom-code development or procurement? When reaching out to subsidiary bureaus and offices take the opportunity to highlight success stories and build communities of practices across your agencies.

###Step 2. Find the source code
After reaching out to offices that procure or develop custom-code, you may have a better sense of the bounds of your source-code universe. Identify which, if any, source code hosting services your offices use (e.g., Bitbucket, GitHub, Gitlab). For each service or hosting option, you'll want to list (1) what code sets are located there, (2) the project name,  (3) what licenses exist for the source code, (4) access, and (5) the project owner organization. See below for example:


Source Code Hosting Service  | Project Name | Access |  License |  Organization |
 --------------------------- | ----------- | --------| -------- |--------|
  Bitbucket | GovProject | Open Source |License| |Bureau of Project Development|
 Gitlab | GovProject#2 |Government Reuse| Unknown| Office of Technology|
 Internal | TeamBuilding Thing |Open Source | CC0 (Waiver) |Office of Technology|
  Internal | TopSecret Project |Closed | Unknown |Office of Technology|


###Step 3. Compile a draft
From the table or list you've provided in the previous step, you will be able to create a rough draft of your agency's inventory. The more complete this table is, the easier it will be to compile the inventory. Regardless of whether the project is open source or closed subject to an exemption, each project should not only have an organizational owner but also a license which describes the terms of its use. For more information about licensing, please review our advice on licensing here: (insert link).

###Step 4. Prepare for public consumption

When preparing your agency's code inventory, make sure that you have included all the required fields as define by the latest version of the metadata schema(insert link). The code.gov discovery platform will validate each agency's inventory against the format of the metadata schema and invalid inventories will not be accepted. If your agency plans to close a repository to government reuse (and, by extension, open source discovery) the agency must provide a justification for relying on one of the five exceptions stated in the source code policy. Each exception must be approved and documented by the agency’s CIO in prior to public release of the agency's code inventory.

**Redactions - Government Reuse**
For code repositories limited to government reuse is permitted (not open source), agencies should redact the 'repository' field before compiling the inventory. Redaction can be as simple as removing the URL path to the project and replacing with the words '[REDACTED - FOR GOVERNMENT REUSE ONLY]'.

**Redactions - Closed**
Code repositories that are closed (i.e., not available as open source or government reuse) *should still be included in an agency's inventory*. For example, agencies should redact the 'repository' field, any project tags identifying the project or the source code, before compiling the inventory. Redaction can be as simple as removing the URL path to the project and replacing with the words '[REDACTED - PURSUANT TO EXEMPTION #].' Agencies should redact fields necessary to comply with the exceptions set forth in the source code policy. 

###Step 5. Build the schema

Using the resources provided below to automate the creation of your repository where possible. Once complete please name the file 'code.json' and  use [XYZ validation tool] to validate the inventory is compliant with the latest form of the latest code.gov metadata schema. Once confirmed please upload 'code.json' into the root folder (e.g. https://gsa.gov/code.json) of your agency's website. The code.gov discovery platform will scan the root directory daily for the latest version of the file.


#Frequently Asked Questions#
##How do I build my agency's inventory if my code is stored on ... [Github, Bitbucket, Gitlab, etc.] ?##

We will be preparing a list of tools and resources to accomodate mapping and conversion to the code.gov metadata schema. We will prioritize the development of those tools based on use/ demand by government agencies. 

*For Github*: 
Mapping tool: (insert link)
Other resources:
https://developer.github.com/v3/

*For Bitbucket*
Mapping tool: (insert link)
Other resources: https://confluence.atlassian.com/bitbucket/use-the-bitbucket-cloud-rest-apis-222724129.html

##What tools are available to help me build my agency's inventory?##
go here: [link to separate guidance on tools agencies can use to build inventory]




