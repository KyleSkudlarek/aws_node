#!/bin/bash
set -e

echo "Packaging..."

aws cloudformation package --template-file template.yaml --s3-bucket kyles-cfn-bucket --output-template-file output.yaml

echo "Deploying..."

aws cloudformation deploy --template-file /Users/kyle/GithubProjects/aws_node/output.yaml --stack-name kyles-new-stack --capabilities CAPABILITY_IAM
