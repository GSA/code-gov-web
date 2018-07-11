# Labor Hour Calculation

To assist agencies in calculating labor hours, the [Code.gov](https://www.code.gov) team recommends agencies utilize Count Lines of Code (CLOC) and the Constructive Cost Model II (COCOMO II).  CLOC provides the total lines of code in the current repository and COCOMO II allows for a configurable cost model. In combination, the current cost of a software program can be calculated, establishing a baseline and process for continual calculation of labor hours and cost.

## Process

The process to calculate labor hours with CLOC and COCOMO II follows.

1. Determine code repository where labor hours are to be calculated. This can be a public or private repository where the current code base resides.

2. Go to [CLOC](https://github.com/AlDanial/cloc) and download the desired software package or use the CLOC [website](https://codetabs.com/count-loc/count-loc-online.html) and point to a repository.

3. After capturing total lines of code, go to [COCOMO II](http://csse.usc.edu/tools/cocomoii.php) and fill in the lines of code, estimated labor rate, and adjust the appropriate software scale and cost drivers. If these are not explicitly known, then nominal is a good option (i.e., see official [documentation](http://csse.usc.edu/csse/research/COCOMOII/cocomo2000.0/CII_modelman2000.0.pdf) on using the model, and [BLS](https://www.bls.gov/oes/current/oes_nat.htm) for estimated labor rate if one is not known).

4. Capture the output of labor hours for the project and report them through your agency’s code.json file.

## Example

Here is an example on calculating labor hours with the GSA CTO [website](https://tech.gsa.gov/).

1. GSA begins with loading CLOC on the local machine and running it through the command line in Terminal with a result of 16,603 lines of code.

2. 16,603 is entered into the COCOMO II model as new code and drivers are all set to nominal, and a cost per person-month of $7,296 is used ($48 per hour is provided by [BLS](https://www.bls.gov/oes/current/oes_nat.htm) for a programmer times number of days in a month times number of hours or $18 x 19 x 8 = $7,296).

3. The calculation is run for one person-month and results in 14.5 month duration with a total cost of $471,271. The duration and cost can be adjusted based on number of people. The total labor hours would be 2,204 (e.g., 14.5 x 19 x 8).

## Disclaimer

This is not official guidance; rather we are providing this summary as a helpful resource for agencies to consider when calculating labor hours as part of each agency’s Code.json file. The Code.gov team recognizes that there are multiple ways to calculate labor hours and the process may be initially difficult for multiple reasons (e.g., undocumented labor hours, project changes over time, different contract types, various contractors). However, the team has tested various models and determined that, in order to identify a current baseline, an industry-recognized approach is to either calculate labor hours based on function points or lines of code. The solution offered was developed by software engineering experts and has been tested by agencies working with the Code.gov team with a high level of confidence. It is within each agency’s discretion to determine the approach that is most appropriate for their software inventory.