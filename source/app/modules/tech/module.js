var _templates = {
    tech: require("html!./templates/tech.tpl.html"),
    techCatalog: require("html!./templates/techCatalog.tpl.html"),
    techModel: require("html!./templates/techModel.tpl.html"),
    techModelGallery: require("html!./templates/techModelGallery.tpl.html"),
    techModelDescription: require("html!./templates/techModelDescription.tpl.html"),
    techModelGallerySlider: require("html!./templates/techModelGallerySlider.tpl.html"),
    techModelTth: require("html!./templates/techModelTth.tpl.html"),
};

module.exports = angular.module('tech', [])
    .run(['$templateCache', function($templateCache) {
        $templateCache.put('/modules/tech/templates/tech.tpl', _templates.tech);
        $templateCache.put('/modules/tech/templates/techCatalog.tpl', _templates.techCatalog);
        $templateCache.put('/modules/tech/templates/techModel.tpl', _templates.techModel);
        $templateCache.put('/modules/tech/templates/techModelGallery.tpl', _templates.techModelGallery);
        $templateCache.put('/modules/tech/templates/techModelDescription.tpl', _templates.techModelDescription);
        $templateCache.put('/modules/tech/templates/techModelGallerySlider.tpl', _templates.techModelGallerySlider);
        $templateCache.put('/modules/tech/templates/techModelTth.tpl', _templates.techModelTth);
    }])
