# Docker Basic Commands – Syntax and Examples

### 1. Docker Basic Commands

#### Check Docker Version

Syntax

``` bash
docker --version
```
#### Check Docker System Information

* Syntax

``` bash
docker info
```
#### Test Docker Installation

* Syntax
``` bash
docker run image_name
``` 
Example

``` bash
docker run hello-world
```

2. Docker Image Commands

#### Download an Image

* Syntax
``` bash
docker pull image_name
```
Example
``` bash
docker pull nginx
```
#### List All Images

* Syntax
``` bash
docker images
```
Example
``` bash
docker images
```
#### Build an Image

* Syntax
``` bash
docker build -t image_name .
```
Example
```bash
docker build -t my-app .
```
#### Remove an Image

* Syntax
``` bash
docker rmi image_name
```
Example

``` bash
docker rmi nginx
```
3. Docker Container Commands

#### Run a Container

Syntax
``` bash
docker run image_name
```
Example
``` bash
docker run nginx
```
#### Run a Container in Background

Syntax
``` bash
docker run -d image_name
```
Example
``` bash
docker run -d nginx
```
#### Run a Container with Custom Name

Syntax
``` bash
docker run -d --name container_name image_name
```
Example
``` bash
docker run -d --name my-nginx nginx
```
#### Run a Container with Port Mapping

Syntax
``` bash
docker run -d -p host_port:container_port image_name
```
Example
``` bash
docker run -d -p 8080:80 nginx
```
#### List Running Containers

Syntax
``` bash
docker ps
```
Example
``` bash
docker ps
```
#### List All Containers

Syntax
``` bash
docker ps -a
```
Example
``` bash
docker ps -a
```
#### Stop a Container

Syntax
``` bash
docker stop container_name
```
Example
``` bash
docker stop my-nginx
```
#### Start a Container

Syntax
``` bash
docker start container_name
```
Example
``` bash
docker start my-nginx
```
#### Restart a Container

Syntax
``` bash
docker restart container_name
```
Example
``` bash
docker restart my-nginx
```
#### Remove a Container

Syntax
``` bash
docker rm container_name
```
Example
``` bash
docker rm my-nginx
```
#### Force Remove a Container

Syntax
``` bash
docker rm -f container_name
``` 
3. Docker Container Commands

#### Run a Container

Syntax
``` bash
docker run image_name
```
Example
``` bash
docker run nginx
```
#### Run a Container in Background

Syntax
``` bash
docker run -d image_name
```
Example
``` bash
docker run -d nginx
```
#### Run a Container with Custom Name

Syntax
``` bash
docker run -d --name container_name image_name
```
Example
``` bash
docker run -d --name my-nginx nginx
```
#### Run a Container with Port Mapping

Syntax
``` bash
docker run -d -p host_port:container_port image_name
```
Example
``` bash
docker run -d -p 8080:80 nginx
``` 
#### List Running Containers

* Syntax
``` bash
docker ps
```
Example
``` bash
docker ps
```
#### List All Containers

* Syntax
``` bash
docker ps -a
```
Example
``` bash
docker ps -a
```
#### Stop a Container

* Syntax
``` bash
docker stop container_name
```
Example
``` bash
docker stop my-nginx
```
#### Start a Container

* Syntax
``` bash
docker start container_name
```
Example
``` bash
docker start my-nginx
```
#### Restart a Container

* Syntax
``` bash
docker restart container_name
```
Example
``` bash
docker restart my-nginx
```
#### Remove a Container

* Syntax
``` bash
docker rm container_name
```
Example
``` bash
docker rm my-nginx
```
#### Force Remove a Container

* Syntax
``` bash
docker rm -f container_name
```
Example

``` bash
docker rm -f my-nginx
```