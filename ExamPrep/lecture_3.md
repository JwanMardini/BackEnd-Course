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

## Summaries from the book
### Chapter 2 summary
In this chapter, we learned about Docker, Inc. the company, and the Docker technology.
Docker, Inc. is a technology company out of San Francisco with an ambition to change
the way we do software. They were arguably the first-movers and instigators of the
modern container revolution.
The Docker technology focuses on running and managing application containers. It
runs on Linux and Windows, can be installed almost anywhere, and is currently the
most popular container runtime used by Kubernetes.
The Open Container Initiative (OCI) was instrumental in standardizing low-level
container technologies such as runtimes, image format, and registries

Docker Images?
It’s useful to think of a Docker image as an object that contains an OS filesystem, an
application, and all application dependencies.


### Chapter 5 summary
The Docker engine is software that makes it easy to build, ship, and run containers.
It implements the OCI standards and is a modular app comprising lots of small,
specialised components.
The Docker daemon component implements the Docker API and can do things such as
image management, networks, and volumes. However, image management is currently
being removed from the daemon and implemented in containerd.
The containerd component oversees container execution and image management tasks.
It was originally written by Docker, Inc. but then contributed to the CNCF. It’s usually
classified as a high-level runtime that acts as a container supervisor managing lifecycle
operations. It is small and lightweight and is used by many other projects including
Kubernetes.
containerd relies on a low-level runtime called runc to interface with the host kernel
and build containers. runc is the reference implementation of the OCI runtime-spec and
expects to start containers from OCI-compliant bundles. containerd talks to runc and
ensures Docker images are presented to runc as OCI-compliant bundles.
runc can be used as a standalone CLI tool to create containers. It’s based on code from
libcontainer and is used almost everywhere that containerd is used.

### Chapter 6 summary

Docker images - The TLDR
Image, Docker image, container image, and OCI image all mean the same thing. We’ll use the
terms interchangeably.
A container image is read-only package that contains everything you need to run an
application. It includes application code, application dependencies, a minimal set of OS
constructs, and metadata. A single image can be used to start one or more containers.
If you’re familiar with VMware, you can think of images as similar to VM templates.
A VM template is like a stopped VM — a container image is like a stopped container.
If you’re a developer you can think of them as similar to classes. You can create one or
more objects from a class — you can create one or more containers from an image.
You get container images by pulling them from a registry. The most common registry is
Docker Hub11 but others exist. The pull operation downloads an image to your local
Docker host where Docker can use it to start one or more containers.
Images are made up of multiple layers that are stacked on top of each other and represented as a single object. Inside of the image is a cut-down operating system (OS) and
all of the files and dependencies required to run an application. Because containers are
intended to be fast and lightweight, images tend to be small (Windows images tend to be
huge).


### Docker containers from the book!

Docker containers - The TLDR
A container is the runtime instance of an image. In the same way that you can start a
virtual machine (VM) from a virtual machine template, you start one or more containers
from a single image. The big difference between a VM and a container is that containers
are smaller, faster, and more portable.

The simplest way to start a container is with the docker run command. The command
can take a lot of arguments, but in its most basic form you tell it an image to use and
an app to run: docker run <image> <app>. The following command will start a new
container based on the Ubuntu Linux image and start a Bash shell

$ docker run -it ubuntu /bin/bash`

The -it flags connect your current terminal window to the container’s shell.
Containers run until the main app exits. In the previous example, the container will exit
when the Bash shell exits.
A simple way to demonstrate this is to start a new container and tell it to run the sleep
command for 10 seconds. The container will start, seize your terminal for 10 seconds,
then exit. The following is a simple way to demonstrate this on a Linux host.

$ docker run -it alpine:latest sleep 10

You can manually stop a running container with docker stop and restart it with docker
start. To get rid of a container forever, you have to explicitly delete it with docker rm.


### Chapter 8 summary
#### Containerizing an app
Containers are all about making apps simple to build, ship, and run. The end-to-end
process looks like this:
1. Start with your application code and dependencies
2. Create a Dockerfile that describes your app, dependencies, and how to run it
3. Build it into an image by passing the Dockerfile to the docker build command
4. Push the new image to a registry (optional)
5. Run a container from the image

![alt text](https://cdn.discordapp.com/attachments/1204522409554612224/1216018087967461416/image.png?ex=65fedc18&is=65ec6718&hm=9cf26758c76a5187d9c9becfcee692510c4c327a17db7a9c172af93a40e2774d&)


### Chapter 13
#### Volumes and persistent data:

There are two main categories of data — persistent and non-persistent.
Persistent is the data we need to keep. Things like customer records, financial data,
research results, audit logs, and even some types of application log data. Non-persistent
is the data we don’t need to keep.
Both are important, and Docker has solutions for both.
To deal with non-persistent data, every Docker container gets its own non-persistent
storage. This is automatically created for every container and is tightly coupled to the
lifecycle of the container. As a result, deleting the container will delete the storage and
any data on it.
To deal with persistent data, containers need to store it in a volume. Volumes are separate
objects that have their lifecycles decoupled from containers. This means you can create
and manage volumes independently, and they don’t get deleted when their container is
deleted.