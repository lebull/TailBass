export const cleanEvent = (event) => ({
    id: event.id,
    name: event.name,
    hostUserName: event.hostUserName,
    visible: event.visible,
})