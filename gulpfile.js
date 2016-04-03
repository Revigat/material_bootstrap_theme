
var gulp = require("gulp"),
watch = require("gulp-watch"),
rename = require("gulp-rename"),
fileInclude = require("gulp-file-include"),
htmlMin = require("gulp-html-minifier");

gulp.task("build-files", function() {
    
    gulp.src("html/pages/index.html").pipe(fileInclude({prefix: "@@",basepath: "@file"})).pipe(htmlMin({collapseWhitespace: true})).pipe(gulp.dest("dist"));
	
});

gulp.task("build-doc", function() {
    
    gulp.src("html/documentation/*.html").pipe(fileInclude({prefix: "@@",basepath: "@file"})).pipe(gulp.dest("documentation"));
	
});

gulp.task("build-scss", function() {
	
	createScss("**/", "*.less");

}); 

function createScss(basePath, nameFile){
	
	var distFolder = "material_theme/scss/";
	
	if(basePath !== "**/"){
		
		distFolder = distFolder + basePath;
		
	}
	
	gulp.src("material_theme/less/" + basePath + nameFile)
	.pipe(rename(function(path){
		path.extname = ".scss";
		return path;
	}))
    .pipe(gulp.dest(distFolder));
	
} 

