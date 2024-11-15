# Sample Project

This is a sample project that that parses a defined CSV and does a simple visualization that is meant as a prototype.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This project uses the following tech stack:

- [React](https://react.dev/)
- [Next.js](https://nextjs.org) 
- [csv-loader](https://www.npmjs.com/package/csv-loader)
- [papaparse](https://www.npmjs.com/package/papaparse)
- [shadcn/ui](https://ui.shadcn.com/)
  - Charts : under the hood [Recharts](https://ui.shadcn.com/docs/components/chart)

## Adding Data

Before running, please add `csv` file named `data_0_0_0.csv` at `./public/data`. 
Any files added in that directory are ignored by default for git.

Make sure that CSV has the following columns:
- EVENT_DATE	
- USER_ID
- EVENT_STATUS
- NEXT_DATE
- NEXT_AMOUNT	
- LAST_DATE
- TAG	
- PREDICTION_FREQUENCY

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

**Tip:** If it's your first time using Next.js `npm run dev` is the hot reload option locally (not `npm start` which you would use for a React only project) . `npm run build` and `npm run start` if you want do something with regards to bundling.  

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
