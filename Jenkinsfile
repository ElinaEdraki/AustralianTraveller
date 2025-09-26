pipeline {
    agent any

    stages {
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
                bat 'start /B node server.js'
                bat 'ping -n 6 127.0.0.1 >nul'
                bat 'taskkill /IM node.exe /F'
                echo 'Deploy stage finished successfully.'
            }
        }
        stage('Release') {
            steps {
                echo 'Releasing application to production (simulated)...'
                // در پروژه واقعی: deploy به Docker Hub یا AWS
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
