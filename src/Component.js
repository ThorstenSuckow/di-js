import {Injectable} from "./lib/Injectable.js";
import {Service} from "./Service.js";

class Component {
    constructor () {

    }


}

/* eslint-disable-next-line */
Component = Injectable(Component, {
    service: Service
});

export {Component};