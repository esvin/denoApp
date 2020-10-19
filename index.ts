import { serve } from "https://deno.land/std/http/server.ts";
import { config } from 'https://deno.land/x/dotenv/mod.ts';
import { mapStory } from './stories.ts';
const apiURL = 'http://hn.algolia.com/api/v1/search?query=javascript';
const httpServer = serve({port: parseInt(config()['PORT'])});

for await(const req of httpServer){
    
    const result = await fetch(apiURL).then((result) => result.json());
    const stories = result.hits.map(mapStory);
    req.respond({body: JSON.stringify(stories)});   
}
