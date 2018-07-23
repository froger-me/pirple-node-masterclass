# Homework Assignment #1

## The Assignment:

Please create a simple "Hello World" API. Meaning:

1. It should be a RESTful JSON API that listens on a port of your choice. 
2. When someone posts anything to the route /hello, you should return a welcome message, in JSON format. This message can be anything you want. 

## The turned-in result:

route `/hello` :

```
{
	"hello": "Hello World! (try and give me a GET parameter \"name\")",
	"content": "Let's shout your raw content out loud! (try to send some raw text in with the POST method)"
}
```

route `/hello?name=pirple`

```
{
	"hello": "Hello Pirple!",
	"content": "Let's shout your raw content out loud! (try to send some raw text in with the POST method)"
}
```

route `/hello` with POST raw text "This is some silly test":

```
{
	"hello": "Hello World! (try and give me a GET parameter \"name\")",
	"content": "THIS IS SOME SILLY TEST"
}
```

route `/hello?name=pirple `with POST raw text "This is some silly test":

```
{
	"hello": "Hello Pirple!",
	"content": "THIS IS SOME SILLY TEST"
}
```