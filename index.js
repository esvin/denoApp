import { serve } from "https://deno.land/std@0.74.0/http/server.ts";
const s = serve({port: 8000});
const apiURL = 'http://hn.algolia.com/api/v1/search?query=javascript';
fetch(apiURL)
.then((result) => result.json())
.then((result) => {
    const stories = result.hits.map((hit) => ({
        title: hit.title,
        url: hit.url,
        createdAt: hit.created_at_i
    }));
    console.log(stories);
});

console.log("Http://localhost:8000/");

for await(const req of s){
    req.respond({body: "Hello World from Deno\n"});
}

/*
*/
