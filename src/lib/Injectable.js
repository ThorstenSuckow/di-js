/**
 * Function wraps Proxy with construct()-handler to target class.
 *
 * @example
 *     class ServiceClass {}
 *
 *
 *     class Foo {}
 *     Foo = Injectable(Foo, {fooProperty: ServiceClass});
 *
 *
 *     class Bar {}
 *     Bar = Injectable(Foo, {barProperty: ServiceClass});
 *
 *
 *     const foo = new Foo();
 *     // foo.fooProperty - [instanceof ServiceClass]
 *
 *     const bar = new Bar();
 *     // bar.barProperty - [instanceof ServiceClass]
 *
 *     // both barProperty and fooProperty reference the same ServiceClass-instance.
 *     // bar.barProperty === foo.fooProperty - true
 *
 *
 *
 *
 * @param {Class} target
 * @param {Object} injections
 * @return {Class}
 */
const Injectable = function (target, injections) {

    const handler = {

        construct (target, args) {

            /* eslint-disable-next-line */
            console.log(`proxying constructor for ${target}`);

            return new target(...args);
        }
    };

    target = new Proxy(target, handler);

    return target;
};


export {Injectable};