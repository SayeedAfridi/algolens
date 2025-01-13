import fs from 'fs';
import { featureDir } from '@src/lib/constants';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const feature = searchParams.get('feature');
  const files = fs.readdirSync(`${featureDir}/${feature}/codes`);
  const languages = [];
  for (let i = 0; i < files.length; i++) {
    languages.push(files[i].split('.')[0]);
  }
  return Response.json({ files, languages });
}
