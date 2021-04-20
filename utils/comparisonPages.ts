import { loadEntries, loadMdxFile, getStaticMdxPaths } from "./mdxUtils";

const component = {};

export interface ComparisonInfo {
    competitor: string;
    pro1: string;
    pro2: string;
    pro3: string;
    pro4: string;
    comp1: string;
    comp2: string;
    source: any;
}


export async function getComparison(slugId): Promise<ComparisonInfo> {
    const { source, frontMatter, path, slug } = await loadMdxFile(["pages", "solutions", `${slugId}.mdx`], component);

    const { competitor, pro1, pro2, pro3, pro4, comp1, comp2 } = frontMatter;

    return {
        competitor,
        pro1,
        pro2,
        pro3,
        pro4,
        comp1,
        comp2,
        source
    }
}