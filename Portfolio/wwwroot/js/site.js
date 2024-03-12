// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(".skill-per").each(function () {
    var $this = $(this);
    var per = $this.attr("per");
    $this.css("width", per + "%");
    $({ animatedValue: 0 }).animate(
        { animatedValue: per },
        {
            duration: 1000,
            step: function () {
                $this.attr("per", Math.floor(this.animatedValue) + "%");
            },
            complete: function () {
                $this.attr("per", Math.floor(this.animatedValue) + "%");
            }
        }
    );
});

function access() {
    var resumeUrl = 'https://rupeshp.tiiny.site';
    window.open(resumeUrl, '_blank');
}
