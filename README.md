![npm](https://badgen.net/npm/v/ts-standard)
[![License](https://badgen.net/github/license/standard/ts-standard)](https://github.com/gof-design-patterns/gof-factory-method-nodejs/edit/main/LICENSE)
[![TS-Standard - Typescript Standard Style Guide](https://badgen.net/badge/code%20style/ts-standard/blue?icon=typescript)](https://github.com/gof-design-patterns/gof-factory-method-nodejs)

# Factory Method

Factory method is a creational design pattern which solves the problem of creating product objects without specifying their concrete classes. This pattern defines a method, which should be used for creating objects instead of direct constructor call (new operator). Subclasses can override this method to change the class of objects that will be created.

With that, you can override the factory method in a subclass and change the class of products (products are th objects returned by a factory method) being created by the method.

There's a slight limitation though: subclasses may return different types of products only if these products have a common base class or interface. Also, the factory method in the base class should have its return type declared as this interface.

For example, both **AWSStorageClient** and **GoogleStorageClient** classes should implement the **Client** interface which declares a method called upload. Each class implements this method differently: aws upload to aws cloud, google deliver google cloud. The factory method in the **AWSStorage** class returns **AWSStorageClient** objects, whereas the factory method in the **GoogleStorage** class returns **GoogleStorageClient**.

![Alt text](Factory-Method.png?raw=true "Factory Method diagram")

The code that uses the factory method (**runLogic**) doesn’t see a difference between the actual products returned by various subclasses. The **runLogic** treats all the products as abstract **Client**. The **runLogic** knows that all **Client** objects are supposed to have the **upload** method, but exactly how it works isn’t important to the **runLogic** .

## 🧙 Why

The main file is `src/main/app.ts`, this file has three methods: `main()` that call `bootstrap()` and `runLogic()`.

`bootstrap()` method assigns the class' attribute `private storage: Storage` with one **Storage** depending of `const TYPE_STORAGE`.

`runLogic()` call the method `uploadFile(path)` of the assigned storage.

## ⌨️ Basic Usage

```sh
npm install
npm start
```

## 📜 Run tests

```sh
npm test
```

## 📋 Contributing Guide

I welcome all pull requests. Please make sure you add appropriate test cases for any features
added. Before opening a PR please make sure to run the following scripts:

- `npm run lint` checks for code errors and format according to [gof-factory-method-nodejs](https://github.com/gof-design-patterns/gof-factory-method-nodejs)
- `npm test` make sure all tests pass
- `npm test -- --coverage` make sure the coverage has not decreased from current master

