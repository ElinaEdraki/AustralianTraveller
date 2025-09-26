pipeline {
    agent any

    stages {
        stage('Docker Build & Run') {
            steps {
                bat 'docker build -t hdproject .'
                bat 'docker run -d -p 3000:3000 --name hdproject-container hdproject'
            }
        }

        stage('Build') {
            steps {
                bat 'npm install'
                bat 'powershell Compress-Archive -Path public,server.js,package.json -DestinationPath build-1.zip -Force'
                archiveArtifacts artifacts: 'build-1.zip', fingerprint: true
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Security Scan') {
            steps {
                bat 'npm audit --json > audit.json'
                echo 'Security scan completed. Please review audit.json for High/Critical issues.'
                archiveArtifacts artifacts: 'audit.json', fingerprint: true
            }
        }

        stage('Code Quality') {
            steps {
                bat 'npx eslint . --max-warnings=0'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy stage would go here (e.g., staging server or cloud).'
            }
        }

        stage('Release') {
            steps {
                echo 'Release to production (simulated).'
            }
        }

        stage('Monitoring') {
            steps {
                bat 'powershell -Command "try { Invoke-WebRequest http://localhost:3000 -UseBasicParsing } catch { echo App is not responding }"'
                echo 'Monitoring complete.'
            }
        }
    }
}
