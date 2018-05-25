# Configuration of code-gov-web
code-gov-web is configurable.  To set up your own site, you'll have to configure your `CNAME`, `code-gov-config.json`, and `privacy-policy.md`.  More details are below.

# Domain
If you want to host code-gov-web on your own domain, you'll have to change the CNAME file found at [code-gov-web/config/CNAME](https://github.com/GSA/code-gov-web/blob/master/config/CNAME)

# code-gov-config.json
You can customize the styling, content and much more by adding to and updating the `code-gov-config.json` file found at [code-gov-web/config/code-gov-config.json](https://github.com/GSA/code-gov-web/blob/master/config/code-gov-config.json).  You can also see examples of configurations in [code-gov-web/config/examples](https://github.com/GSA/code-gov-web/tree/master/config/examples).

## title
To change the title of the website change the `title` property in `code-gov-web/config/code-gov-config.json`

## api
code-gov-web is the front-end and needs to communicate with a backend.  You can specify the base endpoint and api key.  For example, [code.gov](https://code.gov) sets `base` to `https://api.code.gov/` and sets `key` to our public api key.

## style
You can also configure the style sheets that your version of code-gov-web uses.  The `style` property takes a value of the name of the npm package to use for styles.  The easiest way to create your own style is to fork [code-gov-style](https://github.com/GSA/code-gov-style) and npm install it into your version.

## twitter handle
You can add the handle for your twitter account.  This is used to generate the link for the Twitter icon in the top right of each page.

## content
The largest part of the [code-gov-config.json](https://github.com/GSA/code-gov-web/blob/master/config/code-gov-config.json) is the `content` section.  In it, you can configure most of the text that appears on your site.

### header
Under header you can specify the logo used in the top menu bar and the different links that appear in this menu.

#### logos
Under header, you can specify a relative path to the logos used for your site.  These logos will appear in the upper left corner.  You most specify a dark and light version of the logo, because the welcome page has a dark background and all the other pages have light backgrounds.  If you want the same logo for both, just write the same path for each.

#### links
Under header, you can also configure the links that appear in your menu bar.  Each link should include a name and a url.

### home
You can configure almost everything on the home page.

#### banner
You can configure the content inside of the banner area.  You change the motto `Sharing America's Code` to whatever you want.  You can also change the subtitle, `Unlock the tremendous...`, and description of the help wanted tasks, `Discover how you can...`

#### mission
You can also configure the mission by adding in your own string

### roadmap
The roadmap section is fully configurable.  You can see a live example of what the roadmap looks like here: https://code.gov/#/roadmap

#### overview
You can configure the text that appears under `overview`.  This is represented as an array of paragraph HTML text.
```
"overview": [
  "At Code.gov, we know it’s important to keep an open dialogue with our users. That’s why we’re sharing our plans for the future through this Development Roadmap. Hopefully, it will help you better understand our priorities for the platform.",
  "The Development Roadmap is organized into three categories – Near-term, Mid-term, and Long-term. Priorities are sorted into roadmap categories based on feedback we receive during user interviews. Dependencies and resources are also factors that affect placement on the roadmap. If you want to join the Code.gov user testing group, please email us at <a href='mailto:code@gsa.gov'>Code@gsa.gov</a>."
],
```
#### near-, mid-, and long-term tasks
You can configure your `tasks` for different time durations.  They are represented as an array of task objects with each task object including two properties, `name` and `status`.  The status can be of three options: `Released`, `In Progress`, or `null`.  Here's an example of configuring the mid-term tasks:
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

#### disclaimer
You can also add a disclaimer that says you can't guarantee that features are rolled out according to the roadmap
```
"disclaimer": "This Development Roadmap (Roadmap) is for informational purposes only. The Code.gov team will update the Roadmap as frequently as possible but, given that it’s subject to change at any time, the information presented by the Roadmap should not be used for planning purposes. The information presented in the Roadmap does not represent a solicitation or similar contract vehicle. All items in the Roadmap will be developed and released at the sole discretion of Code.gov, the General Services Agency, the Office of Management and Budget, and the United States Federal Government."
```

# privacy policy
In order to change the privacy policy that appears on the site, just edit [privacy-policy.md](https://github.com/GSA/code-gov-web/blob/master/src/app/components/privacy-policy/privacy-policy.md).  It's in markdown.  Here's a guide on how to write markdown: https://guides.github.com/features/mastering-markdown/.

# more soon
There's many other ways to customize code-gov-web.  More documentation coming soon!

# contact
If you have any questions, you can post an issue on GitHub or email us at code@gsa.gov
