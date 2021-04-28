import { loadEntries, loadMdxFile, getStaticMdxPaths } from "./mdxUtils";

export interface ComparisonData {
    competitor: string,
    data: [
        {
            feature: string,
            grouparoo: boolean | string | Array<boolean | string>;
            comp: boolean | string | Array<boolean | string>;
        }
    ]
}

export interface ComparisonInfo {
    competitor: string;
    pros: string[];
    competitorPros: string[];
    comparisonData: ComparisonData;
    source: any;
}

export async function getComparison(slugId, components): Promise<ComparisonInfo> {
    const { source, frontMatter, path, slug } = await loadMdxFile(["pages", "solutions", `${slugId}.mdx`], components);
    const { competitor, pros, competitorPros, comparisonData } = frontMatter;
    return {
        competitor,
        pros,
        competitorPros,
        comparisonData,
        source
    }
}