# WebIDL-example
Testing the [WebIDL binder](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/WebIDL-Binder.html) with emscripten

## Build steps

1 - given the my_classes.cpp create the glue code: `tools/webidl_binder my_classes.idl glue`
2 - compile the project: emcc my_classes.cpp my_glue_wrapper.cpp --post-js glue.js -o output.js