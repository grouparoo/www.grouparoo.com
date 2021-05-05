import { loadEntries, loadMdxFile, getStaticMdxPaths } from "./mdxUtils";
import { FeatureArray } from '../components/solutions/featureBanner'

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
    features: FeatureArray;
    source: any;
}

export interface CategoryInfo {
    category: string;
    pros: string[];
    bonuses: string[];
    features: FeatureArray;
    source: any;
}

export async function getSolutionsData(slugId, components): Promise<ComparisonInfo | CategoryInfo> {
    const { source, frontMatter, path, slug } = await loadMdxFile(["pages", "solutions", `${slugId}.mdx`], components);
    if (slugId.includes('alternative')){
        const { competitor, pros, competitorPros, comparisonData, features } = frontMatter;
        return {
            competitor,
            pros,
            competitorPros,
            comparisonData,
            features,
            source
        }
    } else {
        const { category, pros, bonuses, features, source } = frontMatter;
        return {
            category,
            pros,
            bonuses,
            features,
            source
        }
    }
    
}