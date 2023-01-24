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
        bat 'npm test'
      }
    }
    stage('Docker Build') {
      steps {
      	bat "docker build -t firstversion/nodejs-app:latest ."
      }
    }
    stage('Docker Push') {
    	agent any
      steps {
      	withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
        	bat "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
          bat "docker push firstversion/nodejs-app:latest"
        }
      }
    }
  }
}
