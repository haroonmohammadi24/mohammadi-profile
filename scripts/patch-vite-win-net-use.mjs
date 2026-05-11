import fs from 'node:fs'
import path from 'node:path'

const target = path.join(
  process.cwd(),
  'node_modules',
  'vite',
  'dist',
  'node',
  'chunks',
  'node.js',
)

if (!fs.existsSync(target)) {
  console.error(`vite bundle not found: ${target}`)
  process.exit(1)
}

const source = fs.readFileSync(target, 'utf8')

const marker = 'exec("net use", (error, stdout) => {'
if (!source.includes(marker)) {
  console.log('No patch needed (marker not found).')
  process.exit(0)
}

if (source.includes('CODEX_PATCH_SKIP_NET_USE')) {
  console.log('Already patched.')
  process.exit(0)
}

const replacement = `/* CODEX_PATCH_SKIP_NET_USE: avoid spawning "net use" on locked-down Windows */
	try {
		exec("net use", (error, stdout) => {
			if (error) return;
			const lines = stdout.split("\\n");
			for (const line of lines) {
				const m = parseNetUseRE.exec(line);
				if (m) windowsNetworkMap.set(m[2], m[1]);
			}
			if (windowsNetworkMap.size === 0) safeRealpathSync = fs.realpathSync.native;
			else safeRealpathSync = windowsMappedRealpathSync;
		});
	} catch (error) {
		// EPERM (policy restrictions) should not prevent Vite from starting.
		safeRealpathSync = fs.realpathSync.native;
	}`

const next = source.replace(
  /exec\("net use", \(error, stdout\) => \{[\s\S]*?\}\);\n\}/,
  replacement + '\n}',
)

if (next === source) {
  console.error('Patch failed: pattern did not match as expected.')
  process.exit(1)
}

fs.writeFileSync(target, next, 'utf8')
console.log('Patched Vite Windows net use call successfully.')

