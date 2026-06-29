#!/bin/bash
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
export NODE_ENV="${NODE_ENV:-production}"

rm -rf "$ROOT/dist"
npx vite build --outDir "$ROOT/dist" --emptyOutDir

echo "Build complete → dist/"
