# Carnelian Search

## Introduction

[![Netlify Status](https://api.netlify.com/api/v1/badges/dce13b5b-c0a8-434b-8906-971bda299440/deploy-status)](https://app.netlify.com/sites/carnelian-search/deploys)

This is a simple static site built with [Eleventy](https://www.11ty.dev/), content managed with [Netlify CMS](https://www.netlifycms.org/), and hosted on [Netlify](https://www.netlify.com/).

## Tooling

- [Eleventy](https://www.11ty.dev/)
- [NetlifyCMS](https://www.netlifycms.org/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation) + [Typography Plugin](https://github.com/tailwindlabs/tailwindcss-typography)
- [AlpineJS](https://github.com/alpinejs/alpine)
- [Netlify](https://www.netlify.com/)

## Development

Deployment will happen automagically from the `main` branch. Ensure that you are doing updates on the `develop` branch and then pull-requesting into `main` ([Netlify will give you previews of your pull requests](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/)).

**Important:** Content editing commits to `main`. To reduce complexity of merging remember to bring the content from `main` into your development branch through a rebase before creating your pull request.

To the Eleventy build locally:

```
npm install
npm run dev
```

## Netlify CMS

All content is managed via markdown and json files in this repo, however to make the editing simpler and less technical Netlify CMS is configured. From their site:

> Netlify CMS is an open source content management system for your Git workflow that enables you to provide editors with a friendly UI and intuitive workflows. You can use it with any static site generator to create faster, more flexible web projects. Content is stored in your Git repository alongside your code for easier versioning, multi-channel publishing, and the option to handle content updates directly in Git.

To test the CMS in development run:

```
npm run cms
```

Users are authenticated by [Netlify Identity](https://docs.netlify.com/visitor-access/identity/). You can invite new users in Netlify > Identity. (There is a shared team user in the password vault).

If this is running on the free plan, Netlify has a limit of 5 invited users.

## Deploy

Deployment happens automatically from the `main` branch to Netlify. You should pull request your changes into `main` on Github. A preview of the build will be generated. Once the branch has been merged to `main` Netlify will regenerate the site.

Or… you can just merge your commits from `develop` straight into `main`:

```
git checkout main
get merge develop
git push main
```
