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

Syntax
``` bash
docker pull image_name
```
Example
``` bash
docker pull nginx
```
#### List All Images

Syntax
``` bash
docker images
```
Example
``` bash
docker images
```
#### Build an Image

Syntax
``` bash
docker build -t image_name .
```
Example
```bash
docker build -t my-app .

#### Remove an Image

Syntax

docker rmi image_name

Example

docker rmi nginx