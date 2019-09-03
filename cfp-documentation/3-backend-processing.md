# Lesson 3
## Part 1

The objetive of this lesson is to have an initial implementation of an API in the back end

Run these two commands to generate the scafold for an API:

```bash
nest generate controller producto
nest generate service producto
```

This will generate clases in the `src/producto/` folder with an empty controller and an empty service.

Then you can add the specific code to them as shown in the [commit diff](https://github.com/jdottori/nest-cfp-demo/commit/2f80a24ad2545c3f0b639f9163853bea5b0524a3).

## Part 2

On this class the concept of Dependency Injection, MVC (with Service and Entity) is presented.
Then the persistence is implemented in a CSV file.
The loading of file is built in the Service, and the previously random objects are now readed from that file.