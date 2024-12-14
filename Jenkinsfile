pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: "main", url: 'https://github.com/DwiJullian/test_jenkins'
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
        stage('Run Integration Tests') {
            when {
                branch 'main'
            }
            steps {
                bat 'npm run integration-test'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                // Tambahkan perintah build jika diperlukan
            }
        }
        stage('Deploy to Staging') {
            when {
                branch 'develop'
            }
            steps {
                echo 'Deploying to staging...'
                // Perintah deploy ke server staging menggunakan SSH
                bat 'ssh user@staging-server "cd /path/to/project && git pull && npm install && npm run build && npm start"'
            }
        }
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying to production...'
                // Perintah deploy ke server production
                bat 'ssh user@production-server "cd /path/to/project && git pull && npm install && npm run build && npm start"'
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
