import { mapStory } from "./stories.ts";
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
Deno.test(
    'maps to a smaller story with formatted date',
    () => {
        const stories = [
            {
                id: '1',
                title: 'Titulo1',
                url: 'TheURL',
                created_at_i : 1476198038
            },
        ];
        const expectedStories = [
            {
                title: 'Titulo1',
                url: 'TheURL',
                createdAt : '2016-10-11'
            },
        ];
        assertEquals(stories.map(mapStory), expectedStories);
    });