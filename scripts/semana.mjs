import { readFileSync, writeFileSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const base = 'comunidade/semana-arkhe';
const pubPath = join(base, 'posts-published.json');
const pub = JSON.parse(readFileSync(pubPath, 'utf8'));
const pubIds = new Set(pub.map(p => p.id));

const queue = readdirSync(join(base, 'posts')).filter(f => f.endsWith('.json')).sort();
let next = null;
let nextFile = null;
for (const f of queue) {
  const p = JSON.parse(readFileSync(join(base, 'posts', f), 'utf8'));
  if (!pubIds.has(p.id)) { next = p; nextFile = f; break; }
}

if (!next) {
  console.log('NENHUM POST NA FILA - sem alteração');
  process.exit(0);
}

pub.push(next);
writeFileSync(pubPath, JSON.stringify(pub, null, 2) + '\n');
rmSync(join(base, 'posts', nextFile));

const js = '// gerado automaticamente por scripts/semana.mjs — não editar manualmente\nwindow.WEEKS = ' + JSON.stringify(pub, null, 2) + ';\n';
writeFileSync(join(base, 'posts-data.js'), js);
console.log('PUBLICADO', next.id);
process.exit(1);
