Tanja's site, currently a work in progress.

Built with [Hugo]( http://gohugo.io/).

# Build

Clone the repository including submodules (the theme is a submodule) then run
`hugo` with no params to generate a static site in `public/`.

```
git clone --recursive [repo]
hugo
```

# Deploy

Copy the public directory wherever you want:

```
rsync public remote
```

# Develop

Run `hugo serve` to launch the development web server on localhost.

