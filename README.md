# aws_node
Scripts for using AWS with node.js

# How To Install
This installs all the packages in package.json

`npm install`

# How To Run
`node list_s3_buckets.js`

# How To Deploy Cloudformation

## MAKE 

Calls scripts/deploy.sh (calls aws package and aws deploy)

`make deploy`


### Package 

Package contents of this folder into a zip file and upload to s3, then generate output.yaml file, with the lambda code 
field (and others) pointing to the zip file we just created at that s3 location

`aws cloudformation package --template-file template.yaml --s3-bucket kyles-cfn-bucket --output-template-file output.yaml`

### Deploy

Deploy the output.yaml cfn template containing the s3 location of the zip file package we just created in the previous step

`aws cloudformation deploy --template-file /Users/kyle/GithubProjects/aws_node/output.yaml --stack-name kyles-new-stack --capabilities CAPABILITY_IAM`

### Delete stack
Deletes a currently deployed stack
`aws cloudformation delete-stack --stack-name kyles-new-stack`