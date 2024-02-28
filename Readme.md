# Nhost SaaS boilerplate

Template for SaaS like projects


## Components

We use Serverless Framework instead of Nhost's functions to avoid Nhost's limits.

Payments with Stripe and Vipps (Nordic countries)

Emails with Sendgrid and React Email

SaaS analytics with June

## Before you start

This is just a template I use personally that I might as well share.
I cannot guarantee that everything works out of the box or that all the patterns I use are good practice.
Some parts like Vipps payments are only applicable to Nordic countries.

- Edit `"nhost": "NHOST_PROJECT_NAME=my-project-name nhost"` to your project name in `package.json`
- Configure project details in the top of `serverless.yml`
- Remember to set correct secrets in the live Nhost dashboard before you deploy

## Development

`pnpm nhost up` starts Nhost
`pnpm dev` starts local express server that emulates serverless functions
`pnpm stripe` sends Stripe webhooks to your local endpoint
`pnpm tunnel` starts Cloudflared tunnel that makes your local serverless functions available on the internet
`pnpm generate-gql-types` generates types from your graphql schema


Change emails and "My App Name" to something appropriate

Remove env variables and code related to Vipps, June, Sendgrid etc. if you don't use that.

## Database

Users are made with SaaS organizations in mind. Tables used are `orgs` and `org_users`, who are the _tenants_. This makes it possible to have a registered user belong to multiple organizations each with multiple users. The `auth.users` items are only used for authentication and some basic config such as locale and metadata.
When you continue building tables for your business logic, you should have a foreign key to `orgs` or `org_users`, not to `auth.users`.


## Localization

The email templates are made to be multilingual, respecting the users' locale.
