Node JS Application Using Devops CI-CD Pipleine
------------------------------------------------

Pre-requisite
-----------------
  - Git
  - Jenkins
  - Ansible
  - Docker
  - Kubernetes 
  - AWS Cloud
 
 Directory-Structure Understanding
 -------------------------------------
  - server.js and package.json are the Node-js Application Files.Whatever we want to change as input ,we can do that in server.js and package.json is the dependency for server.js file.
  - hosts file is Ansible host inventory file.
  - Jenkinsfile is DSL pipeline file,which contains all pipeline stages.
  - Dockerfile is used for bulding nodejs image.
  - kubernetes directory contains kubernets deployment and service  yaml files (i.e  click2cloud-deploy.yml and click2cloud-service.yml)
  - playbooks directory contains all ansible playbook for docker and kubernetes. (i.e docker-container.yml,docker-image.yml,kubernetes-click2cloud-deployment.yml,kubernetes-click2cloud-service.yml,kubernetes-click2cloud-podscaling.yml and kubernetes-click2cloud-service.yml) 
  - jmeter-test directory all Load test files and performance test files.
  - results directory contains all the result of ci-cd pipeline in the form of image.
  




