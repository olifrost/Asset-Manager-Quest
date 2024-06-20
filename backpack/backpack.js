Macro.get("type").handler = function() {
  $(this.output).wiki(this.payload[0].contents);
}