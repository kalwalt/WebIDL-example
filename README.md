# WebIDL-example
Testing the [WebIDL binder](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/WebIDL-Binder.html) with emscripten

## Build steps

1. Given the my_classes.idl file, create the glue code: `tools/webidl_binder my_classes.idl glue`
2. Compile the project: `emcc my_classes.cpp my_glue_wrapper.cpp --post-js glue.js -o output.js`
3. Test the example, open the test.html file in a browser and look in the dev console.