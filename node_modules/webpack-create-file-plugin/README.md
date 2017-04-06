# Webpack Create File Plugin #

A webpack plugin to create empty files in your output path.

Its semi useful in development for creating empty files that may exist in production but not in development. 

```
const CreateFilePlugin = require('webpack-create-file-plugin');

const config = {
  output: {
    path: './public'
  },
  plugins: [
    new CreateFilePlugin({
      files: [
        'styles.css',
        'scripts.js'
      ]
    })
  ]
}
```

You must specify `output.path` or the plugin will throw.

`files` is a list of files you want created in your `output.path`.
