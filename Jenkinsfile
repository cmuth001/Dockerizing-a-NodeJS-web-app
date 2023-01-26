#!groovy

pipeline {
  agent any
  
  /*tools {nodejs "node"}
  */
  
  stages {
    stage('build stage') {
      steps {
        bat 'npm install'
      }
    }
    stage('test stage') {
      steps {
        bat 'npm test --detectOpenHandles'
      }
    }
    stage('Docker Build') {
      steps {
      	bat "docker build -t ksvadrevu/mytestacr:nodejsapp-v1 ."
        bat "docker image ls"
      }
    }
    stage('Docker Push') {
    	agent any
      steps {
      	withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
        	bat "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
          bat "docker image push ksvadrevu/mytestacr:nodejsapp-v1"
        }
      }
    }
    stage('Deploy to Cluster') {
      steps {
        bat "az account set -s 9342e2c2-c6de-4154-ad60-6053ed21752f"
        /*bat "winget install -e --id Kubernetes.kubectl"
        */
        bat "az aks get-credentials -g jenkins-test-rg -n jenkins-nodejs-deploy --admin"
        bat "kubectl get nodes"
        /*bat "kubectl create secret docker-registry dockerHub --docker-server=https://index.docker.io/v1/ --docker-username=${env.dockerHubUser} --docker-password=${env.dockerHubUser} --docker-email=svadrevukarthik@gmail.com"
        bat "kubectl get secret hubcred --output=yaml"
        */
        bat "kubectl apply -f deployment.yaml"
        bat "kubectl get service service-nodejs"
      }
    }
  }
}
