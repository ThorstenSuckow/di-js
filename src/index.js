import {Component} from "./Component.js";
import {BaseComponent} from "./BaseComponent.js";


const cmp = new BaseComponent();
const cmp2 = new Component("extending base");

/* eslint-disable-next-line */
console.info("cmp and cmp2 share the same service singleton: ", cmp.service === cmp2.service);