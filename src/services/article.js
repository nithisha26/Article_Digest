import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey=import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {
      url: 'https://time.com/6266679/musk-ai-open-letter/',
      length: '3',
      lang: 'en',
      engine: '2'
    },
    headers: {
      'x-rapidapi-key': 'bda066f1b9msh3e77c5540510ae3p14f75cjsn740d56ae53ed',
      'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
  };
  

export const articleApi = createApi({
    reducerPath:'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(headers)=>{
            headers.set('x-rapidapi-key',rapidApiKey);
            headers.set('x-rapidapi-host','article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints:(builder)=>({
        getSummary:builder.query({
            query:(params)=>`/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
});

export const {useLazyGetSummaryQuery} = articleApi;