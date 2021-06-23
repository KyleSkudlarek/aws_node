#!/bin/bash
set -e

echo "Linting..."
python3 -m  cfnlint -iW  'template.yaml'