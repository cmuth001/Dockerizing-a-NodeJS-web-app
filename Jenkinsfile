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
          bat "docker image push"
        }
      }
    }
  }
}
