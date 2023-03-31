import {Injectable} from "./lib/Injectable.js";
import {Service} from "./Service.js";
import {BaseComponent} from "./BaseComponent.js";

class Component extends BaseComponent {
    /**
     *
     * @param str
     * @param {Object} injections Will get appended by Injectable() and contains  injections
     * configured with Injectable() for this class
     */
    constructor (str, injections) {

        // be wary of the fact that super() will call the parent-constructor which triggers
        // any constructor injection defined for the parent class.
        super();

        this.service = injections.service;
    }
}

/* eslint-disable-next-line */
Component = Injectable(Component, {
    service: Service
});

export {Component};