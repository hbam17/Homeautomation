import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export type MDXFrontmatter = {
  title: string;
  slug: string;
  description: string;
  [key: string]: unknown;
};

function getMDXFiles(dir: string) {
  const fullPath = path.join(contentDirectory, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs.readdirSync(fullPath).filter((file) => file.endsWith(".mdx"));
}

function parseMDXFile(dir: string, filename: string) {
  const filePath = path.join(contentDirectory, dir, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return { frontmatter: data as MDXFrontmatter, content };
}

export function getAllBlogPosts() {
  const files = getMDXFiles("blog");
  return files
    .map((file) => parseMDXFile("blog", file))
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date as string).getTime();
      const dateB = new Date(b.frontmatter.date as string).getTime();
      return dateB - dateA;
    });
}

export function getBlogPostBySlug(slug: string) {
  const files = getMDXFiles("blog");
  const file = files.find((f) => f.replace(".mdx", "") === slug);
  if (!file) return null;
  return parseMDXFile("blog", file);
}

export function getAllServicePages() {
  const files = getMDXFiles("services");
  return files.map((file) => parseMDXFile("services", file));
}

export function getServiceBySlug(slug: string) {
  const files = getMDXFiles("services");
  const file = files.find((f) => f.replace(".mdx", "") === slug);
  if (!file) return null;
  return parseMDXFile("services", file);
}

export function getAllAreaPages() {
  const files = getMDXFiles("areas");
  return files.map((file) => parseMDXFile("areas", file));
}

export function getAreaBySlug(slug: string) {
  const files = getMDXFiles("areas");
  const file = files.find((f) => f.replace(".mdx", "") === slug);
  if (!file) return null;
  return parseMDXFile("areas", file);
}

/**
 * Extract FAQ question/answer pairs from MDX content.
 * Looks for a "Frequently Asked Questions" heading followed by
 * bold questions and paragraph answers.
 */
export function extractFAQsFromContent(
  content: string
): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];

  // Find the FAQ section (after ## Frequently Asked Questions)
  const faqMatch = content.match(
    /##\s*Frequently Asked Questions\s*\n([\s\S]*?)(?=\n##\s|\n---|\Z)/
  );
  if (!faqMatch) return faqs;

  const faqSection = faqMatch[1];

  // Match **Question** followed by answer text
  const pattern = /\*\*(.+?)\*\*\s*\n\s*([\s\S]*?)(?=\n\s*\*\*|\s*$)/g;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(faqSection)) !== null) {
    const question = match[1].trim();
    const answer = match[2].trim().replace(/\n+/g, " ");
    if (question && answer) {
      faqs.push({ question, answer });
    }
  }

  return faqs;
}
