var Module = {
    onRuntimeInitialized: function() {
        //Module._foobar(); // foobar was exported
        console.log(Module)
        var f = new Module.Foo();
        console.log(f)
        f.setVal(200)
        console.log(f.getVal())
        Module.destroy(f)
        console.log(f)
        var b = new Module.Bar(123);
        console.log(b)
        b.doSomething();
    }
};

var f = new Module.Foo();
f.setVal(200);
alert(f.getVal());

var b = new Module.Bar(123);
b.doSomething();

var instance;
/*Module().then(module => {
    instance = module;

    console.log(instance)
});*/