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
                bat 'npm install --include=dev'
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
                bat 'npm audit --json > audit.json'
                echo 'Security scan completed. Please review audit.json for High/Critical issues.'
                archiveArtifacts artifacts: 'audit.json', fingerprint: true
            }
        }


        stage('Code Quality') {
            steps {
             
                bat 'npx eslint . --max-warnings=0'
                echo 'Code Quality check completed (no warnings allowed).'
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
                bat "git tag v1.%BUILD_NUMBER%"
                bat "git push origin v1.%BUILD_NUMBER%"

            }
        }

        stage('Monitoring') {
            steps {
                bat 'powershell -Command "try { Invoke-WebRequest http://localhost:3000/api/places -UseBasicParsing } catch { echo App is not responding }"'
                echo 'Monitoring stage complete.'
            }
        }

    }
}
