import EventBusAdapter from "@/adapters/event-bus.adapter";
import {EventBusEventsConstants} from "@/eventbus/event-bus-events.constants";

export default {
    emitter: EventBusAdapter,
    eventType: EventBusEventsConstants
};
