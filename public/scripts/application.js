console.log("link");

function run_test() {
  console.log("hi");
}

$(document).ready(function() {
  $("#run_me").click(function() {
    console.log("unob");
    return false;
  });
});


// from javascript videos



/*
//clickable function for current window change
jQuery(function(){
  jQuery("#home_controller li, #knowledges_controller #lesson_plans td, #knowledges_controller #knowledges td[class='knowledges_title']").click(function() {
    if (jQuery(this).find("a").length > 0) {
      window.location = jQuery(this).find("a").attr("href");
    };
    return false;
  });
});

//clickable function for new window
jQuery(function(){
  jQuery("").click(function() {
    if (jQuery(this).find("a").length > 0) {
      window.open(jQuery(this).find("a").attr("href"));
    };
    return false;
  });
});

//clickable function for running script - TK
jQuery(function(){
  jQuery("").click(function() {
    if (jQuery(this).find("a").length > 0) {
      window.location = jQuery(this).find("a").attr("href");    
    };
    return false;
  });
});

function remove_fields (link) {
  $(link).prev("input[type=hidden]").val("1");
  $(link).closest("div").hide();
}

function add_knowledge_fields (link, fields) {
  var id = new Date().getTime();
  var reg_exp = new RegExp("new_knowledge", "g");
  $(link).parent().before(fields.replace(reg_exp, id));
}


$(function() {
  $("#knowledges th a, #knowledges .pagination a").live("click", function() {
    $.getScript(this.href);
    return false;
  });
});

$(function() {
	$("#knowledges_search").submit(function() {
		$.get(this.action, $(this).serialize(), null, "script");
		console.log(this);
		console.log(this.action);
		console.log($(this).serialize());
		return false;
		});	
});

function add_lesson_to_log (link, user_id, lesson_plantation_id) {
  //http://api.jquery.com/jQuery.ajax/
  console.log(link);
  console.log(link.href);
  console.log(user_id);
  console.log(lesson_plantation_id);

  if (user_id>0)
    {
      var request = $.ajax({
        type: "POST",
        url: "/logs",
        data: { log : { user_id : user_id, lesson_plantation_id: lesson_plantation_id, status : "1" } }
      });
      request.done(function() {
        // xxx - make this a notice, not alert
        alert("Added to to-do list.");
      });
    } 
  else
    {
      window.location = "/sign_up";
      // xxx - how to pass parameter lesson_plantation_id with window.location
      //alert("Log in or create account to save item to to-do list.");
    };
}

function add_knowledge_to_log (link, user_id, knowledge_id) {
  //http://api.jquery.com/jQuery.ajax/
  console.log(link);
  console.log(link.href);
  console.log(user_id);
  console.log(knowledge_id);

  if (user_id>0)
    {
      var request = $.ajax({
        type: "POST",
        url: "/logs",
        data: { log : { user_id : user_id, knowledge_id: knowledge_id, status : "1" } }
      });
      request.done(function() {
        alert("Added to to-do list.");
      });
    } 
  else
    {
      window.location = "/sign_up";
      // xxx - how to pass parameter knowledge_id with window.location
      //alert("Log in or create account to save item to to-do list.");
    };
}

// AJAX for search
$(function() {
	$("#knowledges_search input").keyup(function() {
	  $.get($("#knowledges_search").attr("action"), $("#knowledges_search").serialize(), null, "script");
	  return false;
	});
});

*/