import {Injectable} from "./lib/Injectable.js";
import {Service} from "./Service.js";

class BaseComponent {
}

/* eslint-disable-next-line */
BaseComponent = Injectable(BaseComponent, {
    service: Service
});

export {BaseComponent};