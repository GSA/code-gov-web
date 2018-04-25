# Configuration of code-gov-web
code-gov-web is configurable.  You can customize the styling, content and much more by adding to and updating the `code-gov-config.json` file found at [code-gov-web/config/code-gov-config.json](https://github.com/GSA/code-gov-web/blob/master/config/code-gov-config.json)

# Domain
If you want to host code-gov-web on your own domain, you'll have to change the CNAME file found at [code-gov-web/config/CNAME](https://github.com/GSA/code-gov-web/blob/master/config/CNAME)

# [title](https://github.com/GSA/code-gov-web/blob/master/config/code-gov-config.json#L2)
To change the title of the website change the `title` property in `code-gov-web/config/code-gov-config.json`

# [twitter handle](https://github.com/GSA/code-gov-web/blob/master/config/code-gov-config.json#L9)
You can add the handle for your twitter account.  This is used to generate the link for the Twitter icon in the top right of each page.  Update the handle property in `code-gov-web/config/code-gov-config.json`

# [homepage](https://github.com/GSA/code-gov-web/blob/master/config/code-gov-config.json#L12)
You can configure everything on the home page.

### [banner](https://github.com/GSA/code-gov-web/blob/master/config/code-gov-config.json#L13)
You can configure the content inside of the banner area.  You change the motto `Sharing America's Code` to whatever you want.  You can also change the subtitle, `Unlock the tremendous...`, and description of the help wanted tasks, `Discover how you can...`

# [roadmap](https://github.com/GSA/code-gov-web/blob/master/config/code-gov-config.json#L108)
The roadmap section is fully configurable.  You can see a live example of what the roadmap looks like here: https://code.gov/#/roadmap

### [overview](https://github.com/GSA/code-gov-web/blob/master/config/code-gov-config.json#L109)
You can configure the text that appears under [overview](https://github.com/GSA/code-gov-web/blob/master/config/code-gov-config.json#L109).  This is represented as an array of paragraph HTML text.
```
"overview": [
  "At Code.gov, we know it’s important to keep an open dialogue with our users. That’s why we’re sharing our plans for the future through this Development Roadmap. Hopefully, it will help you better understand our priorities for the platform.",
  "The Development Roadmap is organized into three categories – Near-term, Mid-term, and Long-term. Priorities are sorted into roadmap categories based on feedback we receive during user interviews. Dependencies and resources are also factors that affect placement on the roadmap. If you want to join the Code.gov user testing group, please email us at <a href='mailto:code@gsa.gov'>Code@gsa.gov</a>."
],
```
### [near-, mid-, and long-term tasks](https://github.com/GSA/code-gov-web/blob/master/config/code-gov-config.json#L113)
You can configure your [tasks](https://github.com/GSA/code-gov-web/blob/master/config/code-gov-config.json#L113) for different time durations.  They are represented as an array of task objects with each task object including two properties, `name` and `status`.  The status can be of three options: `Released`, `In Progress`, or `null`.  Here's an example of configuring the mid-term tasks:
```
"mid": [
  { "name": "Agency pages", "status": null },
  { "name": "Medium skin", "status": null },
  { "name": "FAQs page", "status": "In Progress" },
  { "name": "Admin tool", "status": null },
  { "name": "Enhanced tools and resources", "status": null },
  { "name": "Project Details Phase II", "status": null}
],
```

### [disclaimer](https://github.com/GSA/code-gov-web/blob/master/config/code-gov-config.json#L134)
You can also add a [disclaimer](https://github.com/GSA/code-gov-web/blob/master/config/code-gov-config.json#L134) that says you can't guarantee that features are rolled out according to the roadmap
```
"disclaimer": "This Development Roadmap (Roadmap) is for informational purposes only. The Code.gov team will update the Roadmap as frequently as possible but, given that it’s subject to change at any time, the information presented by the Roadmap should not be used for planning purposes. The information presented in the Roadmap does not represent a solicitation or similar contract vehicle. All items in the Roadmap will be developed and released at the sole discretion of Code.gov, the General Services Agency, the Office of Management and Budget, and the United States Federal Government."
```


# more soon
There's many other ways to customize code-gov-web.  More documentation coming soon!

# contact
If you have any questions, you can post an issue on GitHub or email us at code@gsa.gov
