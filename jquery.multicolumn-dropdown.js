/*
 * Multi-Column DropDown v0.1: https://github.com/Machigatta/jquery-multicolumn-dropdown
 *
 * Depends:
 * jQuery
 */
(function($) {
	var methods = {
		init : function(options) {
			this.each(function() {
                var settings = $.extend({
                    domDriven : true,
                    width: '100%',
                    height: '200px',
                    autoOpen: false,
                    showHead: false,
                    data: [],
                    structure: [],
                    fieldValue: 'value',
                    fieldText: '',
                    hiddenColumns: [],
                    css: {
                        listBg: '',
	                    listBorder: ''
                    }
                }, options);

                if (!$(this).is('select') && settings.domDriven){
                    $.error( 'jQuery.multicolumn-dropdown with setting "Dom-Driven" on true requires an select-element' );
                    return;
                }

                if (!$(this).is('input') && !settings.domDriven){
                    $.error( 'jQuery.multicolumn-dropdown with setting "Dom-Driven" on false requires an input-element' );
                    return;
                }

				if ($(this).hasClass('mg-multi-dropdown')) return;
                $(this).addClass('mg-multi-dropdown');
				
				//Parse Data from Object to self-defnied structure
                if(settings.domDriven){
					var newDataObj = [];
					if($(this).find('option').length > 0){
						$(this).find('option').map(function(optionI,optionEL){ 
							var newDataRow = {};
							if(settings.structure.length == 0){
								newDataRow.text = $(optionEL).html();
							}else{
								settings.structure.map(function(structureEL,structureI){ 
									if(structureEL.name == "text"){
										newDataRow.name = $(optionEL).html();
									}else if(structureEL.name == "value")
										newDataRow.value = $(optionEL).val();
									else {
										newDataRow[structureEL.name] = $(optionEL).attr("mg-"+structureEL.name);
									}
								})
							}
							newDataObj.push(newDataRow)
						})
						
					}
                    settings.data = newDataObj;
                    $(this).replaceWith('<input class="mg-multi-dropdown"/>');
				}
				
				var $dropDownObj = $(this);
                // TO-DO: Functionality
				
				var isTouch = isTouchDevice();
				
				function isTouchDevice() {
					var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
					try {
						document.createEvent("TouchEvent");
						return true && mobile;
					} catch (e) {
						return false && mobile;
					}
				}
			});
		},
		
		remove : function() {
			this.each(function() {
				var $dropDownObj = $(this);
				if (!$dropDownObj.hasClass('mg-multi-dropdown')) return;
				// TO-DO: Clean-Up
			});
		}
    }
    


	$.fn.multiColumnDropDown = function(method) {
		if (document.all && typeof XDomainRequest=="undefined") //if IE7 or less
			return
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.multicolumn-dropdown' );
		}
	};
})( jQuery );

