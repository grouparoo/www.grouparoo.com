import { loadEntries, loadMdxFile, getStaticMdxPaths } from "./mdxUtils";



export interface ComparisonInfo {
    competitor: string;
    pros: string[];
    competitorPros: string[];
    source: any;
}


export async function getComparison(slugId, components): Promise<ComparisonInfo> {
    const { source, frontMatter, path, slug } = await loadMdxFile(["pages", "solutions", `${slugId}.mdx`], components);

    const { competitor, pros, competitorPros } = frontMatter;

    return {
        competitor,
        pros,
        competitorPros,
        source
    }
}