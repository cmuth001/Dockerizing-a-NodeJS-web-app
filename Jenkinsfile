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
    stage('run stage') {
      steps {
        bat 'node server.js'
      }
    }
    stage('Docker Build') {
      steps {
      	sh "docker build -t firstversion/nodejs-app:latest ."
      }
    }
    stage('Docker Push') {
    	agent any
      steps {
      	withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
        	sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
          sh "docker push firstversion/nodejs-app:latest"
        }
      }
    }
  }
}
