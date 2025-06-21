pipeline {
    agent any

    environment {
        IMAGE_NAME = "your-dockerhub-username/note-app"
        IMAGE_TAG = "v1.0.0"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://your-repo.git'
            }
        }

        stage('Docker Build') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-credentials',
                                                  usernameVariable: 'DOCKER_USERNAME',
                                                  passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                }
            }
        }

        stage('Docker Push') {
            steps {
                sh "docker push ${IMAGE_NAME}:${IMAGE_TAG}"
            }
        }
    }
}
