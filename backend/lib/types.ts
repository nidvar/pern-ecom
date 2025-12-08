export type ArcjetNodeRequest = {
  ip: string;
  method: string;
  headers: Record<string, string | string[] | undefined>;
  url: string;
};