/*!
 * Quill Editor v1.0.0
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define([], factory);
    else if(typeof exports === 'object')
        exports["Quill"] = factory();
    else
        root["Quill"] = factory();
})(this, function() {
    return /******/ (function(modules) { // webpackBootstrap
        /******/ 	// The module cache
        /******/ 	var installedModules = {};

        /******/ 	// The require function
        /******/ 	function __webpack_require__(moduleId) {

            /******/ 		// Check if module is in cache
            /******/ 		if(installedModules[moduleId])
                /******/ 			return installedModules[moduleId].exports;

            /******/ 		// Create a new module (and put it into the cache)
            /******/ 		var module = installedModules[moduleId] = {
                /******/ 			exports: {},
                /******/ 			id: moduleId,
                /******/ 			loaded: false
                /******/ 		};

            /******/ 		// Execute the module function
            /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

            /******/ 		// Flag the module as loaded
            /******/ 		module.loaded = true;

            /******/ 		// Return the exports of the module
            /******/ 		return module.exports;
            /******/ 	}


        /******/ 	// expose the modules object (__webpack_modules__)
        /******/ 	__webpack_require__.m = modules;

        /******/ 	// expose the module cache
        /******/ 	__webpack_require__.c = installedModules;

        /******/ 	// __webpack_public_path__
        /******/ 	__webpack_require__.p = "";

        /******/ 	// Load entry module and return exports
        /******/ 	return __webpack_require__(0);
        /******/ })
        /************************************************************************/
        /******/ ([
            /* 0 */
            /***/ function(module, exports, __webpack_require__) {

                module.exports = __webpack_require__(1);


                /***/ },
            /* 1 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                var _quill = __webpack_require__(18);

                var _quill2 = _interopRequireDefault(_quill);

                var _block = __webpack_require__(32);

                var _block2 = _interopRequireDefault(_block);

                var _break = __webpack_require__(33);

                var _break2 = _interopRequireDefault(_break);

                var _container = __webpack_require__(42);

                var _container2 = _interopRequireDefault(_container);

                var _cursor = __webpack_require__(37);

                var _cursor2 = _interopRequireDefault(_cursor);

                var _embed = __webpack_require__(34);

                var _embed2 = _interopRequireDefault(_embed);

                var _inline = __webpack_require__(35);

                var _inline2 = _interopRequireDefault(_inline);

                var _scroll = __webpack_require__(43);

                var _scroll2 = _interopRequireDefault(_scroll);

                var _text = __webpack_require__(36);

                var _text2 = _interopRequireDefault(_text);

                var _clipboard = __webpack_require__(44);

                var _clipboard2 = _interopRequireDefault(_clipboard);

                var _history = __webpack_require__(51);

                var _history2 = _interopRequireDefault(_history);

                var _keyboard = __webpack_require__(52);

                var _keyboard2 = _interopRequireDefault(_keyboard);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                _quill2.default.register({
                    'blots/block': _block2.default,
                    'blots/block/embed': _block.BlockEmbed,
                    'blots/break': _break2.default,
                    'blots/container': _container2.default,
                    'blots/cursor': _cursor2.default,
                    'blots/embed': _embed2.default,
                    'blots/inline': _inline2.default,
                    'blots/scroll': _scroll2.default,
                    'blots/text': _text2.default,

                    'modules/clipboard': _clipboard2.default,
                    'modules/history': _history2.default,
                    'modules/keyboard': _keyboard2.default
                });

                _parchment2.default.register(_block2.default, _break2.default, _cursor2.default, _inline2.default, _scroll2.default, _text2.default);

                module.exports = _quill2.default;

                /***/ },
            /* 2 */
            /***/ function(module, exports, __webpack_require__) {

                "use strict";
                var container_1 = __webpack_require__(3);
                var format_1 = __webpack_require__(7);
                var leaf_1 = __webpack_require__(12);
                var scroll_1 = __webpack_require__(13);
                var inline_1 = __webpack_require__(14);
                var block_1 = __webpack_require__(15);
                var embed_1 = __webpack_require__(16);
                var text_1 = __webpack_require__(17);
                var attributor_1 = __webpack_require__(8);
                var class_1 = __webpack_require__(10);
                var style_1 = __webpack_require__(11);
                var store_1 = __webpack_require__(9);
                var Registry = __webpack_require__(6);
                var Parchment = {
                    Scope: Registry.Scope,
                    create: Registry.create,
                    find: Registry.find,
                    query: Registry.query,
                    register: Registry.register,
                    Container: container_1.default,
                    Format: format_1.default,
                    Leaf: leaf_1.default,
                    Embed: embed_1.default,
                    Scroll: scroll_1.default,
                    Block: block_1.default,
                    Inline: inline_1.default,
                    Text: text_1.default,
                    Attributor: {
                        Attribute: attributor_1.default,
                        Class: class_1.default,
                        Style: style_1.default,
                        Store: store_1.default
                    }
                };
                Object.defineProperty(exports, "__esModule", { value: true });
                exports.default = Parchment;


                /***/ },
            /* 3 */
            /***/ function(module, exports, __webpack_require__) {

                "use strict";
                var __extends = (this && this.__extends) || function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
                var linked_list_1 = __webpack_require__(4);
                var shadow_1 = __webpack_require__(5);
                var Registry = __webpack_require__(6);
                var ContainerBlot = (function (_super) {
                    __extends(ContainerBlot, _super);
                    function ContainerBlot() {
                        _super.apply(this, arguments);
                    }
                    ContainerBlot.prototype.appendChild = function (other) {
                        this.insertBefore(other);
                    };
                    ContainerBlot.prototype.attach = function () {
                        var _this = this;
                        _super.prototype.attach.call(this);
                        this.children = new linked_list_1.default();
                        // Need to be reversed for if DOM nodes already in order
                        [].slice.call(this.domNode.childNodes).reverse().forEach(function (node) {
                            try {
                                var child = makeBlot(node);
                                _this.insertBefore(child, _this.children.head);
                            }
                            catch (err) {
                                if (err instanceof Registry.ParchmentError)
                                    return;
                                else
                                    throw err;
                            }
                        });
                    };
                    ContainerBlot.prototype.deleteAt = function (index, length) {
                        if (index === 0 && length === this.length()) {
                            return this.remove();
                        }
                        this.children.forEachAt(index, length, function (child, offset, length) {
                            child.deleteAt(offset, length);
                        });
                    };
                    ContainerBlot.prototype.descendant = function (criteria, index) {
                        var _a = this.children.find(index), child = _a[0], offset = _a[1];
                        if ((criteria.blotName == null && criteria(child)) ||
                            (criteria.blotName != null && child instanceof criteria)) {
                            return [child, offset];
                        }
                        else if (child instanceof ContainerBlot) {
                            return child.descendant(criteria, offset);
                        }
                        else {
                            return [null, -1];
                        }
                    };
                    ContainerBlot.prototype.descendants = function (criteria, index, length) {
                        if (index === void 0) { index = 0; }
                        if (length === void 0) { length = Number.MAX_VALUE; }
                        var descendants = [], lengthLeft = length;
                        this.children.forEachAt(index, length, function (child, index, length) {
                            if ((criteria.blotName == null && criteria(child)) ||
                                (criteria.blotName != null && child instanceof criteria)) {
                                descendants.push(child);
                            }
                            if (child instanceof ContainerBlot) {
                                descendants = descendants.concat(child.descendants(criteria, index, lengthLeft));
                            }
                            lengthLeft -= length;
                        });
                        return descendants;
                    };
                    ContainerBlot.prototype.detach = function () {
                        this.children.forEach(function (child) {
                            child.detach();
                        });
                        _super.prototype.detach.call(this);
                    };
                    ContainerBlot.prototype.formatAt = function (index, length, name, value) {
                        this.children.forEachAt(index, length, function (child, offset, length) {
                            child.formatAt(offset, length, name, value);
                        });
                    };
                    ContainerBlot.prototype.insertAt = function (index, value, def) {
                        var _a = this.children.find(index), child = _a[0], offset = _a[1];
                        if (child) {
                            child.insertAt(offset, value, def);
                        }
                        else {
                            var blot = (def == null) ? Registry.create('text', value) : Registry.create(value, def);
                            this.appendChild(blot);
                        }
                    };
                    ContainerBlot.prototype.insertBefore = function (childBlot, refBlot) {
                        if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function (child) {
                            return childBlot instanceof child;
                        })) {
                            throw new Registry.ParchmentError("Cannot insert " + childBlot.statics.blotName + " into " + this.statics.blotName);
                        }
                        childBlot.insertInto(this, refBlot);
                    };
                    ContainerBlot.prototype.length = function () {
                        return this.children.reduce(function (memo, child) {
                            return memo + child.length();
                        }, 0);
                    };
                    ContainerBlot.prototype.moveChildren = function (targetParent, refNode) {
                        this.children.forEach(function (child) {
                            targetParent.insertBefore(child, refNode);
                        });
                    };
                    ContainerBlot.prototype.optimize = function () {
                        _super.prototype.optimize.call(this);
                        if (this.children.length === 0) {
                            if (this.statics.defaultChild != null) {
                                var child = Registry.create(this.statics.defaultChild);
                                this.appendChild(child);
                                child.optimize();
                            }
                            else {
                                this.remove();
                            }
                        }
                    };
                    ContainerBlot.prototype.path = function (index, inclusive) {
                        if (inclusive === void 0) { inclusive = false; }
                        var _a = this.children.find(index, inclusive), child = _a[0], offset = _a[1];
                        var position = [[this, index]];
                        if (child instanceof ContainerBlot) {
                            return position.concat(child.path(offset, inclusive));
                        }
                        else if (child != null) {
                            position.push([child, offset]);
                        }
                        return position;
                    };
                    ContainerBlot.prototype.removeChild = function (child) {
                        this.children.remove(child);
                    };
                    ContainerBlot.prototype.replace = function (target) {
                        if (target instanceof ContainerBlot) {
                            target.moveChildren(this);
                        }
                        _super.prototype.replace.call(this, target);
                    };
                    ContainerBlot.prototype.split = function (index, force) {
                        if (force === void 0) { force = false; }
                        if (!force) {
                            if (index === 0)
                                return this;
                            if (index === this.length())
                                return this.next;
                        }
                        var after = this.clone();
                        this.parent.insertBefore(after, this.next);
                        this.children.forEachAt(index, this.length(), function (child, offset, length) {
                            child = child.split(offset, force);
                            after.appendChild(child);
                        });
                        return after;
                    };
                    ContainerBlot.prototype.unwrap = function () {
                        this.moveChildren(this.parent, this.next);
                        this.remove();
                    };
                    ContainerBlot.prototype.update = function (mutations) {
                        var _this = this;
                        var addedNodes = [], removedNodes = [];
                        mutations.forEach(function (mutation) {
                            if (mutation.target === _this.domNode && mutation.type === 'childList') {
                                addedNodes.push.apply(addedNodes, mutation.addedNodes);
                                removedNodes.push.apply(removedNodes, mutation.removedNodes);
                            }
                        });
                        removedNodes.forEach(function (node) {
                            var blot = Registry.find(node);
                            if (blot == null)
                                return;
                            if (blot.domNode.parentNode == null || blot.domNode.parentNode === _this.domNode) {
                                blot.detach();
                            }
                        });
                        addedNodes.filter(function (node) {
                            return node.parentNode == _this.domNode;
                        }).sort(function (a, b) {
                            if (a === b)
                                return 0;
                            if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {
                                return 1;
                            }
                            return -1;
                        }).forEach(function (node) {
                            var refBlot = null;
                            if (node.nextSibling != null) {
                                refBlot = Registry.find(node.nextSibling);
                            }
                            var blot = makeBlot(node);
                            if (blot.next != refBlot || blot.next == null) {
                                if (blot.parent != null) {
                                    blot.parent.removeChild(_this);
                                }
                                _this.insertBefore(blot, refBlot);
                            }
                        });
                    };
                    return ContainerBlot;
                }(shadow_1.default));
                function makeBlot(node) {
                    var blot = Registry.find(node);
                    if (blot == null) {
                        try {
                            blot = Registry.create(node);
                        }
                        catch (e) {
                            blot = Registry.create(Registry.Scope.INLINE);
                            [].slice.call(node.childNodes).forEach(function (child) {
                                blot.domNode.appendChild(child);
                            });
                            node.parentNode.replaceChild(blot.domNode, node);
                            blot.attach();
                        }
                    }
                    return blot;
                }
                Object.defineProperty(exports, "__esModule", { value: true });
                exports.default = ContainerBlot;


                /***/ },
            /* 4 */
            /***/ function(module, exports) {

                "use strict";
                var LinkedList = (function () {
                    function LinkedList() {
                        this.head = this.tail = undefined;
                        this.length = 0;
                    }
                    LinkedList.prototype.append = function () {
                        var nodes = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            nodes[_i - 0] = arguments[_i];
                        }
                        this.insertBefore(nodes[0], undefined);
                        if (nodes.length > 1) {
                            this.append.apply(this, nodes.slice(1));
                        }
                    };
                    LinkedList.prototype.contains = function (node) {
                        var cur, next = this.iterator();
                        while (cur = next()) {
                            if (cur === node)
                                return true;
                        }
                        return false;
                    };
                    LinkedList.prototype.insertBefore = function (node, refNode) {
                        node.next = refNode;
                        if (refNode != null) {
                            node.prev = refNode.prev;
                            if (refNode.prev != null) {
                                refNode.prev.next = node;
                            }
                            refNode.prev = node;
                            if (refNode === this.head) {
                                this.head = node;
                            }
                        }
                        else if (this.tail != null) {
                            this.tail.next = node;
                            node.prev = this.tail;
                            this.tail = node;
                        }
                        else {
                            node.prev = undefined;
                            this.head = this.tail = node;
                        }
                        this.length += 1;
                    };
                    LinkedList.prototype.offset = function (target) {
                        var index = 0, cur = this.head;
                        while (cur != null) {
                            if (cur === target)
                                return index;
                            index += cur.length();
                            cur = cur.next;
                        }
                        return -1;
                    };
                    LinkedList.prototype.remove = function (node) {
                        if (!this.contains(node))
                            return;
                        if (node.prev != null)
                            node.prev.next = node.next;
                        if (node.next != null)
                            node.next.prev = node.prev;
                        if (node === this.head)
                            this.head = node.next;
                        if (node === this.tail)
                            this.tail = node.prev;
                        this.length -= 1;
                    };
                    LinkedList.prototype.iterator = function (curNode) {
                        if (curNode === void 0) { curNode = this.head; }
                        // TODO use yield when we can
                        return function () {
                            var ret = curNode;
                            if (curNode != null)
                                curNode = curNode.next;
                            return ret;
                        };
                    };
                    LinkedList.prototype.find = function (index, inclusive) {
                        if (inclusive === void 0) { inclusive = false; }
                        var cur, next = this.iterator();
                        while (cur = next()) {
                            var length_1 = cur.length();
                            if (index < length_1 || (inclusive && index === length_1 && (cur.next == null || cur.next.length() !== 0))) {
                                return [cur, index];
                            }
                            index -= length_1;
                        }
                        return [null, 0];
                    };
                    LinkedList.prototype.forEach = function (callback) {
                        var cur, next = this.iterator();
                        while (cur = next()) {
                            callback(cur);
                        }
                    };
                    LinkedList.prototype.forEachAt = function (index, length, callback) {
                        if (length <= 0)
                            return;
                        var _a = this.find(index), startNode = _a[0], offset = _a[1];
                        var cur, curIndex = index - offset, next = this.iterator(startNode);
                        while ((cur = next()) && curIndex < index + length) {
                            var curLength = cur.length();
                            if (index > curIndex) {
                                callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index));
                            }
                            else {
                                callback(cur, 0, Math.min(curLength, index + length - curIndex));
                            }
                            curIndex += curLength;
                        }
                    };
                    LinkedList.prototype.map = function (callback) {
                        return this.reduce(function (memo, cur) {
                            memo.push(callback(cur));
                            return memo;
                        }, []);
                    };
                    LinkedList.prototype.reduce = function (callback, memo) {
                        var cur, next = this.iterator();
                        while (cur = next()) {
                            memo = callback(memo, cur);
                        }
                        return memo;
                    };
                    return LinkedList;
                }());
                Object.defineProperty(exports, "__esModule", { value: true });
                exports.default = LinkedList;


                /***/ },
            /* 5 */
            /***/ function(module, exports, __webpack_require__) {

                "use strict";
                var Registry = __webpack_require__(6);
                var ShadowBlot = (function () {
                    function ShadowBlot(domNode) {
                        this.domNode = domNode;
                        this.attach();
                    }
                    Object.defineProperty(ShadowBlot.prototype, "statics", {
                        // Hack for accessing inherited static methods
                        get: function () {
                            return this.constructor;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    ShadowBlot.create = function (value) {
                        if (this.tagName == null) {
                            throw new Registry.ParchmentError('Blot definition missing tagName');
                        }
                        var node;
                        if (Array.isArray(this.tagName)) {
                            if (typeof value === 'string') {
                                value = value.toUpperCase();
                                if (parseInt(value).toString() === value) {
                                    value = parseInt(value);
                                }
                            }
                            if (typeof value === 'number') {
                                node = document.createElement(this.tagName[value - 1]);
                            }
                            else if (this.tagName.indexOf(value) > -1) {
                                node = document.createElement(value);
                            }
                            else {
                                node = document.createElement(this.tagName[0]);
                            }
                        }
                        else {
                            node = document.createElement(this.tagName);
                        }
                        if (this.className) {
                            node.classList.add(this.className);
                        }
                        return node;
                    };
                    ShadowBlot.prototype.attach = function () {
                        this.domNode[Registry.DATA_KEY] = { blot: this };
                    };
                    ShadowBlot.prototype.clone = function () {
                        var domNode = this.domNode.cloneNode();
                        return Registry.create(domNode);
                    };
                    ShadowBlot.prototype.detach = function () {
                        if (this.parent != null)
                            this.parent.removeChild(this);
                        delete this.domNode[Registry.DATA_KEY];
                    };
                    ShadowBlot.prototype.deleteAt = function (index, length) {
                        var blot = this.isolate(index, length);
                        blot.remove();
                    };
                    ShadowBlot.prototype.formatAt = function (index, length, name, value) {
                        var blot = this.isolate(index, length);
                        if (Registry.query(name, Registry.Scope.BLOT) != null && value) {
                            blot.wrap(name, value);
                        }
                        else if (Registry.query(name, Registry.Scope.ATTRIBUTE) != null) {
                            var parent_1 = Registry.create(this.statics.scope);
                            blot.wrap(parent_1);
                            parent_1.format(name, value);
                        }
                    };
                    ShadowBlot.prototype.insertAt = function (index, value, def) {
                        var blot = (def == null) ? Registry.create('text', value) : Registry.create(value, def);
                        var ref = this.split(index);
                        this.parent.insertBefore(blot, ref);
                    };
                    ShadowBlot.prototype.insertInto = function (parentBlot, refBlot) {
                        if (this.parent != null) {
                            this.parent.children.remove(this);
                        }
                        parentBlot.children.insertBefore(this, refBlot);
                        if (refBlot != null) {
                            var refDomNode = refBlot.domNode;
                        }
                        if (this.next == null || this.domNode.nextSibling != refDomNode) {
                            parentBlot.domNode.insertBefore(this.domNode, refDomNode);
                        }
                        this.parent = parentBlot;
                    };
                    ShadowBlot.prototype.isolate = function (index, length) {
                        var target = this.split(index);
                        target.split(length);
                        return target;
                    };
                    ShadowBlot.prototype.length = function () {
                        return 1;
                    };
                    ;
                    ShadowBlot.prototype.offset = function (root) {
                        if (root === void 0) { root = this.parent; }
                        if (this.parent == null || this == root)
                            return 0;
                        return this.parent.children.offset(this) + this.parent.offset(root);
                    };
                    ShadowBlot.prototype.optimize = function () {
                        // TODO clean up once we use WeakMap
                        if (this.domNode[Registry.DATA_KEY] != null) {
                            delete this.domNode[Registry.DATA_KEY].mutations;
                        }
                    };
                    ShadowBlot.prototype.remove = function () {
                        if (this.domNode.parentNode != null) {
                            this.domNode.parentNode.removeChild(this.domNode);
                        }
                        this.detach();
                    };
                    ShadowBlot.prototype.replace = function (target) {
                        if (target.parent == null)
                            return;
                        target.parent.insertBefore(this, target.next);
                        target.remove();
                    };
                    ShadowBlot.prototype.replaceWith = function (name, value) {
                        var replacement = typeof name === 'string' ? Registry.create(name, value) : name;
                        replacement.replace(this);
                        return replacement;
                    };
                    ShadowBlot.prototype.split = function (index, force) {
                        return index === 0 ? this : this.next;
                    };
                    ShadowBlot.prototype.update = function (mutations) {
                        if (mutations === void 0) { mutations = []; }
                        // Nothing to do by default
                    };
                    ShadowBlot.prototype.wrap = function (name, value) {
                        var wrapper = typeof name === 'string' ? Registry.create(name, value) : name;
                        if (this.parent != null) {
                            this.parent.insertBefore(wrapper, this.next);
                        }
                        wrapper.appendChild(this);
                        return wrapper;
                    };
                    ShadowBlot.blotName = 'abstract';
                    return ShadowBlot;
                }());
                Object.defineProperty(exports, "__esModule", { value: true });
                exports.default = ShadowBlot;


                /***/ },
            /* 6 */
            /***/ function(module, exports) {

                "use strict";
                var __extends = (this && this.__extends) || function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
                var ParchmentError = (function (_super) {
                    __extends(ParchmentError, _super);
                    function ParchmentError(message) {
                        message = '[Parchment] ' + message;
                        _super.call(this, message);
                        this.message = message;
                        this.name = this.constructor.name;
                    }
                    return ParchmentError;
                }(Error));
                exports.ParchmentError = ParchmentError;
                var attributes = {};
                var classes = {};
                var tags = {};
                var types = {};
                exports.DATA_KEY = '__blot';
                (function (Scope) {
                    Scope[Scope["TYPE"] = 3] = "TYPE";
                    Scope[Scope["LEVEL"] = 12] = "LEVEL";
                    Scope[Scope["ATTRIBUTE"] = 13] = "ATTRIBUTE";
                    Scope[Scope["BLOT"] = 14] = "BLOT";
                    Scope[Scope["INLINE"] = 7] = "INLINE";
                    Scope[Scope["BLOCK"] = 11] = "BLOCK";
                    Scope[Scope["BLOCK_BLOT"] = 10] = "BLOCK_BLOT";
                    Scope[Scope["INLINE_BLOT"] = 6] = "INLINE_BLOT";
                    Scope[Scope["BLOCK_ATTRIBUTE"] = 9] = "BLOCK_ATTRIBUTE";
                    Scope[Scope["INLINE_ATTRIBUTE"] = 5] = "INLINE_ATTRIBUTE";
                    Scope[Scope["ANY"] = 15] = "ANY";
                })(exports.Scope || (exports.Scope = {}));
                var Scope = exports.Scope;
                ;
                function create(input, value) {
                    var match = query(input);
                    if (match == null) {
                        throw new ParchmentError("Unable to create " + input + " blot");
                    }
                    var BlotClass = match;
                    var node = input instanceof Node ? input : BlotClass.create(value);
                    return new BlotClass(node, value);
                }
                exports.create = create;
                function find(node, bubble) {
                    if (bubble === void 0) { bubble = false; }
                    if (node == null)
                        return null;
                    if (node[exports.DATA_KEY] != null)
                        return node[exports.DATA_KEY].blot;
                    if (bubble)
                        return find(node.parentNode, bubble);
                    return null;
                }
                exports.find = find;
                function query(query, scope) {
                    if (scope === void 0) { scope = Scope.ANY; }
                    var match;
                    if (typeof query === 'string') {
                        match = types[query] || attributes[query];
                    }
                    else if (query instanceof Text) {
                        match = types['text'];
                    }
                    else if (typeof query === 'number') {
                        if (query & Scope.LEVEL & Scope.BLOCK) {
                            match = types['block'];
                        }
                        else if (query & Scope.LEVEL & Scope.INLINE) {
                            match = types['inline'];
                        }
                    }
                    else if (query instanceof HTMLElement) {
                        var names = (query.getAttribute('class') || '').split(/\s+/);
                        for (var i in names) {
                            if (match = classes[names[i]])
                                break;
                        }
                        match = match || tags[query.tagName];
                    }
                    if (match == null)
                        return null;
                    if ((scope & Scope.LEVEL & match.scope) && (scope & Scope.TYPE & match.scope))
                        return match;
                    return null;
                }
                exports.query = query;
                function register() {
                    var Definitions = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        Definitions[_i - 0] = arguments[_i];
                    }
                    if (Definitions.length > 1) {
                        return Definitions.map(function (d) {
                            return register(d);
                        });
                    }
                    var Definition = Definitions[0];
                    if (typeof Definition.blotName !== 'string' && typeof Definition.attrName !== 'string') {
                        throw new ParchmentError('Invalid definition');
                    }
                    else if (Definition.blotName === 'abstract') {
                        throw new ParchmentError('Cannot register abstract class');
                    }
                    types[Definition.blotName || Definition.attrName] = Definition;
                    if (typeof Definition.keyName === 'string') {
                        attributes[Definition.keyName] = Definition;
                    }
                    else {
                        if (Definition.className != null) {
                            classes[Definition.className] = Definition;
                        }
                        if (Definition.tagName != null) {
                            if (Array.isArray(Definition.tagName)) {
                                Definition.tagName = Definition.tagName.map(function (tagName) {
                                    return tagName.toUpperCase();
                                });
                            }
                            else {
                                Definition.tagName = Definition.tagName.toUpperCase();
                            }
                            var tagNames = Array.isArray(Definition.tagName) ? Definition.tagName : [Definition.tagName];
                            tagNames.forEach(function (tag) {
                                if (tags[tag] == null || Definition.className == null) {
                                    tags[tag] = Definition;
                                }
                            });
                        }
                    }
                    return Definition;
                }
                exports.register = register;


                /***/ },
            /* 7 */
            /***/ function(module, exports, __webpack_require__) {

                "use strict";
                var __extends = (this && this.__extends) || function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
                var attributor_1 = __webpack_require__(8);
                var store_1 = __webpack_require__(9);
                var container_1 = __webpack_require__(3);
                var Registry = __webpack_require__(6);
                var FormatBlot = (function (_super) {
                    __extends(FormatBlot, _super);
                    function FormatBlot() {
                        _super.apply(this, arguments);
                    }
                    FormatBlot.formats = function (domNode) {
                        if (typeof this.tagName === 'string') {
                            return true;
                        }
                        else if (Array.isArray(this.tagName)) {
                            return domNode.tagName.toLowerCase();
                        }
                        return undefined;
                    };
                    FormatBlot.prototype.attach = function () {
                        _super.prototype.attach.call(this);
                        this.attributes = new store_1.default(this.domNode);
                    };
                    FormatBlot.prototype.format = function (name, value) {
                        var format = Registry.query(name);
                        if (format instanceof attributor_1.default) {
                            this.attributes.attribute(format, value);
                        }
                        else if (value) {
                            if (format != null && (name !== this.statics.blotName || this.formats()[name] !== value)) {
                                this.replaceWith(name, value);
                            }
                        }
                    };
                    FormatBlot.prototype.formats = function () {
                        var formats = this.attributes.values();
                        var format = this.statics.formats(this.domNode);
                        if (format != null) {
                            formats[this.statics.blotName] = format;
                        }
                        return formats;
                    };
                    FormatBlot.prototype.replaceWith = function (name, value) {
                        var replacement = _super.prototype.replaceWith.call(this, name, value);
                        this.attributes.copy(replacement);
                        return replacement;
                    };
                    FormatBlot.prototype.update = function (mutations) {
                        var _this = this;
                        _super.prototype.update.call(this, mutations);
                        if (mutations.some(function (mutation) {
                            return mutation.target === _this.domNode && mutation.type === 'attributes';
                        })) {
                            this.attributes.build();
                        }
                    };
                    FormatBlot.prototype.wrap = function (name, value) {
                        var wrapper = _super.prototype.wrap.call(this, name, value);
                        if (wrapper instanceof FormatBlot && wrapper.statics.scope === this.statics.scope) {
                            this.attributes.move(wrapper);
                        }
                        return wrapper;
                    };
                    return FormatBlot;
                }(container_1.default));
                Object.defineProperty(exports, "__esModule", { value: true });
                exports.default = FormatBlot;


                /***/ },
            /* 8 */
            /***/ function(module, exports, __webpack_require__) {

                "use strict";
                var Registry = __webpack_require__(6);
                var Attributor = (function () {
                    function Attributor(attrName, keyName, options) {
                        if (options === void 0) { options = {}; }
                        this.attrName = attrName;
                        this.keyName = keyName;
                        var attributeBit = Registry.Scope.TYPE & Registry.Scope.ATTRIBUTE;
                        if (options.scope != null) {
                            // Ignore type bits, force attribute bit
                            this.scope = (options.scope & Registry.Scope.LEVEL) | attributeBit;
                        }
                        else {
                            this.scope = Registry.Scope.ATTRIBUTE;
                        }
                        if (options.whitelist != null)
                            this.whitelist = options.whitelist;
                    }
                    Attributor.keys = function (node) {
                        return [].map.call(node.attributes, function (item) {
                            return item.name;
                        });
                    };
                    Attributor.prototype.add = function (node, value) {
                        if (!this.canAdd(node, value))
                            return false;
                        node.setAttribute(this.keyName, value);
                        return true;
                    };
                    Attributor.prototype.canAdd = function (node, value) {
                        var match = Registry.query(node, Registry.Scope.BLOT & (this.scope | Registry.Scope.TYPE));
                        if (match != null && (this.whitelist == null || this.whitelist.indexOf(value) > -1)) {
                            return true;
                        }
                        return false;
                    };
                    Attributor.prototype.remove = function (node) {
                        node.removeAttribute(this.keyName);
                    };
                    Attributor.prototype.value = function (node) {
                        return node.getAttribute(this.keyName);
                    };
                    return Attributor;
                }());
                Object.defineProperty(exports, "__esModule", { value: true });
                exports.default = Attributor;


                /***/ },
            /* 9 */
            /***/ function(module, exports, __webpack_require__) {

                "use strict";
                var attributor_1 = __webpack_require__(8);
                var class_1 = __webpack_require__(10);
                var style_1 = __webpack_require__(11);
                var Registry = __webpack_require__(6);
                var AttributorStore = (function () {
                    function AttributorStore(domNode) {
                        this.attributes = {};
                        this.domNode = domNode;
                        this.build();
                    }
                    AttributorStore.prototype.attribute = function (attribute, value) {
                        if (value) {
                            if (attribute.add(this.domNode, value)) {
                                if (attribute.value(this.domNode) != null) {
                                    this.attributes[attribute.attrName] = attribute;
                                }
                                else {
                                    delete this.attributes[attribute.attrName];
                                }
                            }
                        }
                        else {
                            attribute.remove(this.domNode);
                            delete this.attributes[attribute.attrName];
                        }
                    };
                    AttributorStore.prototype.build = function () {
                        var _this = this;
                        this.attributes = {};
                        var attributes = attributor_1.default.keys(this.domNode);
                        var classes = class_1.default.keys(this.domNode);
                        var styles = style_1.default.keys(this.domNode);
                        attributes.concat(classes).concat(styles).forEach(function (name) {
                            var attr = Registry.query(name, Registry.Scope.ATTRIBUTE);
                            if (attr instanceof attributor_1.default) {
                                _this.attributes[attr.attrName] = attr;
                            }
                        });
                    };
                    AttributorStore.prototype.copy = function (target) {
                        var _this = this;
                        Object.keys(this.attributes).forEach(function (key) {
                            var value = _this.attributes[key].value(_this.domNode);
                            target.format(key, value);
                        });
                    };
                    AttributorStore.prototype.move = function (target) {
                        var _this = this;
                        this.copy(target);
                        Object.keys(this.attributes).forEach(function (key) {
                            _this.attributes[key].remove(_this.domNode);
                        });
                        this.attributes = {};
                    };
                    AttributorStore.prototype.values = function () {
                        var _this = this;
                        return Object.keys(this.attributes).reduce(function (attributes, name) {
                            attributes[name] = _this.attributes[name].value(_this.domNode);
                            return attributes;
                        }, {});
                    };
                    return AttributorStore;
                }());
                Object.defineProperty(exports, "__esModule", { value: true });
                exports.default = AttributorStore;


                /***/ },
            /* 10 */
            /***/ function(module, exports, __webpack_require__) {

                "use strict";
                var __extends = (this && this.__extends) || function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
                var attributor_1 = __webpack_require__(8);
                function match(node, prefix) {
                    var className = node.getAttribute('class') || '';
                    return className.split(/\s+/).filter(function (name) {
                        return name.indexOf(prefix + "-") === 0;
                    });
                }
                var ClassAttributor = (function (_super) {
                    __extends(ClassAttributor, _super);
                    function ClassAttributor() {
                        _super.apply(this, arguments);
                    }
                    ClassAttributor.keys = function (node) {
                        return (node.getAttribute('class') || '').split(/\s+/).map(function (name) {
                            return name.split('-').slice(0, -1).join('-');
                        });
                    };
                    ClassAttributor.prototype.add = function (node, value) {
                        if (!this.canAdd(node, value))
                            return false;
                        this.remove(node);
                        node.classList.add(this.keyName + "-" + value);
                        return true;
                    };
                    ClassAttributor.prototype.remove = function (node) {
                        var matches = match(node, this.keyName);
                        matches.forEach(function (name) {
                            node.classList.remove(name);
                        });
                        if (node.classList.length === 0) {
                            node.removeAttribute('class');
                        }
                    };
                    ClassAttributor.prototype.value = function (node) {
                        var result = match(node, this.keyName)[0] || '';
                        return result.slice(this.keyName.length + 1); // +1 for hyphen
                    };
                    return ClassAttributor;
                }(attributor_1.default));
                Object.defineProperty(exports, "__esModule", { value: true });
                exports.default = ClassAttributor;


                /***/ },
            /* 11 */
            /***/ function(module, exports, __webpack_require__) {

                "use strict";
                var __extends = (this && this.__extends) || function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
                var attributor_1 = __webpack_require__(8);
                function camelize(name) {
                    var parts = name.split('-');
                    var rest = parts.slice(1).map(function (part) {
                        return part[0].toUpperCase() + part.slice(1);
                    }).join('');
                    return parts[0] + rest;
                }
                var StyleAttributor = (function (_super) {
                    __extends(StyleAttributor, _super);
                    function StyleAttributor() {
                        _super.apply(this, arguments);
                    }
                    StyleAttributor.keys = function (node) {
                        return (node.getAttribute('style') || '').split(';').map(function (value) {
                            var arr = value.split(':');
                            return arr[0].trim();
                        });
                    };
                    StyleAttributor.prototype.add = function (node, value) {
                        if (!this.canAdd(node, value))
                            return false;
                        node.style[camelize(this.keyName)] = value;
                        return true;
                    };
                    StyleAttributor.prototype.remove = function (node) {
                        node.style[camelize(this.keyName)] = '';
                        if (!node.getAttribute('style')) {
                            node.removeAttribute('style');
                        }
                    };
                    StyleAttributor.prototype.value = function (node) {
                        return node.style[camelize(this.keyName)];
                    };
                    return StyleAttributor;
                }(attributor_1.default));
                Object.defineProperty(exports, "__esModule", { value: true });
                exports.default = StyleAttributor;


                /***/ },
            /* 12 */
            /***/ function(module, exports, __webpack_require__) {

                "use strict";
                var __extends = (this && this.__extends) || function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
                var shadow_1 = __webpack_require__(5);
                var Registry = __webpack_require__(6);
                var LeafBlot = (function (_super) {
                    __extends(LeafBlot, _super);
                    function LeafBlot() {
                        _super.apply(this, arguments);
                    }
                    LeafBlot.value = function (domNode) {
                        return true;
                    };
                    LeafBlot.prototype.index = function (node, offset) {
                        if (node !== this.domNode)
                            return -1;
                        return Math.min(offset, 1);
                    };
                    LeafBlot.prototype.position = function (index, inclusive) {
                        var offset = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
                        if (index > 0)
                            offset += 1;
                        return [this.parent.domNode, offset];
                    };
                    LeafBlot.prototype.value = function () {
                        return (_a = {}, _a[this.statics.blotName] = this.statics.value(this.domNode) || true, _a);
                        var _a;
                    };
                    LeafBlot.scope = Registry.Scope.INLINE_BLOT;
                    return LeafBlot;
                }(shadow_1.default));
                Object.defineProperty(exports, "__esModule", { value: true });
                exports.default = LeafBlot;


                /***/ },
            /* 13 */
            /***/ function(module, exports, __webpack_require__) {

                "use strict";
                var __extends = (this && this.__extends) || function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
                var container_1 = __webpack_require__(3);
                var Registry = __webpack_require__(6);
                var OBSERVER_CONFIG = {
                    attributes: true,
                    characterData: true,
                    characterDataOldValue: true,
                    childList: true,
                    subtree: true
                };
                var MAX_OPTIMIZE_ITERATIONS = 100;
                var ScrollBlot = (function (_super) {
                    __extends(ScrollBlot, _super);
                    function ScrollBlot(node) {
                        var _this = this;
                        _super.call(this, node);
                        this.parent = null;
                        this.observer = new MutationObserver(function (mutations) {
                            _this.update(mutations);
                        });
                        this.observer.observe(this.domNode, OBSERVER_CONFIG);
                    }
                    ScrollBlot.prototype.detach = function () {
                        _super.prototype.detach.call(this);
                        this.observer.disconnect();
                    };
                    ScrollBlot.prototype.deleteAt = function (index, length) {
                        this.update();
                        if (index === 0 && length === this.length()) {
                            this.children.forEach(function (child) {
                                child.remove();
                            });
                        }
                        else {
                            _super.prototype.deleteAt.call(this, index, length);
                        }
                    };
                    ScrollBlot.prototype.formatAt = function (index, length, name, value) {
                        this.update();
                        _super.prototype.formatAt.call(this, index, length, name, value);
                    };
                    ScrollBlot.prototype.insertAt = function (index, value, def) {
                        this.update();
                        _super.prototype.insertAt.call(this, index, value, def);
                    };
                    ScrollBlot.prototype.optimize = function (mutations) {
                        var _this = this;
                        if (mutations === void 0) { mutations = []; }
                        _super.prototype.optimize.call(this);
                        mutations.push.apply(mutations, this.observer.takeRecords());
                        // TODO use WeakMap
                        var mark = function (blot, markParent) {
                            if (markParent === void 0) { markParent = true; }
                            if (blot == null || blot === _this)
                                return;
                            if (blot.domNode.parentNode == null)
                                return;
                            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                                blot.domNode[Registry.DATA_KEY].mutations = [];
                            }
                            if (markParent)
                                mark(blot.parent);
                        };
                        var optimize = function (blot) {
                            if (blot.domNode[Registry.DATA_KEY] == null || blot.domNode[Registry.DATA_KEY].mutations == null) {
                                return;
                            }
                            if (blot instanceof container_1.default) {
                                blot.children.forEach(optimize);
                            }
                            blot.optimize();
                        };
                        var remaining = mutations;
                        for (var i = 0; remaining.length > 0; i += 1) {
                            if (i >= MAX_OPTIMIZE_ITERATIONS) {
                                throw new Error('[Parchment] Maximum optimize iterations reached');
                            }
                            remaining.forEach(function (mutation) {
                                var blot = Registry.find(mutation.target, true);
                                if (blot == null)
                                    return;
                                if (blot.domNode === mutation.target) {
                                    if (mutation.type === 'childList') {
                                        mark(Registry.find(mutation.previousSibling, false));
                                        [].forEach.call(mutation.addedNodes, function (node) {
                                            var child = Registry.find(node, false);
                                            mark(child, false);
                                            if (child instanceof container_1.default) {
                                                child.children.forEach(function (grandChild) {
                                                    mark(grandChild, false);
                                                });
                                            }
                                        });
                                    }
                                    else if (mutation.type === 'attributes') {
                                        mark(blot.prev);
                                    }
                                }
                                mark(blot);
                            });
                            this.children.forEach(optimize);
                            remaining = this.observer.takeRecords();
                            mutations.push.apply(mutations, remaining);
                        }
                    };
                    ScrollBlot.prototype.update = function (mutations) {
                        var _this = this;
                        mutations = mutations || this.observer.takeRecords();
                        // TODO use WeakMap
                        mutations.map(function (mutation) {
                            var blot = Registry.find(mutation.target, true);
                            if (blot == null)
                                return;
                            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
                                blot.domNode[Registry.DATA_KEY].mutations = [mutation];
                                return blot;
                            }
                            else {
                                blot.domNode[Registry.DATA_KEY].mutations.push(mutation);
                                return null;
                            }
                        }).forEach(function (blot) {
                            if (blot == null || blot === _this)
                                return;
                            blot.update(blot.domNode[Registry.DATA_KEY].mutations || []);
                        });
                        if (this.domNode[Registry.DATA_KEY].mutations != null) {
                            _super.prototype.update.call(this, this.domNode[Registry.DATA_KEY].mutations);
                        }
                        this.optimize(mutations);
                    };
                    ScrollBlot.blotName = 'scroll';
                    ScrollBlot.defaultChild = 'block';
                    ScrollBlot.scope = Registry.Scope.BLOCK_BLOT;
                    ScrollBlot.tagName = 'DIV';
                    return ScrollBlot;
                }(container_1.default));
                Object.defineProperty(exports, "__esModule", { value: true });
                exports.default = ScrollBlot;


                /***/ },
            /* 14 */
            /***/ function(module, exports, __webpack_require__) {

                "use strict";
                var __extends = (this && this.__extends) || function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
                var format_1 = __webpack_require__(7);
                var Registry = __webpack_require__(6);
                // Shallow object comparison
                function isEqual(obj1, obj2) {
                    if (Object.keys(obj1).length !== Object.keys(obj2).length)
                        return false;
                    for (var prop in obj1) {
                        if (obj1[prop] !== obj2[prop])
                            return false;
                    }
                    return true;
                }
                var InlineBlot = (function (_super) {
                    __extends(InlineBlot, _super);
                    function InlineBlot() {
                        _super.apply(this, arguments);
                    }
                    InlineBlot.formats = function (domNode) {
                        if (domNode.tagName === InlineBlot.tagName)
                            return undefined;
                        return _super.formats.call(this, domNode);
                    };
                    InlineBlot.prototype.format = function (name, value) {
                        var _this = this;
                        if (name === this.statics.blotName && !value) {
                            this.children.forEach(function (child) {
                                if (!(child instanceof format_1.default)) {
                                    child = child.wrap(InlineBlot.blotName, true);
                                }
                                _this.attributes.copy(child);
                            });
                            this.unwrap();
                        }
                        else {
                            _super.prototype.format.call(this, name, value);
                        }
                    };
                    InlineBlot.prototype.formatAt = function (index, length, name, value) {
                        if (this.formats()[name] != null || Registry.query(name, Registry.Scope.ATTRIBUTE)) {
                            var blot = this.isolate(index, length);
                            blot.format(name, value);
                        }
                        else {
                            _super.prototype.formatAt.call(this, index, length, name, value);
                        }
                    };
                    InlineBlot.prototype.optimize = function () {
                        _super.prototype.optimize.call(this);
                        var formats = this.formats();
                        if (Object.keys(formats).length === 0) {
                            return this.unwrap(); // unformatted span
                        }
                        var next = this.next;
                        if (next instanceof InlineBlot && next.prev === this && isEqual(formats, next.formats())) {
                            next.moveChildren(this);
                            next.remove();
                        }
                    };
                    InlineBlot.blotName = 'inline';
                    InlineBlot.scope = Registry.Scope.INLINE_BLOT;
                    InlineBlot.tagName = 'SPAN';
                    return InlineBlot;
                }(format_1.default));
                Object.defineProperty(exports, "__esModule", { value: true });
                exports.default = InlineBlot;


                /***/ },
            /* 15 */
            /***/ function(module, exports, __webpack_require__) {

                "use strict";
                var __extends = (this && this.__extends) || function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
                var format_1 = __webpack_require__(7);
                var Registry = __webpack_require__(6);
                var BlockBlot = (function (_super) {
                    __extends(BlockBlot, _super);
                    function BlockBlot() {
                        _super.apply(this, arguments);
                    }
                    BlockBlot.formats = function (domNode) {
                        var tagName = Registry.query(BlockBlot.blotName).tagName;
                        if (domNode.tagName === tagName)
                            return undefined;
                        return _super.formats.call(this, domNode);
                    };
                    BlockBlot.prototype.format = function (name, value) {
                        if (name === this.statics.blotName && !value) {
                            this.replaceWith(BlockBlot.blotName);
                        }
                        else {
                            _super.prototype.format.call(this, name, value);
                        }
                    };
                    BlockBlot.prototype.formatAt = function (index, length, name, value) {
                        if (Registry.query(name, Registry.Scope.BLOCK) != null) {
                            this.format(name, value);
                        }
                        else {
                            _super.prototype.formatAt.call(this, index, length, name, value);
                        }
                    };
                    BlockBlot.prototype.insertAt = function (index, value, def) {
                        if (def == null || Registry.query(value, Registry.Scope.INLINE) != null) {
                            // Insert text or inline
                            _super.prototype.insertAt.call(this, index, value, def);
                        }
                        else {
                            var after = this.split(index);
                            var blot = Registry.create(value, def);
                            after.parent.insertBefore(blot, after);
                        }
                    };
                    BlockBlot.blotName = 'block';
                    BlockBlot.scope = Registry.Scope.BLOCK_BLOT;
                    BlockBlot.tagName = 'P';
                    return BlockBlot;
                }(format_1.default));
                Object.defineProperty(exports, "__esModule", { value: true });
                exports.default = BlockBlot;


                /***/ },
            /* 16 */
            /***/ function(module, exports, __webpack_require__) {

                "use strict";
                var __extends = (this && this.__extends) || function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
                var leaf_1 = __webpack_require__(12);
                var EmbedBlot = (function (_super) {
                    __extends(EmbedBlot, _super);
                    function EmbedBlot() {
                        _super.apply(this, arguments);
                    }
                    EmbedBlot.formats = function (domNode) {
                        return undefined;
                    };
                    EmbedBlot.prototype.format = function (name, value) {
                        // super.formatAt wraps, which is what we want in general,
                        // but this allows subclasses to overwrite for formats
                        // that just apply to particular embeds
                        _super.prototype.formatAt.call(this, 0, this.length(), name, value);
                    };
                    EmbedBlot.prototype.formatAt = function (index, length, name, value) {
                        if (index === 0 && length === this.length()) {
                            this.format(name, value);
                        }
                        else {
                            _super.prototype.formatAt.call(this, index, length, name, value);
                        }
                    };
                    EmbedBlot.prototype.formats = function () {
                        return this.statics.formats(this.domNode);
                    };
                    return EmbedBlot;
                }(leaf_1.default));
                Object.defineProperty(exports, "__esModule", { value: true });
                exports.default = EmbedBlot;


                /***/ },
            /* 17 */
            /***/ function(module, exports, __webpack_require__) {

                "use strict";
                var __extends = (this && this.__extends) || function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                    function __() { this.constructor = d; }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
                var leaf_1 = __webpack_require__(12);
                var Registry = __webpack_require__(6);
                var TextBlot = (function (_super) {
                    __extends(TextBlot, _super);
                    function TextBlot(node) {
                        _super.call(this, node);
                        this.text = this.statics.value(this.domNode);
                    }
                    TextBlot.create = function (value) {
                        return document.createTextNode(value);
                    };
                    TextBlot.value = function (domNode) {
                        return domNode.data;
                    };
                    TextBlot.prototype.deleteAt = function (index, length) {
                        this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length);
                    };
                    TextBlot.prototype.index = function (node, offset) {
                        if (this.domNode === node) {
                            return offset;
                        }
                        return -1;
                    };
                    TextBlot.prototype.insertAt = function (index, value, def) {
                        if (def == null) {
                            this.text = this.text.slice(0, index) + value + this.text.slice(index);
                            this.domNode.data = this.text;
                        }
                        else {
                            _super.prototype.insertAt.call(this, index, value, def);
                        }
                    };
                    TextBlot.prototype.length = function () {
                        return this.text.length;
                    };
                    TextBlot.prototype.optimize = function () {
                        _super.prototype.optimize.call(this);
                        this.text = this.statics.value(this.domNode);
                        if (this.text.length === 0) {
                            this.remove();
                        }
                        else if (this.next instanceof TextBlot && this.next.prev === this) {
                            this.insertAt(this.length(), this.next.value());
                            this.next.remove();
                        }
                    };
                    TextBlot.prototype.position = function (index, inclusive) {
                        if (inclusive === void 0) { inclusive = false; }
                        return [this.domNode, index];
                    };
                    TextBlot.prototype.split = function (index, force) {
                        if (force === void 0) { force = false; }
                        if (!force) {
                            if (index === 0)
                                return this;
                            if (index === this.length())
                                return this.next;
                        }
                        var after = Registry.create(this.domNode.splitText(index));
                        this.parent.insertBefore(after, this.next);
                        this.text = this.statics.value(this.domNode);
                        return after;
                    };
                    TextBlot.prototype.update = function (mutations) {
                        var _this = this;
                        if (mutations.some(function (mutation) {
                            return mutation.type === 'characterData' && mutation.target === _this.domNode;
                        })) {
                            this.text = this.statics.value(this.domNode);
                        }
                    };
                    TextBlot.prototype.value = function () {
                        return this.text;
                    };
                    TextBlot.blotName = 'text';
                    TextBlot.scope = Registry.Scope.INLINE_BLOT;
                    return TextBlot;
                }(leaf_1.default));
                Object.defineProperty(exports, "__esModule", { value: true });
                exports.default = TextBlot;


                /***/ },
            /* 18 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = exports.overload = exports.expandConfig = undefined;

                var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

                var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

                __webpack_require__(19);

                var _delta = __webpack_require__(20);

                var _delta2 = _interopRequireDefault(_delta);

                var _editor = __webpack_require__(27);

                var _editor2 = _interopRequireDefault(_editor);

                var _emitter = __webpack_require__(28);

                var _emitter2 = _interopRequireDefault(_emitter);

                var _module = __webpack_require__(39);

                var _module2 = _interopRequireDefault(_module);

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                var _selection = __webpack_require__(40);

                var _selection2 = _interopRequireDefault(_selection);

                var _extend = __webpack_require__(25);

                var _extend2 = _interopRequireDefault(_extend);

                var _logger = __webpack_require__(30);

                var _logger2 = _interopRequireDefault(_logger);

                var _theme = __webpack_require__(41);

                var _theme2 = _interopRequireDefault(_theme);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                var debug = (0, _logger2.default)('quill');

                var Quill = function () {
                    _createClass(Quill, null, [{
                        key: 'debug',
                        value: function debug(limit) {
                            _logger2.default.level(limit);
                        }
                    }, {
                        key: 'import',
                        value: function _import(name) {
                            if (this.imports[name] == null) {
                                debug.error('Cannot import ' + name + '. Are you sure it was registered?');
                            }
                            return this.imports[name];
                        }
                    }, {
                        key: 'register',
                        value: function register(path, target) {
                            var _this = this;

                            var overwrite = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

                            if (typeof path !== 'string') {
                                var name = path.attrName || path.blotName;
                                if (typeof name === 'string') {
                                    // register(Blot | Attributor, overwrite)
                                    this.register('formats/' + name, path, target);
                                } else {
                                    Object.keys(path).forEach(function (key) {
                                        _this.register(key, path[key], target);
                                    });
                                }
                            } else {
                                if (this.imports[path] != null && !overwrite) {
                                    debug.warn('Overwriting ' + path + ' with', target);
                                }
                                this.imports[path] = target;
                                if ((path.startsWith('blots/') || path.startsWith('formats/')) && target.blotName !== 'abstract') {
                                    _parchment2.default.register(target);
                                }
                            }
                        }
                    }]);

                    function Quill(container) {
                        var _this2 = this;

                        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                        _classCallCheck(this, Quill);

                        options = expandConfig(container, options);
                        this.container = options.container;
                        if (this.container == null) {
                            return debug.error('Invalid Quill container', container);
                        }
                        if (options.debug) {
                            Quill.debug(options.debug);
                        }
                        var html = this.container.innerHTML.trim();
                        this.container.classList.add('ql-container');
                        this.container.innerHTML = '';
                        this.root = this.addContainer('ql-editor');
                        this.emitter = new _emitter2.default();
                        this.scroll = _parchment2.default.create(this.root, {
                            emitter: this.emitter,
                            whitelist: options.formats
                        });
                        this.editor = new _editor2.default(this.scroll, this.emitter);
                        this.selection = new _selection2.default(this.scroll, this.emitter);
                        this.theme = new options.theme(this, options);
                        this.keyboard = this.theme.addModule('keyboard');
                        this.clipboard = this.theme.addModule('clipboard');
                        this.history = this.theme.addModule('history');
                        this.theme.init();
                        this.pasteHTML('<div class=\'ql-editor\' style="white-space: normal;">' + html + '<p><br></p></div>');
                        this.history.clear();
                        if (options.readOnly) {
                            this.disable();
                        }
                        if (options.placeholder) {
                            this.root.setAttribute('data-placeholder', options.placeholder);
                        }
                        this.root.classList.toggle('ql-blank', this.editor.isBlank());
                        this.emitter.on(_emitter2.default.events.TEXT_CHANGE, function (delta) {
                            _this2.root.classList.toggle('ql-blank', _this2.editor.isBlank());
                        });
                    }

                    _createClass(Quill, [{
                        key: 'addContainer',
                        value: function addContainer(container) {
                            var refNode = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

                            if (typeof container === 'string') {
                                var className = container;
                                container = document.createElement('div');
                                container.classList.add(className);
                            }
                            this.container.insertBefore(container, refNode);
                            return container;
                        }
                    }, {
                        key: 'blur',
                        value: function blur() {
                            this.selection.setRange(null);
                        }
                    }, {
                        key: 'deleteText',
                        value: function deleteText(index, length, source) {
                            var _overload = overload(index, length, source);

                            var _overload2 = _slicedToArray(_overload, 4);

                            index = _overload2[0];
                            length = _overload2[1];
                            source = _overload2[3];

                            var range = this.getSelection();
                            var change = this.editor.deleteText(index, length, source);
                            range = shiftRange(range, index, -1 * length, source);
                            this.setSelection(range, _emitter2.default.sources.SILENT);
                            return change;
                        }
                    }, {
                        key: 'disable',
                        value: function disable() {
                            this.enable(false);
                        }
                    }, {
                        key: 'enable',
                        value: function enable() {
                            var enabled = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

                            this.editor.enable(enabled);
                            if (!enabled) {
                                this.blur();
                            }
                        }
                    }, {
                        key: 'focus',
                        value: function focus() {
                            this.selection.focus();
                            this.selection.scrollIntoView();
                        }
                    }, {
                        key: 'format',
                        value: function format(name, value) {
                            var source = arguments.length <= 2 || arguments[2] === undefined ? _emitter2.default.sources.API : arguments[2];

                            var range = this.getSelection(true);
                            var change = new _delta2.default();
                            if (range == null) return change;
                            if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
                                change = this.formatLine(range, name, value, source);
                            } else if (range.length === 0) {
                                this.selection.format(name, value);
                                return change;
                            } else {
                                change = this.formatText(range, name, value, source);
                            }
                            this.setSelection(range, _emitter2.default.sources.SILENT);
                            return change;
                        }
                    }, {
                        key: 'formatLine',
                        value: function formatLine(index, length, name, value, source) {
                            var formats = void 0;

                            var _overload3 = overload(index, length, name, value, source);

                            var _overload4 = _slicedToArray(_overload3, 4);

                            index = _overload4[0];
                            length = _overload4[1];
                            formats = _overload4[2];
                            source = _overload4[3];

                            var range = this.getSelection();
                            var change = this.editor.formatLine(index, length, formats, source);
                            this.selection.setRange(range, true, _emitter2.default.sources.SILENT);
                            this.selection.scrollIntoView();
                            return change;
                        }
                    }, {
                        key: 'formatText',
                        value: function formatText(index, length, name, value, source) {
                            var formats = void 0;

                            var _overload5 = overload(index, length, name, value, source);

                            var _overload6 = _slicedToArray(_overload5, 4);

                            index = _overload6[0];
                            length = _overload6[1];
                            formats = _overload6[2];
                            source = _overload6[3];

                            var range = this.getSelection();
                            var change = this.editor.formatText(index, length, formats, source);
                            this.selection.setRange(range, true, _emitter2.default.sources.SILENT);
                            this.selection.scrollIntoView();
                            return change;
                        }
                    }, {
                        key: 'getBounds',
                        value: function getBounds(index) {
                            var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

                            if (typeof index === 'number') {
                                return this.selection.getBounds(index, length);
                            } else {
                                return this.selection.getBounds(index.index, index.length);
                            }
                        }
                    }, {
                        key: 'getContents',
                        value: function getContents() {
                            var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
                            var length = arguments.length <= 1 || arguments[1] === undefined ? this.getLength() - index : arguments[1];

                            var _overload7 = overload(index, length);

                            var _overload8 = _slicedToArray(_overload7, 2);

                            index = _overload8[0];
                            length = _overload8[1];

                            return this.editor.getContents(index, length);
                        }
                    }, {
                        key: 'getFormat',
                        value: function getFormat() {
                            var index = arguments.length <= 0 || arguments[0] === undefined ? this.getSelection() : arguments[0];
                            var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

                            if (typeof index === 'number') {
                                return this.editor.getFormat(index, length);
                            } else {
                                return this.editor.getFormat(index.index, index.length);
                            }
                        }
                    }, {
                        key: 'getLength',
                        value: function getLength() {
                            return this.scroll.length();
                        }
                    }, {
                        key: 'getModule',
                        value: function getModule(name) {
                            return this.theme.modules[name];
                        }
                    }, {
                        key: 'getSelection',
                        value: function getSelection() {
                            var focus = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

                            if (focus) this.focus();
                            this.update(); // Make sure we access getRange with editor in consistent state
                            return this.selection.getRange()[0];
                        }
                    }, {
                        key: 'getText',
                        value: function getText() {
                            var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
                            var length = arguments.length <= 1 || arguments[1] === undefined ? this.getLength() - index : arguments[1];

                            var _overload9 = overload(index, length);

                            var _overload10 = _slicedToArray(_overload9, 2);

                            index = _overload10[0];
                            length = _overload10[1];

                            return this.editor.getText(index, length);
                        }
                    }, {
                        key: 'hasFocus',
                        value: function hasFocus() {
                            return this.selection.hasFocus();
                        }
                    }, {
                        key: 'insertEmbed',
                        value: function insertEmbed(index, embed, value) {
                            var source = arguments.length <= 3 || arguments[3] === undefined ? Quill.sources.API : arguments[3];

                            var range = this.getSelection();
                            var change = this.editor.insertEmbed(index, embed, value, source);
                            range = shiftRange(range, change, source);
                            this.setSelection(range, _emitter2.default.sources.SILENT);
                            return change;
                        }
                    }, {
                        key: 'insertText',
                        value: function insertText(index, text, name, value, source) {
                            var formats = void 0,
                                range = this.getSelection();

                            var _overload11 = overload(index, 0, name, value, source);

                            var _overload12 = _slicedToArray(_overload11, 4);

                            index = _overload12[0];
                            formats = _overload12[2];
                            source = _overload12[3];

                            var change = this.editor.insertText(index, text, formats, source);
                            range = shiftRange(range, index, text.length, source);
                            this.setSelection(range, _emitter2.default.sources.SILENT);
                            return change;
                        }
                    }, {
                        key: 'off',
                        value: function off() {
                            return this.emitter.off.apply(this.emitter, arguments);
                        }
                    }, {
                        key: 'on',
                        value: function on() {
                            return this.emitter.on.apply(this.emitter, arguments);
                        }
                    }, {
                        key: 'once',
                        value: function once() {
                            return this.emitter.once.apply(this.emitter, arguments);
                        }
                    }, {
                        key: 'pasteHTML',
                        value: function pasteHTML(index, html) {
                            var source = arguments.length <= 2 || arguments[2] === undefined ? _emitter2.default.sources.API : arguments[2];

                            if (typeof index === 'string') {
                                return this.setContents(this.clipboard.convert(index), html);
                            } else {
                                var paste = this.clipboard.convert(html);
                                return this.updateContents(new _delta2.default().retain(index).concat(paste), source);
                            }
                        }
                    }, {
                        key: 'removeFormat',
                        value: function removeFormat(index, length, source) {
                            var range = this.getSelection();

                            var _overload13 = overload(index, length, source);

                            var _overload14 = _slicedToArray(_overload13, 4);

                            index = _overload14[0];
                            length = _overload14[1];
                            source = _overload14[3];

                            var change = this.editor.removeFormat(index, length, source);
                            range = shiftRange(range, change, source);
                            this.setSelection(range, _emitter2.default.sources.SILENT);
                            return change;
                        }
                    }, {
                        key: 'setContents',
                        value: function setContents(delta) {
                            var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter2.default.sources.API : arguments[1];

                            delta = new _delta2.default(delta).slice();
                            var lastOp = delta.ops[delta.ops.length - 1];
                            // Quill contents must always end with newline
                            if (lastOp == null || lastOp.insert[lastOp.insert.length - 1] !== '\n') {
                                delta.insert('\n');
                            }
                            delta.delete(this.getLength());
                            return this.editor.applyDelta(delta, source);
                        }
                    }, {
                        key: 'setSelection',
                        value: function setSelection(index, length, source) {
                            if (index == null) {
                                this.selection.setRange(null, length || Quill.sources.API);
                            } else {
                                var _overload15 = overload(index, length, source);

                                var _overload16 = _slicedToArray(_overload15, 4);

                                index = _overload16[0];
                                length = _overload16[1];
                                source = _overload16[3];

                                this.selection.setRange(new _selection.Range(index, length), source);
                            }
                            this.selection.scrollIntoView();
                        }
                    }, {
                        key: 'setText',
                        value: function setText(text) {
                            var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter2.default.sources.API : arguments[1];

                            var delta = new _delta2.default().insert(text);
                            return this.setContents(delta, source);
                        }
                    }, {
                        key: 'update',
                        value: function update() {
                            var source = arguments.length <= 0 || arguments[0] === undefined ? _emitter2.default.sources.USER : arguments[0];

                            var change = this.scroll.update(source); // Will update selection before selection.update() does if text changes
                            this.selection.update(source);
                            return change;
                        }
                    }, {
                        key: 'updateContents',
                        value: function updateContents(delta) {
                            var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter2.default.sources.API : arguments[1];

                            var range = this.getSelection();
                            if (Array.isArray(delta)) {
                                delta = new _delta2.default(delta.slice());
                            }
                            var change = this.editor.applyDelta(delta, source);
                            if (range != null) {
                                range = shiftRange(range, change, source);
                                this.setSelection(range, _emitter2.default.sources.SILENT);
                            }
                            return change;
                        }
                    }]);

                    return Quill;
                }();

                Quill.DEFAULTS = {
                    bounds: document.body,
                    formats: null,
                    modules: {},
                    placeholder: '',
                    readOnly: false,
                    theme: 'default'
                };
                Quill.events = _emitter2.default.events;
                Quill.sources = _emitter2.default.sources;
                Quill.version =  false ? 'dev' : ("1.0.0");

                Quill.imports = {
                    'delta': _delta2.default,
                    'parchment': _parchment2.default,
                    'core/module': _module2.default,
                    'core/theme': _theme2.default
                };

                function expandConfig(container, userConfig) {
                    userConfig = (0, _extend2.default)(true, {
                        container: container,
                        modules: {
                            clipboard: true,
                            keyboard: true,
                            history: true
                        }
                    }, userConfig);
                    if (userConfig.theme == null || userConfig.theme === Quill.DEFAULTS.theme) {
                        userConfig.theme = _theme2.default;
                    } else {
                        userConfig.theme = Quill.import('themes/' + userConfig.theme);
                        if (userConfig.theme == null) {
                            throw new Error('Invalid theme ' + userConfig.theme + '. Did you register it?');
                        }
                    }
                    var themeConfig = (0, _extend2.default)(true, {}, userConfig.theme.DEFAULTS);
                    [themeConfig, userConfig].forEach(function (config) {
                        config.modules = config.modules || {};
                        Object.keys(config.modules).forEach(function (module) {
                            if (config.modules[module] === true) {
                                config.modules[module] = {};
                            }
                        });
                    });
                    var moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));
                    var moduleConfig = moduleNames.reduce(function (config, name) {
                        var moduleClass = Quill.import('modules/' + name);
                        if (moduleClass == null) {
                            debug.error('Cannot load ' + name + ' module. Are you sure you registered it?');
                        } else {
                            config[name] = moduleClass.DEFAULTS || {};
                        }
                        return config;
                    }, {});
                    // Special case toolbar shorthand
                    if (userConfig.modules != null && userConfig.modules.toolbar != null && userConfig.modules.toolbar.constructor !== Object) {
                        userConfig.modules.toolbar = {
                            container: userConfig.modules.toolbar
                        };
                    }
                    userConfig = (0, _extend2.default)(true, {}, Quill.DEFAULTS, { modules: moduleConfig }, themeConfig, userConfig);
                    ['bounds', 'container'].forEach(function (key) {
                        if (typeof userConfig[key] === 'string') {
                            userConfig[key] = document.querySelector(userConfig[key]);
                        }
                    });
                    return userConfig;
                }

                function overload(index, length, name, value, source) {
                    var formats = {};
                    if (typeof index.index === 'number' && typeof index.length === 'number') {
                        // Allow for throwaway end (used by insertText/insertEmbed)
                        if (typeof length !== 'number') {
                            source = value, value = name, name = length, length = index.length, index = index.index;
                        } else {
                            length = index.length, index = index.index;
                        }
                    } else if (typeof length !== 'number') {
                        source = value, value = name, name = length, length = 0;
                    }
                    // Handle format being object, two format name/value strings or excluded
                    if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
                        formats = name;
                        source = value;
                    } else if (typeof name === 'string') {
                        if (value != null) {
                            formats[name] = value;
                        } else {
                            source = name;
                        }
                    }
                    // Handle optional source
                    source = source || _emitter2.default.sources.API;
                    return [index, length, formats, source];
                }

                function shiftRange(range, index, length, source) {
                    if (range == null) return null;
                    var start = void 0,
                        end = void 0;
                    if (index instanceof _delta2.default) {
                        var _map = [range.index, range.index + range.length].map(function (pos) {
                            return index.transformPosition(pos, source === _emitter2.default.sources.USER);
                        });

                        var _map2 = _slicedToArray(_map, 2);

                        start = _map2[0];
                        end = _map2[1];
                    } else {
                        var _map3 = [range.index, range.index + range.length].map(function (pos) {
                            if (pos < index || pos === index && source !== _emitter2.default.sources.USER) return pos;
                            if (length >= 0) {
                                return pos + length;
                            } else {
                                return Math.max(index, pos + length);
                            }
                        });

                        var _map4 = _slicedToArray(_map3, 2);

                        start = _map4[0];
                        end = _map4[1];
                    }
                    return new _selection.Range(start, end - start);
                }

                exports.expandConfig = expandConfig;
                exports.overload = overload;
                exports.default = Quill;

                /***/ },
            /* 19 */
            /***/ function(module, exports) {

                'use strict';

                var elem = document.createElement('div');
                elem.classList.toggle('test-class', false);
                if (elem.classList.contains('test-class')) {
                    (function () {
                        var _toggle = DOMTokenList.prototype.toggle;
                        DOMTokenList.prototype.toggle = function (token, force) {
                            if (arguments.length > 1 && !this.contains(token) === !force) {
                                return force;
                            } else {
                                return _toggle.call(this, token);
                            }
                        };
                    })();
                }

                if (!String.prototype.startsWith) {
                    String.prototype.startsWith = function (searchString, position) {
                        position = position || 0;
                        return this.substr(position, searchString.length) === searchString;
                    };
                }

                if (!String.prototype.endsWith) {
                    String.prototype.endsWith = function (searchString, position) {
                        var subjectString = this.toString();
                        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
                            position = subjectString.length;
                        }
                        position -= searchString.length;
                        var lastIndex = subjectString.indexOf(searchString, position);
                        return lastIndex !== -1 && lastIndex === position;
                    };
                }

                if (!Array.prototype.find) {
                    Object.defineProperty(Array.prototype, "find", {
                        value: function value(predicate) {
                            if (this === null) {
                                throw new TypeError('Array.prototype.find called on null or undefined');
                            }
                            if (typeof predicate !== 'function') {
                                throw new TypeError('predicate must be a function');
                            }
                            var list = Object(this);
                            var length = list.length >>> 0;
                            var thisArg = arguments[1];
                            var value;

                            for (var i = 0; i < length; i++) {
                                value = list[i];
                                if (predicate.call(thisArg, value, i, list)) {
                                    return value;
                                }
                            }
                            return undefined;
                        }
                    });
                }

                // Disable resizing in Firefox
                document.addEventListener("DOMContentLoaded", function () {
                    document.execCommand("enableObjectResizing", false, false);
                });

                /***/ },
            /* 20 */
            /***/ function(module, exports, __webpack_require__) {

                var diff = __webpack_require__(21);
                var equal = __webpack_require__(22);
                var extend = __webpack_require__(25);
                var op = __webpack_require__(26);


                var NULL_CHARACTER = String.fromCharCode(0);  // Placeholder char for embed in diff()


                var Delta = function (ops) {
                    // Assume we are given a well formed ops
                    if (Array.isArray(ops)) {
                        this.ops = ops;
                    } else if (ops != null && Array.isArray(ops.ops)) {
                        this.ops = ops.ops;
                    } else {
                        this.ops = [];
                    }
                };


                Delta.prototype.insert = function (text, attributes) {
                    var newOp = {};
                    if (text.length === 0) return this;
                    newOp.insert = text;
                    if (typeof attributes === 'object' && Object.keys(attributes).length > 0) newOp.attributes = attributes;
                    return this.push(newOp);
                };

                Delta.prototype['delete'] = function (length) {
                    if (length <= 0) return this;
                    return this.push({ 'delete': length });
                };

                Delta.prototype.retain = function (length, attributes) {
                    if (length <= 0) return this;
                    var newOp = { retain: length };
                    if (typeof attributes === 'object' && Object.keys(attributes).length > 0) newOp.attributes = attributes;
                    return this.push(newOp);
                };

                Delta.prototype.push = function (newOp) {
                    var index = this.ops.length;
                    var lastOp = this.ops[index - 1];
                    newOp = extend(true, {}, newOp);
                    if (typeof lastOp === 'object') {
                        if (typeof newOp['delete'] === 'number' && typeof lastOp['delete'] === 'number') {
                            this.ops[index - 1] = { 'delete': lastOp['delete'] + newOp['delete'] };
                            return this;
                        }
                        // Since it does not matter if we insert before or after deleting at the same index,
                        // always prefer to insert first
                        if (typeof lastOp['delete'] === 'number' && newOp.insert != null) {
                            index -= 1;
                            lastOp = this.ops[index - 1];
                            if (typeof lastOp !== 'object') {
                                this.ops.unshift(newOp);
                                return this;
                            }
                        }
                        if (equal(newOp.attributes, lastOp.attributes)) {
                            if (typeof newOp.insert === 'string' && typeof lastOp.insert === 'string') {
                                this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
                                if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes
                                return this;
                            } else if (typeof newOp.retain === 'number' && typeof lastOp.retain === 'number') {
                                this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
                                if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes
                                return this;
                            }
                        }
                    }
                    if (index === this.ops.length) {
                        this.ops.push(newOp);
                    } else {
                        this.ops.splice(index, 0, newOp);
                    }
                    return this;
                };

                Delta.prototype.chop = function () {
                    var lastOp = this.ops[this.ops.length - 1];
                    if (lastOp && lastOp.retain && !lastOp.attributes) {
                        this.ops.pop();
                    }
                    return this;
                };

                Delta.prototype.length = function () {
                    return this.ops.reduce(function (length, elem) {
                        return length + op.length(elem);
                    }, 0);
                };

                Delta.prototype.slice = function (start, end) {
                    start = start || 0;
                    if (typeof end !== 'number') end = Infinity;
                    var ops = [];
                    var iter = op.iterator(this.ops);
                    var index = 0;
                    while (index < end && iter.hasNext()) {
                        var nextOp;
                        if (index < start) {
                            nextOp = iter.next(start - index);
                        } else {
                            nextOp = iter.next(end - index);
                            ops.push(nextOp);
                        }
                        index += op.length(nextOp);
                    }
                    return new Delta(ops);
                };


                Delta.prototype.compose = function (other) {
                    var thisIter = op.iterator(this.ops);
                    var otherIter = op.iterator(other.ops);
                    var delta = new Delta();
                    while (thisIter.hasNext() || otherIter.hasNext()) {
                        if (otherIter.peekType() === 'insert') {
                            delta.push(otherIter.next());
                        } else if (thisIter.peekType() === 'delete') {
                            delta.push(thisIter.next());
                        } else {
                            var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
                            var thisOp = thisIter.next(length);
                            var otherOp = otherIter.next(length);
                            if (typeof otherOp.retain === 'number') {
                                var newOp = {};
                                if (typeof thisOp.retain === 'number') {
                                    newOp.retain = length;
                                } else {
                                    newOp.insert = thisOp.insert;
                                }
                                // Preserve null when composing with a retain, otherwise remove it for inserts
                                var attributes = op.attributes.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
                                if (attributes) newOp.attributes = attributes;
                                delta.push(newOp);
                                // Other op should be delete, we could be an insert or retain
                                // Insert + delete cancels out
                            } else if (typeof otherOp['delete'] === 'number' && typeof thisOp.retain === 'number') {
                                delta.push(otherOp);
                            }
                        }
                    }
                    return delta.chop();
                };

                Delta.prototype.concat = function (other) {
                    var delta = new Delta(this.ops.slice());
                    if (other.ops.length > 0) {
                        delta.push(other.ops[0]);
                        delta.ops = delta.ops.concat(other.ops.slice(1));
                    }
                    return delta;
                };

                Delta.prototype.diff = function (other) {
                    var delta = new Delta();
                    if (this.ops === other.ops) {
                        return delta;
                    }
                    var strings = [this.ops, other.ops].map(function (ops) {
                        return ops.map(function (op) {
                            if (op.insert != null) {
                                return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
                            }
                            var prep = (ops === other.ops) ? 'on' : 'with';
                            throw new Error('diff() called ' + prep + ' non-document');
                        }).join('');
                    });
                    var diffResult = diff(strings[0], strings[1]);
                    var thisIter = op.iterator(this.ops);
                    var otherIter = op.iterator(other.ops);
                    diffResult.forEach(function (component) {
                        var length = component[1].length;
                        while (length > 0) {
                            var opLength = 0;
                            switch (component[0]) {
                                case diff.INSERT:
                                    opLength = Math.min(otherIter.peekLength(), length);
                                    delta.push(otherIter.next(opLength));
                                    break;
                                case diff.DELETE:
                                    opLength = Math.min(length, thisIter.peekLength());
                                    thisIter.next(opLength);
                                    delta['delete'](opLength);
                                    break;
                                case diff.EQUAL:
                                    opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
                                    var thisOp = thisIter.next(opLength);
                                    var otherOp = otherIter.next(opLength);
                                    if (equal(thisOp.insert, otherOp.insert)) {
                                        delta.retain(opLength, op.attributes.diff(thisOp.attributes, otherOp.attributes));
                                    } else {
                                        delta.push(otherOp)['delete'](opLength);
                                    }
                                    break;
                            }
                            length -= opLength;
                        }
                    });
                    return delta.chop();
                };

                Delta.prototype.transform = function (other, priority) {
                    priority = !!priority;
                    if (typeof other === 'number') {
                        return this.transformPosition(other, priority);
                    }
                    var thisIter = op.iterator(this.ops);
                    var otherIter = op.iterator(other.ops);
                    var delta = new Delta();
                    while (thisIter.hasNext() || otherIter.hasNext()) {
                        if (thisIter.peekType() === 'insert' && (priority || otherIter.peekType() !== 'insert')) {
                            delta.retain(op.length(thisIter.next()));
                        } else if (otherIter.peekType() === 'insert') {
                            delta.push(otherIter.next());
                        } else {
                            var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
                            var thisOp = thisIter.next(length);
                            var otherOp = otherIter.next(length);
                            if (thisOp['delete']) {
                                // Our delete either makes their delete redundant or removes their retain
                                continue;
                            } else if (otherOp['delete']) {
                                delta.push(otherOp);
                            } else {
                                // We retain either their retain or insert
                                delta.retain(length, op.attributes.transform(thisOp.attributes, otherOp.attributes, priority));
                            }
                        }
                    }
                    return delta.chop();
                };

                Delta.prototype.transformPosition = function (index, priority) {
                    priority = !!priority;
                    var thisIter = op.iterator(this.ops);
                    var offset = 0;
                    while (thisIter.hasNext() && offset <= index) {
                        var length = thisIter.peekLength();
                        var nextType = thisIter.peekType();
                        thisIter.next();
                        if (nextType === 'delete') {
                            index -= Math.min(length, index - offset);
                            continue;
                        } else if (nextType === 'insert' && (offset < index || !priority)) {
                            index += length;
                        }
                        offset += length;
                    }
                    return index;
                };


                module.exports = Delta;


                /***/ },
            /* 21 */
            /***/ function(module, exports) {

                /**
                 * This library modifies the diff-patch-match library by Neil Fraser
                 * by removing the patch and match functionality and certain advanced
                 * options in the diff function. The original license is as follows:
                 *
                 * ===
                 *
                 * Diff Match and Patch
                 *
                 * Copyright 2006 Google Inc.
                 * http://code.google.com/p/google-diff-match-patch/
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */


                /**
                 * The data structure representing a diff is an array of tuples:
                 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
                 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
                 */
                var DIFF_DELETE = -1;
                var DIFF_INSERT = 1;
                var DIFF_EQUAL = 0;


                /**
                 * Find the differences between two texts.  Simplifies the problem by stripping
                 * any common prefix or suffix off the texts before diffing.
                 * @param {string} text1 Old string to be diffed.
                 * @param {string} text2 New string to be diffed.
                 * @return {Array} Array of diff tuples.
                 */
                function diff_main(text1, text2) {
                    // Check for equality (speedup).
                    if (text1 == text2) {
                        if (text1) {
                            return [[DIFF_EQUAL, text1]];
                        }
                        return [];
                    }

                    // Trim off common prefix (speedup).
                    var commonlength = diff_commonPrefix(text1, text2);
                    var commonprefix = text1.substring(0, commonlength);
                    text1 = text1.substring(commonlength);
                    text2 = text2.substring(commonlength);

                    // Trim off common suffix (speedup).
                    commonlength = diff_commonSuffix(text1, text2);
                    var commonsuffix = text1.substring(text1.length - commonlength);
                    text1 = text1.substring(0, text1.length - commonlength);
                    text2 = text2.substring(0, text2.length - commonlength);

                    // Compute the diff on the middle block.
                    var diffs = diff_compute_(text1, text2);

                    // Restore the prefix and suffix.
                    if (commonprefix) {
                        diffs.unshift([DIFF_EQUAL, commonprefix]);
                    }
                    if (commonsuffix) {
                        diffs.push([DIFF_EQUAL, commonsuffix]);
                    }
                    diff_cleanupMerge(diffs);
                    return diffs;
                };


                /**
                 * Find the differences between two texts.  Assumes that the texts do not
                 * have any common prefix or suffix.
                 * @param {string} text1 Old string to be diffed.
                 * @param {string} text2 New string to be diffed.
                 * @return {Array} Array of diff tuples.
                 */
                function diff_compute_(text1, text2) {
                    var diffs;

                    if (!text1) {
                        // Just add some text (speedup).
                        return [[DIFF_INSERT, text2]];
                    }

                    if (!text2) {
                        // Just delete some text (speedup).
                        return [[DIFF_DELETE, text1]];
                    }

                    var longtext = text1.length > text2.length ? text1 : text2;
                    var shorttext = text1.length > text2.length ? text2 : text1;
                    var i = longtext.indexOf(shorttext);
                    if (i != -1) {
                        // Shorter text is inside the longer text (speedup).
                        diffs = [[DIFF_INSERT, longtext.substring(0, i)],
                            [DIFF_EQUAL, shorttext],
                            [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
                        // Swap insertions for deletions if diff is reversed.
                        if (text1.length > text2.length) {
                            diffs[0][0] = diffs[2][0] = DIFF_DELETE;
                        }
                        return diffs;
                    }

                    if (shorttext.length == 1) {
                        // Single character string.
                        // After the previous speedup, the character can't be an equality.
                        return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
                    }

                    // Check to see if the problem can be split in two.
                    var hm = diff_halfMatch_(text1, text2);
                    if (hm) {
                        // A half-match was found, sort out the return data.
                        var text1_a = hm[0];
                        var text1_b = hm[1];
                        var text2_a = hm[2];
                        var text2_b = hm[3];
                        var mid_common = hm[4];
                        // Send both pairs off for separate processing.
                        var diffs_a = diff_main(text1_a, text2_a);
                        var diffs_b = diff_main(text1_b, text2_b);
                        // Merge the results.
                        return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
                    }

                    return diff_bisect_(text1, text2);
                };


                /**
                 * Find the 'middle snake' of a diff, split the problem in two
                 * and return the recursively constructed diff.
                 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
                 * @param {string} text1 Old string to be diffed.
                 * @param {string} text2 New string to be diffed.
                 * @return {Array} Array of diff tuples.
                 * @private
                 */
                function diff_bisect_(text1, text2) {
                    // Cache the text lengths to prevent multiple calls.
                    var text1_length = text1.length;
                    var text2_length = text2.length;
                    var max_d = Math.ceil((text1_length + text2_length) / 2);
                    var v_offset = max_d;
                    var v_length = 2 * max_d;
                    var v1 = new Array(v_length);
                    var v2 = new Array(v_length);
                    // Setting all elements to -1 is faster in Chrome & Firefox than mixing
                    // integers and undefined.
                    for (var x = 0; x < v_length; x++) {
                        v1[x] = -1;
                        v2[x] = -1;
                    }
                    v1[v_offset + 1] = 0;
                    v2[v_offset + 1] = 0;
                    var delta = text1_length - text2_length;
                    // If the total number of characters is odd, then the front path will collide
                    // with the reverse path.
                    var front = (delta % 2 != 0);
                    // Offsets for start and end of k loop.
                    // Prevents mapping of space beyond the grid.
                    var k1start = 0;
                    var k1end = 0;
                    var k2start = 0;
                    var k2end = 0;
                    for (var d = 0; d < max_d; d++) {
                        // Walk the front path one step.
                        for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
                            var k1_offset = v_offset + k1;
                            var x1;
                            if (k1 == -d || (k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
                                x1 = v1[k1_offset + 1];
                            } else {
                                x1 = v1[k1_offset - 1] + 1;
                            }
                            var y1 = x1 - k1;
                            while (x1 < text1_length && y1 < text2_length &&
                            text1.charAt(x1) == text2.charAt(y1)) {
                                x1++;
                                y1++;
                            }
                            v1[k1_offset] = x1;
                            if (x1 > text1_length) {
                                // Ran off the right of the graph.
                                k1end += 2;
                            } else if (y1 > text2_length) {
                                // Ran off the bottom of the graph.
                                k1start += 2;
                            } else if (front) {
                                var k2_offset = v_offset + delta - k1;
                                if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
                                    // Mirror x2 onto top-left coordinate system.
                                    var x2 = text1_length - v2[k2_offset];
                                    if (x1 >= x2) {
                                        // Overlap detected.
                                        return diff_bisectSplit_(text1, text2, x1, y1);
                                    }
                                }
                            }
                        }

                        // Walk the reverse path one step.
                        for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
                            var k2_offset = v_offset + k2;
                            var x2;
                            if (k2 == -d || (k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
                                x2 = v2[k2_offset + 1];
                            } else {
                                x2 = v2[k2_offset - 1] + 1;
                            }
                            var y2 = x2 - k2;
                            while (x2 < text1_length && y2 < text2_length &&
                            text1.charAt(text1_length - x2 - 1) ==
                            text2.charAt(text2_length - y2 - 1)) {
                                x2++;
                                y2++;
                            }
                            v2[k2_offset] = x2;
                            if (x2 > text1_length) {
                                // Ran off the left of the graph.
                                k2end += 2;
                            } else if (y2 > text2_length) {
                                // Ran off the top of the graph.
                                k2start += 2;
                            } else if (!front) {
                                var k1_offset = v_offset + delta - k2;
                                if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
                                    var x1 = v1[k1_offset];
                                    var y1 = v_offset + x1 - k1_offset;
                                    // Mirror x2 onto top-left coordinate system.
                                    x2 = text1_length - x2;
                                    if (x1 >= x2) {
                                        // Overlap detected.
                                        return diff_bisectSplit_(text1, text2, x1, y1);
                                    }
                                }
                            }
                        }
                    }
                    // Diff took too long and hit the deadline or
                    // number of diffs equals number of characters, no commonality at all.
                    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
                };


                /**
                 * Given the location of the 'middle snake', split the diff in two parts
                 * and recurse.
                 * @param {string} text1 Old string to be diffed.
                 * @param {string} text2 New string to be diffed.
                 * @param {number} x Index of split point in text1.
                 * @param {number} y Index of split point in text2.
                 * @return {Array} Array of diff tuples.
                 */
                function diff_bisectSplit_(text1, text2, x, y) {
                    var text1a = text1.substring(0, x);
                    var text2a = text2.substring(0, y);
                    var text1b = text1.substring(x);
                    var text2b = text2.substring(y);

                    // Compute both diffs serially.
                    var diffs = diff_main(text1a, text2a);
                    var diffsb = diff_main(text1b, text2b);

                    return diffs.concat(diffsb);
                };


                /**
                 * Determine the common prefix of two strings.
                 * @param {string} text1 First string.
                 * @param {string} text2 Second string.
                 * @return {number} The number of characters common to the start of each
                 *     string.
                 */
                function diff_commonPrefix(text1, text2) {
                    // Quick check for common null cases.
                    if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
                        return 0;
                    }
                    // Binary search.
                    // Performance analysis: http://neil.fraser.name/news/2007/10/09/
                    var pointermin = 0;
                    var pointermax = Math.min(text1.length, text2.length);
                    var pointermid = pointermax;
                    var pointerstart = 0;
                    while (pointermin < pointermid) {
                        if (text1.substring(pointerstart, pointermid) ==
                            text2.substring(pointerstart, pointermid)) {
                            pointermin = pointermid;
                            pointerstart = pointermin;
                        } else {
                            pointermax = pointermid;
                        }
                        pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
                    }
                    return pointermid;
                };


                /**
                 * Determine the common suffix of two strings.
                 * @param {string} text1 First string.
                 * @param {string} text2 Second string.
                 * @return {number} The number of characters common to the end of each string.
                 */
                function diff_commonSuffix(text1, text2) {
                    // Quick check for common null cases.
                    if (!text1 || !text2 ||
                        text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
                        return 0;
                    }
                    // Binary search.
                    // Performance analysis: http://neil.fraser.name/news/2007/10/09/
                    var pointermin = 0;
                    var pointermax = Math.min(text1.length, text2.length);
                    var pointermid = pointermax;
                    var pointerend = 0;
                    while (pointermin < pointermid) {
                        if (text1.substring(text1.length - pointermid, text1.length - pointerend) ==
                            text2.substring(text2.length - pointermid, text2.length - pointerend)) {
                            pointermin = pointermid;
                            pointerend = pointermin;
                        } else {
                            pointermax = pointermid;
                        }
                        pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
                    }
                    return pointermid;
                };


                /**
                 * Do the two texts share a substring which is at least half the length of the
                 * longer text?
                 * This speedup can produce non-minimal diffs.
                 * @param {string} text1 First string.
                 * @param {string} text2 Second string.
                 * @return {Array.<string>} Five element Array, containing the prefix of
                 *     text1, the suffix of text1, the prefix of text2, the suffix of
                 *     text2 and the common middle.  Or null if there was no match.
                 */
                function diff_halfMatch_(text1, text2) {
                    var longtext = text1.length > text2.length ? text1 : text2;
                    var shorttext = text1.length > text2.length ? text2 : text1;
                    if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
                        return null;  // Pointless.
                    }

                    /**
                     * Does a substring of shorttext exist within longtext such that the substring
                     * is at least half the length of longtext?
                     * Closure, but does not reference any external variables.
                     * @param {string} longtext Longer string.
                     * @param {string} shorttext Shorter string.
                     * @param {number} i Start index of quarter length substring within longtext.
                     * @return {Array.<string>} Five element Array, containing the prefix of
                     *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
                     *     of shorttext and the common middle.  Or null if there was no match.
                     * @private
                     */
                    function diff_halfMatchI_(longtext, shorttext, i) {
                        // Start with a 1/4 length substring at position i as a seed.
                        var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
                        var j = -1;
                        var best_common = '';
                        var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
                        while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
                            var prefixLength = diff_commonPrefix(longtext.substring(i),
                                shorttext.substring(j));
                            var suffixLength = diff_commonSuffix(longtext.substring(0, i),
                                shorttext.substring(0, j));
                            if (best_common.length < suffixLength + prefixLength) {
                                best_common = shorttext.substring(j - suffixLength, j) +
                                    shorttext.substring(j, j + prefixLength);
                                best_longtext_a = longtext.substring(0, i - suffixLength);
                                best_longtext_b = longtext.substring(i + prefixLength);
                                best_shorttext_a = shorttext.substring(0, j - suffixLength);
                                best_shorttext_b = shorttext.substring(j + prefixLength);
                            }
                        }
                        if (best_common.length * 2 >= longtext.length) {
                            return [best_longtext_a, best_longtext_b,
                                best_shorttext_a, best_shorttext_b, best_common];
                        } else {
                            return null;
                        }
                    }

                    // First check if the second quarter is the seed for a half-match.
                    var hm1 = diff_halfMatchI_(longtext, shorttext,
                        Math.ceil(longtext.length / 4));
                    // Check again based on the third quarter.
                    var hm2 = diff_halfMatchI_(longtext, shorttext,
                        Math.ceil(longtext.length / 2));
                    var hm;
                    if (!hm1 && !hm2) {
                        return null;
                    } else if (!hm2) {
                        hm = hm1;
                    } else if (!hm1) {
                        hm = hm2;
                    } else {
                        // Both matched.  Select the longest.
                        hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
                    }

                    // A half-match was found, sort out the return data.
                    var text1_a, text1_b, text2_a, text2_b;
                    if (text1.length > text2.length) {
                        text1_a = hm[0];
                        text1_b = hm[1];
                        text2_a = hm[2];
                        text2_b = hm[3];
                    } else {
                        text2_a = hm[0];
                        text2_b = hm[1];
                        text1_a = hm[2];
                        text1_b = hm[3];
                    }
                    var mid_common = hm[4];
                    return [text1_a, text1_b, text2_a, text2_b, mid_common];
                };


                /**
                 * Reorder and merge like edit sections.  Merge equalities.
                 * Any edit section can move as long as it doesn't cross an equality.
                 * @param {Array} diffs Array of diff tuples.
                 */
                function diff_cleanupMerge(diffs) {
                    diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.
                    var pointer = 0;
                    var count_delete = 0;
                    var count_insert = 0;
                    var text_delete = '';
                    var text_insert = '';
                    var commonlength;
                    while (pointer < diffs.length) {
                        switch (diffs[pointer][0]) {
                            case DIFF_INSERT:
                                count_insert++;
                                text_insert += diffs[pointer][1];
                                pointer++;
                                break;
                            case DIFF_DELETE:
                                count_delete++;
                                text_delete += diffs[pointer][1];
                                pointer++;
                                break;
                            case DIFF_EQUAL:
                                // Upon reaching an equality, check for prior redundancies.
                                if (count_delete + count_insert > 1) {
                                    if (count_delete !== 0 && count_insert !== 0) {
                                        // Factor out any common prefixies.
                                        commonlength = diff_commonPrefix(text_insert, text_delete);
                                        if (commonlength !== 0) {
                                            if ((pointer - count_delete - count_insert) > 0 &&
                                                diffs[pointer - count_delete - count_insert - 1][0] ==
                                                DIFF_EQUAL) {
                                                diffs[pointer - count_delete - count_insert - 1][1] +=
                                                    text_insert.substring(0, commonlength);
                                            } else {
                                                diffs.splice(0, 0, [DIFF_EQUAL,
                                                    text_insert.substring(0, commonlength)]);
                                                pointer++;
                                            }
                                            text_insert = text_insert.substring(commonlength);
                                            text_delete = text_delete.substring(commonlength);
                                        }
                                        // Factor out any common suffixies.
                                        commonlength = diff_commonSuffix(text_insert, text_delete);
                                        if (commonlength !== 0) {
                                            diffs[pointer][1] = text_insert.substring(text_insert.length -
                                                commonlength) + diffs[pointer][1];
                                            text_insert = text_insert.substring(0, text_insert.length -
                                                commonlength);
                                            text_delete = text_delete.substring(0, text_delete.length -
                                                commonlength);
                                        }
                                    }
                                    // Delete the offending records and add the merged ones.
                                    if (count_delete === 0) {
                                        diffs.splice(pointer - count_insert,
                                            count_delete + count_insert, [DIFF_INSERT, text_insert]);
                                    } else if (count_insert === 0) {
                                        diffs.splice(pointer - count_delete,
                                            count_delete + count_insert, [DIFF_DELETE, text_delete]);
                                    } else {
                                        diffs.splice(pointer - count_delete - count_insert,
                                            count_delete + count_insert, [DIFF_DELETE, text_delete],
                                            [DIFF_INSERT, text_insert]);
                                    }
                                    pointer = pointer - count_delete - count_insert +
                                        (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
                                } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
                                    // Merge this equality with the previous one.
                                    diffs[pointer - 1][1] += diffs[pointer][1];
                                    diffs.splice(pointer, 1);
                                } else {
                                    pointer++;
                                }
                                count_insert = 0;
                                count_delete = 0;
                                text_delete = '';
                                text_insert = '';
                                break;
                        }
                    }
                    if (diffs[diffs.length - 1][1] === '') {
                        diffs.pop();  // Remove the dummy entry at the end.
                    }

                    // Second pass: look for single edits surrounded on both sides by equalities
                    // which can be shifted sideways to eliminate an equality.
                    // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
                    var changes = false;
                    pointer = 1;
                    // Intentionally ignore the first and last element (don't need checking).
                    while (pointer < diffs.length - 1) {
                        if (diffs[pointer - 1][0] == DIFF_EQUAL &&
                            diffs[pointer + 1][0] == DIFF_EQUAL) {
                            // This is a single edit surrounded by equalities.
                            if (diffs[pointer][1].substring(diffs[pointer][1].length -
                                diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
                                // Shift the edit over the previous equality.
                                diffs[pointer][1] = diffs[pointer - 1][1] +
                                    diffs[pointer][1].substring(0, diffs[pointer][1].length -
                                        diffs[pointer - 1][1].length);
                                diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
                                diffs.splice(pointer - 1, 1);
                                changes = true;
                            } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
                                diffs[pointer + 1][1]) {
                                // Shift the edit over the next equality.
                                diffs[pointer - 1][1] += diffs[pointer + 1][1];
                                diffs[pointer][1] =
                                    diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
                                    diffs[pointer + 1][1];
                                diffs.splice(pointer + 1, 1);
                                changes = true;
                            }
                        }
                        pointer++;
                    }
                    // If shifts were made, the diff needs reordering and another shift sweep.
                    if (changes) {
                        diff_cleanupMerge(diffs);
                    }
                };


                var diff = diff_main;
                diff.INSERT = DIFF_INSERT;
                diff.DELETE = DIFF_DELETE;
                diff.EQUAL = DIFF_EQUAL;


                module.exports = diff;


                /***/ },
            /* 22 */
            /***/ function(module, exports, __webpack_require__) {

                var pSlice = Array.prototype.slice;
                var objectKeys = __webpack_require__(23);
                var isArguments = __webpack_require__(24);

                var deepEqual = module.exports = function (actual, expected, opts) {
                    if (!opts) opts = {};
                    // 7.1. All identical values are equivalent, as determined by ===.
                    if (actual === expected) {
                        return true;

                    } else if (actual instanceof Date && expected instanceof Date) {
                        return actual.getTime() === expected.getTime();

                        // 7.3. Other pairs that do not both pass typeof value == 'object',
                        // equivalence is determined by ==.
                    } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
                        return opts.strict ? actual === expected : actual == expected;

                        // 7.4. For all other Object pairs, including Array objects, equivalence is
                        // determined by having the same number of owned properties (as verified
                        // with Object.prototype.hasOwnProperty.call), the same set of keys
                        // (although not necessarily the same order), equivalent values for every
                        // corresponding key, and an identical 'prototype' property. Note: this
                        // accounts for both named and indexed properties on Arrays.
                    } else {
                        return objEquiv(actual, expected, opts);
                    }
                }

                function isUndefinedOrNull(value) {
                    return value === null || value === undefined;
                }

                function isBuffer (x) {
                    if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
                    if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
                        return false;
                    }
                    if (x.length > 0 && typeof x[0] !== 'number') return false;
                    return true;
                }

                function objEquiv(a, b, opts) {
                    var i, key;
                    if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
                        return false;
                    // an identical 'prototype' property.
                    if (a.prototype !== b.prototype) return false;
                    //~~~I've managed to break Object.keys through screwy arguments passing.
                    //   Converting to array solves the problem.
                    if (isArguments(a)) {
                        if (!isArguments(b)) {
                            return false;
                        }
                        a = pSlice.call(a);
                        b = pSlice.call(b);
                        return deepEqual(a, b, opts);
                    }
                    if (isBuffer(a)) {
                        if (!isBuffer(b)) {
                            return false;
                        }
                        if (a.length !== b.length) return false;
                        for (i = 0; i < a.length; i++) {
                            if (a[i] !== b[i]) return false;
                        }
                        return true;
                    }
                    try {
                        var ka = objectKeys(a),
                            kb = objectKeys(b);
                    } catch (e) {//happens when one is a string literal and the other isn't
                        return false;
                    }
                    // having the same number of owned properties (keys incorporates
                    // hasOwnProperty)
                    if (ka.length != kb.length)
                        return false;
                    //the same set of keys (although not necessarily the same order),
                    ka.sort();
                    kb.sort();
                    //~~~cheap key test
                    for (i = ka.length - 1; i >= 0; i--) {
                        if (ka[i] != kb[i])
                            return false;
                    }
                    //equivalent values for every corresponding key, and
                    //~~~possibly expensive deep test
                    for (i = ka.length - 1; i >= 0; i--) {
                        key = ka[i];
                        if (!deepEqual(a[key], b[key], opts)) return false;
                    }
                    return typeof a === typeof b;
                }


                /***/ },
            /* 23 */
            /***/ function(module, exports) {

                exports = module.exports = typeof Object.keys === 'function'
                    ? Object.keys : shim;

                exports.shim = shim;
                function shim (obj) {
                    var keys = [];
                    for (var key in obj) keys.push(key);
                    return keys;
                }


                /***/ },
            /* 24 */
            /***/ function(module, exports) {

                var supportsArgumentsClass = (function(){
                    return Object.prototype.toString.call(arguments)
                })() == '[object Arguments]';

                exports = module.exports = supportsArgumentsClass ? supported : unsupported;

                exports.supported = supported;
                function supported(object) {
                    return Object.prototype.toString.call(object) == '[object Arguments]';
                };

                exports.unsupported = unsupported;
                function unsupported(object){
                    return object &&
                        typeof object == 'object' &&
                        typeof object.length == 'number' &&
                        Object.prototype.hasOwnProperty.call(object, 'callee') &&
                        !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
                        false;
                };


                /***/ },
            /* 25 */
            /***/ function(module, exports) {

                'use strict';

                var hasOwn = Object.prototype.hasOwnProperty;
                var toStr = Object.prototype.toString;

                var isArray = function isArray(arr) {
                    if (typeof Array.isArray === 'function') {
                        return Array.isArray(arr);
                    }

                    return toStr.call(arr) === '[object Array]';
                };

                var isPlainObject = function isPlainObject(obj) {
                    if (!obj || toStr.call(obj) !== '[object Object]') {
                        return false;
                    }

                    var hasOwnConstructor = hasOwn.call(obj, 'constructor');
                    var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
                    // Not own constructor property must be Object
                    if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
                        return false;
                    }

                    // Own properties are enumerated firstly, so to speed up,
                    // if last one is own, then all properties are own.
                    var key;
                    for (key in obj) {/**/}

                    return typeof key === 'undefined' || hasOwn.call(obj, key);
                };

                module.exports = function extend() {
                    var options, name, src, copy, copyIsArray, clone,
                        target = arguments[0],
                        i = 1,
                        length = arguments.length,
                        deep = false;

                    // Handle a deep copy situation
                    if (typeof target === 'boolean') {
                        deep = target;
                        target = arguments[1] || {};
                        // skip the boolean and the target
                        i = 2;
                    } else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
                        target = {};
                    }

                    for (; i < length; ++i) {
                        options = arguments[i];
                        // Only deal with non-null/undefined values
                        if (options != null) {
                            // Extend the base object
                            for (name in options) {
                                src = target[name];
                                copy = options[name];

                                // Prevent never-ending loop
                                if (target !== copy) {
                                    // Recurse if we're merging plain objects or arrays
                                    if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                                        if (copyIsArray) {
                                            copyIsArray = false;
                                            clone = src && isArray(src) ? src : [];
                                        } else {
                                            clone = src && isPlainObject(src) ? src : {};
                                        }

                                        // Never move original objects, clone them
                                        target[name] = extend(deep, clone, copy);

                                        // Don't bring in undefined values
                                    } else if (typeof copy !== 'undefined') {
                                        target[name] = copy;
                                    }
                                }
                            }
                        }
                    }

                    // Return the modified object
                    return target;
                };



                /***/ },
            /* 26 */
            /***/ function(module, exports, __webpack_require__) {

                var equal = __webpack_require__(22);
                var extend = __webpack_require__(25);


                var lib = {
                    attributes: {
                        compose: function (a, b, keepNull) {
                            if (typeof a !== 'object') a = {};
                            if (typeof b !== 'object') b = {};
                            var attributes = extend(true, {}, b);
                            if (!keepNull) {
                                attributes = Object.keys(attributes).reduce(function (copy, key) {
                                    if (attributes[key] != null) {
                                        copy[key] = attributes[key];
                                    }
                                    return copy;
                                }, {});
                            }
                            for (var key in a) {
                                if (a[key] !== undefined && b[key] === undefined) {
                                    attributes[key] = a[key];
                                }
                            }
                            return Object.keys(attributes).length > 0 ? attributes : undefined;
                        },

                        diff: function(a, b) {
                            if (typeof a !== 'object') a = {};
                            if (typeof b !== 'object') b = {};
                            var attributes = Object.keys(a).concat(Object.keys(b)).reduce(function (attributes, key) {
                                if (!equal(a[key], b[key])) {
                                    attributes[key] = b[key] === undefined ? null : b[key];
                                }
                                return attributes;
                            }, {});
                            return Object.keys(attributes).length > 0 ? attributes : undefined;
                        },

                        transform: function (a, b, priority) {
                            if (typeof a !== 'object') return b;
                            if (typeof b !== 'object') return undefined;
                            if (!priority) return b;  // b simply overwrites us without priority
                            var attributes = Object.keys(b).reduce(function (attributes, key) {
                                if (a[key] === undefined) attributes[key] = b[key];  // null is a valid value
                                return attributes;
                            }, {});
                            return Object.keys(attributes).length > 0 ? attributes : undefined;
                        }
                    },

                    iterator: function (ops) {
                        return new Iterator(ops);
                    },

                    length: function (op) {
                        if (typeof op['delete'] === 'number') {
                            return op['delete'];
                        } else if (typeof op.retain === 'number') {
                            return op.retain;
                        } else {
                            return typeof op.insert === 'string' ? op.insert.length : 1;
                        }
                    }
                };


                function Iterator(ops) {
                    this.ops = ops;
                    this.index = 0;
                    this.offset = 0;
                };

                Iterator.prototype.hasNext = function () {
                    return this.peekLength() < Infinity;
                };

                Iterator.prototype.next = function (length) {
                    if (!length) length = Infinity;
                    var nextOp = this.ops[this.index];
                    if (nextOp) {
                        var offset = this.offset;
                        var opLength = lib.length(nextOp)
                        if (length >= opLength - offset) {
                            length = opLength - offset;
                            this.index += 1;
                            this.offset = 0;
                        } else {
                            this.offset += length;
                        }
                        if (typeof nextOp['delete'] === 'number') {
                            return { 'delete': length };
                        } else {
                            var retOp = {};
                            if (nextOp.attributes) {
                                retOp.attributes = nextOp.attributes;
                            }
                            if (typeof nextOp.retain === 'number') {
                                retOp.retain = length;
                            } else if (typeof nextOp.insert === 'string') {
                                retOp.insert = nextOp.insert.substr(offset, length);
                            } else {
                                // offset should === 0, length should === 1
                                retOp.insert = nextOp.insert;
                            }
                            return retOp;
                        }
                    } else {
                        return { retain: Infinity };
                    }
                };

                Iterator.prototype.peekLength = function () {
                    if (this.ops[this.index]) {
                        // Should never return 0 if our index is being managed correctly
                        return lib.length(this.ops[this.index]) - this.offset;
                    } else {
                        return Infinity;
                    }
                };

                Iterator.prototype.peekType = function () {
                    if (this.ops[this.index]) {
                        if (typeof this.ops[this.index]['delete'] === 'number') {
                            return 'delete';
                        } else if (typeof this.ops[this.index].retain === 'number') {
                            return 'retain';
                        } else {
                            return 'insert';
                        }
                    }
                    return 'retain';
                };


                module.exports = lib;


                /***/ },
            /* 27 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

                var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

                var _delta = __webpack_require__(20);

                var _delta2 = _interopRequireDefault(_delta);

                var _op = __webpack_require__(26);

                var _op2 = _interopRequireDefault(_op);

                var _emitter3 = __webpack_require__(28);

                var _emitter4 = _interopRequireDefault(_emitter3);

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                var _code = __webpack_require__(31);

                var _code2 = _interopRequireDefault(_code);

                var _cursor = __webpack_require__(37);

                var _cursor2 = _interopRequireDefault(_cursor);

                var _block = __webpack_require__(32);

                var _block2 = _interopRequireDefault(_block);

                var _clone = __webpack_require__(38);

                var _clone2 = _interopRequireDefault(_clone);

                var _deepEqual = __webpack_require__(22);

                var _deepEqual2 = _interopRequireDefault(_deepEqual);

                var _extend = __webpack_require__(25);

                var _extend2 = _interopRequireDefault(_extend);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                var Editor = function () {
                    function Editor(scroll, emitter) {
                        _classCallCheck(this, Editor);

                        this.scroll = scroll;
                        this.emitter = emitter;
                        this.emitter.on(_emitter4.default.events.SCROLL_UPDATE, this.update.bind(this, null));
                        this.delta = this.getDelta();
                        this.enable();
                    }

                    _createClass(Editor, [{
                        key: 'applyDelta',
                        value: function applyDelta(delta) {
                            var _this = this;

                            var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter4.default.sources.API : arguments[1];

                            var consumeNextNewline = false;
                            this.scroll.update();
                            var scrollLength = this.scroll.length();
                            this.scroll.batch = true;
                            delta = normalizeDelta(delta);
                            delta.ops.reduce(function (index, op) {
                                var length = op.retain || op.delete || op.insert.length || 1;
                                var attributes = op.attributes || {};
                                if (op.insert != null) {
                                    if (typeof op.insert === 'string') {
                                        var text = op.insert;
                                        if (text.endsWith('\n') && consumeNextNewline) {
                                            consumeNextNewline = false;
                                            text = text.slice(0, -1);
                                        }
                                        if (index >= scrollLength && !text.endsWith('\n')) {
                                            consumeNextNewline = true;
                                        }
                                        _this.scroll.insertAt(index, text);

                                        var _scroll$line = _this.scroll.line(index);

                                        var _scroll$line2 = _slicedToArray(_scroll$line, 2);

                                        var line = _scroll$line2[0];
                                        var offset = _scroll$line2[1];

                                        var formats = (0, _extend2.default)({}, (0, _block.bubbleFormats)(line));
                                        if (line instanceof _block2.default) {
                                            var _line$descendant = line.descendant(_parchment2.default.Leaf, offset);

                                            var _line$descendant2 = _slicedToArray(_line$descendant, 1);

                                            var leaf = _line$descendant2[0];

                                            formats = (0, _extend2.default)(formats, (0, _block.bubbleFormats)(leaf));
                                        }
                                        attributes = _op2.default.attributes.diff(formats, attributes) || {};
                                    } else if (_typeof(op.insert) === 'object') {
                                        var key = Object.keys(op.insert)[0]; // There should only be one key
                                        if (key == null) return index;
                                        _this.scroll.insertAt(index, key, op.insert[key]);
                                    }
                                    scrollLength += length;
                                }
                                Object.keys(attributes).forEach(function (name) {
                                    _this.scroll.formatAt(index, length, name, attributes[name]);
                                });
                                return index + length;
                            }, 0);
                            delta.ops.reduce(function (index, op) {
                                if (typeof op.delete === 'number') {
                                    _this.scroll.deleteAt(index, op.delete);
                                    return index;
                                }
                                return index + (op.retain || op.insert.length || 1);
                            }, 0);
                            this.scroll.batch = false;
                            this.scroll.optimize();
                            return this.update(delta, source);
                        }
                    }, {
                        key: 'deleteText',
                        value: function deleteText(index, length) {
                            var source = arguments.length <= 2 || arguments[2] === undefined ? _emitter4.default.sources.API : arguments[2];

                            this.scroll.deleteAt(index, length);
                            return this.update(new _delta2.default().retain(index).delete(length), source);
                        }
                    }, {
                        key: 'enable',
                        value: function enable() {
                            var enabled = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

                            this.scroll.domNode.setAttribute('contenteditable', enabled);
                        }
                    }, {
                        key: 'formatLine',
                        value: function formatLine(index, length) {
                            var _this2 = this;

                            var formats = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
                            var source = arguments.length <= 3 || arguments[3] === undefined ? _emitter4.default.sources.API : arguments[3];

                            this.scroll.update();
                            Object.keys(formats).forEach(function (format) {
                                var lines = _this2.scroll.lines(index, Math.max(length, 1));
                                var lengthRemaining = length;
                                lines.forEach(function (line, i) {
                                    var lineLength = line.length();
                                    if (!(line instanceof _code2.default)) {
                                        line.format(format, formats[format]);
                                    } else {
                                        var codeIndex = index - line.offset(_this2.scroll);
                                        var codeLength = line.newlineIndex(codeIndex + lengthRemaining) - codeIndex + 1;
                                        line.formatAt(codeIndex, codeLength, format, formats[format]);
                                    }
                                    lengthRemaining -= lineLength;
                                });
                            });
                            this.scroll.optimize();
                            return this.update(new _delta2.default().retain(index).retain(length, (0, _clone2.default)(formats)), source);
                        }
                    }, {
                        key: 'formatText',
                        value: function formatText(index, length) {
                            var _this3 = this;

                            var formats = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
                            var source = arguments.length <= 3 || arguments[3] === undefined ? _emitter4.default.sources.API : arguments[3];

                            Object.keys(formats).forEach(function (format) {
                                _this3.scroll.formatAt(index, length, format, formats[format]);
                            });
                            return this.update(new _delta2.default().retain(index).retain(length, (0, _clone2.default)(formats)), source);
                        }
                    }, {
                        key: 'getContents',
                        value: function getContents(index, length) {
                            return this.delta.slice(index, index + length);
                        }
                    }, {
                        key: 'getDelta',
                        value: function getDelta() {
                            return this.scroll.lines().reduce(function (delta, line) {
                                return delta.concat(line.delta());
                            }, new _delta2.default());
                        }
                    }, {
                        key: 'getFormat',
                        value: function getFormat(index) {
                            var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

                            var lines = [],
                                leaves = [];
                            if (length === 0) {
                                this.scroll.path(index).forEach(function (path) {
                                    var _path = _slicedToArray(path, 1);

                                    var blot = _path[0];

                                    if (blot instanceof _block2.default) {
                                        lines.push(blot);
                                    } else if (blot instanceof _parchment2.default.Leaf) {
                                        leaves.push(blot);
                                    }
                                });
                            } else {
                                lines = this.scroll.lines(index, length);
                                leaves = this.scroll.descendants(_parchment2.default.Leaf, index, length);
                            }
                            var formatsArr = [lines, leaves].map(function (blots) {
                                if (blots.length === 0) return {};
                                var formats = (0, _block.bubbleFormats)(blots.shift());
                                while (Object.keys(formats).length > 0) {
                                    var blot = blots.shift();
                                    if (blot == null) return formats;
                                    formats = combineFormats((0, _block.bubbleFormats)(blot), formats);
                                }
                                return formats;
                            });
                            return _extend2.default.apply(_extend2.default, formatsArr);
                        }
                    }, {
                        key: 'getText',
                        value: function getText(index, length) {
                            return this.getContents(index, length).ops.map(function (op) {
                                return typeof op.insert === 'string' ? op.insert : '';
                            }).join('');
                        }
                    }, {
                        key: 'insertEmbed',
                        value: function insertEmbed(index, embed, value) {
                            var source = arguments.length <= 3 || arguments[3] === undefined ? _emitter4.default.sources.API : arguments[3];

                            this.scroll.insertAt(index, embed, value);
                            return this.update(new _delta2.default().retain(index).insert(_defineProperty({}, embed, value)), source);
                        }
                    }, {
                        key: 'insertText',
                        value: function insertText(index, text) {
                            var _this4 = this;

                            var formats = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
                            var source = arguments.length <= 3 || arguments[3] === undefined ? _emitter4.default.sources.API : arguments[3];

                            text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
                            this.scroll.insertAt(index, text);
                            Object.keys(formats).forEach(function (format) {
                                _this4.scroll.formatAt(index, text.length, format, formats[format]);
                            });
                            return this.update(new _delta2.default().retain(index).insert(text, (0, _clone2.default)(formats)), source);
                        }
                    }, {
                        key: 'isBlank',
                        value: function isBlank() {
                            if (this.scroll.children.length == 0) return true;
                            if (this.scroll.children.length > 1) return false;
                            var child = this.scroll.children.head;
                            return child.length() <= 1 && Object.keys(child.formats()).length == 0;
                        }
                    }, {
                        key: 'removeFormat',
                        value: function removeFormat(index, length, source) {
                            var text = this.getText(index, length);

                            var _scroll$line3 = this.scroll.line(index + length);

                            var _scroll$line4 = _slicedToArray(_scroll$line3, 2);

                            var line = _scroll$line4[0];
                            var offset = _scroll$line4[1];

                            var suffixLength = 0,
                                suffix = new _delta2.default();
                            if (line != null) {
                                if (!(line instanceof _code2.default)) {
                                    suffixLength = line.length() - offset;
                                } else {
                                    suffixLength = line.newlineIndex(offset) - offset + 1;
                                }
                                suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\n');
                            }
                            var contents = this.getContents(index, length + suffixLength);
                            var diff = contents.diff(new _delta2.default().insert(text).concat(suffix));
                            var delta = new _delta2.default().retain(index).concat(diff);
                            return this.applyDelta(delta, source);
                        }
                    }, {
                        key: 'update',
                        value: function update(change) {
                            var _this5 = this;

                            var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter4.default.sources.USER : arguments[1];
                            var mutations = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

                            var oldDelta = this.delta;
                            if (mutations.length === 1 && mutations[0].type === 'characterData' && _parchment2.default.find(mutations[0].target)) {
                                (function () {
                                    // Optimization for character changes
                                    var textBlot = _parchment2.default.find(mutations[0].target);
                                    var formats = (0, _block.bubbleFormats)(textBlot);
                                    var index = textBlot.offset(_this5.scroll);
                                    var oldValue = mutations[0].oldValue.replace(_cursor2.default.CONTENTS, '');
                                    var oldText = new _delta2.default().insert(oldValue);
                                    var newText = new _delta2.default().insert(textBlot.value());
                                    var diffDelta = new _delta2.default().retain(index).concat(oldText.diff(newText));
                                    change = diffDelta.ops.reduce(function (delta, op) {
                                        if (op.insert) {
                                            return delta.insert(op.insert, formats);
                                        } else {
                                            return delta.push(op);
                                        }
                                    }, new _delta2.default());
                                    _this5.delta = oldDelta.compose(change);
                                })();
                            } else {
                                this.delta = this.getDelta();
                                if (!change || !(0, _deepEqual2.default)(oldDelta.compose(change), this.delta)) {
                                    change = oldDelta.diff(this.delta);
                                }
                            }
                            if (change.length() > 0) {
                                var _emitter;

                                var args = [_emitter4.default.events.TEXT_CHANGE, change, oldDelta, source];
                                (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
                                if (source !== _emitter4.default.sources.SILENT) {
                                    var _emitter2;

                                    (_emitter2 = this.emitter).emit.apply(_emitter2, args);
                                }
                            }
                            return change;
                        }
                    }]);

                    return Editor;
                }();

                function combineFormats(formats, combined) {
                    return Object.keys(combined).reduce(function (merged, name) {
                        if (formats[name] == null) return merged;
                        if (combined[name] === formats[name]) {
                            merged[name] = combined[name];
                        } else if (Array.isArray(combined[name])) {
                            if (combined[name].indexOf(formats[name]) < 0) {
                                merged[name] = combined[name].concat([formats[name]]);
                            }
                        } else {
                            merged[name] = [combined[name], formats[name]];
                        }
                        return merged;
                    }, {});
                }

                function normalizeDelta(delta) {
                    return delta.ops.reduce(function (delta, op) {
                        if (op.insert === 1) {
                            var attributes = (0, _clone2.default)(op.attributes);
                            delete attributes['image'];
                            return delta.insert({ image: op.attributes.image }, attributes);
                        }
                        if (op.attributes != null && (op.attributes.list === true || op.attributes.bullet === true)) {
                            op = (0, _clone2.default)(op);
                            if (op.attributes.list) {
                                op.attributes.list = 'ordered';
                            } else {
                                op.attributes.list = 'bullet';
                                delete op.attributes.bullet;
                            }
                        }
                        if (typeof op.insert === 'string') {
                            var text = op.insert.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
                            return delta.insert(text, op.attributes);
                        }
                        return delta.push(op);
                    }, new _delta2.default());
                }

                exports.default = Editor;

                /***/ },
            /* 28 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

                var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

                var _eventemitter = __webpack_require__(29);

                var _eventemitter2 = _interopRequireDefault(_eventemitter);

                var _logger = __webpack_require__(30);

                var _logger2 = _interopRequireDefault(_logger);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

                var debug = (0, _logger2.default)('quill:events');

                var Emitter = function (_EventEmitter) {
                    _inherits(Emitter, _EventEmitter);

                    function Emitter() {
                        _classCallCheck(this, Emitter);

                        var _this = _possibleConstructorReturn(this, (Emitter.__proto__ || Object.getPrototypeOf(Emitter)).call(this));

                        _this.on('error', debug.error);
                        return _this;
                    }

                    _createClass(Emitter, [{
                        key: 'emit',
                        value: function emit() {
                            debug.log.apply(debug, arguments);
                            _get(Emitter.prototype.__proto__ || Object.getPrototypeOf(Emitter.prototype), 'emit', this).apply(this, arguments);
                        }
                    }]);

                    return Emitter;
                }(_eventemitter2.default);

                Emitter.events = {
                    EDITOR_CHANGE: 'editor-change',
                    SCROLL_BEFORE_UPDATE: 'scroll-before-update',
                    SCROLL_OPTIMIZE: 'scroll-optimize',
                    SCROLL_UPDATE: 'scroll-update',
                    SELECTION_CHANGE: 'selection-change',
                    TEXT_CHANGE: 'text-change'
                };
                Emitter.sources = {
                    API: 'api',
                    SILENT: 'silent',
                    USER: 'user'
                };

                exports.default = Emitter;

                /***/ },
            /* 29 */
            /***/ function(module, exports) {

                'use strict';

                var has = Object.prototype.hasOwnProperty;

                //
                // We store our EE objects in a plain object whose properties are event names.
                // If `Object.create(null)` is not supported we prefix the event names with a
                // `~` to make sure that the built-in object properties are not overridden or
                // used as an attack vector.
                // We also assume that `Object.create(null)` is available when the event name
                // is an ES6 Symbol.
                //
                var prefix = typeof Object.create !== 'function' ? '~' : false;

                /**
                 * Representation of a single EventEmitter function.
                 *
                 * @param {Function} fn Event handler to be called.
                 * @param {Mixed} context Context for function execution.
                 * @param {Boolean} [once=false] Only emit once
                 * @api private
                 */
                function EE(fn, context, once) {
                    this.fn = fn;
                    this.context = context;
                    this.once = once || false;
                }

                /**
                 * Minimal EventEmitter interface that is molded against the Node.js
                 * EventEmitter interface.
                 *
                 * @constructor
                 * @api public
                 */
                function EventEmitter() { /* Nothing to set */ }

                /**
                 * Hold the assigned EventEmitters by name.
                 *
                 * @type {Object}
                 * @private
                 */
                EventEmitter.prototype._events = undefined;

                /**
                 * Return an array listing the events for which the emitter has registered
                 * listeners.
                 *
                 * @returns {Array}
                 * @api public
                 */
                EventEmitter.prototype.eventNames = function eventNames() {
                    var events = this._events
                        , names = []
                        , name;

                    if (!events) return names;

                    for (name in events) {
                        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
                    }

                    if (Object.getOwnPropertySymbols) {
                        return names.concat(Object.getOwnPropertySymbols(events));
                    }

                    return names;
                };

                /**
                 * Return a list of assigned event listeners.
                 *
                 * @param {String} event The events that should be listed.
                 * @param {Boolean} exists We only need to know if there are listeners.
                 * @returns {Array|Boolean}
                 * @api public
                 */
                EventEmitter.prototype.listeners = function listeners(event, exists) {
                    var evt = prefix ? prefix + event : event
                        , available = this._events && this._events[evt];

                    if (exists) return !!available;
                    if (!available) return [];
                    if (available.fn) return [available.fn];

                    for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
                        ee[i] = available[i].fn;
                    }

                    return ee;
                };

                /**
                 * Emit an event to all registered event listeners.
                 *
                 * @param {String} event The name of the event.
                 * @returns {Boolean} Indication if we've emitted an event.
                 * @api public
                 */
                EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
                    var evt = prefix ? prefix + event : event;

                    if (!this._events || !this._events[evt]) return false;

                    var listeners = this._events[evt]
                        , len = arguments.length
                        , args
                        , i;

                    if ('function' === typeof listeners.fn) {
                        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

                        switch (len) {
                            case 1: return listeners.fn.call(listeners.context), true;
                            case 2: return listeners.fn.call(listeners.context, a1), true;
                            case 3: return listeners.fn.call(listeners.context, a1, a2), true;
                            case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
                            case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
                            case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
                        }

                        for (i = 1, args = new Array(len -1); i < len; i++) {
                            args[i - 1] = arguments[i];
                        }

                        listeners.fn.apply(listeners.context, args);
                    } else {
                        var length = listeners.length
                            , j;

                        for (i = 0; i < length; i++) {
                            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

                            switch (len) {
                                case 1: listeners[i].fn.call(listeners[i].context); break;
                                case 2: listeners[i].fn.call(listeners[i].context, a1); break;
                                case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
                                default:
                                    if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
                                        args[j - 1] = arguments[j];
                                    }

                                    listeners[i].fn.apply(listeners[i].context, args);
                            }
                        }
                    }

                    return true;
                };

                /**
                 * Register a new EventListener for the given event.
                 *
                 * @param {String} event Name of the event.
                 * @param {Function} fn Callback function.
                 * @param {Mixed} [context=this] The context of the function.
                 * @api public
                 */
                EventEmitter.prototype.on = function on(event, fn, context) {
                    var listener = new EE(fn, context || this)
                        , evt = prefix ? prefix + event : event;

                    if (!this._events) this._events = prefix ? {} : Object.create(null);
                    if (!this._events[evt]) this._events[evt] = listener;
                    else {
                        if (!this._events[evt].fn) this._events[evt].push(listener);
                        else this._events[evt] = [
                            this._events[evt], listener
                        ];
                    }

                    return this;
                };

                /**
                 * Add an EventListener that's only called once.
                 *
                 * @param {String} event Name of the event.
                 * @param {Function} fn Callback function.
                 * @param {Mixed} [context=this] The context of the function.
                 * @api public
                 */
                EventEmitter.prototype.once = function once(event, fn, context) {
                    var listener = new EE(fn, context || this, true)
                        , evt = prefix ? prefix + event : event;

                    if (!this._events) this._events = prefix ? {} : Object.create(null);
                    if (!this._events[evt]) this._events[evt] = listener;
                    else {
                        if (!this._events[evt].fn) this._events[evt].push(listener);
                        else this._events[evt] = [
                            this._events[evt], listener
                        ];
                    }

                    return this;
                };

                /**
                 * Remove event listeners.
                 *
                 * @param {String} event The event we want to remove.
                 * @param {Function} fn The listener that we need to find.
                 * @param {Mixed} context Only remove listeners matching this context.
                 * @param {Boolean} once Only remove once listeners.
                 * @api public
                 */
                EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
                    var evt = prefix ? prefix + event : event;

                    if (!this._events || !this._events[evt]) return this;

                    var listeners = this._events[evt]
                        , events = [];

                    if (fn) {
                        if (listeners.fn) {
                            if (
                                listeners.fn !== fn
                                || (once && !listeners.once)
                                || (context && listeners.context !== context)
                            ) {
                                events.push(listeners);
                            }
                        } else {
                            for (var i = 0, length = listeners.length; i < length; i++) {
                                if (
                                    listeners[i].fn !== fn
                                    || (once && !listeners[i].once)
                                    || (context && listeners[i].context !== context)
                                ) {
                                    events.push(listeners[i]);
                                }
                            }
                        }
                    }

                    //
                    // Reset the array, or remove it completely if we have no more listeners.
                    //
                    if (events.length) {
                        this._events[evt] = events.length === 1 ? events[0] : events;
                    } else {
                        delete this._events[evt];
                    }

                    return this;
                };

                /**
                 * Remove all listeners or only the listeners for the specified event.
                 *
                 * @param {String} event The event want to remove all listeners for.
                 * @api public
                 */
                EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
                    if (!this._events) return this;

                    if (event) delete this._events[prefix ? prefix + event : event];
                    else this._events = prefix ? {} : Object.create(null);

                    return this;
                };

                //
                // Alias methods names because people roll like that.
                //
                EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
                EventEmitter.prototype.addListener = EventEmitter.prototype.on;

                //
                // This function doesn't apply anymore.
                //
                EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
                    return this;
                };

                //
                // Expose the prefix.
                //
                EventEmitter.prefixed = prefix;

                //
                // Expose the module.
                //
                if ('undefined' !== typeof module) {
                    module.exports = EventEmitter;
                }


                /***/ },
            /* 30 */
            /***/ function(module, exports) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var levels = ['error', 'warn', 'log', 'info'];
                var level = 'warn';

                function debug(method) {
                    if (levels.indexOf(method) <= levels.indexOf(level)) {
                        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                            args[_key - 1] = arguments[_key];
                        }

                        console[method].apply(console, args);
                    }
                }

                function namespace(ns) {
                    return levels.reduce(function (logger, method) {
                        logger[method] = debug.bind(console, method, ns);
                        return logger;
                    }, {});
                }

                debug.level = namespace.level = function (newLevel) {
                    level = newLevel;
                };

                exports.default = namespace;

                /***/ },
            /* 31 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = exports.Code = undefined;

                var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

                var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

                var _delta = __webpack_require__(20);

                var _delta2 = _interopRequireDefault(_delta);

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                var _block = __webpack_require__(32);

                var _block2 = _interopRequireDefault(_block);

                var _inline = __webpack_require__(35);

                var _inline2 = _interopRequireDefault(_inline);

                var _text = __webpack_require__(36);

                var _text2 = _interopRequireDefault(_text);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

                var Code = function (_Inline) {
                    _inherits(Code, _Inline);

                    function Code() {
                        _classCallCheck(this, Code);

                        return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
                    }

                    return Code;
                }(_inline2.default);

                Code.blotName = 'code';
                Code.tagName = 'CODE';

                var CodeBlock = function (_Block) {
                    _inherits(CodeBlock, _Block);

                    function CodeBlock() {
                        _classCallCheck(this, CodeBlock);

                        return _possibleConstructorReturn(this, (CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock)).apply(this, arguments));
                    }

                    _createClass(CodeBlock, [{
                        key: 'delta',
                        value: function delta() {
                            var _this3 = this;

                            var text = this.domNode.textContent;
                            if (text.endsWith('\n')) {
                                // Should always be true
                                text = text.slice(0, -1);
                            }
                            return text.split('\n').reduce(function (delta, frag) {
                                return delta.insert(frag).insert('\n', _this3.formats());
                            }, new _delta2.default());
                        }
                    }, {
                        key: 'format',
                        value: function format(name, value) {
                            if (name === this.statics.blotName && value) return;

                            var _descendant = this.descendant(_text2.default, this.length() - 1);

                            var _descendant2 = _slicedToArray(_descendant, 1);

                            var text = _descendant2[0];

                            if (text != null) {
                                text.deleteAt(text.length() - 1, 1);
                            }
                            _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'format', this).call(this, name, value);
                        }
                    }, {
                        key: 'formatAt',
                        value: function formatAt(index, length, name, value) {
                            if (length === 0) return;
                            if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK) == null || name === this.statics.blotName && value === this.statics.formats(this.domNode)) {
                                return;
                            }
                            var nextNewline = this.newlineIndex(index);
                            if (nextNewline < 0 || nextNewline >= index + length) return;
                            var prevNewline = this.newlineIndex(index, true) + 1;
                            var isolateLength = nextNewline - prevNewline + 1;
                            var blot = this.isolate(prevNewline, isolateLength);
                            var next = blot.next;
                            blot.format(name, value);
                            if (next instanceof CodeBlock) {
                                next.formatAt(0, index - prevNewline + length - isolateLength, name, value);
                            }
                        }
                    }, {
                        key: 'insertAt',
                        value: function insertAt(index, value, def) {
                            if (def != null) return;

                            var _descendant3 = this.descendant(_text2.default, index);

                            var _descendant4 = _slicedToArray(_descendant3, 2);

                            var text = _descendant4[0];
                            var offset = _descendant4[1];

                            text.insertAt(offset, value);
                        }
                    }, {
                        key: 'length',
                        value: function length() {
                            var length = this.domNode.textContent.length;
                            if (!this.domNode.textContent.endsWith('\n')) {
                                return length + 1;
                            }
                            return length;
                        }
                    }, {
                        key: 'newlineIndex',
                        value: function newlineIndex(searchIndex) {
                            var reverse = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

                            if (!reverse) {
                                var offset = this.domNode.textContent.slice(searchIndex).indexOf('\n');
                                return offset > -1 ? searchIndex + offset : -1;
                            } else {
                                return this.domNode.textContent.slice(0, searchIndex).lastIndexOf('\n');
                            }
                        }
                    }, {
                        key: 'optimize',
                        value: function optimize() {
                            if (!this.domNode.textContent.endsWith('\n')) {
                                this.appendChild(_parchment2.default.create('text', '\n'));
                            }
                            _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'optimize', this).call(this);
                            var next = this.next;
                            if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === next.statics.formats(next.domNode)) {
                                next.optimize();
                                next.moveChildren(this);
                                next.remove();
                            }
                        }
                    }, {
                        key: 'replace',
                        value: function replace(target) {
                            _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype), 'replace', this).call(this, target);
                            [].slice.call(this.domNode.querySelectorAll('*')).forEach(function (node) {
                                var blot = _parchment2.default.find(node);
                                if (blot == null) {
                                    node.parentNode.removeChild(node);
                                } else if (blot instanceof _parchment2.default.Embed) {
                                    blot.remove();
                                } else {
                                    blot.unwrap();
                                }
                            });
                        }
                    }], [{
                        key: 'create',
                        value: function create(value) {
                            var domNode = _get(CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock), 'create', this).call(this, value);
                            domNode.setAttribute('spellcheck', false);
                            return domNode;
                        }
                    }, {
                        key: 'formats',
                        value: function formats(domNode) {
                            return true;
                        }
                    }]);

                    return CodeBlock;
                }(_block2.default);

                CodeBlock.blotName = 'code-block';
                CodeBlock.tagName = 'PRE';
                CodeBlock.TAB = '  ';

                exports.Code = Code;
                exports.default = CodeBlock;

                /***/ },
            /* 32 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = exports.BlockEmbed = exports.bubbleFormats = undefined;

                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

                var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

                var _extend = __webpack_require__(25);

                var _extend2 = _interopRequireDefault(_extend);

                var _delta = __webpack_require__(20);

                var _delta2 = _interopRequireDefault(_delta);

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                var _break = __webpack_require__(33);

                var _break2 = _interopRequireDefault(_break);

                var _embed = __webpack_require__(34);

                var _embed2 = _interopRequireDefault(_embed);

                var _inline = __webpack_require__(35);

                var _inline2 = _interopRequireDefault(_inline);

                var _text = __webpack_require__(36);

                var _text2 = _interopRequireDefault(_text);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

                var NEWLINE_LENGTH = 1;

                var BlockEmbed = function (_Embed) {
                    _inherits(BlockEmbed, _Embed);

                    function BlockEmbed() {
                        _classCallCheck(this, BlockEmbed);

                        return _possibleConstructorReturn(this, (BlockEmbed.__proto__ || Object.getPrototypeOf(BlockEmbed)).apply(this, arguments));
                    }

                    _createClass(BlockEmbed, [{
                        key: 'attach',
                        value: function attach() {
                            _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'attach', this).call(this);
                            this.attributes = new _parchment2.default.Attributor.Store(this.domNode);
                        }
                    }, {
                        key: 'delta',
                        value: function delta() {
                            return new _delta2.default().insert(this.value(), (0, _extend2.default)(this.formats(), this.attributes.values()));
                        }
                    }, {
                        key: 'format',
                        value: function format(name, value) {
                            var attribute = _parchment2.default.query(name, _parchment2.default.Scope.BLOCK_ATTRIBUTE);
                            if (attribute != null) {
                                this.attributes.attribute(attribute, value);
                            }
                        }
                    }, {
                        key: 'formatAt',
                        value: function formatAt(index, length, name, value) {
                            this.format(name, value);
                        }
                    }, {
                        key: 'insertAt',
                        value: function insertAt(index, value, def) {
                            if (typeof value === 'string' && value.endsWith('\n')) {
                                var block = _parchment2.default.create(Block.blotName);
                                this.parent.insertBefore(block, index === 0 ? this : this.next);
                                block.insertAt(0, value.slice(0, -1));
                            } else {
                                _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype), 'insertAt', this).call(this, index, value, def);
                            }
                        }
                    }]);

                    return BlockEmbed;
                }(_embed2.default);

                BlockEmbed.scope = _parchment2.default.Scope.BLOCK_BLOT;
                // It is important for cursor behavior BlockEmbeds use tags that are block level elements


                var Block = function (_Parchment$Block) {
                    _inherits(Block, _Parchment$Block);

                    function Block(domNode) {
                        _classCallCheck(this, Block);

                        var _this2 = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, domNode));

                        _this2.cache = {};
                        return _this2;
                    }

                    _createClass(Block, [{
                        key: 'delta',
                        value: function delta() {
                            if (this.cache.delta == null) {
                                this.cache.delta = this.descendants(_parchment2.default.Leaf).reduce(function (delta, leaf) {
                                    if (leaf.length() === 0) {
                                        return delta;
                                    } else {
                                        return delta.insert(leaf.value(), bubbleFormats(leaf));
                                    }
                                }, new _delta2.default()).insert('\n', bubbleFormats(this));
                            }
                            return this.cache.delta;
                        }
                    }, {
                        key: 'deleteAt',
                        value: function deleteAt(index, length) {
                            _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'deleteAt', this).call(this, index, length);
                            this.cache = {};
                        }
                    }, {
                        key: 'formatAt',
                        value: function formatAt(index, length, name, value) {
                            if (length <= 0) return;
                            if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
                                if (index + length === this.length()) {
                                    this.format(name, value);
                                }
                            } else {
                                _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'formatAt', this).call(this, index, Math.min(length, this.length() - index - 1), name, value);
                            }
                            this.cache = {};
                        }
                    }, {
                        key: 'insertAt',
                        value: function insertAt(index, value, def) {
                            if (def != null) return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, index, value, def);
                            if (value.length === 0) return;
                            var lines = value.split('\n');
                            var text = lines.shift();
                            if (text.length > 0) {
                                if (index < this.length() - 1 || this.children.tail == null) {
                                    _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, Math.min(index, this.length() - 1), text);
                                } else {
                                    this.children.tail.insertAt(this.children.tail.length(), text);
                                }
                                this.cache = {};
                            }
                            var block = this;
                            lines.reduce(function (index, line) {
                                block = block.split(index, true);
                                block.insertAt(0, line);
                                return line.length;
                            }, index + text.length);
                        }
                    }, {
                        key: 'insertBefore',
                        value: function insertBefore(blot, ref) {
                            var head = this.children.head;
                            _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'insertBefore', this).call(this, blot, ref);
                            if (head instanceof _break2.default) {
                                head.remove();
                            }
                            this.cache = {};
                        }
                    }, {
                        key: 'length',
                        value: function length() {
                            if (this.cache.length == null) {
                                this.cache.length = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'length', this).call(this) + NEWLINE_LENGTH;
                            }
                            return this.cache.length;
                        }
                    }, {
                        key: 'moveChildren',
                        value: function moveChildren(target, ref) {
                            _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'moveChildren', this).call(this, target, ref);
                            this.cache = {};
                        }
                    }, {
                        key: 'optimize',
                        value: function optimize() {
                            _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'optimize', this).call(this);
                            this.cache = {};
                        }
                    }, {
                        key: 'path',
                        value: function path(index) {
                            return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'path', this).call(this, index, true);
                        }
                    }, {
                        key: 'removeChild',
                        value: function removeChild(child) {
                            _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'removeChild', this).call(this, child);
                            this.cache = {};
                        }
                    }, {
                        key: 'split',
                        value: function split(index) {
                            var force = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

                            if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
                                var clone = this.clone();
                                if (index === 0) {
                                    this.parent.insertBefore(clone, this);
                                    return this;
                                } else {
                                    this.parent.insertBefore(clone, this.next);
                                    return clone;
                                }
                            } else {
                                var next = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'split', this).call(this, index, force);
                                this.cache = {};
                                return next;
                            }
                        }
                    }]);

                    return Block;
                }(_parchment2.default.Block);

                Block.blotName = 'block';
                Block.tagName = 'P';
                Block.defaultChild = 'break';
                Block.allowedChildren = [_inline2.default, _embed2.default, _text2.default];

                function bubbleFormats(blot) {
                    var formats = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                    if (blot == null) return formats;
                    if (typeof blot.formats === 'function') {
                        formats = (0, _extend2.default)(formats, blot.formats());
                    }
                    if (blot.parent == null || blot.parent.blotName == 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {
                        return formats;
                    }
                    return bubbleFormats(blot.parent, formats);
                }

                exports.bubbleFormats = bubbleFormats;
                exports.BlockEmbed = BlockEmbed;
                exports.default = Block;

                /***/ },
            /* 33 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

                var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

                var _embed = __webpack_require__(34);

                var _embed2 = _interopRequireDefault(_embed);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

                var Break = function (_Embed) {
                    _inherits(Break, _Embed);

                    function Break() {
                        _classCallCheck(this, Break);

                        return _possibleConstructorReturn(this, (Break.__proto__ || Object.getPrototypeOf(Break)).apply(this, arguments));
                    }

                    _createClass(Break, [{
                        key: 'insertInto',
                        value: function insertInto(parent, ref) {
                            if (parent.children.length === 0) {
                                _get(Break.prototype.__proto__ || Object.getPrototypeOf(Break.prototype), 'insertInto', this).call(this, parent, ref);
                            }
                        }
                    }, {
                        key: 'length',
                        value: function length() {
                            return 0;
                        }
                    }, {
                        key: 'value',
                        value: function value() {
                            return '';
                        }
                    }], [{
                        key: 'value',
                        value: function value(domNode) {
                            return undefined;
                        }
                    }]);

                    return Break;
                }(_embed2.default);

                Break.blotName = 'break';
                Break.tagName = 'BR';

                exports.default = Break;

                /***/ },
            /* 34 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

                var Embed = function (_Parchment$Embed) {
                    _inherits(Embed, _Parchment$Embed);

                    function Embed() {
                        _classCallCheck(this, Embed);

                        return _possibleConstructorReturn(this, (Embed.__proto__ || Object.getPrototypeOf(Embed)).apply(this, arguments));
                    }

                    return Embed;
                }(_parchment2.default.Embed);

                exports.default = Embed;

                /***/ },
            /* 35 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

                var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

                var _extend = __webpack_require__(25);

                var _extend2 = _interopRequireDefault(_extend);

                var _embed = __webpack_require__(34);

                var _embed2 = _interopRequireDefault(_embed);

                var _text = __webpack_require__(36);

                var _text2 = _interopRequireDefault(_text);

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

                var Inline = function (_Parchment$Inline) {
                    _inherits(Inline, _Parchment$Inline);

                    function Inline() {
                        _classCallCheck(this, Inline);

                        return _possibleConstructorReturn(this, (Inline.__proto__ || Object.getPrototypeOf(Inline)).apply(this, arguments));
                    }

                    _createClass(Inline, [{
                        key: 'formatAt',
                        value: function formatAt(index, length, name, value) {
                            if (Inline.compare(this.statics.blotName, name) < 0 && _parchment2.default.query(name, _parchment2.default.Scope.BLOT)) {
                                var blot = this.isolate(index, length);
                                if (value) {
                                    blot.wrap(name, value);
                                }
                            } else {
                                _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype), 'formatAt', this).call(this, index, length, name, value);
                            }
                        }
                    }], [{
                        key: 'compare',
                        value: function compare(self, other) {
                            var selfIndex = Inline.order.indexOf(self);
                            var otherIndex = Inline.order.indexOf(other);
                            if (selfIndex >= 0 || otherIndex >= 0) {
                                return selfIndex - otherIndex;
                            } else if (self === other) {
                                return 0;
                            } else if (self < other) {
                                return -1;
                            } else {
                                return 1;
                            }
                        }
                    }]);

                    return Inline;
                }(_parchment2.default.Inline);

                Inline.allowedChildren = [Inline, _embed2.default, _text2.default];
                // Lower index means deeper in the DOM tree, since not found (-1) is for embeds
                Inline.order = ['cursor', 'inline', // Must be lower
                    'code', 'underline', 'strike', 'italic', 'bold', 'script', 'link' // Must be higher
                ];

                exports.default = Inline;

                /***/ },
            /* 36 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

                var TextBlot = function (_Parchment$Text) {
                    _inherits(TextBlot, _Parchment$Text);

                    function TextBlot() {
                        _classCallCheck(this, TextBlot);

                        return _possibleConstructorReturn(this, (TextBlot.__proto__ || Object.getPrototypeOf(TextBlot)).apply(this, arguments));
                    }

                    return TextBlot;
                }(_parchment2.default.Text);

                exports.default = TextBlot;

                /***/ },
            /* 37 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

                var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                var _embed = __webpack_require__(34);

                var _embed2 = _interopRequireDefault(_embed);

                var _emitter = __webpack_require__(28);

                var _emitter2 = _interopRequireDefault(_emitter);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

                var Cursor = function (_Embed) {
                    _inherits(Cursor, _Embed);

                    _createClass(Cursor, null, [{
                        key: 'value',
                        value: function value(domNode) {
                            return undefined;
                        }
                    }]);

                    function Cursor(domNode, selection) {
                        _classCallCheck(this, Cursor);

                        var _this = _possibleConstructorReturn(this, (Cursor.__proto__ || Object.getPrototypeOf(Cursor)).call(this, domNode));

                        _this.selection = selection;
                        _this.textNode = document.createTextNode(Cursor.CONTENTS);
                        _this.domNode.appendChild(_this.textNode);
                        _this._length = 0;
                        return _this;
                    }

                    _createClass(Cursor, [{
                        key: 'detach',
                        value: function detach() {
                            // super.detach() will also clear domNode.__blot
                            if (this.parent != null) this.parent.removeChild(this);
                        }
                    }, {
                        key: 'format',
                        value: function format(name, value) {
                            if (this._length !== 0) {
                                return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'format', this).call(this, name, value);
                            }
                            var target = this,
                                index = 0;
                            while (target != null && target.statics.scope !== _parchment2.default.Scope.BLOCK_BLOT) {
                                index += target.offset(target.parent);
                                target = target.parent;
                            }
                            if (target != null) {
                                this._length = Cursor.CONTENTS.length;
                                target.optimize();
                                target.formatAt(index, Cursor.CONTENTS.length, name, value);
                                this._length = 0;
                            }
                        }
                    }, {
                        key: 'index',
                        value: function index(node, offset) {
                            if (node === this.textNode) return 0;
                            return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'index', this).call(this, node, offset);
                        }
                    }, {
                        key: 'length',
                        value: function length() {
                            return this._length;
                        }
                    }, {
                        key: 'position',
                        value: function position(index) {
                            return [this.textNode, this.textNode.data.length];
                        }
                    }, {
                        key: 'remove',
                        value: function remove() {
                            _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype), 'remove', this).call(this);
                            this.parent = null;
                        }
                    }, {
                        key: 'restore',
                        value: function restore() {
                            var _this2 = this;

                            if (this.selection.composing) return;
                            if (this.parent == null) return;
                            var textNode = this.textNode;
                            var range = this.selection.getNativeRange();
                            // Link format will insert text outside of anchor tag
                            while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {
                                this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                            }
                            if (this.textNode.data !== Cursor.CONTENTS) {
                                this.textNode.data = this.textNode.data.split(Cursor.CONTENTS).join('');
                                this.parent.insertBefore(_parchment2.default.create(this.textNode), this);
                                this.textNode = document.createTextNode(Cursor.CONTENTS);
                                this.domNode.appendChild(this.textNode);
                            }
                            this.remove();
                            if (range != null && range.start.node === textNode && range.end.node === textNode) {
                                this.selection.emitter.once(_emitter2.default.events.SCROLL_OPTIMIZE, function () {
                                    var _map = [range.start.offset, range.end.offset].map(function (offset) {
                                        return Math.max(0, Math.min(textNode.data.length, offset - 1));
                                    });

                                    var _map2 = _slicedToArray(_map, 2);

                                    var start = _map2[0];
                                    var end = _map2[1];

                                    _this2.selection.setNativeRange(textNode, start, textNode, end);
                                });
                            }
                        }
                    }, {
                        key: 'update',
                        value: function update(mutations) {
                            var _this3 = this;

                            mutations.forEach(function (mutation) {
                                if (mutation.type === 'characterData' && mutation.target === _this3.textNode) {
                                    _this3.restore();
                                }
                            });
                        }
                    }, {
                        key: 'value',
                        value: function value() {
                            return '';
                        }
                    }]);

                    return Cursor;
                }(_embed2.default);

                Cursor.blotName = 'cursor';
                Cursor.className = 'ql-cursor';
                Cursor.tagName = 'span';
                Cursor.CONTENTS = '﻿'; // Zero width no break space


                exports.default = Cursor;

                /***/ },
            /* 38 */
            /***/ function(module, exports) {

                var clone = (function() {
                    'use strict';

                    /**
                     * Clones (copies) an Object using deep copying.
                     *
                     * This function supports circular references by default, but if you are certain
                     * there are no circular references in your object, you can save some CPU time
                     * by calling clone(obj, false).
                     *
                     * Caution: if `circular` is false and `parent` contains circular references,
                     * your program may enter an infinite loop and crash.
                     *
                     * @param `parent` - the object to be cloned
                     * @param `circular` - set to true if the object to be cloned may contain
                     *    circular references. (optional - true by default)
                     * @param `depth` - set to a number if the object is only to be cloned to
                     *    a particular depth. (optional - defaults to Infinity)
                     * @param `prototype` - sets the prototype to be used when cloning an object.
                     *    (optional - defaults to parent prototype).
                     */
                    function clone(parent, circular, depth, prototype) {
                        var filter;
                        if (typeof circular === 'object') {
                            depth = circular.depth;
                            prototype = circular.prototype;
                            filter = circular.filter;
                            circular = circular.circular
                        }
                        // maintain two arrays for circular references, where corresponding parents
                        // and children have the same index
                        var allParents = [];
                        var allChildren = [];

                        var useBuffer = typeof Buffer != 'undefined';

                        if (typeof circular == 'undefined')
                            circular = true;

                        if (typeof depth == 'undefined')
                            depth = Infinity;

                        // recurse this function so we don't reset allParents and allChildren
                        function _clone(parent, depth) {
                            // cloning null always returns null
                            if (parent === null)
                                return null;

                            if (depth == 0)
                                return parent;

                            var child;
                            var proto;
                            if (typeof parent != 'object') {
                                return parent;
                            }

                            if (clone.__isArray(parent)) {
                                child = [];
                            } else if (clone.__isRegExp(parent)) {
                                child = new RegExp(parent.source, __getRegExpFlags(parent));
                                if (parent.lastIndex) child.lastIndex = parent.lastIndex;
                            } else if (clone.__isDate(parent)) {
                                child = new Date(parent.getTime());
                            } else if (useBuffer && Buffer.isBuffer(parent)) {
                                child = new Buffer(parent.length);
                                parent.copy(child);
                                return child;
                            } else {
                                if (typeof prototype == 'undefined') {
                                    proto = Object.getPrototypeOf(parent);
                                    child = Object.create(proto);
                                }
                                else {
                                    child = Object.create(prototype);
                                    proto = prototype;
                                }
                            }

                            if (circular) {
                                var index = allParents.indexOf(parent);

                                if (index != -1) {
                                    return allChildren[index];
                                }
                                allParents.push(parent);
                                allChildren.push(child);
                            }

                            for (var i in parent) {
                                var attrs;
                                if (proto) {
                                    attrs = Object.getOwnPropertyDescriptor(proto, i);
                                }

                                if (attrs && attrs.set == null) {
                                    continue;
                                }
                                child[i] = _clone(parent[i], depth - 1);
                            }

                            return child;
                        }

                        return _clone(parent, depth);
                    }

                    /**
                     * Simple flat clone using prototype, accepts only objects, usefull for property
                     * override on FLAT configuration object (no nested props).
                     *
                     * USE WITH CAUTION! This may not behave as you wish if you do not know how this
                     * works.
                     */
                    clone.clonePrototype = function clonePrototype(parent) {
                        if (parent === null)
                            return null;

                        var c = function () {};
                        c.prototype = parent;
                        return new c();
                    };

                    // private utility functions

                    function __objToStr(o) {
                        return Object.prototype.toString.call(o);
                    };
                    clone.__objToStr = __objToStr;

                    function __isDate(o) {
                        return typeof o === 'object' && __objToStr(o) === '[object Date]';
                    };
                    clone.__isDate = __isDate;

                    function __isArray(o) {
                        return typeof o === 'object' && __objToStr(o) === '[object Array]';
                    };
                    clone.__isArray = __isArray;

                    function __isRegExp(o) {
                        return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
                    };
                    clone.__isRegExp = __isRegExp;

                    function __getRegExpFlags(re) {
                        var flags = '';
                        if (re.global) flags += 'g';
                        if (re.ignoreCase) flags += 'i';
                        if (re.multiline) flags += 'm';
                        return flags;
                    };
                    clone.__getRegExpFlags = __getRegExpFlags;

                    return clone;
                })();

                if (typeof module === 'object' && module.exports) {
                    module.exports = clone;
                }


                /***/ },
            /* 39 */
            /***/ function(module, exports) {

                "use strict";

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                var Module = function Module(quill) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                    _classCallCheck(this, Module);

                    this.quill = quill;
                    this.options = options;
                };

                Module.DEFAULTS = {};

                exports.default = Module;

                /***/ },
            /* 40 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.default = exports.Range = undefined;

                var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                var _clone = __webpack_require__(38);

                var _clone2 = _interopRequireDefault(_clone);

                var _deepEqual = __webpack_require__(22);

                var _deepEqual2 = _interopRequireDefault(_deepEqual);

                var _break = __webpack_require__(33);

                var _break2 = _interopRequireDefault(_break);

                var _emitter3 = __webpack_require__(28);

                var _emitter4 = _interopRequireDefault(_emitter3);

                var _logger = __webpack_require__(30);

                var _logger2 = _interopRequireDefault(_logger);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                var debug = (0, _logger2.default)('quill:selection');

                var Range = function Range(index) {
                    var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

                    _classCallCheck(this, Range);

                    this.index = index;
                    this.length = length;
                };

                var Selection = function () {
                    function Selection(scroll, emitter) {
                        var _this = this;

                        _classCallCheck(this, Selection);

                        this.emitter = emitter;
                        this.scroll = scroll;
                        this.composing = false;
                        this.root = this.scroll.domNode;
                        this.root.addEventListener('compositionstart', function () {
                            _this.composing = true;
                        });
                        this.root.addEventListener('compositionend', function () {
                            _this.composing = false;
                        });
                        this.cursor = _parchment2.default.create('cursor', this);
                        // savedRange is last non-null range
                        this.lastRange = this.savedRange = new Range(0, 0);
                        ['keyup', 'mouseup', 'mouseleave', 'touchend', 'touchleave', 'focus', 'blur'].forEach(function (eventName) {
                            _this.root.addEventListener(eventName, function () {
                                // When range used to be a selection and user click within the selection,
                                // the range now being a cursor has not updated yet without setTimeout
                                setTimeout(_this.update.bind(_this, _emitter4.default.sources.USER), 100);
                            });
                        });
                        this.emitter.on(_emitter4.default.events.EDITOR_CHANGE, function (type, delta) {
                            if (type === _emitter4.default.events.TEXT_CHANGE && delta.length() > 0) {
                                _this.update(_emitter4.default.sources.SILENT);
                            }
                        });
                        this.emitter.on(_emitter4.default.events.SCROLL_BEFORE_UPDATE, function () {
                            var native = _this.getNativeRange();
                            if (native == null) return;
                            if (native.start.node === _this.cursor.textNode) return; // cursor.restore() will handle
                            // TODO unclear if this has negative side effects
                            _this.emitter.once(_emitter4.default.events.SCROLL_UPDATE, function () {
                                try {
                                    _this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);
                                } catch (ignored) {}
                            });
                        });
                        this.update(_emitter4.default.sources.SILENT);
                    }

                    _createClass(Selection, [{
                        key: 'focus',
                        value: function focus() {
                            if (this.hasFocus()) return;
                            var bodyTop = document.body.scrollTop;
                            this.root.focus();
                            document.body.scrollTop = bodyTop;
                            this.setRange(this.savedRange);
                        }
                    }, {
                        key: 'format',
                        value: function format(_format, value) {
                            this.scroll.update();
                            var nativeRange = this.getNativeRange();
                            if (nativeRange == null || !nativeRange.native.collapsed || _parchment2.default.query(_format, _parchment2.default.Scope.BLOCK)) return;
                            if (nativeRange.start.node !== this.cursor.textNode) {
                                var blot = _parchment2.default.find(nativeRange.start.node, false);
                                if (blot == null) return;
                                // TODO Give blot ability to not split
                                if (blot instanceof _parchment2.default.Leaf) {
                                    var after = blot.split(nativeRange.start.offset);
                                    blot.parent.insertBefore(this.cursor, after);
                                } else {
                                    blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen
                                }
                                this.cursor.attach();
                            }
                            this.cursor.format(_format, value);
                            this.scroll.optimize();
                            this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);
                            this.update();
                        }
                    }, {
                        key: 'getBounds',
                        value: function getBounds(index) {
                            var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

                            var scrollLength = this.scroll.length();
                            index = Math.min(index, scrollLength - 1);
                            length = Math.min(index + length, scrollLength - 1) - index;
                            var bounds = void 0;var node = void 0;
                            var _scroll$leaf = this.scroll.leaf(index);

                            var _scroll$leaf2 = _slicedToArray(_scroll$leaf, 2);

                            var leaf = _scroll$leaf2[0];
                            var offset = _scroll$leaf2[1];

                            if (leaf == null) return null;

                            var _leaf$position = leaf.position(offset, true);

                            var _leaf$position2 = _slicedToArray(_leaf$position, 2);

                            node = _leaf$position2[0];
                            offset = _leaf$position2[1];

                            var range = document.createRange();
                            if (length > 0) {
                                range.setStart(node, offset);

                                var _scroll$leaf3 = this.scroll.leaf(index + length);

                                var _scroll$leaf4 = _slicedToArray(_scroll$leaf3, 2);

                                leaf = _scroll$leaf4[0];
                                offset = _scroll$leaf4[1];

                                if (leaf == null) return null;

                                var _leaf$position3 = leaf.position(offset, true);

                                var _leaf$position4 = _slicedToArray(_leaf$position3, 2);

                                node = _leaf$position4[0];
                                offset = _leaf$position4[1];

                                range.setEnd(node, offset);
                                bounds = range.getBoundingClientRect();
                            } else {
                                var side = 'left';
                                if (node instanceof Text) {
                                    if (offset < node.data.length) {
                                        range.setStart(node, offset);
                                        range.setEnd(node, offset + 1);
                                    } else {
                                        range.setStart(node, offset - 1);
                                        range.setEnd(node, offset);
                                        side = 'right';
                                    }
                                    var rect = range.getBoundingClientRect();
                                } else {
                                    var rect = leaf.domNode.getBoundingClientRect();
                                    if (offset > 0) side = 'right';
                                }
                                bounds = {
                                    height: rect.height,
                                    left: rect[side],
                                    width: 0,
                                    top: rect.top
                                };
                            }
                            var containerBounds = this.root.parentNode.getBoundingClientRect();
                            return {
                                left: bounds.left - containerBounds.left,
                                right: bounds.left + bounds.width - containerBounds.left,
                                top: bounds.top - containerBounds.top,
                                bottom: bounds.top + bounds.height - containerBounds.top,
                                height: bounds.height,
                                width: bounds.width
                            };
                        }
                    }, {
                        key: 'getNativeRange',
                        value: function getNativeRange() {
                            var selection = document.getSelection();
                            if (selection == null || selection.rangeCount <= 0) return null;
                            var nativeRange = selection.getRangeAt(0);
                            if (nativeRange == null) return null;
                            if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {
                                return null;
                            }
                            var range = {
                                start: { node: nativeRange.startContainer, offset: nativeRange.startOffset },
                                end: { node: nativeRange.endContainer, offset: nativeRange.endOffset },
                                native: nativeRange
                            };
                            [range.start, range.end].forEach(function (position) {
                                var node = position.node,
                                    offset = position.offset;
                                while (!(node instanceof Text) && node.childNodes.length > 0) {
                                    if (node.childNodes.length > offset) {
                                        node = node.childNodes[offset];
                                        offset = 0;
                                    } else if (node.childNodes.length === offset) {
                                        node = node.lastChild;
                                        offset = node instanceof Text ? node.data.length : node.childNodes.length + 1;
                                    } else {
                                        break;
                                    }
                                }
                                position.node = node, position.offset = offset;
                            });
                            debug.info('getNativeRange', range);
                            return range;
                        }
                    }, {
                        key: 'getRange',
                        value: function getRange() {
                            var _this2 = this;

                            if (!this.hasFocus()) return [null, null];
                            var range = this.getNativeRange();
                            if (range == null) return [null, null];
                            var positions = [[range.start.node, range.start.offset]];
                            if (!range.native.collapsed) {
                                positions.push([range.end.node, range.end.offset]);
                            }
                            var indexes = positions.map(function (position) {
                                var _position = _slicedToArray(position, 2);

                                var node = _position[0];
                                var offset = _position[1];

                                var blot = _parchment2.default.find(node, true);
                                var index = blot.offset(_this2.scroll);
                                if (offset === 0) {
                                    return index;
                                } else if (blot instanceof _parchment2.default.Container) {
                                    return index + blot.length();
                                } else {
                                    return index + blot.index(node, offset);
                                }
                            });
                            var start = Math.min.apply(Math, _toConsumableArray(indexes)),
                                end = Math.max.apply(Math, _toConsumableArray(indexes));
                            return [new Range(start, end - start), range];
                        }
                    }, {
                        key: 'hasFocus',
                        value: function hasFocus() {
                            return document.activeElement === this.root;
                        }
                    }, {
                        key: 'scrollIntoView',
                        value: function scrollIntoView() {
                            var range = arguments.length <= 0 || arguments[0] === undefined ? this.lastRange : arguments[0];

                            if (range == null) return;
                            var bounds = this.getBounds(range.index, range.length);
                            if (bounds == null) return;
                            if (this.root.offsetHeight < bounds.bottom) {
                                var _scroll$line = this.scroll.line(Math.min(range.index + range.length, this.scroll.length() - 1));

                                var _scroll$line2 = _slicedToArray(_scroll$line, 1);

                                var line = _scroll$line2[0];

                                this.root.scrollTop = line.domNode.offsetTop + line.domNode.offsetHeight - this.root.offsetHeight;
                            } else if (bounds.top < 0) {
                                var _scroll$line3 = this.scroll.line(Math.min(range.index, this.scroll.length() - 1));

                                var _scroll$line4 = _slicedToArray(_scroll$line3, 1);

                                var _line = _scroll$line4[0];

                                this.root.scrollTop = _line.domNode.offsetTop;
                            }
                        }
                    }, {
                        key: 'setNativeRange',
                        value: function setNativeRange(startNode, startOffset) {
                            var endNode = arguments.length <= 2 || arguments[2] === undefined ? startNode : arguments[2];
                            var endOffset = arguments.length <= 3 || arguments[3] === undefined ? startOffset : arguments[3];
                            var force = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];

                            debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);
                            if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {
                                return;
                            }
                            var selection = document.getSelection();
                            if (selection == null) return;
                            if (startNode != null) {
                                if (!this.hasFocus()) this.root.focus();
                                var nativeRange = this.getNativeRange();
                                if (nativeRange == null || force || startNode !== nativeRange.start.node || startOffset !== nativeRange.start.offset || endNode !== nativeRange.end.node || endOffset !== nativeRange.end.offset) {
                                    var range = document.createRange();
                                    range.setStart(startNode, startOffset);
                                    range.setEnd(endNode, endOffset);
                                    selection.removeAllRanges();
                                    selection.addRange(range);
                                }
                            } else {
                                selection.removeAllRanges();
                                this.root.blur();
                                document.body.focus(); // root.blur() not enough on IE11+Travis+SauceLabs (but not local VMs)
                            }
                        }
                    }, {
                        key: 'setRange',
                        value: function setRange(range) {
                            var _this3 = this;

                            var force = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
                            var source = arguments.length <= 2 || arguments[2] === undefined ? _emitter4.default.sources.API : arguments[2];

                            if (typeof force === 'string') {
                                source = force;
                                force = false;
                            }
                            debug.info('setRange', range);
                            if (range != null) {
                                (function () {
                                    var indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];
                                    var args = [];
                                    var scrollLength = _this3.scroll.length();
                                    indexes.forEach(function (index, i) {
                                        index = Math.min(scrollLength - 1, index);
                                        var node = void 0;
                                        var _scroll$leaf5 = _this3.scroll.leaf(index);

                                        var _scroll$leaf6 = _slicedToArray(_scroll$leaf5, 2);

                                        var leaf = _scroll$leaf6[0];
                                        var offset = _scroll$leaf6[1];

                                        var _leaf$position5 = leaf.position(offset, i !== 0);

                                        var _leaf$position6 = _slicedToArray(_leaf$position5, 2);

                                        node = _leaf$position6[0];
                                        offset = _leaf$position6[1];

                                        args.push(node, offset);
                                    });
                                    if (args.length < 2) {
                                        args = args.concat(args);
                                    }
                                    _this3.setNativeRange.apply(_this3, _toConsumableArray(args).concat([force]));
                                })();
                            } else {
                                this.setNativeRange(null);
                            }
                            this.update(source);
                        }
                    }, {
                        key: 'update',
                        value: function update() {
                            var source = arguments.length <= 0 || arguments[0] === undefined ? _emitter4.default.sources.USER : arguments[0];

                            var nativeRange = void 0,
                                oldRange = this.lastRange;

                            var _getRange = this.getRange();

                            var _getRange2 = _slicedToArray(_getRange, 2);

                            this.lastRange = _getRange2[0];
                            nativeRange = _getRange2[1];

                            if (this.lastRange != null) {
                                this.savedRange = this.lastRange;
                            }
                            if (!(0, _deepEqual2.default)(oldRange, this.lastRange)) {
                                var _emitter;

                                if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
                                    this.cursor.restore();
                                }
                                var args = [_emitter4.default.events.SELECTION_CHANGE, (0, _clone2.default)(this.lastRange), (0, _clone2.default)(oldRange), source];
                                (_emitter = this.emitter).emit.apply(_emitter, [_emitter4.default.events.EDITOR_CHANGE].concat(args));
                                if (source !== _emitter4.default.sources.SILENT) {
                                    var _emitter2;

                                    (_emitter2 = this.emitter).emit.apply(_emitter2, args);
                                }
                            }
                        }
                    }]);

                    return Selection;
                }();

                function contains(parent, descendant) {
                    try {
                        // Firefox inserts inaccessible nodes around video elements
                        descendant.parentNode;
                    } catch (e) {
                        return false;
                    }
                    // IE11 has bug with Text nodes
                    // https://connect.microsoft.com/IE/feedback/details/780874/node-contains-is-incorrect
                    if (descendant instanceof Text) {
                        descendant = descendant.parentNode;
                    }
                    return parent.contains(descendant);
                }

                exports.Range = Range;
                exports.default = Selection;

                /***/ },
            /* 41 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

                var _extend = __webpack_require__(25);

                var _extend2 = _interopRequireDefault(_extend);

                var _emitter = __webpack_require__(28);

                var _emitter2 = _interopRequireDefault(_emitter);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                var Theme = function () {
                    function Theme(quill, options) {
                        _classCallCheck(this, Theme);

                        this.quill = quill;
                        this.options = options;
                        this.modules = {};
                    }

                    _createClass(Theme, [{
                        key: 'init',
                        value: function init() {
                            var _this = this;

                            Object.keys(this.options.modules).forEach(function (name) {
                                if (_this.modules[name] == null) {
                                    _this.addModule(name);
                                }
                            });
                        }
                    }, {
                        key: 'addModule',
                        value: function addModule(name) {
                            var moduleClass = this.quill.constructor.import('modules/' + name);
                            this.modules[name] = new moduleClass(this.quill, this.options.modules[name] || {});
                            return this.modules[name];
                        }
                    }]);

                    return Theme;
                }();

                Theme.DEFAULTS = {
                    modules: {}
                };
                Theme.themes = {
                    'default': Theme
                };

                exports.default = Theme;

                /***/ },
            /* 42 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                var _block = __webpack_require__(32);

                var _block2 = _interopRequireDefault(_block);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

                var Container = function (_Parchment$Container) {
                    _inherits(Container, _Parchment$Container);

                    function Container() {
                        _classCallCheck(this, Container);

                        return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
                    }

                    return Container;
                }(_parchment2.default.Container);

                Container.allowedChildren = [_block2.default, _block.BlockEmbed, Container];

                exports.default = Container;

                /***/ },
            /* 43 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

                var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                var _emitter = __webpack_require__(28);

                var _emitter2 = _interopRequireDefault(_emitter);

                var _block = __webpack_require__(32);

                var _block2 = _interopRequireDefault(_block);

                var _break = __webpack_require__(33);

                var _break2 = _interopRequireDefault(_break);

                var _container = __webpack_require__(42);

                var _container2 = _interopRequireDefault(_container);

                var _code = __webpack_require__(31);

                var _code2 = _interopRequireDefault(_code);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

                function isLine(blot) {
                    return blot instanceof _block2.default || blot instanceof _block.BlockEmbed;
                }

                var Scroll = function (_Parchment$Scroll) {
                    _inherits(Scroll, _Parchment$Scroll);

                    function Scroll(domNode, config) {
                        _classCallCheck(this, Scroll);

                        var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, domNode));

                        _this.emitter = config.emitter;
                        if (Array.isArray(config.whitelist)) {
                            _this.whitelist = config.whitelist.reduce(function (whitelist, format) {
                                whitelist[format] = true;
                                return whitelist;
                            }, {});
                        }
                        _this.optimize();
                        return _this;
                    }

                    _createClass(Scroll, [{
                        key: 'deleteAt',
                        value: function deleteAt(index, length) {
                            var _line = this.line(index);

                            var _line2 = _slicedToArray(_line, 2);

                            var first = _line2[0];
                            var offset = _line2[1];

                            var _line3 = this.line(index + length);

                            var _line4 = _slicedToArray(_line3, 1);

                            var last = _line4[0];

                            _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'deleteAt', this).call(this, index, length);
                            if (last != null && first !== last && offset > 0 && !(first instanceof _block.BlockEmbed) && !(last instanceof _block.BlockEmbed)) {
                                if (last instanceof _code2.default) {
                                    last.deleteAt(last.length() - 1, 1);
                                }
                                var ref = last.children.head instanceof _break2.default ? null : last.children.head;
                                first.moveChildren(last, ref);
                                first.remove();
                            }
                            this.optimize();
                        }
                    }, {
                        key: 'formatAt',
                        value: function formatAt(index, length, format, value) {
                            if (this.whitelist != null && !this.whitelist[format]) return;
                            _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'formatAt', this).call(this, index, length, format, value);
                            this.optimize();
                        }
                    }, {
                        key: 'insertAt',
                        value: function insertAt(index, value, def) {
                            if (def != null && this.whitelist != null && !this.whitelist[value]) return;
                            if (index >= this.length()) {
                                if (def == null || _parchment2.default.query(value, _parchment2.default.Scope.BLOCK) == null) {
                                    var blot = _parchment2.default.create(this.statics.defaultChild);
                                    this.appendChild(blot);
                                    if (def == null && value.endsWith('\n')) {
                                        value = value.slice(0, -1);
                                    }
                                    blot.insertAt(0, value, def);
                                } else {
                                    var embed = _parchment2.default.create(value, def);
                                    this.appendChild(embed);
                                }
                            } else {
                                _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertAt', this).call(this, index, value, def);
                            }
                            this.optimize();
                        }
                    }, {
                        key: 'insertBefore',
                        value: function insertBefore(blot, ref) {
                            if (blot.statics.scope === _parchment2.default.Scope.INLINE_BLOT) {
                                var wrapper = _parchment2.default.create(this.statics.defaultChild);
                                wrapper.appendChild(blot);
                                blot = wrapper;
                            }
                            _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'insertBefore', this).call(this, blot, ref);
                        }
                    }, {
                        key: 'leaf',
                        value: function leaf(index) {
                            return this.path(index).pop() || [null, -1];
                        }
                    }, {
                        key: 'line',
                        value: function line(index) {
                            return this.descendant(isLine, index);
                        }
                    }, {
                        key: 'lines',
                        value: function lines() {
                            var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
                            var length = arguments.length <= 1 || arguments[1] === undefined ? Number.MAX_VALUE : arguments[1];

                            var getLines = function getLines(blot, index, length) {
                                var lines = [],
                                    lengthLeft = length;
                                blot.children.forEachAt(index, length, function (child, index, length) {
                                    if (isLine(child)) {
                                        lines.push(child);
                                    } else if (child instanceof _parchment2.default.Container) {
                                        lines = lines.concat(getLines(child, index, lengthLeft));
                                    }
                                    lengthLeft -= length;
                                });
                                return lines;
                            };
                            return getLines(this, index, length);
                        }
                    }, {
                        key: 'optimize',
                        value: function optimize() {
                            var mutations = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

                            if (this.batch === true) return;
                            _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'optimize', this).call(this, mutations);
                            if (mutations.length > 0) {
                                this.emitter.emit(_emitter2.default.events.SCROLL_OPTIMIZE, mutations);
                            }
                        }
                    }, {
                        key: 'path',
                        value: function path(index) {
                            return _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'path', this).call(this, index).slice(1); // Exclude self
                        }
                    }, {
                        key: 'update',
                        value: function update(mutations) {
                            if (this.batch === true) return;
                            var source = _emitter2.default.sources.USER;
                            if (typeof mutations === 'string') {
                                source = mutations;
                            }
                            if (!Array.isArray(mutations)) {
                                mutations = this.observer.takeRecords();
                            }
                            if (mutations.length > 0) {
                                this.emitter.emit(_emitter2.default.events.SCROLL_BEFORE_UPDATE, source, mutations);
                            }
                            _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype), 'update', this).call(this, mutations.concat([])); // pass copy
                            if (mutations.length > 0) {
                                this.emitter.emit(_emitter2.default.events.SCROLL_UPDATE, source, mutations);
                            }
                        }
                    }]);

                    return Scroll;
                }(_parchment2.default.Scroll);

                Scroll.blotName = 'scroll';
                Scroll.className = 'ql-editor';
                Scroll.tagName = 'DIV';
                Scroll.defaultChild = 'block';
                Scroll.allowedChildren = [_block2.default, _block.BlockEmbed, _container2.default];

                exports.default = Scroll;

                /***/ },
            /* 44 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.matchText = exports.matchSpacing = exports.matchNewline = exports.matchBlot = exports.matchAttributor = exports.default = undefined;

                var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

                var _delta = __webpack_require__(20);

                var _delta2 = _interopRequireDefault(_delta);

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                var _quill = __webpack_require__(18);

                var _quill2 = _interopRequireDefault(_quill);

                var _logger = __webpack_require__(30);

                var _logger2 = _interopRequireDefault(_logger);

                var _module = __webpack_require__(39);

                var _module2 = _interopRequireDefault(_module);

                var _align = __webpack_require__(45);

                var _background = __webpack_require__(46);

                var _color = __webpack_require__(47);

                var _direction = __webpack_require__(48);

                var _font = __webpack_require__(49);

                var _size = __webpack_require__(50);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

                function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

                var debug = (0, _logger2.default)('quill:clipboard');

                var CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], ['br', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchSpacing], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ['b', matchAlias.bind(matchAlias, 'bold')], ['i', matchAlias.bind(matchAlias, 'italic')], ['style', matchIgnore]];

                var STYLE_ATTRIBUTORS = [_align.AlignStyle, _background.BackgroundStyle, _color.ColorStyle, _direction.DirectionStyle, _font.FontStyle, _size.SizeStyle].reduce(function (memo, attr) {
                    memo[attr.keyName] = attr;
                    return memo;
                }, {});

                var Clipboard = function (_Module) {
                    _inherits(Clipboard, _Module);

                    function Clipboard(quill, options) {
                        _classCallCheck(this, Clipboard);

                        var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this, quill, options));

                        _this.quill.root.addEventListener('paste', _this.onPaste.bind(_this));
                        _this.container = _this.quill.addContainer('ql-clipboard');
                        _this.container.setAttribute('contenteditable', true);
                        _this.container.setAttribute('tabindex', -1);
                        _this.matchers = [];
                        CLIPBOARD_CONFIG.concat(_this.options.matchers).forEach(function (pair) {
                            _this.addMatcher.apply(_this, _toConsumableArray(pair));
                        });
                        return _this;
                    }

                    _createClass(Clipboard, [{
                        key: 'addMatcher',
                        value: function addMatcher(selector, matcher) {
                            this.matchers.push([selector, matcher]);
                        }
                    }, {
                        key: 'convert',
                        value: function convert(html) {
                            var _this2 = this;

                            var DOM_KEY = '__ql-matcher';
                            if (typeof html === 'string') {
                                this.container.innerHTML = html;
                            }
                            var textMatchers = [],
                                elementMatchers = [];
                            this.matchers.forEach(function (pair) {
                                var _pair = _slicedToArray(pair, 2);

                                var selector = _pair[0];
                                var matcher = _pair[1];

                                switch (selector) {
                                    case Node.TEXT_NODE:
                                        textMatchers.push(matcher);
                                        break;
                                    case Node.ELEMENT_NODE:
                                        elementMatchers.push(matcher);
                                        break;
                                    default:
                                        [].forEach.call(_this2.container.querySelectorAll(selector), function (node) {
                                            // TODO use weakmap
                                            node[DOM_KEY] = node[DOM_KEY] || [];
                                            node[DOM_KEY].push(matcher);
                                        });
                                        break;
                                }
                            });
                            var traverse = function traverse(node) {
                                // Post-order
                                if (node.nodeType === node.TEXT_NODE) {
                                    return textMatchers.reduce(function (delta, matcher) {
                                        return matcher(node, delta);
                                    }, new _delta2.default());
                                } else if (node.nodeType === node.ELEMENT_NODE) {
                                    return [].reduce.call(node.childNodes || [], function (delta, childNode) {
                                        var childrenDelta = traverse(childNode);
                                        if (childNode.nodeType === node.ELEMENT_NODE) {
                                            childrenDelta = elementMatchers.reduce(function (childrenDelta, matcher) {
                                                return matcher(childNode, childrenDelta);
                                            }, childrenDelta);
                                            childrenDelta = (childNode[DOM_KEY] || []).reduce(function (childrenDelta, matcher) {
                                                return matcher(childNode, childrenDelta);
                                            }, childrenDelta);
                                        }
                                        return delta.concat(childrenDelta);
                                    }, new _delta2.default());
                                } else {
                                    return new _delta2.default();
                                }
                            };
                            var delta = traverse(this.container);
                            // Remove trailing newline
                            if (deltaEndsWith(delta, '\n') && delta.ops[delta.ops.length - 1].attributes == null) {
                                delta = delta.compose(new _delta2.default().retain(delta.length() - 1).delete(1));
                            }
                            debug.log('convert', this.container.innerHTML, delta);
                            this.container.innerHTML = '';
                            return delta;
                        }
                    }, {
                        key: 'onPaste',
                        value: function onPaste(e) {
                            var _this3 = this;

                            if (e.defaultPrevented) return;
                            var range = this.quill.getSelection();
                            var delta = new _delta2.default().retain(range.index).delete(range.length);
                            var bodyTop = document.body.scrollTop;
                            this.container.focus();
                            setTimeout(function () {
                                delta = delta.concat(_this3.convert());
                                _this3.quill.updateContents(delta, _quill2.default.sources.USER);
                                // range.length contributes to delta.length()
                                _this3.quill.setSelection(delta.length() - range.length, _quill2.default.sources.SILENT);
                                document.body.scrollTop = bodyTop;
                                _this3.quill.selection.scrollIntoView();
                            }, 1);
                        }
                    }]);

                    return Clipboard;
                }(_module2.default);

                Clipboard.DEFAULTS = {
                    matchers: []
                };

                function computeStyle(node) {
                    if (node.nodeType !== Node.ELEMENT_NODE) return {};
                    var DOM_KEY = '__ql-computed-style';
                    return node[DOM_KEY] || (node[DOM_KEY] = window.getComputedStyle(node));
                }

                function deltaEndsWith(delta, text) {
                    var endText = "";
                    for (var i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i) {
                        var op = delta.ops[i];
                        if (typeof op.insert !== 'string') break;
                        endText = op.insert + endText;
                    }
                    return endText.slice(-1 * text.length) === text;
                }

                function isLine(node) {
                    if (node.childNodes.length === 0) return false; // Exclude embed blocks
                    var style = computeStyle(node);
                    return ['block', 'list-item'].indexOf(style.display) > -1;
                }

                function matchAlias(format, node, delta) {
                    return delta.compose(new _delta2.default().retain(delta.length(), _defineProperty({}, format, true)));
                }

                function matchAttributor(node, delta) {
                    var attributes = _parchment2.default.Attributor.Attribute.keys(node);
                    var classes = _parchment2.default.Attributor.Class.keys(node);
                    var styles = _parchment2.default.Attributor.Style.keys(node);
                    var formats = {};
                    attributes.concat(classes).concat(styles).forEach(function (name) {
                        var attr = _parchment2.default.query(name, _parchment2.default.Scope.ATTRIBUTE);
                        if (attr != null) {
                            formats[attr.attrName] = attr.value(node);
                            if (formats[attr.attrName]) return;
                        }
                        if (STYLE_ATTRIBUTORS[name] != null) {
                            attr = STYLE_ATTRIBUTORS[name];
                            formats[attr.attrName] = attr.value(node);
                        }
                    });
                    if (Object.keys(formats).length > 0) {
                        delta = delta.compose(new _delta2.default().retain(delta.length(), formats));
                    }
                    return delta;
                }

                function matchBlot(node, delta) {
                    var match = _parchment2.default.query(node);
                    if (match == null) return delta;
                    if (match.prototype instanceof _parchment2.default.Embed) {
                        var embed = {};
                        var value = match.value(node);
                        if (value != null) {
                            embed[match.blotName] = value;
                            delta = new _delta2.default().insert(embed, match.formats(node));
                        }
                    } else if (typeof match.formats === 'function') {
                        var formats = _defineProperty({}, match.blotName, match.formats(node));
                        delta = delta.compose(new _delta2.default().retain(delta.length(), formats));
                    }
                    return delta;
                }

                function matchBreak(node, delta) {
                    if (!deltaEndsWith(delta, '\n')) {
                        delta.insert('\n');
                    }
                    return delta;
                }

                function matchIgnore(node, delta) {
                    return new _delta2.default();
                }

                function matchNewline(node, delta) {
                    if (isLine(node) && !deltaEndsWith(delta, '\n')) {
                        delta.insert('\n');
                    }
                    return delta;
                }

                function matchSpacing(node, delta) {
                    if (isLine(node) && node.nextElementSibling != null && !deltaEndsWith(delta, '\n\n')) {
                        var nodeHeight = node.offsetHeight + parseFloat(computeStyle(node).marginTop) + parseFloat(computeStyle(node).marginBottom);
                        if (node.nextElementSibling.offsetTop > node.offsetTop + nodeHeight * 1.5) {
                            delta.insert('\n');
                        }
                    }
                    return delta;
                }

                function matchStyles(node, delta) {
                    var formats = {};
                    var style = node.style || {};
                    if (style.fontWeight && computeStyle(node).fontWeight === 'bold') {
                        formats.bold = true;
                    }
                    if (Object.keys(formats).length > 0) {
                        delta = delta.compose(new _delta2.default().retain(delta.length(), formats));
                    }
                    if (parseFloat(style.textIndent || 0) > 0) {
                        // Could be 0.5in
                        delta = new _delta2.default().insert('\t').concat(delta);
                    }
                    return delta;
                }

                function matchText(node, delta) {
                    var text = node.data;
                    // Word represents empty line with <o:p>&nbsp;</o:p>
                    if (node.parentNode.tagName === 'O:P') {
                        return delta.insert(text.trim());
                    }
                    if (!computeStyle(node.parentNode).whiteSpace.startsWith('pre')) {
                        var replacer = function replacer(collapse, match) {
                            match = match.replace(/[^\u00a0]/g, ''); // \u00a0 is nbsp;
                            return match.length < 1 && collapse ? ' ' : match;
                        };

                        text = text.replace(/\r\n/g, ' ').replace(/\n/g, ' ');
                        text = text.replace(/\s\s+/g, replacer.bind(replacer, true)); // collapse whitespace
                        if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {
                            text = text.replace(/^\s+/, replacer.bind(replacer, false));
                        }
                        if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {
                            text = text.replace(/\s+$/, replacer.bind(replacer, false));
                        }
                    }
                    return delta.insert(text);
                }

                exports.default = Clipboard;
                exports.matchAttributor = matchAttributor;
                exports.matchBlot = matchBlot;
                exports.matchNewline = matchNewline;
                exports.matchSpacing = matchSpacing;
                exports.matchText = matchText;

                /***/ },
            /* 45 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.AlignStyle = exports.AlignClass = undefined;

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                var config = {
                    scope: _parchment2.default.Scope.BLOCK,
                    whitelist: ['right', 'center', 'justify']
                };

                var AlignClass = new _parchment2.default.Attributor.Class('align', 'ql-align', config);
                var AlignStyle = new _parchment2.default.Attributor.Style('align', 'text-align', config);

                exports.AlignClass = AlignClass;
                exports.AlignStyle = AlignStyle;

                /***/ },
            /* 46 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.BackgroundStyle = exports.BackgroundClass = undefined;

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                var _color = __webpack_require__(47);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                var BackgroundClass = new _parchment2.default.Attributor.Class('background', 'ql-bg', {
                    scope: _parchment2.default.Scope.INLINE
                });
                var BackgroundStyle = new _color.ColorAttributor('background', 'background-color', {
                    scope: _parchment2.default.Scope.INLINE
                });

                exports.BackgroundClass = BackgroundClass;
                exports.BackgroundStyle = BackgroundStyle;

                /***/ },
            /* 47 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.ColorStyle = exports.ColorClass = exports.ColorAttributor = undefined;

                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

                var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

                var ColorAttributor = function (_Parchment$Attributor) {
                    _inherits(ColorAttributor, _Parchment$Attributor);

                    function ColorAttributor() {
                        _classCallCheck(this, ColorAttributor);

                        return _possibleConstructorReturn(this, (ColorAttributor.__proto__ || Object.getPrototypeOf(ColorAttributor)).apply(this, arguments));
                    }

                    _createClass(ColorAttributor, [{
                        key: 'value',
                        value: function value(domNode) {
                            var value = _get(ColorAttributor.prototype.__proto__ || Object.getPrototypeOf(ColorAttributor.prototype), 'value', this).call(this, domNode);
                            if (!value.startsWith('rgb(')) return value;
                            value = value.replace(/^[^\d]+/, '').replace(/[^\d]+$/, '');
                            return '#' + value.split(',').map(function (component) {
                                return ('00' + parseInt(component).toString(16)).slice(-2);
                            }).join('');
                        }
                    }]);

                    return ColorAttributor;
                }(_parchment2.default.Attributor.Style);

                var ColorClass = new _parchment2.default.Attributor.Class('color', 'ql-color', {
                    scope: _parchment2.default.Scope.INLINE
                });
                var ColorStyle = new ColorAttributor('color', 'color', {
                    scope: _parchment2.default.Scope.INLINE
                });

                exports.ColorAttributor = ColorAttributor;
                exports.ColorClass = ColorClass;
                exports.ColorStyle = ColorStyle;

                /***/ },
            /* 48 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.DirectionStyle = exports.DirectionClass = undefined;

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                var config = {
                    scope: _parchment2.default.Scope.BLOCK,
                    whitelist: ['rtl']
                };

                var DirectionClass = new _parchment2.default.Attributor.Class('direction', 'ql-direction', config);
                var DirectionStyle = new _parchment2.default.Attributor.Style('direction', 'direction', config);

                exports.DirectionClass = DirectionClass;
                exports.DirectionStyle = DirectionStyle;

                /***/ },
            /* 49 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.FontClass = exports.FontStyle = undefined;

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                var config = {
                    scope: _parchment2.default.Scope.INLINE,
                    whitelist: ['serif', 'monospace']
                };

                var FontClass = new _parchment2.default.Attributor.Class('font', 'ql-font', config);
                var FontStyle = new _parchment2.default.Attributor.Style('font', 'font-family', config);

                exports.FontStyle = FontStyle;
                exports.FontClass = FontClass;

                /***/ },
            /* 50 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.SizeStyle = exports.SizeClass = undefined;

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                var SizeClass = new _parchment2.default.Attributor.Class('size', 'ql-size', {
                    scope: _parchment2.default.Scope.INLINE,
                    whitelist: ['small', 'large', 'huge']
                });
                var SizeStyle = new _parchment2.default.Attributor.Style('size', 'font-size', {
                    scope: _parchment2.default.Scope.INLINE,
                    whitelist: ['10px', '18px', '32px']
                });

                exports.SizeClass = SizeClass;
                exports.SizeStyle = SizeStyle;

                /***/ },
            /* 51 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.getLastChangeIndex = exports.default = undefined;

                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                var _quill = __webpack_require__(18);

                var _quill2 = _interopRequireDefault(_quill);

                var _module = __webpack_require__(39);

                var _module2 = _interopRequireDefault(_module);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

                var History = function (_Module) {
                    _inherits(History, _Module);

                    function History(quill, options) {
                        _classCallCheck(this, History);

                        var _this = _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).call(this, quill, options));

                        _this.lastRecorded = 0;
                        _this.ignoreChange = false;
                        _this.clear();
                        _this.quill.on(_quill2.default.events.EDITOR_CHANGE, function (eventName, delta, oldDelta, source) {
                            if (eventName !== _quill2.default.events.TEXT_CHANGE || _this.ignoreChange) return;
                            if (!_this.options.userOnly || source === _quill2.default.sources.USER) {
                                _this.record(delta, oldDelta);
                            } else {
                                _this.transform(delta);
                            }
                        });
                        _this.quill.keyboard.addBinding({ key: 'Z', shortKey: true }, _this.undo.bind(_this));
                        _this.quill.keyboard.addBinding({ key: 'Z', shortKey: true, shiftKey: true }, _this.redo.bind(_this));
                        if (/Win/i.test(navigator.platform)) {
                            _this.quill.keyboard.addBinding({ key: 'Y', shortKey: true }, _this.redo.bind(_this));
                        }
                        return _this;
                    }

                    _createClass(History, [{
                        key: 'change',
                        value: function change(source, dest) {
                            if (this.stack[source].length === 0) return;
                            var delta = this.stack[source].pop();
                            this.lastRecorded = 0;
                            this.ignoreChange = true;
                            this.quill.updateContents(delta[source], _quill2.default.sources.USER);
                            this.ignoreChange = false;
                            var index = getLastChangeIndex(delta[source]);
                            this.quill.setSelection(index);
                            this.quill.selection.scrollIntoView();
                            this.stack[dest].push(delta);
                        }
                    }, {
                        key: 'clear',
                        value: function clear() {
                            this.stack = { undo: [], redo: [] };
                        }
                    }, {
                        key: 'record',
                        value: function record(changeDelta, oldDelta) {
                            if (changeDelta.ops.length === 0) return;
                            this.stack.redo = [];
                            var undoDelta = this.quill.getContents().diff(oldDelta);
                            var timestamp = Date.now();
                            if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
                                var delta = this.stack.undo.pop();
                                undoDelta = undoDelta.compose(delta.undo);
                                changeDelta = delta.redo.compose(changeDelta);
                            } else {
                                this.lastRecorded = timestamp;
                            }
                            this.stack.undo.push({
                                redo: changeDelta,
                                undo: undoDelta
                            });
                            if (this.stack.undo.length > this.options.maxStack) {
                                this.stack.undo.unshift();
                            }
                        }
                    }, {
                        key: 'redo',
                        value: function redo() {
                            this.change('redo', 'undo');
                        }
                    }, {
                        key: 'transform',
                        value: function transform(delta) {
                            this.stack.undo.forEach(function (change) {
                                change.undo = delta.transform(change.undo, true);
                                change.redo = delta.transform(change.redo, true);
                            });
                            this.stack.redo.forEach(function (change) {
                                change.undo = delta.transform(change.undo, true);
                                change.redo = delta.transform(change.redo, true);
                            });
                        }
                    }, {
                        key: 'undo',
                        value: function undo() {
                            this.change('undo', 'redo');
                        }
                    }]);

                    return History;
                }(_module2.default);

                History.DEFAULTS = {
                    delay: 1000,
                    maxStack: 100,
                    userOnly: false
                };

                function endsWithNewlineChange(delta) {
                    var lastOp = delta.ops[delta.ops.length - 1];
                    if (lastOp == null) return false;
                    if (lastOp.insert != null) {
                        return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\n');
                    }
                    if (lastOp.attributes != null) {
                        return Object.keys(lastOp.attributes).some(function (attr) {
                            return _parchment2.default.query(attr, _parchment2.default.Scope.BLOCK) != null;
                        });
                    }
                    return false;
                }

                function getLastChangeIndex(delta) {
                    var deleteLength = delta.ops.reduce(function (length, op) {
                        length += op.delete || 0;
                        return length;
                    }, 0);
                    var changeIndex = delta.length() - deleteLength;
                    if (endsWithNewlineChange(delta)) {
                        changeIndex -= 1;
                    }
                    return changeIndex;
                }

                exports.default = History;
                exports.getLastChangeIndex = getLastChangeIndex;

                /***/ },
            /* 52 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                Object.defineProperty(exports, "__esModule", {
                    value: true
                });

                var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

                var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

                var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

                var _clone = __webpack_require__(38);

                var _clone2 = _interopRequireDefault(_clone);

                var _deepEqual = __webpack_require__(22);

                var _deepEqual2 = _interopRequireDefault(_deepEqual);

                var _extend = __webpack_require__(25);

                var _extend2 = _interopRequireDefault(_extend);

                var _delta = __webpack_require__(20);

                var _delta2 = _interopRequireDefault(_delta);

                var _parchment = __webpack_require__(2);

                var _parchment2 = _interopRequireDefault(_parchment);

                var _quill = __webpack_require__(18);

                var _quill2 = _interopRequireDefault(_quill);

                var _logger = __webpack_require__(30);

                var _logger2 = _interopRequireDefault(_logger);

                var _module = __webpack_require__(39);

                var _module2 = _interopRequireDefault(_module);

                var _block = __webpack_require__(32);

                var _block2 = _interopRequireDefault(_block);

                function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

                function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

                var debug = (0, _logger2.default)('quill:keyboard');

                var SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';

                var Keyboard = function (_Module) {
                    _inherits(Keyboard, _Module);

                    _createClass(Keyboard, null, [{
                        key: 'match',
                        value: function match(evt, binding) {
                            binding = normalize(binding);
                            if (!!binding.shortKey !== evt[SHORTKEY] && binding.shortKey !== null) return false;
                            if (['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(function (key) {
                                return key != SHORTKEY && !!binding[key] !== evt[key] && binding[key] !== null;
                            })) {
                                return false;
                            }
                            return binding.key === (evt.which || evt.keyCode);
                        }
                    }]);

                    function Keyboard(quill, options) {
                        _classCallCheck(this, Keyboard);

                        var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, quill, options));

                        _this.bindings = {};
                        Object.keys(_this.options.bindings).forEach(function (name) {
                            if (_this.options.bindings[name]) {
                                _this.addBinding(_this.options.bindings[name]);
                            }
                        });
                        _this.addBinding({ key: Keyboard.keys.ENTER, shiftKey: null }, handleEnter);
                        _this.addBinding({ key: Keyboard.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function () {});
                        _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: true, prefix: /^.?$/ }, function (range) {
                            if (range.index === 0) return;
                            this.quill.deleteText(range.index - 1, 1, _quill2.default.sources.USER);
                            this.quill.selection.scrollIntoView();
                        });
                        _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: true, suffix: /^$/ }, function (range) {
                            if (range.index >= this.quill.getLength() - 1) return;
                            this.quill.deleteText(range.index, 1, _quill2.default.sources.USER);
                        });
                        _this.addBinding({ key: Keyboard.keys.BACKSPACE }, { collapsed: false }, handleDelete);
                        _this.addBinding({ key: Keyboard.keys.DELETE }, { collapsed: false }, handleDelete);
                        _this.listen();
                        return _this;
                    }

                    _createClass(Keyboard, [{
                        key: 'addBinding',
                        value: function addBinding(key) {
                            var context = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                            var handler = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

                            var binding = normalize(key);
                            if (binding == null || binding.key == null) {
                                return debug.warn('Attempted to add invalid keyboard binding', binding);
                            }
                            if (typeof context === 'function') {
                                context = { handler: context };
                            }
                            if (typeof handler === 'function') {
                                handler = { handler: handler };
                            }
                            binding = (0, _extend2.default)(binding, context, handler);
                            this.bindings[binding.key] = this.bindings[binding.key] || [];
                            this.bindings[binding.key].push(binding);
                        }
                    }, {
                        key: 'listen',
                        value: function listen() {
                            var _this2 = this;

                            this.quill.root.addEventListener('keydown', function (evt) {
                                if (evt.defaultPrevented) return;
                                var which = evt.which || evt.keyCode;
                                var bindings = (_this2.bindings[which] || []).filter(function (binding) {
                                    return Keyboard.match(evt, binding);
                                });
                                if (bindings.length === 0) return;
                                var range = _this2.quill.getSelection();
                                if (range == null) return; // implies we do not have focus

                                var _quill$scroll$line = _this2.quill.scroll.line(range.index);

                                var _quill$scroll$line2 = _slicedToArray(_quill$scroll$line, 2);

                                var line = _quill$scroll$line2[0];
                                var offset = _quill$scroll$line2[1];

                                var _quill$scroll$leaf = _this2.quill.scroll.leaf(range.index);

                                var _quill$scroll$leaf2 = _slicedToArray(_quill$scroll$leaf, 2);

                                var leafStart = _quill$scroll$leaf2[0];
                                var offsetStart = _quill$scroll$leaf2[1];

                                var _ref = range.length === 0 ? [leafStart, offsetStart] : _this2.quill.scroll.leaf(range.index + range.length);

                                var _ref2 = _slicedToArray(_ref, 2);

                                var leafEnd = _ref2[0];
                                var offsetEnd = _ref2[1];

                                var prefixText = leafStart instanceof _parchment2.default.Text ? leafStart.value().slice(0, offsetStart) : '';
                                var suffixText = leafEnd instanceof _parchment2.default.Text ? leafEnd.value().slice(offsetEnd) : '';
                                var curContext = {
                                    collapsed: range.length === 0,
                                    empty: range.length === 0 && line.length() <= 1,
                                    format: _this2.quill.getFormat(range),
                                    offset: offset,
                                    prefix: prefixText,
                                    suffix: suffixText
                                };
                                var prevented = bindings.some(function (binding) {
                                    if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) return false;
                                    if (binding.empty != null && binding.empty !== curContext.empty) return false;
                                    if (binding.offset != null && binding.offset !== curContext.offset) return false;
                                    if (Array.isArray(binding.format)) {
                                        // any format is present
                                        if (binding.format.every(function (name) {
                                            return curContext.format[name] == null;
                                        })) {
                                            return false;
                                        }
                                    } else if (_typeof(binding.format) === 'object') {
                                        // all formats must match
                                        if (!Object.keys(binding.format).every(function (name) {
                                            if (binding.format[name] === true) return curContext.format[name] != null;
                                            if (binding.format[name] === false) return curContext.format[name] == null;
                                            return (0, _deepEqual2.default)(binding.format[name], curContext.format[name]);
                                        })) {
                                            return false;
                                        }
                                    }
                                    if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) return false;
                                    if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) return false;
                                    return binding.handler.call(_this2, range, curContext) !== true;
                                });
                                if (prevented) {
                                    evt.preventDefault();
                                }
                            });
                        }
                    }]);

                    return Keyboard;
                }(_module2.default);

                Keyboard.keys = {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    ESCAPE: 27,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                };

                Keyboard.DEFAULTS = {
                    bindings: {
                        'bold': makeFormatHandler('bold'),
                        'italic': makeFormatHandler('italic'),
                        'underline': makeFormatHandler('underline'),
                        'indent': {
                            // highlight tab or tab at beginning of list, indent or blockquote
                            key: Keyboard.keys.TAB,
                            format: ['blockquote', 'indent', 'list'],
                            handler: function handler(range, context) {
                                if (context.collapsed && context.offset !== 0) return true;
                                this.quill.format('indent', '+1', _quill2.default.sources.USER);
                            }
                        },
                        'outdent': {
                            key: Keyboard.keys.TAB,
                            shiftKey: true,
                            format: ['blockquote', 'indent', 'list'],
                            // highlight tab or tab at beginning of list, indent or blockquote
                            handler: function handler(range, context) {
                                if (context.collapsed && context.offset !== 0) return true;
                                this.quill.format('indent', '-1', _quill2.default.sources.USER);
                            }
                        },
                        'outdent backspace': {
                            key: Keyboard.keys.BACKSPACE,
                            collapsed: true,
                            format: ['blockquote', 'indent', 'list'],
                            offset: 0,
                            handler: function handler(range, context) {
                                if (context.format.indent != null) {
                                    this.quill.format('indent', '-1', _quill2.default.sources.USER);
                                } else if (context.format.blockquote != null) {
                                    this.quill.format('blockquote', false, _quill2.default.sources.USER);
                                } else if (context.format.list != null) {
                                    this.quill.format('list', false, _quill2.default.sources.USER);
                                }
                            }
                        },
                        'indent code-block': makeCodeBlockHandler(true),
                        'outdent code-block': makeCodeBlockHandler(false),
                        'remove tab': {
                            key: Keyboard.keys.TAB,
                            shiftKey: true,
                            collapsed: true,
                            prefix: /\t$/,
                            handler: function handler(range, context) {
                                this.quill.deleteText(range.index - 1, 1, _quill2.default.sources.USER);
                            }
                        },
                        'tab': {
                            key: Keyboard.keys.TAB,
                            handler: function handler(range, context) {
                                if (!context.collapsed) {
                                    this.quill.scroll.deleteAt(range.index, range.length);
                                }
                                this.quill.insertText(range.index, '\t', _quill2.default.sources.USER);
                                this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
                            }
                        },
                        'list empty enter': {
                            key: Keyboard.keys.ENTER,
                            collapsed: true,
                            format: ['list'],
                            empty: true,
                            handler: function handler(range, context) {
                                this.quill.format('list', false, _quill2.default.sources.USER);
                                if (context.format.indent) {
                                    this.quill.format('indent', false, _quill2.default.sources.USER);
                                }
                            }
                        },
                        'header enter': {
                            key: Keyboard.keys.ENTER,
                            collapsed: true,
                            format: ['header'],
                            suffix: /^$/,
                            handler: function handler(range) {
                                this.quill.scroll.insertAt(range.index, '\n');
                                this.quill.formatText(range.index + 1, 1, 'header', false, _quill2.default.sources.USER);
                                this.quill.setSelection(range.index + 1, _quill2.default.sources.SILENT);
                                this.quill.selection.scrollIntoView();
                            }
                        },
                        'list autofill': {
                            key: ' ',
                            collapsed: true,
                            format: { list: false },
                            prefix: /^(1\.|-)$/,
                            handler: function handler(range, context) {
                                var length = context.prefix.length;
                                this.quill.scroll.deleteAt(range.index - length, length);
                                this.quill.formatLine(range.index - length, 1, 'list', length === 1 ? 'bullet' : 'ordered', _quill2.default.sources.USER);
                                this.quill.setSelection(range.index - length, _quill2.default.sources.SILENT);
                            }
                        }
                    }
                };

                function handleDelete(range) {
                    this.quill.deleteText(range, _quill2.default.sources.USER);
                    this.quill.setSelection(range.index, _quill2.default.sources.SILENT);
                    this.quill.selection.scrollIntoView();
                }

                function handleEnter(range, context) {
                    var _this3 = this;

                    if (range.length > 0) {
                        this.quill.scroll.deleteAt(range.index, range.length); // So we do not trigger text-change
                    }
                    var lineFormats = Object.keys(context.format).reduce(function (lineFormats, format) {
                        if (_parchment2.default.query(format, _parchment2.default.Scope.BLOCK) && !Array.isArray(context.format[format])) {
                            lineFormats[format] = context.format[format];
                        }
                        return lineFormats;
                    }, {});
                    this.quill.insertText(range.index, '\n', lineFormats, _quill2.default.sources.USER);
                    this.quill.selection.scrollIntoView();
                    Object.keys(context.format).forEach(function (name) {
                        if (lineFormats[name] != null) return;
                        if (Array.isArray(context.format[name])) return;
                        if (name === 'link') return;
                        _this3.quill.format(name, context.format[name], _quill2.default.sources.USER);
                    });
                }

                function makeCodeBlockHandler(indent) {
                    return {
                        key: Keyboard.keys.TAB,
                        shiftKey: !indent,
                        format: { 'code-block': true },
                        handler: function handler(range) {
                            var CodeBlock = _parchment2.default.query('code-block');
                            var index = range.index,
                                length = range.length;

                            var _quill$scroll$descend = this.quill.scroll.descendant(CodeBlock, index);

                            var _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2);

                            var block = _quill$scroll$descend2[0];
                            var offset = _quill$scroll$descend2[1];

                            if (block == null) return;
                            var scrollOffset = this.quill.scroll.offset(block);
                            var start = block.newlineIndex(offset, true) + 1;
                            var end = block.newlineIndex(scrollOffset + offset + length);
                            var lines = block.domNode.textContent.slice(start, end).split('\n');
                            offset = 0;
                            lines.forEach(function (line, i) {
                                if (indent) {
                                    block.insertAt(start + offset, CodeBlock.TAB);
                                    offset += CodeBlock.TAB.length;
                                    if (i === 0) {
                                        index += CodeBlock.TAB.length;
                                    } else {
                                        length += CodeBlock.TAB.length;
                                    }
                                } else if (line.startsWith(CodeBlock.TAB)) {
                                    block.deleteAt(start + offset, CodeBlock.TAB.length);
                                    offset -= CodeBlock.TAB.length;
                                    if (i === 0) {
                                        index -= CodeBlock.TAB.length;
                                    } else {
                                        length -= CodeBlock.TAB.length;
                                    }
                                }
                                offset += line.length + 1;
                            });
                            this.quill.update(_quill2.default.sources.USER);
                            this.quill.setSelection(index, length, _quill2.default.sources.SILENT);
                        }
                    };
                }

                function makeFormatHandler(format) {
                    return {
                        key: format[0].toUpperCase(),
                        shortKey: true,
                        handler: function handler(range, context) {
                            this.quill.format(format, !context.format[format], _quill2.default.sources.USER);
                        }
                    };
                }

                function normalize(binding) {
                    if (typeof binding === 'string' || typeof binding === 'number') {
                        return normalize({ key: binding });
                    }
                    if ((typeof binding === 'undefined' ? 'undefined' : _typeof(binding)) === 'object') {
                        binding = (0, _clone2.default)(binding, false);
                    }
                    if (typeof binding.key === 'string') {
                        if (Keyboard.keys[binding.key.toUpperCase()] != null) {
                            binding.key = Keyboard.keys[binding.key.toUpperCase()];
                        } else if (binding.key.length === 1) {
                            binding.key = binding.key.toUpperCase().charCodeAt(0);
                        } else {
                            return null;
                        }
                    }
                    return binding;
                }

                exports.default = Keyboard;

                /***/ }
            /******/ ])
});
;