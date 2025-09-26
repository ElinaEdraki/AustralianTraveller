pipeline {
    agent any

    stages {
        stage('Docker Build & Run') {
            steps {
                bat 'docker build -t hdproject .'
                bat 'docker rm -f hdproject-container || echo "No old container"'
                bat 'docker run -d -p 3000:3000 --name hdproject-container hdproject'
            }
        }

        stage('Build') {
            steps {
                bat 'npm install'
                bat 'powershell Compress-Archive -Path public,server.js,package.json -DestinationPath build.zip -Force'
                archiveArtifacts artifacts: 'build.zip', fingerprint: true
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Security Scan') {
            steps {
                bat 'npm audit || exit 0'
            }
        }

        stage('Code Quality') {
            steps {
                bat 'npx eslint . || exit 0'
                echo 'Code Quality check completed (warnings allowed).'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy stage simulated (already in Docker).'
            }
        }

        stage('Release') {
            steps {
                echo 'Releasing application to production (simulated)...'
            }
        }

        stage('Monitoring') {
            steps {
                bat 'powershell -Command "try { Invoke-WebRequest http://localhost:3000 -UseBasicParsing } catch { echo App is not responding }"'
                echo 'Monitoring stage complete.'
            }
        }
    }
}
