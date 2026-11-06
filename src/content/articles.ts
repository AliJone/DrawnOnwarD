export interface ArticleSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  kind: 'guide' | 'work';
  title: string; // H1 and <title> (site name appended)
  description: string; // meta description, 150–160 characters
  keywords: string;
  datePublished: string;
  dateModified: string;
  client?: { name: string; url: string }; // case studies only
  sections: ArticleSection[];
}

// Filled from the content plan (pillars, hubs, spokes) from Day 5 onward
export const guides: Article[] = [];

// PreMed.PK, Asaan Retail, Nahj al-Balagha and Survey Kollect once the owner supplies year, weeks, team and metrics
export const work: Article[] = [];
