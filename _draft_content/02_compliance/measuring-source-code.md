# Measuring Source Code

As part of the [Open Source Pilot](link) the Source Code Policy requires that: 

> Each agency shall release as OSS at least 20 percent of its new custom-developed code each year.

Agencies are not required to use a specific method of measuring their code but should use a single measure and apply it consistently and in a reproducible manner.

The Open Source community and Federal developers have suggested a number of options that agencies may choose from. These include:
- source lines of code
- repository disk size
- number of self-contained modules
- cost
- number of software projects
- system certification and accreditation boundaries

## Choosing a measure
The list above is not exhaustive and agencies should choose the most appropriate measure for their organization. When choosing a measure, agencies should consider the following factors:
- Automation. Is it possible to collect the data for the measure automatically or automate aspects of the collection process?  For example can a script be developed to query your agency's version control system for the size of some or all of your codebases?
- Existing processes. Does your agency already collect data or collect systems information that can be repurposed to meet this requirement? 
- Approximation. Given the difficulty in definitively calculating most reasonable measures related to this requirement, the policy leaves room for agencies to use approximate or "estimated" measures. For example, the number of source lines of code in a particular codebase may fluctuate day to day.  Or if cost is your measure, a particular codebase may not align cleanly to a discrete budget line-item or procurement. Agencies may use approximation in measuring their code but should do so according to a documented, justifiable process that is applied consistently and considers the overall goals of the policy. Importantly, the greater the degree of approximation present in an agency's measure, the greater weight the agency should place on documenting the way the measure is calculated and ensuring that it is applied consistently.

## Measuring your code for the first time 
Having chosen a measure, your agency will likely need to measure the size of its codebases that are under active development to establish a baseline.  Things to consider include:
- The Source Code Policy, in defining "custom code" allows agencies to exclude "code that is truly exploratory or disposable in nature, such as that written by a developer experimenting with a new language or library."  When in doubt, include code in your inventory or reachout to OMB for guidance.
- It is likely useful for your agency to coordinate this baselining effort with other activities required by the Source Code Policy, such as developing your Code Inventory.
- Remember that the Source Code Policy requires the release of "20% of [..] new custom code" and does not apply retroactively. Agencies are strongly encouraged to exceed the minimum requirement and consider releasing retroactively as well.
- Importantly, for the purposes of calculating your total amount of custom code, agencies *should include* code that is unlikely or certain not to be released for reasons of national security or the other exemptions related to the Code Inventory.
