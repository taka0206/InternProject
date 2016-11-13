module.exports = function(grunt) {
	grunt.initConfig({
		concat : {
			options: {
				separator : ';',
			},
			dist: {
				src: ['js/sum.js', 'js/product.js'],
				dest: 'dist/built.js',
			},
		},
		watch: {
			files: ['js/*.js'],
			tasks: ['concat']
		}
		});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'watch']);
};