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
        stage('Docker Debug') {
            steps {
            sh 'echo $PATH'
            sh 'which docker || true'
            sh '/usr/local/bin/docker --version'
            } 
        }  
    }
}

