export interface WordNode {
    isEnd: boolean;
    name: string;
    children: Map<string, WordNode>;
    str: string;
}
export interface SearchWordTree {
    str: string;
    children: Map<string, WordNode>;
}
export interface SearchResult {
    word?: string;
    start: number;
    end?: number;
}
export interface Search {
    search(content: string): SearchResult[];
}