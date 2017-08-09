# Changelog
All notable changes to the Code.gov metadata schema will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).



## [2.0.0] - 2017-08-08
### Added
- 'openSourceMeasureType' - The source code policy requires that 20% of an agency's code inventory must be made available as open-source. In order to do so, agencies must (1) identify a method for measuring the 20% metric and (2) apply the measurement method to the total enterprise code inventory to establish a baseline. 
- Start using "changelog.md" to track changes to the official schema file.
- 'permissions' - includes details about usage/licensing, replaces the openSourceProject/governmentWideReuseProject.
- 'measurementType' - agencies can choose from a list of enumerated descriptions of how they measure the 20% requirement.
- 'disclaimerText' - includes short, paragraph-long disclaimer language.
- 'disclaimerURL' - link to disclaimer language.
- 'laborHours' - number of hours involved in building the release.
- 'relatedCode'  - array of related source code repositories. 
- 'reusedCode'  - array of government software used in the release. 
- 'version' - added versioning to releases.

### Changed
- 'releases' - changed from 'projects' to reflect types of repositories that should be listed.
- 'licenses' - changed license from a URL string to an object which includes a URL and a name. Now part of 'permissions' object
 - 'repositoryURL' - changed from 'repository' for consistency. 
 - 'homepageURL' - changed from 'homepage' for consistency.
 - 'exemptionText' - now included within the 'permissions' object.
 - 'date' - changed from 'updated' object; removed metadataLastUpdated, lastCommit, and sourceCodeLastModified and replaced with created, lastModified, and metadataLastUpdated.

### Removed
- 'openSourceProject'
- 'governmentWideReuseProject' 
- 'exemption' - now included within the enumerated usageType options in the 'permissions' object.

## [1.0.1] - 2016-12-06
### Added
- 'version': The first official iteration of the code.gov metadata schema will be version 1.0.1. Adding a version number to the schema makes it easier to track and manage changes between versions of the metadata schema.

- 'exemptionText': This field allows agencies to provide a brief narrative explanation for the exception requested in the 'exemption' field.

### Changed
- 'organization': The 'organization' field, which holds the name of the sub-agency responsible for a particular repository or project, is now optional. It has also been moved into the ‘projects’ object. This enables agencies to identify the appropriate organization that owns the repository within the agency.

- 'projects': This guide previously referred to a 'project' field in the metadata schema, while the sample code.json referred to the plural form 'projects'. This guide has been updated to refer to the plural form ‘projects’.

- 'repository': The link to the open source repository will be considered a required field for all open source repositories. For repositories that are only available as government-wide reuse or are closed, pursuant to one of the exemptions, this field is not required.




