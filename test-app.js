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