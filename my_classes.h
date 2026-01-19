//
// Created by perda on 19/01/2026.
//

#ifndef WEBIDL_EXAMPLE_MY_CLASSES_H
#define WEBIDL_EXAMPLE_MY_CLASSES_H


class Foo {
public:
    int getVal();
    void setVal(int v);
private:
    int val;
};

class Bar {
public:
    Bar(long val);
    void doSomething();
private:
    long val;
};


#endif //WEBIDL_EXAMPLE_MY_CLASSES_H
