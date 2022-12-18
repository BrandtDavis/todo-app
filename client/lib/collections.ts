import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const collectionsDirectory = path.join(process.cwd(), 'collections');

export function getSortedCollectionsData() {
    const fileNames = fs.readdirSync(collectionsDirectory);

    const allCollectionsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(collectionsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the collection metadata section
        const { data, content } = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            frontMatter: data,
            markdownBody: content,
         };
    });

    // TODO: Perhaps some sorting or other organizational technique?
    return allCollectionsData;
}