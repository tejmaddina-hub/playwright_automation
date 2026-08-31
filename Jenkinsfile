pipeline {
   agent any
   tools {
    nodejs 'NodeJS'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Install browsers') {
            steps {
                sh 'npx playwright install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
        stage('Build Docker Image') {
            steps {
            sh 'docker build -t playwright-automation:1 .'
            }
    }
}

