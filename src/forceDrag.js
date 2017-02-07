import {drag} from "d3-drag";
import {event} from "d3-selection";

var eventTypes = ["start", "drag", "end"];

function getDefaultListeners(simulation) {
  return {
    canvas: {
      start: function start(d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      },
      drag: function drag(d) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      },
      end: function end(d) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }
    },
    start: function start(d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x, d.fy = d.y;
    },
    drag: function drag(d) {
      d.fx = event.x, d.fy = event.y;
    },
    end: function end(d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null, d.fy = null;
    }
  };
}
function getDefaultSubject(simulation) {
  return function dragsubject() {
    simulation.find(event.x, event.y);
  };
}

export default function forceDrag(selection, simulation, listeners, dragsubject) {
  var node = selection.node();
  var dragBehavior = drag();

  if (node instanceof HTMLCanvasElement) {
    if (dragsubject === undefined) {
      dragsubject = typeof listeners === "function" ? listeners : getDefaultSubject(simulation);
    }
    dragBehavior.container(node).subject(dragsubject);
  }
  if (typeof listeners !== "object") {
    listeners = {};
  }

  var defaultListeners = getDefaultListeners(simulation);

  for (var i = 0; i < eventTypes.length; i++) {
    var eventType = eventTypes[i];

    if (typeof listeners[eventType] !== "function") {
      if (node instanceof HTMLCanvasElement) {
        listeners[eventType] = defaultListeners.canvas[eventType];
      } else {
        listeners[eventType] = defaultListeners[eventType];
      }
    }
    dragBehavior.on(eventType, listeners[eventType]);
  }

  selection.call(dragBehavior);
}
