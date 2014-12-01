define([
	'text!photo/tpl/album-detail-menu.html'
],function(text){

    return Backbone.TopMenuView.extend({
    	template: _.template(text),
        inject: function(){
			utils.popup.open(this.$el);
			return this;
		},
		hide: function(){
            utils.popup.close();
			return this;
		}
    });
});