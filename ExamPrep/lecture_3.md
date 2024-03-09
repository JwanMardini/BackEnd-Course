# LECTURE 3

## Why containers?
- To make sure the same software is used in production
as while developing
    - same software = same servers + same code

- To make sure the all developers in a team share the same environment
- To use different versions of servers in different projects
- Easily switchable set of servers
    - no separate download & setup of servers!

## What is Docker?
- "Docker": A dock worker, handling cargo containers

- It's a company and a technology

- The first but not the only provider of container tech
- OCI = Open Container Initiative

## Images and containers
- An image is a standardized software package
- Blueprints for a container

- The container is a runtime instance of an image

- Images can be pushed to or pulled from repositories
- An image is built using a Dockerfile, often based on a prebuilt image from a repository

- Note: one container = one process, often need more than one container for a complete setup

## The Dockerfile
- A "dockerized" application always contains a Dockerfile

- It contains instructions to build a custom image

- Every image consists of layers where identical layers may be reused among different images

## Working with volumes
- Volumes are folders on your host machine

- Volumes make it possible to share data between your local environment and a container

- Without volumes, all data stored inside the container will
be lost when the container is removed

- With volumes, it's possible to in principle develop your
application inside the container

## Networks
- Applications need to reach out to other applications

- Scenario 1: Container to WWW
- Scenario 2: Container to localhost
- Scenario 3: Container to container

more to add here about Networks




