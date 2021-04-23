import { loadEntries, loadMdxFile, getStaticMdxPaths } from "./mdxUtils";

const component = {};

export interface ComparisonInfo {
    competitor: string;
    pros: string[];
    competitorPros: string[];
    source: any;
}


export async function getComparison(slugId): Promise<ComparisonInfo> {
    const { source, frontMatter, path, slug } = await loadMdxFile(["pages", "solutions", `${slugId}.mdx`], component);
    console.log(frontMatter);
    const { competitor, pros, competitorPros } = frontMatter;

    return {
        competitor,
        pros,
        competitorPros,
        source
    }
}