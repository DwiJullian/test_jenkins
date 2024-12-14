pipeline {
 agent any
 environment {
 CI = 'true'
 }
 stages {
 stage('Checkout') {
 steps {
 git branch: 'main', url: 'https://github.com/DwiJullian/test_jenkins'
 }
 }
 stage('Install Dependencies') {
 steps {
 bat 'npm install'
 }
 }
 stage('Run Unit Tests') {
 steps {
 bat 'npm test'
 }
 }
 stage('Build') {
 steps {
 echo 'Building the application...'
 // Tambahkan perintah build jika diperlukan
 }
 }
 stage('Deploy') {
 steps {
 echo 'Deploying the application...'
 // Tambahkan perintah deploy jika diperlukan
 }
 }
 }
 post {
 success {
 emailext subject: 'Build Succeeded', body: 'The build succeeded!',
recipientProviders: [[$class: 'DevelopersRecipientProvider']]
 }
 failure {
 emailext subject: 'Build Failed', body: 'The build failed.',
recipientProviders: [[$class: 'DevelopersRecipientProvider']]
 }
}
}