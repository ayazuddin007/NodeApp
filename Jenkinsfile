def ansibleServerIP = '172.31.7.186'
def pushDockerImage = 'ansible-playbook -i hosts p11.yml'
def createK8SDeployment = 'ansible-playbook -i hosts kubernetes-valaxy-deployment.yml'
def createK8Service = 'ansible-playbook -i hosts kubernetes-valaxy-service.yml'

pipeline {
    agent any

    stages {
        stage("Git Clone") {
            steps {
                git branch: 'master', credentialsId: 'gitCredentials', url: 'https://github.com/ayazuddin007/NodeJSApp.git'
            }
        }
        stage("Copy NodeJSApp Files to Ansible") {
            steps {
                sshagent(['ansibleCredentials']) {
                    // Copy war file to Ansible Server
                    sh "scp -o StrictHostKeyChecking=no * ec2-user@${ansibleServerIP}:/home/ec2-user/"
                }
            }
        }
        stage("Push Docker Image to Docker Hub") {
            steps {
                sshagent(['ansibleCredentials']) {
                    // Push Docker Image to Docker Hub by Runnning p11.yml on localhost(Ansible)
                    sh "ssh -o StrictHostKeyChecking=no ec2-user@${ansibleServerIP} ${pushDockerImage}"
                }
            }
        }
        stage('Deploy to Kubernetes Cluster') {
            steps {
                sshagent(['ansibleCredentials']) {
                    // Create valaxy-deployment on K8S Server by running playbook on Ansible Server
                    sh "ssh -o StrictHostKeyChecking=no ec2-user@${ansibleServerIP} ${createK8SDeployment}"
                    // Create valaxy-service on K8S Server by running playbook on Ansible Server
                    sh "ssh -o StrictHostKeyChecking=no ec2-user@${ansibleServerIP} ${createK8Service}"     
                }
            }
        }
    }
}
