# Autoprefixing for Meteor
This is a build plugin for Meteor 1.2+. 
It uses autoprefixer to automagically add vendor-specific prefixes to your CSS files.

## Installation

Install using Meteor's package management system:

```bash
> meteor add seba:autoprefix
```

## Usage
Without any additional configuration after installation, this package automatically finds all `.css` files in your project, compiles them with [autoprefixer](https://github.com/postcss/autoprefixer), and includes the resulting CSS in the application bundle that Meteor sends to the client. The files can be anywhere in your project.

<!---
## Configuration
This package has options that can be specified in a `autoprefix.json` file in the project's root directory (or a package's root directory, if you're using it from a package). 
Please restart your server after changing this file.
-->