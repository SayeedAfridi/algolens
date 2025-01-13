import fs from 'fs';
import { featureDir } from '@src/lib/constants';

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const feature = searchParams.get('feature');
  const body = await request.json();

  const filePath = `${featureDir}/${feature}/codes/${body.lang}.md`;

  const file = fs.readFileSync(filePath).toString();
  return Response.json({ content: file });
}
