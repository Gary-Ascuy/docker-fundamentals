# Basic docker example

## Build first image
```
$ docker build -t page .
```

## Run your first page
```
$ docker run -d -p 4666:80 page
```

## Push to Docker Hub
```
$ docker tag page garyascuy/page:1.0.2-devfest
$ docker push garyascuy/page:1.0.2-devfest
```

## Pull & Run from Docker Hub
```
# Alternative 1
$ docker pull garyascuy/page:1.0.2-devfest
$ docker run -d -p 4666:80 page

# Alternative 2
$ docker run -d -p 4666:80 garyascuy/page:1.0.2-devfest
```
