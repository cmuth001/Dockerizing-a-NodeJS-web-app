#!groovy

pipeline {
	agent any 
  stages {
    stage('build stage') {
      steps {
        sh 'pwd'
        npm install
      }
    stage('run stage') {
      steps {
        node server.js
      }
    stage('Docker Build') {
    	agent any
      steps {
      	sh 'docker build -t firstversion/nodejs-app:latest .'
      }
    }
    stage('Docker Push') {
    	agent any
      steps {
      	withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
        	sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
          sh 'docker push firstversion/nodejs-app:latest'
      }
    }
  }
}
