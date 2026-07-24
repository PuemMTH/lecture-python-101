#!/usr/bin/env bash
set -euo pipefail

pnpm exec slidev slides.md -p "${1:-3030}"
