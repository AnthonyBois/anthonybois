$(document).ready(function() {
	$('.skills-item').each(function() {
		// à compléter
		var height = $(this).find("span").data("percent")
		$(this).data("height", height)

	});
});

function affiche_skills() {
    var nbItem, widthItem;
    var nb = 0;
    nbItem = $('.skills-item').size();
    widthItem = 100/nbItem;
    
    $('.skills-bars').css({
    	"opacity":"1",
    	"transition" :"2s"
    });
    // à compléter
    $('.skills-item').each(function() {        
        // à compléter
        $(this).css({
            height : $(this).data("height")+"%",
            transition :"2s",
            width : widthItem+"%",
            left : widthItem*nb+"%",

        })
        console.log(widthItem*nb+"%");
        nb++;        
    })    
}
