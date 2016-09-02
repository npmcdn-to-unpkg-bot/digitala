function daField($compile, $parse) {
	'ngInject';

	return {
		restrict: 'A',
		priority: 9999,
		terminal: true,
		compile: function (el, attr) {
			console.log('ELEMENT', el);
			console.log('ATTRIBUTS', attr);

			attr.$set('type', 'text');
			attr.$set('name', 'rg_numero');
			attr.$set('ngRequired', true);
			

			attr.$set('ngModel', 'documentsModel[' + attr.docIndex +']["' + attr.model +'"]');

			var ngModelLink = $compile(el, null, 9999);

			return function (scope) {
				console.log('form', scope.form);
				ngModelLink(scope);
			};
		}
	};
}

export default {
  name: 'daField',
  fn: daField
};


/*function daField($compile) {
	'ngInject';

	return {
		restrict: 'A',
		priority: 9999,
		terminal: true,
		compile: function (el, attr) {

			var setAttributes = function (scope) {
				
				angular.forEach(scope.fieldAttributes, function(attribute) {
					attr.$set(attribute.attr, attribute.val);
				});

				attr.$set('ngModel', 'documentsModel[' + attr.docIndex + ']["' + attr.docModel +'"]');
				console.log('FIELD SCOPE', scope);
				setAttributes(scope);
				scope.documentsModel[0].field1 = ''
			};
		}
	};
}

export default {
  name: 'daField',
  fn: daField
};*/
