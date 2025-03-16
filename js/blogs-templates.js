(function() {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
  templates['blogs-categories-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
      var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined
      };
  
    return "    <li><a class=\"text-black-50 text-decoration-none\" href=\"#\"\n            onclick=\"loadBlogs('blogs/categories/"
      + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":5,"column":49},"end":{"line":5,"column":55}}}) : helper)))
      + "')\">"
      + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":5,"column":59},"end":{"line":5,"column":67}}}) : helper)))
      + "</a></li>\n";
  },"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
      var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined
      };
  
    return "<h1>Categories</h1>\n<ul class=\"py-3\">\n"
      + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":6,"column":13}}})) != null ? stack1 : "")
      + "</ul>";
  },"useData":true});
  templates['blogs-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
      var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined
      };
  
    return "<div class=\"clearfix py-3\">\n    <h3>"
      + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":16}}}) : helper)))
      + "</h3>\n    <p class=\"text-black-50\">by "
      + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":5,"column":32},"end":{"line":5,"column":42}}}) : helper)))
      + " in <a href=\"#\"\n            onclick=\"loadBlogs('blogs/categories/"
      + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"caterogy") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
      + "')\">"
      + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
      + "</a> on "
      + alias4(lookupProperty(helpers,"formatDate").call(alias1,(depth0 != null ? lookupProperty(depth0,"date") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":6,"column":93},"end":{"line":6,"column":112}}}))
      + ". <a\n            href=\"#\" onclick=\"loadBlogDetails("
      + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":7,"column":46},"end":{"line":7,"column":52}}}) : helper)))
      + ", true)\">Comments("
      + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
      + ")</a></p>\n    <img src=\""
      + alias4(((helper = (helper = lookupProperty(helpers,"thumbpath") || (depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbpath","hash":{},"data":data,"loc":{"start":{"line":8,"column":14},"end":{"line":8,"column":27}}}) : helper)))
      + "\" alt=\""
      + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":8,"column":34},"end":{"line":8,"column":42}}}) : helper)))
      + "\" class=\"float-start me-3 border rounded-4\">\n    <p class=\"text-black-50\">"
      + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":9,"column":29},"end":{"line":9,"column":40}}}) : helper)))
      + "</p>\n    <a href=\"#\" class=\"btn btn-link readmore ps-0\" onclick=\"loadBlogDetails("
      + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":10,"column":76},"end":{"line":10,"column":82}}}) : helper)))
      + ")\">Read more</a>\n</div>\n";
  },"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
      var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined
      };
  
    return "<nav aria-label=\"Page navigation\">\n    <ul class=\"pagination\">\n"
      + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pages") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":25,"column":17}}})) != null ? stack1 : "")
      + "    </ul>\n</nav>\n";
  },"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
      var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined
      };
  
    return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isCurrent") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":20,"column":15}}})) != null ? stack1 : "")
      + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"isCurrent") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":8},"end":{"line":24,"column":19}}})) != null ? stack1 : "");
  },"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
      var helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined
      };
  
    return "        <li class=\"page-item disabled\" aria-current=\"page\"> <a href=\"#\" class=\"page-link\"\n                onclick=\"loadBlogs('"
      + alias1(container.lambda((depths[2] != null ? lookupProperty(depths[2],"request") : depths[2]), depth0))
      + "', "
      + alias1(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":19,"column":56},"end":{"line":19,"column":64}}}) : helper)))
      + ")\">"
      + alias1(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":19,"column":67},"end":{"line":19,"column":75}}}) : helper)))
      + "</a> </li>\n";
  },"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
      var helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined
      };
  
    return "        <li class=\"page-item\"> <a class=\"page-link\" href=\"#\"\n                onclick=\"loadBlogs('"
      + alias1(container.lambda((depths[2] != null ? lookupProperty(depths[2],"request") : depths[2]), depth0))
      + "', "
      + alias1(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":23,"column":56},"end":{"line":23,"column":64}}}) : helper)))
      + ")\">"
      + alias1(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":23,"column":67},"end":{"line":23,"column":75}}}) : helper)))
      + "</a></li>\n";
  },"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
      var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined
      };
  
    return "<h1>Blogs</h1>\n"
      + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":12,"column":9}}})) != null ? stack1 : "")
      + ((stack1 = lookupProperty(helpers,"pagination").call(alias1,(depth0 != null ? lookupProperty(depth0,"currentPage") : depth0),(depth0 != null ? lookupProperty(depth0,"pageCount") : depth0),{"name":"pagination","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":28,"column":15}}})) != null ? stack1 : "");
  },"useData":true,"useDepths":true});
  templates['details-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
      var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined
      };
  
    return "<div class=\"py-3\">\n    <h3>"
      + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":16}}}) : helper)))
      + "</h3>\n    <p class=\"text-black-50\">by "
      + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":5,"column":32},"end":{"line":5,"column":42}}}) : helper)))
      + " in "
      + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
      + " on "
      + alias4(lookupProperty(helpers,"formatDate").call(alias1,(depth0 != null ? lookupProperty(depth0,"date") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":5,"column":67},"end":{"line":5,"column":86}}}))
      + ". <a href=\"#comments\">Comments\n            ("
      + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
      + ")</a> </p>\n    <img src=\""
      + alias4(((helper = (helper = lookupProperty(helpers,"imagepath") || (depth0 != null ? lookupProperty(depth0,"imagepath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagepath","hash":{},"data":data,"loc":{"start":{"line":7,"column":14},"end":{"line":7,"column":27}}}) : helper)))
      + "\" alt=\""
      + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":34},"end":{"line":7,"column":42}}}) : helper)))
      + "\" class=\"float-start me-3 rounded-4\">\n    <div class=\"text-black-50\">"
      + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":8,"column":31},"end":{"line":8,"column":48}}}) : helper))) != null ? stack1 : "")
      + "</div>\n</div>\n<div class=\"py-3\" id=\"leave-comment\">\n    <h3>Leave your comments</h3>\n    <form action=\"#\" method=\"post\" class=\"text-black-50\" onsubmit=\"addComment(event)\">\n        <input type=\"hidden\" name=\"blogId\" id=\"blogId\" value=\""
      + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":13,"column":62},"end":{"line":13,"column":68}}}) : helper)))
      + "\">\n        <div class=\"row\">\n            <div class=\"col-4\">\n                <div class=\"mb-3\">\n                    <label for=\"name\" class=\"form-label\">Name (Required)</label>\n                    <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" placeholder=\"\" required />\n                </div>\n\n            </div>\n            <div class=\"col-4\">\n                <div class=\"mb-3\">\n                    <label for=\"email\" class=\"form-label\">Email</label>\n                    <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"\"\n                        pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\[a-z]{2,}$\" />\n                </div>\n            </div>\n        </div>\n        <div>\n            <div class=\"mb-3\">\n                <textarea class=\"form-control\" name=\"comment\" id=\"comment\" rows=\"3\" placeholder=\"Enter your comment\"\n                    required></textarea>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"form-check form-check-inline\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"agree\" name=\"agree\" value=\"1\" required />\n                    <label class=\"form-check-label\" for=\"agree\">Agree to terms and onditions</label>\n                </div>\n\n            </div>\n            <div class=\"col text-end\">\n                <button type=\"submit\" class=\"btn btn-link py-0 my-0\">\n                    Submit Comment\n                </button>\n\n            </div>\n        </div>\n        <div class=\"text-center\">\n            <div class=\"text-success\" id=\"responseMessage\">\n\n            </div>\n        </div>\n    </form>\n</div>\n\n<a name=\"comments\"></a>\n<div class=\"bg-dark text-white-50 p-2\">\n    COMMENTS ("
      + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
      + ")\n</div>\n<div class=\"py-3 text-black-50\">\n"
      + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"comments") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":4},"end":{"line":70,"column":13}}})) != null ? stack1 : "")
      + "</div>\n";
  },"2":function(container,depth0,helpers,partials,data) {
      var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined
      };
  
    return "    <div>\n        <p>"
      + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":66,"column":11},"end":{"line":66,"column":19}}}) : helper)))
      + " - "
      + alias4(lookupProperty(helpers,"formatDate").call(alias1,(depth0 != null ? lookupProperty(depth0,"date") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":66,"column":22},"end":{"line":66,"column":41}}}))
      + "</p>\n        <p>"
      + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":67,"column":11},"end":{"line":67,"column":22}}}) : helper)))
      + "</p>\n        <hr />\n    </div>\n";
  },"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
      var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName];
          }
          return undefined
      };
  
    return "<h1>Blogs</h1>\n"
      + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":72,"column":9}}})) != null ? stack1 : "");
  },"useData":true});
  })();