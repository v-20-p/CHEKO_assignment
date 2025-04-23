
FROM maven:3.9.4-eclipse-temurin-21 AS builder


WORKDIR /app



RUN apt-get update && apt-get install -y \
    curl \
    git \
    vim \
    && rm -rf /var/lib/apt/lists/*

COPY .env .
COPY pom.xml .
COPY src ./src


CMD ["mvn", "spring-boot:run", "-Dspring-boot.run.jvmArguments=-Dspring.devtools.restart.enabled=true -Dspring.devtools.livereload.enabled=true"]
