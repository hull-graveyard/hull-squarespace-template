Hull.define({
  type: "Hull",
  refreshEvents: ['model.hull.me.change'],
  templates: ['my-template'],
  initialize: function() {
    console.warn("My Component init");
  }
})