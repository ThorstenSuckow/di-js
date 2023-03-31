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
 * @param {Class} target
 * @param {Object} injections
 * @return {Class}
 */
const Injectable = function (target, injections) {


    const handler = {

        /**
         * List of injections applied to target of this handler.
         * Will be available with the field under which a particular injection was configured:
         *
         * @example
         *   injections: {
         *       prop: ServiceClass
         *   }
         *
         *   // target.prop - [instanceof ServiceClass]
         *
         * @type {Object} injections
         */

        construct (target, args) {

            /* eslint-disable-next-line */
            console.log(`calling proxyied constructor for ${target}`);

            const injections = mapToSingletons(Object.entries({... (this.injections || {})}));

            const injArgs = Object.fromEntries(injections);

            // pass the injections as an additional operator
            const inst = new target(...args, injArgs);

            // to not accidentally replace any properties previously set with the constructor,
            // we check if the properties already exist bevor applingg them
            Object.entries(injArgs).forEach(([property, instance]) => {

                if (inst[property] === undefined) {
                    inst[property] = instance;
                }
            });

            return inst;
        }
    };

    const tHandler = {...handler, injections};
    target = new Proxy(target, tHandler);

    return target;
};

const SINGLETONS = {};
const mapToSingletons = function (mappings) {

    return mappings.map(([prop, requiredClass]) => {

        if (!SINGLETONS[requiredClass]) {
            SINGLETONS[requiredClass] = new requiredClass;
        }

        return [prop, SINGLETONS[requiredClass]];

    });


};

export {Injectable};