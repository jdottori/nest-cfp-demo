# Lesson 1

The objetive of this lesson is to start the project in NEST and serve the static front end files

Install Nest CLI Tool on the System:

`npm i -g @nestjs/cli`

Create the project:

`nest new cfp-demo`

Enter to the project folder:

`cd cfp-demo`

Commit the initial project:

```
git add .
git commit -m "Initial Project commit"
```

Try it with:

`npm run start:dev`

and enter to [http://localhost:3000](http://localhost:3000)

`npm install --save @nestjs/serve-static`

In `app.controller.ts` change the controller path: `@Controller('api')`.

In `app.controller.ts` change the controller path: `@Controller('api')`.

In `app.module.ts` add 
```js
 [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
```

Create the static files in `client` folder.

See the [second commit diff](https://github.com/jdottori/nest-cfp-demo/commit/87d9e9e78e2acb5e8300c21ea98c73b7484fdb2c) as example.

