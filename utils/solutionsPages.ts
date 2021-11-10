import { loadEntries, loadMdxFile, getStaticMdxPaths } from "./mdxUtils";
import { FeatureArray } from "../components/solutions/FeatureBanner";

export interface ComparisonChartData {
  competitor: string;
  data: [
    {
      feature: string;
      grouparoo: boolean | string | Array<boolean | string>;
      comp: boolean | string | Array<boolean | string>;
    }
  ];
}

export interface ComparisonInfo {
  competitor: string;
  pros: string[];
  competitorPros: string[];
  comparisonChartData: ComparisonChartData;
  features: FeatureArray;
  source: any;
}

export interface CategoryInfo {
  title: string;
  description: string;
  category: string;
  header: string[];
  features: FeatureArray;
  source: any;
}

export async function getSolutionsData(
  slugId,
  components
): Promise<ComparisonInfo | CategoryInfo> {
  const { source, frontMatter, path, slug } = await loadMdxFile(
    ["pages", "solutions", `${slugId}.mdx`],
    components
  );
  if (slugId.includes("alternative")) {
    const { competitor, pros, competitorPros, comparisonChartData, features } =
      frontMatter;

    return {
      competitor,
      pros,
      competitorPros,
      comparisonChartData,
      features,
      source,
    };
  } else {
    const { title, description, category, header, features } = frontMatter;
    return {
      title,
      description,
      category,
      header,
      features,
      source,
    };
  }
}
