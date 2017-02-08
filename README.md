# d3-force-drag

Reusable and customizable drag implementation for D3 (v4) force-directed graphs.

## Installing

If you use NPM, `npm install d3-force-drag`. Otherwise, download the [latest release](https://github.com/augmt/d3-force-drag/releases/latest).

## API Reference

<a href="#forceDrag" name="forceDrag">#</a> d3.<b>forceDrag</b>(<i>selection</i>, <i>simulation</i>[, <i>listeners</i>[, <i>dragsubject</i>]])<br>
<a href="#forceDrag" name="forceDrag">#</a> d3.<b>forceDrag</b>(<i>selection</i>, <i>simulation</i>[, <i>dragsubject</i>])

Binds [basic drag behavior](https://bl.ocks.org/mbostock/4062045) to the specified nodes and force simulation. Use this in conjunction with the [call](https://github.com/d3/d3-selection#selection_call) operator on the nodes; for example, say `node.call(d3.forceDrag, simulation)` on initialization.

An object of functions, *listeners*, may be specified to override any and all [default listener functions](https://github.com/augmt/d3-force-drag/blob/master/src/forceDrag.js#L7). Listener functions and their keys correspond to the [drag event types](https://github.com/d3/d3-drag#drag_on) defined by the [d3-drag](https://github.com/d3/d3-drag) module.

A function, *dragsubject*, may be specified separately or in conjunction with the *listeners* object to override the [default subject function](https://github.com/augmt/d3-force-drag/blob/master/src/forceDrag.js#L38).
